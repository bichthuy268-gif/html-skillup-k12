// =============================================================================
// EDUWEB12 - ỨNG DỤNG ÔN LUYỆN & ĐÁNH GIÁ TIN HỌC 12 (KẾT NỐI TRI THỨC)
// Script điều khiển chính: Routing, Gamification, Flashcards, Drag & Drop,
// Fill-in-the-blank, Quiz, Quản lý tài khoản và Đồng bộ Google Sheets
// =============================================================================

// Trạng thái ứng dụng
const AppState = {
  currentUser: null,           // Người dùng hiện tại (học sinh hoặc giáo viên)
  currentRole: "student",      // "student" hoặc "teacher"
  currentLesson: null,         // Bài học đang xem (Object từ LESSONS_DATA)
  currentStage: 1,             // 1: Lý thuyết, 2: Flashcards, 3: Kéo thả, 4: Điền khuyết, 5: Trắc nghiệm
  
  // Trạng thái Flashcard
  fcIndex: 0,
  fcRememberedCount: 0,
  isCardFlipped: false,

  // Trạng thái Kéo thả
  dragSelectedId: null,
  dragMatchedCount: 0,

  // Trạng thái Trắc nghiệm
  quizAnswers: {},             // { [questionIdx]: selectedOptionIdx }
  quizCurrentIdx: 0,
  quizTimerInterval: null,
  quizSecondsLeft: 600,        // 10 phút
  quizStartTime: null,

  // Trạng thái Ngân hàng đề thi thử Tốt nghiệp THPT
  gradPracticeState: {
    answeredP1: {},
    answeredP2: {}
  },

  // Trạng thái Bài kiểm tra tổng hợp định kỳ (45 phút)
  currentExamId: 'exam_789',
  currentExam: null,
  examAnswersP1: {},           // { [qId]: selectedOptionIdx }
  examAnswersP2: {},           // { [subItemId]: true/false }
  examTimerInterval: null,
  examSecondsLeft: 2700,       // 45 phút = 2700 giây
  examStartTime: null,
  lastActivityWasExam: false,

  // Dữ liệu bộ nhớ (LocalStorage)
  students: [],
  results: [],
  googleSheetUrl: "",
  progress: {}                 // { [username]: { [lessonId]: { stage1: true, stage2: true, ... } } }
};

// =============================================================================
// WEB AUDIO API - TỔNG HỢP ÂM THANH TRÒ CHƠI (KHÔNG CẦN TẢI FILE NGOÀI)
// =============================================================================
const SoundFX = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playTone(freq, type = "sine", duration = 0.15, gainVal = 0.1) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Bỏ qua nếu trình duyệt chặn tự phát âm thanh
    }
  },
  flip() {
    this.playTone(320, "triangle", 0.08, 0.05);
  },
  correct() {
    this.playTone(523.25, "sine", 0.12, 0.1); // C5
    setTimeout(() => this.playTone(659.25, "sine", 0.15, 0.1), 80); // E5
    setTimeout(() => this.playTone(783.99, "sine", 0.2, 0.12), 160); // G5
  },
  wrong() {
    this.playTone(220, "sawtooth", 0.25, 0.08);
  },
  cheer() {
    this.playTone(523.25, "sine", 0.15, 0.12);
    setTimeout(() => this.playTone(659.25, "sine", 0.15, 0.12), 120);
    setTimeout(() => this.playTone(783.99, "sine", 0.15, 0.12), 240);
    setTimeout(() => this.playTone(1046.50, "sine", 0.35, 0.15), 360); // C6
    
    // Hiệu ứng pháo hoa confetti nếu thư viện có sẵn
    if (typeof confetti === "function") {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
};

// =============================================================================
// KHỞI TẠO ỨNG DỤNG VÀ NẠP LOCALSTORAGE
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadStorageData();
  setupCodeCopyDisplay();

  // Kiểm tra phiên đăng nhập đã lưu
  const savedUser = localStorage.getItem("eduweb12_current_user");
  if (savedUser) {
    try {
      const parsedUser = JSON.parse(savedUser);
      // KHÔNG TỰ ĐỘNG ĐĂNG NHẬP GIÁO VIÊN:
      // Nếu là phiên của Giáo viên, luôn xóa phiên khi khởi động và yêu cầu nhập mật khẩu riêng
      if (parsedUser && parsedUser.role === "teacher") {
        AppState.currentUser = null;
        AppState.currentRole = "teacher";
        localStorage.removeItem("eduweb12_current_user");
        updateHeaderUserUI();
        switchAuthTab("teacher");
        navigateTo("auth");
        return;
      }
      
      AppState.currentUser = parsedUser;
      AppState.currentRole = AppState.currentUser.role || "student";
      updateHeaderUserUI();
      navigateTo("home");
    } catch (e) {
      navigateTo("auth");
    }
  } else {
    switchAuthTab("student");
    navigateTo("auth");
  }
});

function loadStorageData() {
  // 1. Danh sách học sinh (chuẩn hóa tên đăng nhập hs_12a... và loại bỏ lớp 12A nếu có)
  const savedStudents = localStorage.getItem("eduweb12_students");
  if (savedStudents) {
    try {
      AppState.students = JSON.parse(savedStudents);
      let sChanged = false;
      AppState.students.forEach(s => {
        if (s.username && s.username.startsWith("hs12a")) {
          s.username = s.username.replace(/^hs12a/, "hs_12a");
          sChanged = true;
        }
        if (s.className === "12A") {
          s.className = "12A1";
          sChanged = true;
        }
      });
      if (sChanged) saveStudentsToStorage();
    } catch (e) {
      AppState.students = [...INITIAL_STUDENTS];
    }
  } else {
    AppState.students = [...INITIAL_STUDENTS];
    saveStudentsToStorage();
  }

  // 2. Lịch sử làm bài (loại bỏ nhãn Lớp 12A của tài khoản giáo viên/test)
  const savedResults = localStorage.getItem("eduweb12_results");
  if (savedResults) {
    try {
      AppState.results = JSON.parse(savedResults);
      let rChanged = false;
      AppState.results.forEach(r => {
        if (r.className === "12A") {
          r.className = (r.username === "giaovien" || !r.username) ? "Giáo viên" : "12A1";
          rChanged = true;
        }
      });
      if (rChanged) saveResultsToStorage();
    } catch (e) {
      AppState.results = [];
    }
  }

  // 3. Tiến độ học
  const savedProgress = localStorage.getItem("eduweb12_progress");
  if (savedProgress) {
    try {
      AppState.progress = JSON.parse(savedProgress);
    } catch (e) {
      AppState.progress = {};
    }
  }

  // 4. URL Google Sheet (ưu tiên LocalStorage, nếu chưa có thì dùng URL mặc định đã cấu hình)
  AppState.googleSheetUrl = localStorage.getItem("eduweb12_sheet_url") || (typeof DEFAULT_GOOGLE_SHEET_URL !== "undefined" ? DEFAULT_GOOGLE_SHEET_URL : "");
  const sheetInput = document.getElementById("googleSheetUrlInput");
  if (sheetInput) {
    sheetInput.value = AppState.googleSheetUrl;
  }
  updateSheetStatusDisplay();
}

function saveStudentsToStorage() {
  localStorage.setItem("eduweb12_students", JSON.stringify(AppState.students));
}

function saveResultsToStorage() {
  localStorage.setItem("eduweb12_results", JSON.stringify(AppState.results));
}

function saveProgressToStorage() {
  localStorage.setItem("eduweb12_progress", JSON.stringify(AppState.progress));
}

// =============================================================================
// ROUTING & ĐIỀU HƯỚNG GIAO DIỆN
// =============================================================================
function navigateTo(viewName) {
  // Ẩn tất cả các màn hình
  document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));

  if (viewName === "auth") {
    document.getElementById("authView").classList.add("active");
  } else if (viewName === "home") {
    if (!AppState.currentUser) {
      navigateTo("auth");
      return;
    }
    document.getElementById("studentHomeView").classList.add("active");
    renderStudentHome();
  } else if (viewName === "play") {
    document.getElementById("lessonPlayView").classList.add("active");
  } else if (viewName === "result") {
    document.getElementById("resultView").classList.add("active");
  } else if (viewName === "exam") {
    if (!AppState.currentUser) {
      navigateTo("auth");
      return;
    }
    document.getElementById("examView").classList.add("active");
  } else if (viewName === "gradPractice") {
    if (!AppState.currentUser) {
      navigateTo("auth");
      return;
    }
    document.getElementById("gradPracticeView").classList.add("active");
    initGradPracticeView();
  } else if (viewName === "teacher") {
    if (!AppState.currentUser || AppState.currentUser.role !== "teacher") {
      alert("Vui lòng đăng nhập với tài khoản Giáo viên để truy cập bảng điều khiển!");
      switchAuthTab("teacher");
      navigateTo("auth");
      return;
    }
    document.getElementById("teacherView").classList.add("active");
    renderTeacherDashboard();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =============================================================================
// XỬ LÝ ĐĂNG NHẬP / ĐĂNG XUẤT
// =============================================================================
function switchAuthTab(role) {
  AppState.currentRole = role;
  const tabStudent = document.getElementById("tabStudentAuth");
  const tabTeacher = document.getElementById("tabTeacherAuth");
  const userInput = document.getElementById("loginUsername");
  const passInput = document.getElementById("loginPassword");

  if (role === "student") {
    tabStudent.classList.add("active");
    tabTeacher.classList.remove("active");
    userInput.placeholder = "Ví dụ: hs_12a1_01";
    userInput.value = "";
    passInput.value = "";
    passInput.placeholder = "Nhập mật khẩu học sinh";
  } else {
    tabTeacher.classList.add("active");
    tabStudent.classList.remove("active");
    userInput.placeholder = "Tên đăng nhập giáo viên (giaovien)";
    userInput.value = "giaovien";
    passInput.value = ""; // Để trống để Thầy/Cô tự gõ Mk2026@
    passInput.placeholder = "Nhập mật khẩu Giáo viên";
    passInput.focus();
  }
}

function fillTestAccount(username, password) {
  document.getElementById("loginUsername").value = username;
  document.getElementById("loginPassword").value = password;
  if (username === "giaovien") {
    switchAuthTab("teacher");
  } else {
    switchAuthTab("student");
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value.trim();

  if (AppState.currentRole === "teacher") {
    const teacherPassword = (typeof TEACHER_ACCOUNT !== "undefined" && TEACHER_ACCOUNT.password) ? TEACHER_ACCOUNT.password : "Mk2026@";
    if (username === TEACHER_ACCOUNT.username && password === teacherPassword) {
      AppState.currentUser = { ...TEACHER_ACCOUNT };
      localStorage.setItem("eduweb12_current_user", JSON.stringify(AppState.currentUser));
      updateHeaderUserUI();
      navigateTo("teacher");
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu Giáo viên! Vui lòng thử lại.");
      document.getElementById("loginPassword").focus();
    }
    return;
  }

  // Đăng nhập học sinh (chấp nhận cả định dạng hs_12a1_01 và hs12a1_01)
  const cleanUser = username.replace(/_/g, "");
  let found = AppState.students.find(s => {
    const sUser = (s.username || "").toLowerCase();
    return (sUser === username || sUser.replace(/_/g, "") === cleanUser) && s.password === password;
  });

  // Cơ chế dự phòng thông minh: nếu tài khoản chưa có trên GitHub (do giáo viên mới tạo ở máy riêng),
  // tự động cho phép học sinh đăng nhập nếu đúng cú pháp hs_lớp_stt và mật khẩu 123
  if (!found && (password === "123" || password === "admin")) {
    const match = username.match(/^hs_?([0-9]{1,2}[a-z0-9]*)_([0-9]{1,3})$/i);
    if (match) {
      const cls = match[1].toUpperCase();
      const num = match[2].padStart(2, "0");
      let studentName = prompt(`Chào mừng học sinh lớp ${cls} (STT ${num})!

Vui lòng nhập Họ và Tên của em để hệ thống lưu vào danh sách và gửi kết quả về Google Sheet của Thầy/Cô:`);
      if (!studentName || !studentName.trim()) {
        studentName = `Học sinh ${cls} (STT ${num})`;
      }
      found = {
        username: `hs_${cls.toLowerCase()}_${num}`,
        password: password,
        fullname: studentName.trim(),
        className: cls,
        xp: 0,
        badges: ["Tân binh HTML"]
      };
      AppState.students.push(found);
      saveStudentsToStorage();
    }
  }

  if (found) {
    AppState.currentUser = { ...found, role: "student" };
    localStorage.setItem("eduweb12_current_user", JSON.stringify(AppState.currentUser));
    updateHeaderUserUI();
    navigateTo("home");
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác! Vui lòng liên hệ Giáo viên để được cấp tài khoản.");
  }
}

function handleLogout() {
  if (confirm("Em có chắc chắn muốn đăng xuất tài khoản không?")) {
    AppState.currentUser = null;
    localStorage.removeItem("eduweb12_current_user");
    updateHeaderUserUI();
    navigateTo("auth");
  }
}

function updateHeaderUserUI() {
  const headerStats = document.getElementById("headerStats");
  const userInfoHeader = document.getElementById("userInfoHeader");
  const adminPortalBtn = document.getElementById("adminPortalBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!AppState.currentUser) {
    headerStats.style.display = "none";
    userInfoHeader.style.display = "none";
    adminPortalBtn.style.display = "none";
    logoutBtn.style.display = "none";
    const navGradPracticeBtn = document.getElementById("navGradPracticeBtn");
    if (navGradPracticeBtn) navGradPracticeBtn.style.display = "none";
    return;
  }

  logoutBtn.style.display = "inline-flex";
  const navGradPracticeBtn = document.getElementById("navGradPracticeBtn");
  if (navGradPracticeBtn) navGradPracticeBtn.style.display = "inline-flex";

  if (AppState.currentUser.role === "teacher") {
    headerStats.style.display = "none";
    userInfoHeader.style.display = "flex";
    document.getElementById("userAvatar").textContent = "GV";
    document.getElementById("userNameDisplay").textContent = AppState.currentUser.fullname;
    document.getElementById("userRoleDisplay").textContent = "Giáo viên bộ môn";
    adminPortalBtn.style.display = "inline-flex";
  } else {
    headerStats.style.display = "flex";
    userInfoHeader.style.display = "flex";
    adminPortalBtn.style.display = "none";

    const nameParts = AppState.currentUser.fullname.split(" ");
    const initial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    document.getElementById("userAvatar").textContent = initial;
    document.getElementById("userNameDisplay").textContent = AppState.currentUser.fullname;
    document.getElementById("userRoleDisplay").textContent = `Lớp: ${AppState.currentUser.className}`;

    // Cập nhật XP
    const xp = AppState.currentUser.xp || 0;
    document.getElementById("userXpDisplay").textContent = `${xp} XP`;
  }
}

// =============================================================================
// TRANG CHỦ HỌC SINH (ROADMAP TIẾN TRÌNH)
// =============================================================================
function renderStudentHome() {
  if (!AppState.currentUser) return;

  document.getElementById("welcomeStudentMsg").textContent = `Chào em, ${AppState.currentUser.fullname}! 👋`;

  const container = document.getElementById("lessonsRoadmapGrid");
  container.innerHTML = "";

  const userProgress = AppState.progress[AppState.currentUser.username] || {};
  let completedCount = 0;

  LESSONS_DATA.forEach(lesson => {
    const lProg = userProgress[lesson.id] || {};
    const isCompleted = lProg.stage5Score !== undefined && lProg.stage5Score >= 5;
    if (isCompleted) completedCount++;

    const card = document.createElement("div");
    card.className = "lesson-card";
    card.style.setProperty("--lesson-color", lesson.color);
    card.style.setProperty("--lesson-color-light", `${lesson.color}15`);

    card.innerHTML = `
      <div class="lesson-card-header">
        <div class="lesson-icon-box">${lesson.icon}</div>
        <div class="lesson-header-info">
          <span class="lesson-code-badge">${lesson.code}</span>
          <h4 class="lesson-card-title">${lesson.title}</h4>
        </div>
      </div>
      <p class="lesson-desc">${lesson.desc}</p>
      
      <div class="lesson-milestones">
        <div class="milestone-badge ${lProg.stage1 ? 'completed' : ''}" title="Khám phá lý thuyết">
          <span class="icon">${lProg.stage1 ? '✅' : '📖'}</span>
          <span>Lý thuyết</span>
        </div>
        <div class="milestone-badge ${lProg.stage2 ? 'completed' : ''}" title="Cấp 1: Thẻ lật Flashcards">
          <span class="icon">${lProg.stage2 ? '✅' : '🃏'}</span>
          <span>Thẻ lật</span>
        </div>
        <div class="milestone-badge ${lProg.stage3 ? 'completed' : ''}" title="Cấp 2: Kéo thả ghép nối">
          <span class="icon">${lProg.stage3 ? '✅' : '🧩'}</span>
          <span>Kéo thả</span>
        </div>
        <div class="milestone-badge ${lProg.stage4 ? 'completed' : ''}" title="Cấp 3: Điền khuyết mã">
          <span class="icon">${lProg.stage4 ? '✅' : '✍️'}</span>
          <span>Điền khuyết</span>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
        <span style="font-size: 0.8rem; font-weight: 700; color: ${isCompleted ? '#059669' : '#64748b'};">
          ${isCompleted ? `🎯 Điểm TN: ${lProg.stage5Score}/10` : 'Chưa hoàn thành'}
        </span>
        <button class="btn btn-primary btn-sm" onclick="startLesson('${lesson.id}')">
          Vào học ngay →
        </button>
      </div>
    `;

    container.appendChild(card);

    // Mốc Bài kiểm tra tổng hợp kiến thức (Bài 7 - 8 - 9)
    if (lesson.id === "b9") {
      const examProg = userProgress["exam_789"];
      const hasTaken = examProg && examProg.score !== undefined;
      const milestoneCard = document.createElement("div");
      milestoneCard.className = "milestone-exam-card";
      milestoneCard.innerHTML = `
        <div class="milestone-exam-banner">
          <div class="exam-icon">🏆</div>
          <div>
                        <h3 class="exam-title">Kiểm tra tổng hợp kiến thức (Bài 7 - 8 - 9)</h3>
            <p class="exam-desc">
              Cấu trúc chuẩn 2025: <strong>24 câu trắc nghiệm 4 lựa chọn</strong> (6.0 điểm) &amp; <strong>4 câu trắc nghiệm Đúng/Sai</strong> (4.0 điểm) • Thời gian làm bài: <strong>45 phút</strong>.
            </p>
          </div>
        </div>
        <div class="exam-action-area">
          <div style="font-size: 0.85rem; font-weight: 700; color: ${hasTaken ? '#059669' : '#b45309'};">
            ${hasTaken ? `🎉 Điểm đạt: ${examProg.score}/10 ${examProg.evaluation ? `• Xếp loại: ${examProg.evaluation}` : ''} (P1: ${examProg.scoreP1 || 0}đ • P2: ${examProg.scoreP2 || 0}đ)` : '⏳ Chưa hoàn thành'}
          </div>
          <button class="btn btn-warning btn-lg" onclick="startComprehensiveExam('exam_789')" style="background: #f59e0b; color: #fff; font-weight: 800; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4); border: none;">
            ${hasTaken ? 'Làm lại bài kiểm tra 🔄' : 'Vào làm bài kiểm tra ngay 🚀'}
          </button>
        </div>
      `;
      container.appendChild(milestoneCard);
    }

    // Mốc Bài kiểm tra tổng hợp kiến thức (Bài 10 - 11 - 12)
    if (lesson.id === "b12") {
      const examProg = userProgress["exam_101112"];
      const hasTaken = examProg && examProg.score !== undefined;
      const milestoneCard = document.createElement("div");
      milestoneCard.className = "milestone-exam-card";
      milestoneCard.innerHTML = `
        <div class="milestone-exam-banner">
          <div class="exam-icon">🏆</div>
          <div>
                        <h3 class="exam-title">Kiểm tra tổng hợp kiến thức (Bài 10 - 11 - 12)</h3>
            <p class="exam-desc">
              Cấu trúc chuẩn 2025: <strong>24 câu trắc nghiệm 4 lựa chọn</strong> (6.0 điểm) &amp; <strong>4 câu trắc nghiệm Đúng/Sai</strong> (4.0 điểm) • Thời gian làm bài: <strong>45 phút</strong>.
            </p>
          </div>
        </div>
        <div class="exam-action-area">
          <div style="font-size: 0.85rem; font-weight: 700; color: ${hasTaken ? '#059669' : '#b45309'};">
            ${hasTaken ? `🎉 Điểm đạt: ${examProg.score}/10 ${examProg.evaluation ? `• Xếp loại: ${examProg.evaluation}` : ''} (P1: ${examProg.scoreP1 || 0}đ • P2: ${examProg.scoreP2 || 0}đ)` : '⏳ Chưa hoàn thành'}
          </div>
          <button class="btn btn-warning btn-lg" onclick="startComprehensiveExam('exam_101112')" style="background: #f59e0b; color: #fff; font-weight: 800; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4); border: none;">
            ${hasTaken ? 'Làm lại bài kiểm tra 🔄' : 'Vào làm bài kiểm tra ngay 🚀'}
          </button>
        </div>
      `;
      container.appendChild(milestoneCard);
    }
  });

  // Tiến độ tổng quan
  const percent = Math.round((completedCount / LESSONS_DATA.length) * 100);
  document.getElementById("completedLessonsCount").textContent = completedCount;
  document.getElementById("overallProgressText").textContent = `${percent}%`;
  document.getElementById("overallProgressBar").style.width = `${percent}%`;
}

// =============================================================================
// VÀO HỌC BÀI VÀ ĐIỀU KHIỂN CÁC CHẶNG (STAGES)
// =============================================================================
function startLesson(lessonId) {
  const lesson = LESSONS_DATA.find(l => l.id === lessonId);
  if (!lesson) return;

  AppState.currentLesson = lesson;
  document.getElementById("currentLessonTitle").textContent = `${lesson.code}: ${lesson.title}`;
  document.getElementById("currentLessonDesc").textContent = lesson.desc;
  document.getElementById("lessonBadgeCode").textContent = lesson.code;

  // Bắt đầu từ chặng 1 (Lý thuyết)
  switchStage(1);
  navigateTo("play");
}

function switchStage(stageNum) {
  AppState.currentStage = stageNum;

  // Cập nhật tab active
  for (let i = 1; i <= 5; i++) {
    const tab = document.getElementById(`tabStage${i}`);
    const container = document.getElementById(`stage${i}Container`);
    if (tab) tab.classList.toggle("active", i === stageNum);
    if (container) container.classList.toggle("active", i === stageNum);
  }

  // Khởi tạo nội dung tương ứng theo chặng
  if (stageNum === 1) {
    renderTheoryStage();
    markStageCompleted(1);
  } else if (stageNum === 2) {
    initFlashcardsStage();
  } else if (stageNum === 3) {
    initDragDropStage();
  } else if (stageNum === 4) {
    initFillBlankStage();
  } else if (stageNum === 5) {
    initQuizStage();
  }

  window.scrollTo({ top: 120, behavior: "smooth" });
}

function markStageCompleted(stageNum, score = null) {
  if (!AppState.currentUser || !AppState.currentLesson) return;
  const username = AppState.currentUser.username;
  const lId = AppState.currentLesson.id;

  if (!AppState.progress[username]) {
    AppState.progress[username] = {};
  }
  if (!AppState.progress[username][lId]) {
    AppState.progress[username][lId] = {};
  }

  AppState.progress[username][lId][`stage${stageNum}`] = true;
  if (score !== null) {
    AppState.progress[username][lId].stage5Score = score;
  }

  saveProgressToStorage();
}

function awardXP(amount) {
  if (!AppState.currentUser || AppState.currentUser.role === "teacher") return;
  AppState.currentUser.xp = (AppState.currentUser.xp || 0) + amount;

  // Cập nhật vào danh sách học sinh
  const idx = AppState.students.findIndex(s => s.username === AppState.currentUser.username);
  if (idx !== -1) {
    AppState.students[idx].xp = AppState.currentUser.xp;
    saveStudentsToStorage();
  }

  localStorage.setItem("eduweb12_current_user", JSON.stringify(AppState.currentUser));
  updateHeaderUserUI();
}

// =============================================================================
// CHẶNG 1: LÝ THUYẾT TƯƠNG TÁC
// =============================================================================
function renderTheoryStage() {
  const lesson = AppState.currentLesson;
  const container = document.getElementById("theoryCardContent");

  let html = `
    <div class="theory-overview">
      <strong>💡 Tổng quan bài học:</strong> ${lesson.theory.overview}
    </div>
  `;

  const snippetsToInit = [];

  lesson.theory.sections.forEach((sec, secIdx) => {
    html += `
      <div class="theory-section">
        <h4>📌 ${sec.title}</h4>
        <div>${sec.content}</div>
        ${sec.codeSnippet ? `
          <div class="tryit-container" id="tryitContainer_${secIdx}">
            <div class="tryit-header">
              <div class="tryit-title">
                <span class="tryit-badge">W3Schools Style</span>
                <strong>🚀 Try It Yourself - Thử nghiệm chỉnh sửa & Chạy mã HTML</strong>
              </div>
              <div class="tryit-actions">
                <button class="btn btn-sm btn-success tryit-run-btn" onclick="runTryItCode(${secIdx})">
                  ▶️ Chạy mã (Run)
                </button>
                <button class="btn btn-sm btn-secondary" onclick="resetTryItCode(${secIdx})">
                  🔄 Khôi phục ban đầu
                </button>
              </div>
            </div>

            <div class="tryit-body">
              <div class="tryit-editor-pane">
                <div class="tryit-pane-label">
                  <span>MÃ NGUỒN HTML (Em có thể gõ chỉnh sửa tùy ý):</span>
                  <span style="font-size: 0.72rem; color: #94a3b8;">Phím tắt: Ctrl + Enter</span>
                </div>
                <textarea class="tryit-textarea" id="tryitTextarea_${secIdx}" spellcheck="false"
                  data-original-code="${encodeURIComponent(sec.codeSnippet)}"
                  onkeydown="handleTryitKeydown(event, ${secIdx})">${escapeHTML(sec.codeSnippet)}</textarea>
              </div>

              <div class="tryit-preview-pane">
                <div class="tryit-pane-label">
                  <span>KẾT QUẢ HIỂN THỊ (OUTPUT BROWSER):</span>
                  <span style="color: #10b981;">● Đang hiển thị trực tiếp</span>
                </div>
                <iframe class="tryit-iframe" id="tryitIframe_${secIdx}" sandbox="allow-same-origin allow-forms allow-scripts"></iframe>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;

    if (sec.codeSnippet) {
      snippetsToInit.push(secIdx);
    }
  });

  container.innerHTML = html;

  // Tự động khởi tạo kết quả hiển thị ban đầu cho các khung Try It Yourself
  setTimeout(() => {
    snippetsToInit.forEach(idx => runTryItCode(idx, false));
  }, 100);
}

function runTryItCode(secIdx, playSound = true) {
  const textarea = document.getElementById(`tryitTextarea_${secIdx}`);
  const iframe = document.getElementById(`tryitIframe_${secIdx}`);
  if (!textarea || !iframe) return;

  const userCode = textarea.value;

  try {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    if (userCode.includes("<!DOCTYPE") || userCode.includes("<html") || userCode.includes("<body")) {
      doc.write(userCode);
    } else {
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                padding: 12px 14px;
                margin: 0;
                color: #0f172a;
                line-height: 1.5;
              }
              table { border-collapse: collapse; margin: 8px 0; }
              table, th, td { border: 1px solid #cbd5e1; padding: 6px 10px; }
              th { background: #f1f5f9; }
            </style>
          </head>
          <body>
            ${userCode}
          </body>
        </html>
      `);
    }
    doc.close();

    if (playSound) {
      SoundFX.correct();
    }
  } catch (err) {
    console.error("Lỗi chạy mã:", err);
  }
}

function resetTryItCode(secIdx) {
  const textarea = document.getElementById(`tryitTextarea_${secIdx}`);
  if (!textarea) return;
  const original = decodeURIComponent(textarea.dataset.originalCode || "");
  textarea.value = original;
  runTryItCode(secIdx, false);
  SoundFX.flip();
}

function handleTryitKeydown(e, secIdx) {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    runTryItCode(secIdx);
    return;
  }

  if (e.key === "Tab") {
    e.preventDefault();
    const textarea = e.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, start) + "  " + textarea.value.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + 2;
  }
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatQuestionTitle(text) {
  if (!text) return "";

  // Chuẩn hóa ký tự \n nếu bị escape dưới dạng chuỗi thô
  let cleanText = String(text).replace(/\\n/g, "\n");

  // Nếu câu hỏi có chứa dấu xuống hàng \n (chứa khối mã code)
  if (cleanText.includes("\n")) {
    const lines = cleanText.split("\n");
    let resultHtml = "";
    let inCodeBlock = false;
    let codeBuffer = [];

    lines.forEach(line => {
      const trimmed = line.trim();
      const isTagLine = trimmed.startsWith("<") || trimmed.endsWith(">") || trimmed.includes("</") || trimmed.includes("<table") || trimmed.includes("<ol") || trimmed.includes("<ul");

      if (isTagLine) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBuffer = [];
        }
        codeBuffer.push(line);
      } else {
        if (inCodeBlock) {
          resultHtml += `<div class="exam-code-snippet" style="background:#f8fafc; border:1.5px solid #cbd5e1; border-left:4px solid #4f46e5; border-radius:10px; padding:0.85rem 1.25rem; margin:0.65rem 0; box-shadow:0 2px 6px rgba(0,0,0,0.04); overflow-x:auto;"><pre style="margin:0; font-family:'Fira Code', Consolas, monospace; font-size:0.94rem; line-height:1.6; color:#1e1b4b; font-weight:600; white-space:pre;"><code style="font-family:inherit; color:#1e1b4b; background:transparent; padding:0;">${escapeHTML(codeBuffer.join("\n"))}</code></pre></div>`;
          inCodeBlock = false;
          codeBuffer = [];
        }
        if (trimmed.length > 0) {
          resultHtml += `<div class="exam-text-line">${escapeHTML(trimmed)}</div>`;
        }
      }
    });

    if (inCodeBlock && codeBuffer.length > 0) {
      resultHtml += `<div class="exam-code-snippet" style="background:#f8fafc; border:1.5px solid #cbd5e1; border-left:4px solid #4f46e5; border-radius:10px; padding:0.85rem 1.25rem; margin:0.65rem 0; box-shadow:0 2px 6px rgba(0,0,0,0.04); overflow-x:auto;"><pre style="margin:0; font-family:'Fira Code', Consolas, monospace; font-size:0.94rem; line-height:1.6; color:#1e1b4b; font-weight:600; white-space:pre;"><code style="font-family:inherit; color:#1e1b4b; background:transparent; padding:0;">${escapeHTML(codeBuffer.join("\n"))}</code></pre></div>`;
    }

    return resultHtml;
  }

  return `<div class="exam-text-line">${escapeHTML(cleanText)}</div>`;
}

function renderExamQuestionContent(text) {
  return formatQuestionTitle(text);
}

// =============================================================================
// CHẶNG 2: THẺ LẬT MỞ FLASHCARDS (3D FLIP)
// =============================================================================
function initFlashcardsStage() {
  AppState.fcIndex = 0;
  AppState.fcRememberedCount = 0;
  AppState.isCardFlipped = false;
  renderCurrentFlashcard();
}

function renderCurrentFlashcard() {
  const fcs = AppState.currentLesson.flashcards;
  const currentCard = fcs[AppState.fcIndex];

  document.getElementById("fcCurrentIdx").textContent = AppState.fcIndex + 1;
  document.getElementById("fcTotalCount").textContent = fcs.length;

  const cardElement = document.getElementById("currentCardElement");
  cardElement.classList.remove("is-flipped");
  AppState.isCardFlipped = false;

  document.getElementById("fcFrontText").textContent = currentCard.front;
  document.getElementById("fcHintText").textContent = currentCard.hint ? `Gợi ý: ${currentCard.hint}` : "";
  document.getElementById("fcBackText").textContent = currentCard.back;
}

function flipCurrentCard() {
  SoundFX.flip();
  const cardElement = document.getElementById("currentCardElement");
  AppState.isCardFlipped = !AppState.isCardFlipped;
  cardElement.classList.toggle("is-flipped", AppState.isCardFlipped);
}

function handleFlashcardRating(remembered) {
  if (remembered) {
    SoundFX.correct();
    AppState.fcRememberedCount++;
    awardXP(10);
  } else {
    SoundFX.wrong();
  }

  const fcs = AppState.currentLesson.flashcards;
  if (AppState.fcIndex < fcs.length - 1) {
    AppState.fcIndex++;
    renderCurrentFlashcard();
  } else {
    // Hoàn thành bộ Flashcards
    markStageCompleted(2);
    SoundFX.cheer();
    
    // Gửi kết quả về Google Sheet
    sendActivityRecordToSheet({
      activityType: "Ôn luyện Flashcards",
      score: Math.round((AppState.fcRememberedCount / fcs.length) * 10),
      ratio: `${AppState.fcRememberedCount}/${fcs.length}`,
      percentage: Math.round((AppState.fcRememberedCount / fcs.length) * 100),
      duration: "Ôn tập thẻ lật",
      evaluation: AppState.fcRememberedCount >= fcs.length * 0.7 ? "Ghi nhớ tốt" : "Cần ôn thêm"
    });

    if (confirm(`🎉 Tuyệt vời! Em đã ôn luyện xong bộ Flashcards (${AppState.fcRememberedCount}/${fcs.length} thẻ ghi nhớ tốt). Tiếp tục sang Cấp độ 2 (Kéo thả ghép cặp) nhé?`)) {
      switchStage(3);
    }
  }
}

// =============================================================================
// CHẶNG 3: TRÒ CHƠI KÉO THẢ GHÉP NỐI (DRAG & DROP)
// =============================================================================
function initDragDropStage() {
  const ddData = AppState.currentLesson.dragDrop;
  AppState.dragMatchedCount = 0;
  AppState.dragSelectedId = null;

  document.getElementById("dragInstructionText").textContent = ddData.instruction;
  document.getElementById("dragTotalCount").textContent = ddData.pairs.length;
  document.getElementById("dragMatchedCount").textContent = "0";

  const dragList = document.getElementById("dragItemsList");
  const dropList = document.getElementById("dropTargetsList");
  dragList.innerHTML = "";
  dropList.innerHTML = "";

  // Trộn ngẫu nhiên các thẻ kéo
  const shuffledItems = [...ddData.pairs].sort(() => Math.random() - 0.5);
  // Trộn ngẫu nhiên các đích thả
  const shuffledTargets = [...ddData.pairs].sort(() => Math.random() - 0.5);

  shuffledItems.forEach(pair => {
    const item = document.createElement("div");
    item.className = "drag-item";
    item.draggable = true;
    item.id = `drag_${pair.id}`;
    item.dataset.pairId = pair.id;
    item.innerHTML = `<span>${escapeHTML(pair.item)}</span> <span>✋</span>`;

    // Sự kiện kéo chuột (Desktop)
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", pair.id);
      item.classList.add("selected");
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("selected");
    });

    // Sự kiện nhấp chọn (Hỗ trợ Tablet / Smartphone)
    item.addEventListener("click", () => {
      document.querySelectorAll(".drag-item").forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");
      AppState.dragSelectedId = pair.id;
      SoundFX.flip();
    });

    dragList.appendChild(item);
  });

  shuffledTargets.forEach(pair => {
    const target = document.createElement("div");
    target.className = "drop-target";
    target.id = `drop_${pair.id}`;
    target.dataset.pairId = pair.id;
    target.innerHTML = `<span>${pair.target}</span> <span class="badge-tag">Thả vào đây</span>`;

    target.addEventListener("dragover", (e) => {
      e.preventDefault();
      target.classList.add("hovered");
    });

    target.addEventListener("dragleave", () => {
      target.classList.remove("hovered");
    });

    target.addEventListener("drop", (e) => {
      e.preventDefault();
      target.classList.remove("hovered");
      const draggedPairId = e.dataTransfer.getData("text/plain");
      checkDragMatch(draggedPairId, pair.id, target);
    });

    // Nhấp chọn đích (Mobile)
    target.addEventListener("click", () => {
      if (AppState.dragSelectedId) {
        checkDragMatch(AppState.dragSelectedId, pair.id, target);
      }
    });

    dropList.appendChild(target);
  });
}

function checkDragMatch(selectedPairId, targetPairId, targetElement) {
  if (targetElement.classList.contains("matched")) return;

  if (selectedPairId === targetPairId) {
    // Ghép đúng
    SoundFX.correct();
    targetElement.classList.add("matched");
    const matchedItem = document.getElementById(`drag_${selectedPairId}`);
    if (matchedItem) matchedItem.classList.add("matched");

    targetElement.innerHTML = `<span>${targetElement.querySelector('span').textContent}</span> <span style="color: #059669;">✅ Ghép đúng!</span>`;
    AppState.dragMatchedCount++;
    document.getElementById("dragMatchedCount").textContent = AppState.dragMatchedCount;
    awardXP(15);
    AppState.dragSelectedId = null;

    const totalPairs = AppState.currentLesson.dragDrop.pairs.length;
    if (AppState.dragMatchedCount === totalPairs) {
      // Vượt qua level 2
      markStageCompleted(3);
      SoundFX.cheer();

      sendActivityRecordToSheet({
        activityType: "Kéo thả ghép cặp",
        score: 10,
        ratio: `${totalPairs}/${totalPairs}`,
        percentage: 100,
        duration: "Đạt cấp độ 2",
        evaluation: "Xuất sắc"
      });

      setTimeout(() => {
        if (confirm("🎉 Xuất sắc! Em đã hoàn thành toàn bộ thử thách Kéo thả ghép cặp! Tiếp tục sang Cấp độ 3 (Điền khuyết mã HTML) nhé?")) {
          switchStage(4);
        }
      }, 300);
    }
  } else {
    // Ghép sai
    SoundFX.wrong();
    targetElement.style.borderColor = "#ef4444";
    setTimeout(() => {
      if (!targetElement.classList.contains("matched")) {
        targetElement.style.borderColor = "#94a3b8";
      }
    }, 600);
  }
}

// =============================================================================
// CHẶNG 4: BÀI TẬP ĐIỀN KHUYẾT MÃ NGUỒN (FILL IN THE BLANK)
// =============================================================================
function initFillBlankStage() {
  const fillList = AppState.currentLesson.fillBlank;
  const container = document.getElementById("fillQuestionsList");
  container.innerHTML = "";

  fillList.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "fill-question-card";

    // Thay thế ____ bằng thẻ input
    const parts = item.template.split("____");
    const inputHtml = `<input type="text" class="fill-input" id="fillInput_${item.id}" placeholder="?" autocomplete="off" onkeydown="if(event.key==='Enter') checkAllFillAnswers()">`;
    
    // Escape từng phần của template để trình duyệt không nuốt các thẻ như <! và <meta>
    const escapedParts = parts.map(p => escapeHTML(p));
    const templateRendered = escapedParts.join(inputHtml);

    card.innerHTML = `
      <div class="fill-question-title">Câu ${idx + 1}: ${escapeHTML(item.question)}</div>
      <div class="fill-code-box">
        ${templateRendered}
      </div>
      <div class="fill-feedback" id="fillFeedback_${item.id}"></div>
    `;

    container.appendChild(card);
  });
}

function checkAllFillAnswers() {
  const fillList = AppState.currentLesson.fillBlank;
  let correctCount = 0;

  fillList.forEach(item => {
    const input = document.getElementById(`fillInput_${item.id}`);
    const feedback = document.getElementById(`fillFeedback_${item.id}`);
    if (!input || !feedback) return;

    const userVal = input.value.trim().toLowerCase();
    const correctVal = item.answer.trim().toLowerCase();

    // Làm sạch đáp án (bỏ ngoặc, nháy kép, nháy đơn nếu học sinh lỡ gõ)
    const cleanUserVal = userVal.replace(/[<>"'#]/g, "").trim();
    const cleanCorrectVal = correctVal.replace(/[<>"'#]/g, "").trim();

    const isMatch = (userVal === correctVal) || (cleanUserVal === cleanCorrectVal);

    if (isMatch && userVal.length > 0) {
      input.className = "fill-input correct";
      feedback.className = "fill-feedback show-correct";
      feedback.textContent = `✅ Chính xác! ${item.explanation}`;
      correctCount++;
    } else {
      input.className = "fill-input wrong";
      feedback.className = "fill-feedback show-wrong";
      const displayVal = input.value.trim() ? `"${input.value.trim()}"` : "để trống";
      feedback.textContent = `❌ Chưa đúng (Em ${displayVal}). Đáp án chuẩn là: "${item.answer}". ${item.explanation}`;
    }
  });

  const total = fillList.length;
  if (correctCount === total) {
    SoundFX.cheer();
    awardXP(30);
    markStageCompleted(4);

    sendActivityRecordToSheet({
      activityType: "Điền khuyết mã HTML",
      score: 10,
      ratio: `${correctCount}/${total}`,
      percentage: 100,
      duration: "Hoàn thành cấp 3",
      evaluation: "Xuất sắc"
    });

    setTimeout(() => {
      if (confirm("🎉 Hoàn hảo! Em đã điền đúng tất cả các câu hỏi! Tiếp tục sang Chặng 5 (Kiểm tra Trắc nghiệm) nhé?")) {
        switchStage(5);
      }
    }, 300);
  } else {
    SoundFX.wrong();
    alert(`Em đã điền đúng ${correctCount}/${total} câu. Hãy xem lại hướng dẫn ở những câu màu đỏ và sửa lại nhé!`);
  }
}

// =============================================================================
// CHẶNG 5: BÀI TẬP TRẮC NGHIỆM ĐÁNH GIÁ (QUIZ)
// =============================================================================
function initQuizStage() {
  AppState.quizAnswers = {};
  AppState.quizCurrentIdx = 0;
  AppState.quizSecondsLeft = 600; // 10 phút
  AppState.quizStartTime = new Date();

  // Khởi động đồng hồ đếm ngược
  if (AppState.quizTimerInterval) clearInterval(AppState.quizTimerInterval);
  AppState.quizTimerInterval = setInterval(updateQuizTimer, 1000);

  renderQuizQuestion();
}

function updateQuizTimer() {
  AppState.quizSecondsLeft--;
  if (AppState.quizSecondsLeft <= 0) {
    clearInterval(AppState.quizTimerInterval);
    alert("Hết giờ làm bài kiểm tra trắc nghiệm! Hệ thống sẽ tự động nộp bài.");
    submitQuiz();
    return;
  }

  const mins = Math.floor(AppState.quizSecondsLeft / 60);
  const secs = AppState.quizSecondsLeft % 60;
  document.getElementById("quizTimerDisplay").textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderQuizQuestion() {
  const questions = AppState.currentLesson.quiz;
  const q = questions[AppState.quizCurrentIdx];

  document.getElementById("quizCurrentNum").textContent = AppState.quizCurrentIdx + 1;
  document.getElementById("quizTotalNum").textContent = questions.length;
  document.getElementById("quizQuestionText").innerHTML = formatQuestionTitle(q.question);

  // Ẩn/Hiện giải thích (chỉ hiện sau khi nộp bài)
  document.getElementById("quizExplanationBox").classList.remove("show");

  const optionsContainer = document.getElementById("quizOptionsContainer");
  optionsContainer.innerHTML = "";

  const labels = ["A", "B", "C", "D"];
  q.options.forEach((optText, optIdx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    if (AppState.quizAnswers[AppState.quizCurrentIdx] === optIdx) {
      btn.classList.add("selected");
    }

    btn.innerHTML = `
      <div class="quiz-option-badge">${labels[optIdx]}</div>
      <div style="flex: 1;">${escapeHTML(optText)}</div>
    `;

    btn.onclick = () => {
      SoundFX.flip();
      AppState.quizAnswers[AppState.quizCurrentIdx] = optIdx;
      renderQuizQuestion();
    };

    optionsContainer.appendChild(btn);
  });

  // Điều khiển các nút Trước / Sau / Nộp bài
  const prevBtn = document.getElementById("quizPrevBtn");
  const nextBtn = document.getElementById("quizNextBtn");
  const submitBtn = document.getElementById("quizSubmitBtn");

  prevBtn.style.visibility = AppState.quizCurrentIdx > 0 ? "visible" : "hidden";

  if (AppState.quizCurrentIdx === questions.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-flex";
  } else {
    nextBtn.style.display = "inline-flex";
    submitBtn.style.display = "none";
  }
}

function navigateQuiz(step) {
  const questions = AppState.currentLesson.quiz;
  const newIdx = AppState.quizCurrentIdx + step;
  if (newIdx >= 0 && newIdx < questions.length) {
    AppState.quizCurrentIdx = newIdx;
    renderQuizQuestion();
  }
}

function submitQuiz() {
  if (AppState.quizTimerInterval) clearInterval(AppState.quizTimerInterval);

  const questions = AppState.currentLesson.quiz;
  const answeredCount = Object.keys(AppState.quizAnswers).length;

  if (answeredCount < questions.length) {
    if (!confirm(`Em mới trả lời ${answeredCount}/${questions.length} câu. Em có chắc chắn muốn nộp bài ngay không?`)) {
      return;
    }
  }

  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (AppState.quizAnswers[idx] === q.answer) {
      correctCount++;
    }
  });

  const score10 = Number(((correctCount / questions.length) * 10).toFixed(1));
  const percent = Math.round((correctCount / questions.length) * 100);

  // Tính thời gian làm bài
  const endTime = new Date();
  const diffSecs = Math.max(1, Math.round((endTime - AppState.quizStartTime) / 1000));
  const timeFormatted = `${Math.floor(diffSecs / 60)} phút ${diffSecs % 60} giây`;

  // Đánh giá xếp loại
  let evaluation = "Cần cố gắng";
  if (score10 >= 9) evaluation = "Xuất sắc 🌟";
  else if (score10 >= 8) evaluation = "Giỏi 🎯";
  else if (score10 >= 6.5) evaluation = "Khá 👍";
  else if (score10 >= 5) evaluation = "Đạt yêu cầu";

  // Thưởng XP
  const xpEarned = correctCount * 10;
  awardXP(xpEarned);

  // Ghi nhận hoàn thành bài
  markStageCompleted(5, score10);

  // Hiển thị màn hình chứng nhận kết quả
  showResultCertificate({
    title: score10 >= 5 ? `Chúc mừng ${AppState.currentUser.fullname}!` : "Cố lên em nhé!",
    score: score10,
    ratio: `${correctCount}/${questions.length}`,
    percentage: percent,
    duration: timeFormatted,
    evaluation: evaluation
  });

  // Tự động đồng bộ kết quả lên Google Sheet của Giáo viên
  sendActivityRecordToSheet({
    activityType: "Kiểm tra Trắc nghiệm",
    score: score10,
    ratio: `${correctCount}/${questions.length}`,
    percentage: percent,
    duration: timeFormatted,
    evaluation: evaluation
  });

  SoundFX.cheer();
}

function showResultCertificate(data) {
  document.getElementById("resultTitleText").textContent = data.title;
  document.getElementById("resultScoreValue").textContent = data.score;
  document.getElementById("resultRatioValue").textContent = data.ratio;
  document.getElementById("resultPercentValue").textContent = `${data.percentage}%`;
  document.getElementById("resultDurationValue").textContent = data.duration;

  navigateTo("result");
}

function retryCurrentActivity() {
  if (AppState.lastActivityWasExam) {
    startComprehensiveExam(AppState.currentExamId || "exam_789");
  } else if (AppState.currentLesson) {
    switchStage(AppState.currentStage);
    navigateTo("play");
  } else {
    navigateTo("home");
  }
}

// =============================================================================
// BÀI KIỂM TRA TỔNG HỢP (BÀI 7 - 8 - 9): ĐỊNH DẠNG MỚI BỘ GD&ĐT 2025
// Cấu trúc: 24 câu trắc nghiệm (6.0 điểm) + 4 câu Đúng/Sai 16 ý (4.0 điểm) = 10 điểm
// =============================================================================

function startComprehensiveExam(examId = "exam_789") {
  if (typeof examId !== "string" || !examId) {
    examId = "exam_789";
  }
  if (!AppState.currentUser) {
    alert("Vui lòng đăng nhập để làm bài kiểm tra!");
    navigateTo("auth");
    return;
  }

  // Lấy dữ liệu đề kiểm tra theo ID
  let exam = null;
  if (typeof COMPREHENSIVE_EXAMS !== "undefined" && COMPREHENSIVE_EXAMS[examId]) {
    exam = COMPREHENSIVE_EXAMS[examId];
  } else if (examId === "exam_101112" && typeof COMPREHENSIVE_TEST_101112 !== "undefined") {
    exam = COMPREHENSIVE_TEST_101112;
  } else if (typeof COMPREHENSIVE_TEST_789 !== "undefined") {
    exam = COMPREHENSIVE_TEST_789;
  }

  if (!exam) {
    alert("Không tìm thấy dữ liệu đề kiểm tra!");
    return;
  }

  // Đặt lại các biến trạng thái
  AppState.currentExamId = exam.id;
  AppState.currentExam = exam;
  AppState.examAnswersP1 = {};
  AppState.examAnswersP2 = {};
  AppState.examSecondsLeft = (exam.timeMinutes ? exam.timeMinutes : 45) * 60;
  AppState.examStartTime = new Date();
  AppState.lastActivityWasExam = true;

  // Cập nhật tiêu đề và mô tả trên giao diện phòng thi
  const titleEl = document.getElementById("examViewTitle");
  const descEl = document.getElementById("examViewDesc");
  if (titleEl) {
    titleEl.textContent = `🏆 ${exam.title}`;
  }
  if (descEl) {
    descEl.innerHTML = `Cấu trúc chuẩn Bộ GD&ĐT 2025: <strong>${exam.part1.length} câu trắc nghiệm</strong> (${exam.matrix.part1.maxScore.toFixed(1)} điểm) + <strong>${exam.part2.length} câu Đúng/Sai</strong> (${exam.matrix.part2.maxScore.toFixed(1)} điểm) • Thang điểm 10`;
  }

  // Xóa bộ đếm cũ nếu có
  if (AppState.examTimerInterval) {
    clearInterval(AppState.examTimerInterval);
    AppState.examTimerInterval = null;
  }

  // Khởi động bộ đếm ngược 45 phút
  updateExamTimerDisplay();
  AppState.examTimerInterval = setInterval(() => {
    AppState.examSecondsLeft--;
    updateExamTimerDisplay();

    if (AppState.examSecondsLeft <= 0) {
      clearInterval(AppState.examTimerInterval);
      AppState.examTimerInterval = null;
      alert("⏰ Đã hết thời gian 45 phút làm bài! Hệ thống tự động thu bài của em...");
      submitComprehensiveExam(true);
    }
  }, 1000);

  // Render nội dung bài thi
  renderComprehensiveExam();
  switchExamPart(1);

  navigateTo("exam");
  SoundFX.click();
}

function updateExamTimerDisplay() {
  const display = document.getElementById("examTimerDisplay");
  if (!display) return;
  const mins = Math.floor(AppState.examSecondsLeft / 60);
  const secs = AppState.examSecondsLeft % 60;
  display.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  if (AppState.examSecondsLeft <= 300) {
    display.style.color = "#ef4444";
  } else {
    display.style.color = "#dc2626";
  }
}

function switchExamPart(partNum) {
  const tab1 = document.getElementById("tabExamPart1");
  const tab2 = document.getElementById("tabExamPart2");
  const cont1 = document.getElementById("examPart1Container");
  const cont2 = document.getElementById("examPart2Container");

  if (!tab1 || !tab2 || !cont1 || !cont2) return;

  if (partNum === 1) {
    tab1.classList.add("active");
    tab2.classList.remove("active");
    cont1.style.display = "block";
    cont2.style.display = "none";
  } else {
    tab2.classList.add("active");
    tab1.classList.remove("active");
    cont2.style.display = "block";
    cont1.style.display = "none";
  }
}

function renderComprehensiveExam() {
  const exam = AppState.currentExam || (typeof COMPREHENSIVE_TEST_789 !== "undefined" ? COMPREHENSIVE_TEST_789 : null);
  if (!exam) return;

  // 1. Render Ma trận câu hỏi phân theo mức độ nhận thức (NB: 40% - TH: 30% - VD: 30%)
  const matrixGrid = document.getElementById("examMatrixGrid");
  if (matrixGrid) {
    let matrixHtml = "";
    // 24 câu Phần I (10 NB, 7 TH, 7 VD)
    exam.part1.forEach((q, idx) => {
      const isAnswered = AppState.examAnswersP1[q.id] !== undefined;
      const levelClass = q.level === 'NB' ? 'level-nb' : (q.level === 'TH' ? 'level-th' : 'level-vd');
      const p1ScorePerQ = exam.part1.length > 0 ? ((exam.matrix && exam.matrix.part1 && exam.matrix.part1.maxScore) ? (exam.matrix.part1.maxScore / exam.part1.length).toFixed(2) : (6.0 / exam.part1.length).toFixed(2)) : "0.25";
      const titleText = `Phần I - Câu ${idx + 1} [${q.levelText || q.level}] (${p1ScorePerQ}đ)`;
      matrixHtml += `<button type="button" class="exam-matrix-btn ${levelClass} ${isAnswered ? 'answered' : ''}" id="matrix_p1_${idx}" onclick="scrollToExamQuestion('p1_q${idx + 1}', 1)" title="${titleText}">${idx + 1}</button>`;
    });

    // Vạch ngăn cách
    matrixHtml += `<div style="width: 2px; height: 32px; background: #cbd5e1; margin: 0 4px;" title="Ngăn cách Phần I và Phần II"></div>`;

    // 4 câu Phần II (6 NB, 5 TH, 5 VD)
    exam.part2.forEach((q, idx) => {
      const isAnswered = q.items.every(it => AppState.examAnswersP2[it.id] !== undefined);
      matrixHtml += `<button type="button" class="exam-matrix-btn ${isAnswered ? 'answered' : ''}" id="matrix_p2_${idx}" onclick="scrollToExamQuestion('p2_q${idx + 1}', 2)" title="Phần II - Câu ${idx + 1} (4 ý Đúng/Sai - ${(exam.part2.length > 0 ? ((exam.matrix && exam.matrix.part2 && exam.matrix.part2.maxScore) ? (exam.matrix.part2.maxScore / exam.part2.length).toFixed(1) : (4.0 / exam.part2.length).toFixed(1)) : "1.0")}đ)" style="min-width: 44px;">II.${idx + 1}</button>`;
    });

    matrixGrid.innerHTML = matrixHtml;
  }

  // 2. Render Phần I: 24 câu trắc nghiệm 4 lựa chọn (10 NB : 7 TH : 7 VD)
  const p1List = document.getElementById("examPart1QuestionsList");
  if (p1List) {
    p1List.innerHTML = exam.part1.map((q, idx) => {
      const selected = AppState.examAnswersP1[q.id];
      const levelBadgeClass = q.level === 'NB' ? 'badge-level-nb' : (q.level === 'TH' ? 'badge-level-th' : 'badge-level-vd');
      const levelLabel = q.levelText || (q.level === 'NB' ? 'Nhận biết' : (q.level === 'TH' ? 'Thông hiểu' : 'Vận dụng'));

      const optionsHtml = q.options.map((opt, optIdx) => {
        const isSelected = selected === optIdx;
        const optLetter = ["A", "B", "C", "D"][optIdx];
        return `
          <button type="button" class="exam-opt-btn ${isSelected ? 'selected' : ''}" id="btn_p1_${q.id}_${optIdx}" onclick="selectExamPart1('${q.id}', ${optIdx}, ${idx})">
            <span class="exam-opt-letter">${optLetter}.</span>
            <span class="exam-opt-text">${escapeHTML(opt)}</span>
          </button>
        `;
      }).join("");

      return `
        <div class="exam-q-card" id="card_p1_q${idx + 1}">
          <div class="exam-q-header">
            <div class="exam-q-title" style="flex-wrap: wrap; gap: 0.35rem; align-items: center;">
              <span class="exam-q-number">Câu ${idx + 1}:</span>
              <span class="badge-level ${levelBadgeClass}">${levelLabel}</span>
              
              ${(() => { const p1Score = exam.part1.length > 0 ? ((exam.matrix && exam.matrix.part1 && exam.matrix.part1.maxScore) ? (exam.matrix.part1.maxScore / exam.part1.length).toFixed(2) : (6.0 / exam.part1.length).toFixed(2)) : "0.25"; return `<span class="exam-q-points">${p1Score}đ • ${q.lesson || "Lý thuyết"}</span>`; })()}
            </div>
          </div>
          <div class="exam-q-body">
            ${formatQuestionTitle(q.question)} 
          </div>
          <div class="exam-options-grid">
            ${optionsHtml}
          </div>
        </div>
      `;
    }).join("");
  }

  // 3. Render Phần II: 4 câu trắc nghiệm Đúng/Sai (16 ý: 6 NB : 5 TH : 5 VD)
  const p2List = document.getElementById("examPart2QuestionsList");
  if (p2List) {
    p2List.innerHTML = exam.part2.map((q, idx) => {
      const rowsHtml = q.items.map(item => {
        const currentAns = AppState.examAnswersP2[item.id];
        const isTrue = currentAns === true;
        const isFalse = currentAns === false;
        const levelBadgeClass = item.level === 'NB' ? 'badge-level-nb' : (item.level === 'TH' ? 'badge-level-th' : 'badge-level-vd');
        const levelLabel = item.levelText || (item.level === 'NB' ? 'Nhận biết' : (item.level === 'TH' ? 'Thông hiểu' : 'Vận dụng'));

        return `
          <tr>
            <td style="font-weight: 800; text-align: center; width: 85px; background: #f8fafc; vertical-align: middle;">
              <div style="font-size: 1rem; margin-bottom: 0.2rem;">${item.label})</div>
              <span class="badge-level ${levelBadgeClass}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${item.level}</span>
            </td>
            <td>${escapeHTML(item.text)}</td>
            <td class="tf-action-cell">
              <div class="tf-btn-group">
                <button type="button" class="tf-choice-btn ${isTrue ? 'selected-true' : ''}" id="btn_tf_${item.id}_true" onclick="selectExamPart2('${item.id}', true, ${idx})">
                  Đúng
                </button>
                <button type="button" class="tf-choice-btn ${isFalse ? 'selected-false' : ''}" id="btn_tf_${item.id}_false" onclick="selectExamPart2('${item.id}', false, ${idx})">
                  Sai
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join("");

      return `
        <div class="exam-q-card" id="card_p2_q${idx + 1}">
          <div class="exam-q-header">
            <div>
              <span class="exam-q-title" style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;">
                <strong>Phần II - Câu ${idx + 1}: ${escapeHTML(q.title || "Tình huống Đúng/Sai")}</strong>
                
              </span>
              <p style="margin-top: 0.35rem; font-size: 0.92rem; color: #475569; font-style: italic;">
                ${escapeHTML(q.context)}
              </p>
            </div>
            <span class="exam-q-points">Tối đa 1.0 điểm (4 ý a,b,c,d)</span>
          </div>
          ${q.tablePreview ? q.tablePreview : ''}
          <div style="overflow-x: auto;">
            <table class="tf-table">
              <thead>
                <tr>
                  <th style="width: 85px; text-align: center;">Ý & Cấp độ</th>
                  <th>Mệnh đề phát biểu</th>
                  <th style="width: 170px; text-align: center;">Lựa chọn</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }).join("");
  }

  updateExamProgressBadges();
}

function selectExamPart1(qId, optIdx, qIdx) {
  AppState.examAnswersP1[qId] = optIdx;

  const exam = AppState.currentExam || (typeof COMPREHENSIVE_TEST_789 !== "undefined" ? COMPREHENSIVE_TEST_789 : null);
  if (exam && exam.part1 && exam.part1[qIdx]) {
    const q = exam.part1[qIdx];
    for (let i = 0; i < q.options.length; i++) {
      const btn = document.getElementById(`btn_p1_${qId}_${i}`);
      if (btn) {
        if (i === optIdx) {
          btn.classList.add("selected");
        } else {
          btn.classList.remove("selected");
        }
      }
    }
  }

  const mBtn = document.getElementById(`matrix_p1_${qIdx}`);
  if (mBtn) mBtn.classList.add("answered");

  updateExamProgressBadges();
  SoundFX.click();
}

function selectExamPart2(itemId, valBool, qIdx) {
  AppState.examAnswersP2[itemId] = valBool;

  const btnTrue = document.getElementById(`btn_tf_${itemId}_true`);
  const btnFalse = document.getElementById(`btn_tf_${itemId}_false`);

  if (btnTrue && btnFalse) {
    if (valBool === true) {
      btnTrue.classList.add("selected-true");
      btnFalse.classList.remove("selected-false");
    } else {
      btnFalse.classList.add("selected-false");
      btnTrue.classList.remove("selected-true");
    }
  }

  const exam = AppState.currentExam || (typeof COMPREHENSIVE_TEST_789 !== "undefined" ? COMPREHENSIVE_TEST_789 : null);
  if (exam && exam.part2 && exam.part2[qIdx]) {
    const q = exam.part2[qIdx];
    const allAnswered = q.items.every(it => AppState.examAnswersP2[it.id] !== undefined);
    const mBtn = document.getElementById(`matrix_p2_${qIdx}`);
    if (mBtn) {
      if (allAnswered) {
        mBtn.classList.add("answered");
      } else {
        mBtn.classList.remove("answered");
      }
    }
  }

  updateExamProgressBadges();
  SoundFX.click();
}

function updateExamProgressBadges() {
  const p1Count = Object.keys(AppState.examAnswersP1).length;
  const p2Count = Object.keys(AppState.examAnswersP2).length;

  const b1 = document.getElementById("examPart1Progress");
  const b2 = document.getElementById("examPart2Progress");

  const exam = AppState.currentExam || (typeof COMPREHENSIVE_TEST_789 !== "undefined" ? COMPREHENSIVE_TEST_789 : null);
  const totalP1 = exam && exam.part1 ? exam.part1.length : 24;
  const totalP2 = exam && exam.matrix ? exam.matrix.part2.total : 16;

  if (b1) b1.textContent = `${p1Count}/${totalP1}`;
  if (b2) b2.textContent = `${p2Count}/${totalP2}`;
}

function scrollToExamQuestion(targetId, partNum) {
  switchExamPart(partNum);
  setTimeout(() => {
    const el = document.getElementById(`card_${targetId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.boxShadow = "0 0 0 3px rgba(79, 70, 229, 0.4)";
      setTimeout(() => {
        el.style.boxShadow = "";
      }, 1500);
    }
  }, 80);
}

function submitComprehensiveExam(isForce = false) {
  const exam = AppState.currentExam || (typeof COMPREHENSIVE_TEST_789 !== "undefined" ? COMPREHENSIVE_TEST_789 : null);
  if (!exam) return;

  const countP1 = Object.keys(AppState.examAnswersP1).length;
  const countP2 = Object.keys(AppState.examAnswersP2).length;
  const missingP1 = exam.part1.length - countP1;
  const missingP2 = exam.matrix.part2.total - countP2;

  if (!isForce) {
    if (missingP1 > 0 || missingP2 > 0) {
      const msg = `⚠️ Em còn ${missingP1} câu Phần I và ${missingP2} ý Phần II chưa trả lời!\n\nEm có chắc chắn muốn nộp bài thi ngay bây giờ không?`;
      if (!confirm(msg)) return;
    } else {
      if (!confirm("🎉 Em đã hoàn thành 100% các câu hỏi! Xác nhận nộp bài kiểm tra tổng hợp ngay bây giờ?")) return;
    }
  }

  // Dừng đồng hồ đếm ngược
  if (AppState.examTimerInterval) {
    clearInterval(AppState.examTimerInterval);
    AppState.examTimerInterval = null;
  }

  // 1. Chấm điểm Phần I: Trắc nghiệm nhiều lựa chọn (tối đa 6.0 điểm)
  const p1PointPerQ = exam.part1.length > 0 ? ((exam.matrix && exam.matrix.part1 && exam.matrix.part1.maxScore) ? exam.matrix.part1.maxScore / exam.part1.length : 6.0 / exam.part1.length) : 0.25;
  let correctP1 = 0;
  exam.part1.forEach(q => {
    if (AppState.examAnswersP1[q.id] === q.answer) {
      correctP1++;
    }
  });
  const scoreP1 = Math.round((correctP1 * p1PointPerQ) * 100) / 100;

  // 2. Chấm điểm Phần II: Câu trắc nghiệm Đúng/Sai (tối đa 4.0 điểm)
  // Quy tắc lũy tiến chuẩn Bộ GD&ĐT 2025: 1 ý = 10%; 2 ý = 25%; 3 ý = 50%; 4 ý = 100% điểm tối đa mỗi câu
  const maxScoreP2PerQ = exam.part2.length > 0 ? ((exam.matrix && exam.matrix.part2 && exam.matrix.part2.maxScore) ? exam.matrix.part2.maxScore / exam.part2.length : 4.0 / exam.part2.length) : 1.0;
  let scoreP2 = 0;
  let totalCorrectSubItemsP2 = 0;

  exam.part2.forEach(q => {
    let qCorrect = 0;
    q.items.forEach(it => {
      if (AppState.examAnswersP2[it.id] === it.answer) {
        qCorrect++;
        totalCorrectSubItemsP2++;
      }
    });

    if (qCorrect === 1) scoreP2 += maxScoreP2PerQ * 0.1;
    else if (qCorrect === 2) scoreP2 += maxScoreP2PerQ * 0.25;
    else if (qCorrect === 3) scoreP2 += maxScoreP2PerQ * 0.5;
    else if (qCorrect === 4) scoreP2 += maxScoreP2PerQ * 1.0;
  });
  scoreP2 = Math.round(scoreP2 * 100) / 100;

  // 3. Thống kê theo mức độ nhận thức (Tỉ lệ chuẩn 4 NB : 3 TH : 3 VD)
  const totalP1Count = exam.part1.length;
  const totalP2SubItems = (exam.matrix && exam.matrix.part2 && exam.matrix.part2.total) ? exam.matrix.part2.total : exam.part2.reduce((acc, q) => acc + q.items.length, 0);
  const totalItemsCount = (exam.matrix && exam.matrix.totalItems) ? exam.matrix.totalItems : (totalP1Count + totalP2SubItems);
  const maxNB = (exam.matrix && exam.matrix.nbTotal) ? exam.matrix.nbTotal : (totalItemsCount === 20 ? 8 : 16);
  const maxTH = (exam.matrix && exam.matrix.thTotal) ? exam.matrix.thTotal : (totalItemsCount === 20 ? 6 : 12);
  const maxVD = (exam.matrix && exam.matrix.vdTotal) ? exam.matrix.vdTotal : (totalItemsCount === 20 ? 6 : 12);

  let countCorrectNB = 0;
  let countCorrectTH = 0;
  let countCorrectVD = 0;

  exam.part1.forEach(q => {
    if (AppState.examAnswersP1[q.id] === q.answer) {
      if (q.level === "NB") countCorrectNB++;
      else if (q.level === "TH") countCorrectTH++;
      else if (q.level === "VD") countCorrectVD++;
    }
  });

  exam.part2.forEach(q => {
    q.items.forEach(it => {
      if (AppState.examAnswersP2[it.id] === it.answer) {
        if (it.level === "NB") countCorrectNB++;
        else if (it.level === "TH") countCorrectTH++;
        else if (it.level === "VD") countCorrectVD++;
      }
    });
  });

  // 4. Tổng điểm (Thang điểm 10)
  const totalScore = Math.round((scoreP1 + scoreP2) * 100) / 100;
  const totalPercent = Math.round((totalScore / 10) * 100);

  const secondsUsed = (exam.timeMinutes * 60) - AppState.examSecondsLeft;
  const minsUsed = Math.floor(secondsUsed / 60);
  const secsUsed = secondsUsed % 60;
  const durationStr = `${minsUsed} phút ${secsUsed} giây`;

  let evaluation = "Cần cố gắng thêm";
  if (totalScore >= 9.0) evaluation = "Xuất sắc 🌟";
  else if (totalScore >= 8.0) evaluation = "Giỏi 🎯";
  else if (totalScore >= 6.5) evaluation = "Khá 👍";
  else if (totalScore >= 5.0) evaluation = "Đạt chuẩn 📖";

  AppState.lastActivityWasExam = true;

  // 5. Lưu kết quả học sinh vào bộ nhớ
  if (AppState.currentUser) {
    if (!AppState.progress[AppState.currentUser.username]) {
      AppState.progress[AppState.currentUser.username] = {};
    }
    AppState.progress[AppState.currentUser.username][exam.id] = {
      score: totalScore,
      scoreP1: scoreP1,
      scoreP2: scoreP2,
      correctP1: correctP1,
      totalP1: totalP1Count,
      correctP2: totalCorrectSubItemsP2,
      totalP2: totalP2SubItems,
      nbCount: countCorrectNB,
      nbTotal: maxNB,
      thCount: countCorrectTH,
      thTotal: maxTH,
      vdCount: countCorrectVD,
      vdTotal: maxVD,
      evaluation: evaluation,
      completed: true,
      status: "Đã hoàn thành",
      date: new Date().toISOString()
    };
    saveProgressToStorage();
  }

  // 6. Hiển thị chứng nhận kết quả
  const levelSummary = `NB: ${countCorrectNB}/${maxNB} • TH: ${countCorrectTH}/${maxTH} • VD: ${countCorrectVD}/${maxVD}`;
  showResultCertificate({
    title: totalScore >= 5 ? `Chúc mừng ${AppState.currentUser.fullname}!` : "Cố lên em nhé!",
    score: totalScore,
    ratio: `Phần I: ${correctP1}/${totalP1Count} • Phần II: ${totalCorrectSubItemsP2}/${totalP2SubItems} (${levelSummary})`,
    percentage: totalPercent,
    duration: durationStr,
    evaluation: `${evaluation} (Phần I: ${scoreP1}/6.0đ • Phần II: ${scoreP2}/4.0đ • ${levelSummary})`
  });

  // 7. Tự động gửi kết quả về Google Sheet của Giáo viên
  sendActivityRecordToSheet({
    lessonTitle: exam.title,
    activityType: `Thi thử TN THPT (${totalP1Count} câu P1 + ${exam.part2.length} câu P2)`,
    score: totalScore,
    ratio: `P1: ${correctP1}/${totalP1Count}, P2: ${totalCorrectSubItemsP2}/${totalP2SubItems} | ${levelSummary}`,
    percentage: totalPercent,
    duration: durationStr,
    evaluation: `${evaluation} (P1: ${scoreP1}đ, P2: ${scoreP2}đ • Tỉ lệ 4:3:3: ${levelSummary})`
  });

  SoundFX.cheer();
}

// =============================================================================
// GỬI KẾT QUẢ VỀ GOOGLE SHEET CHO GIÁO VIÊN (GOOGLE APPS SCRIPT WEBHOOK)
// =============================================================================
function sendActivityRecordToSheet(activityData) {
  if (!AppState.currentUser) return;

  const now = new Date();
  const timestamp = `${now.toLocaleDateString("vi-VN")} ${now.toLocaleTimeString("vi-VN")}`;

  const payload = {
    timestamp: timestamp,
    username: AppState.currentUser.username,
    fullname: AppState.currentUser.fullname,
    className: AppState.currentUser.className || (AppState.currentUser.role === "teacher" ? "Giáo viên" : "12A1"),
    lessonTitle: activityData.lessonTitle || (AppState.currentLesson ? `${AppState.currentLesson.code}: ${AppState.currentLesson.title}` : "Tin học 12"),
    activityType: activityData.activityType,
    score: activityData.score,
    ratio: activityData.ratio,
    percentage: activityData.percentage,
    duration: activityData.duration,
    evaluation: activityData.evaluation,

    // Tương thích cả Google Apps Script cũ (8 cột) và mới (11 cột)
    studentName: AppState.currentUser.fullname,
    studentCode: AppState.currentUser.username,
    completed: true,                                // Đánh dấu hoàn thành để không bị ghi "Đang học"
    quizScore: activityData.score,                  // Số điểm trắc nghiệm / tổng điểm
    maxScore: 10,                                   // Thang điểm 10
    status: "Đã hoàn thành",                        // Trạng thái đã làm xong
    submittedCode: activityData.evaluation || ""    // Hiển thị xếp loại vào cột đánh giá/mã nộp
  };

  // 1. Luôn lưu vào lịch sử cục bộ để Giáo viên xem trong Webapp
  AppState.results.unshift(payload);
  saveResultsToStorage();

  // Cập nhật trạng thái trên màn hình kết quả
  const statusBadge = document.getElementById("syncStatusBadge");
  const statusText = document.getElementById("syncStatusText");

  if (!AppState.googleSheetUrl) {
    if (statusBadge && statusText) {
      statusBadge.className = "sync-status-indicator sync-pending";
      statusText.textContent = "ℹ️ Đã lưu điểm trên máy (Giáo viên chưa cấu hình URL Google Sheet).";
    }
    return;
  }

  if (statusBadge && statusText) {
    statusBadge.className = "sync-status-indicator sync-pending";
    statusText.textContent = "🔄 Đang gửi kết quả đến Google Sheet của Giáo viên...";
  }

  // 2. Gửi bất đồng bộ qua Google Apps Script Webhook
  try {
    fetch(AppState.googleSheetUrl, {
      method: "POST",
      mode: "no-cors", // Bỏ qua CORS để browser không chặn gửi tới Google Apps Script
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(() => {
      if (statusBadge && statusText) {
        statusBadge.className = "sync-status-indicator sync-success";
        statusText.textContent = "✅ Đã gửi kết quả về Google Sheet của Giáo viên thành công!";
      }
    }).catch(err => {
      if (statusBadge && statusText) {
        statusBadge.className = "sync-status-indicator sync-pending";
        statusText.textContent = "⚠️ Kết nối Google Sheet gián đoạn, kết quả vẫn được lưu an toàn trong hệ thống.";
      }
    });
  } catch (err) {
    // Không làm gián đoạn trải nghiệm học sinh
  }
}

// =============================================================================
// BẢNG ĐIỀU KHIỂN GIÁO VIÊN (TEACHER ADMIN PORTAL)
// =============================================================================
function renderTeacherDashboard() {
  populateClassFilterOptions();
  switchAdminTab("students");
  renderStudentsTable();
  renderResultsTable();
}

function switchAdminTab(tabName) {
  document.querySelectorAll(".admin-nav-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".admin-panel").forEach(p => p.style.display = "none");

  if (tabName === "students") {
    document.getElementById("tabAdminStudents").classList.add("active");
    document.getElementById("adminStudentsPanel").style.display = "block";
    populateClassFilterOptions();
    renderStudentsTable();
  } else if (tabName === "results") {
    document.getElementById("tabAdminResults").classList.add("active");
    document.getElementById("adminResultsPanel").style.display = "block";
    populateClassFilterOptions();
    renderResultsTable();
  } else if (tabName === "sheet") {
    document.getElementById("tabAdminSheet").classList.add("active");
    document.getElementById("adminSheetPanel").style.display = "block";
  }
}

function populateClassFilterOptions() {
  const select1 = document.getElementById("filterClassSelect");
  const select2 = document.getElementById("filterResultClass");

  // Thu thập danh sách lớp duy nhất từ cả danh sách học sinh và nhật ký kết quả
  const studentClasses = (AppState.students || []).map(s => s.className).filter(c => c && c !== "12A" && c !== "Giáo viên");
  const resultClasses = (AppState.results || []).map(r => r.className).filter(c => c && c !== "12A" && c !== "Giáo viên");
  const classes = [...new Set([...studentClasses, ...resultClasses])].sort();

  if (select1) {
    const currentVal1 = select1.value;
    select1.innerHTML = `<option value="">-- Tất cả các lớp (${classes.length} lớp) --</option>`;
    classes.forEach(c => {
      const selected = c === currentVal1 ? "selected" : "";
      select1.innerHTML += `<option value="${c}" ${selected}>Lớp ${c}</option>`;
    });
  }

  if (select2) {
    const currentVal2 = select2.value;
    select2.innerHTML = `<option value="">-- Tất cả các lớp (${classes.length} lớp) --</option>`;
    classes.forEach(c => {
      const selected = c === currentVal2 ? "selected" : "";
      select2.innerHTML += `<option value="${c}" ${selected}>Lớp ${c}</option>`;
    });
  }

  renderClassQuickFilterPills(classes);
}

function renderClassQuickFilterPills(classes) {
  const container = document.getElementById("classQuickPills");
  if (!container) return;

  const currentFilterClass = document.getElementById("filterResultClass")?.value || "";

  // Đếm số lượng bài làm theo từng lớp
  const classCountMap = {};
  (AppState.results || []).forEach(r => {
    const c = (r.className || "Chưa rõ").trim();
    classCountMap[c] = (classCountMap[c] || 0) + 1;
  });

  const totalResults = (AppState.results || []).length;

  let html = `
    <button type="button" class="btn btn-sm ${currentFilterClass === '' ? 'btn-primary' : 'btn-outline'}" 
            style="border-radius: 20px; padding: 4px 14px; font-size: 0.8rem; font-weight: 600; cursor: pointer;"
            onclick="selectClassFilter('')">
      🏢 Tất cả các lớp <span style="opacity: 0.85; margin-left: 2px;">(${totalResults})</span>
    </button>
  `;

  classes.forEach(c => {
    const count = classCountMap[c] || 0;
    const isActive = currentFilterClass === c;
    html += `
      <button type="button" class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}" 
              style="border-radius: 20px; padding: 4px 14px; font-size: 0.8rem; font-weight: 600; cursor: pointer;"
              onclick="selectClassFilter('${c}')">
        🏫 Lớp ${c} <span style="opacity: 0.85; margin-left: 2px;">(${count})</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

function selectClassFilter(className) {
  const select = document.getElementById("filterResultClass");
  if (select) {
    select.value = className;
  }
  renderResultsTable();
}

function resetResultFilters() {
  const fClass = document.getElementById("filterResultClass");
  const fLesson = document.getElementById("filterResultLesson");
  const fActivity = document.getElementById("filterResultActivity");
  const fSearch = document.getElementById("searchResultInput");

  if (fClass) fClass.value = "";
  if (fLesson) fLesson.value = "";
  if (fActivity) fActivity.value = "";
  if (fSearch) fSearch.value = "";

  renderResultsTable();
}

function updateClassStatsSummary(filtered, filterClass) {
  const summaryEl = document.getElementById("classStatsSummary");
  if (!summaryEl) return;

  if (filtered.length === 0) {
    summaryEl.innerHTML = "";
    return;
  }

  const total = filtered.length;
  let sumScore = 0;
  let countScore = 0;
  let sumAccuracy = 0;
  let countAccuracy = 0;

  filtered.forEach(r => {
    const s = parseFloat(r.score);
    if (!isNaN(s)) {
      sumScore += s;
      countScore++;
    }
    const acc = parseFloat(r.percentage);
    if (!isNaN(acc)) {
      sumAccuracy += acc;
      countAccuracy++;
    }
  });

  const avgScore = countScore > 0 ? (sumScore / countScore).toFixed(1) : "--";
  const avgAccuracy = countAccuracy > 0 ? (sumAccuracy / countAccuracy).toFixed(0) : "--";
  const targetLabel = filterClass ? `Lớp ${filterClass}` : "Tất cả các lớp";

  summaryEl.innerHTML = `
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 0.65rem 1rem; width: 100%; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
        <span style="font-size: 1.2rem;">📊</span>
        <span style="font-size: 0.9rem; font-weight: 700; color: #1e293b;">Đang xem: <span style="color: #4f46e5;">${targetLabel}</span></span>
        <span class="badge-tag badge-indigo" style="font-size: 0.8rem; font-weight: 600;">${total} bài làm</span>
      </div>
      <div style="display: flex; gap: 1.25rem; font-size: 0.85rem; color: #475569; flex-wrap: wrap; align-items: center;">
        <span>⭐ Điểm trung bình: <strong style="color: #4f46e5; font-size: 0.95rem;">${avgScore}/10</strong></span>
        <span>🎯 Tỷ lệ đúng TB: <strong style="color: #059669; font-size: 0.95rem;">${avgAccuracy}%</strong></span>
      </div>
    </div>
  `;
}

function renderStudentsTable() {
  const tbody = document.getElementById("studentsTableBody");
  const search = (document.getElementById("searchStudentInput")?.value || "").toLowerCase();
  const filterClass = document.getElementById("filterClassSelect")?.value || "";

  document.getElementById("totalStudentsCount").textContent = AppState.students.length;

  const filtered = AppState.students.filter(s => {
    const matchSearch = s.fullname.toLowerCase().includes(search) || s.username.toLowerCase().includes(search);
    const matchClass = !filterClass || s.className === filterClass;
    return matchSearch && matchClass;
  });

  tbody.innerHTML = "";
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 2rem;">Chưa có học sinh nào phù hợp.</td></tr>`;
    return;
  }

  filtered.forEach((s, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><code>${s.username}</code></td>
      <td><code>${s.password}</code></td>
      <td><strong>${s.fullname}</strong></td>
      <td><span class="badge-tag badge-indigo">${s.className}</span></td>
      <td><strong style="color: #b45309;">${s.xp || 0} XP</strong></td>
      <td>${(s.badges || []).map(b => `<span class="badge-tag badge-green" style="margin: 2px;">${b}</span>`).join("") || '<span style="color:#94a3b8;">Chưa có</span>'}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteStudent('${s.username}')">Xóa</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteStudent(username) {
  if (confirm(`Thầy/Cô có chắc chắn muốn xóa học sinh mã "${username}" không?`)) {
    AppState.students = AppState.students.filter(s => s.username !== username);
    saveStudentsToStorage();
    renderStudentsTable();
    populateClassFilterOptions();
  }
}

// =============================================================================
// MODAL IMPORT HỌC SINH TỰ ĐỘNG
// =============================================================================
function openImportModal() {
  document.getElementById("importModal").classList.add("active");
}

function closeImportModal() {
  document.getElementById("importModal").classList.remove("active");
}

function handleVneduFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const notice = document.getElementById("fileUploadNotice");
  if (notice) notice.textContent = `Đang đọc tệp: ${file.name}...`;

  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target.result;
    const textarea = document.getElementById("importRawText");
    textarea.value = content;
    handleImportTextChange();
    if (notice) notice.textContent = `✅ Đã nạp xong: ${file.name}`;
  };
  reader.onerror = () => {
    alert("Không thể đọc tệp này! Vui lòng kiểm tra lại định dạng tệp.");
  };
  reader.readAsText(file, "UTF-8");
}

function handleImportTextChange() {
  const rawText = document.getElementById("importRawText")?.value || "";
  const previewBadge = document.getElementById("importPreviewBadge");
  const classInput = document.getElementById("importClassDefault");
  const usernameMode = document.getElementById("importUsernameMode")?.value || "vnedu_id";

  if (!rawText.trim()) {
    if (previewBadge) previewBadge.textContent = "";
    return;
  }

  const { detectedClass, students } = parseVneduStudentData(rawText, classInput ? classInput.value : "12A1", usernameMode, "123");
  if (detectedClass && classInput) {
    classInput.value = detectedClass;
  }

  if (previewBadge) {
    if (students.length > 0) {
      previewBadge.style.color = "#059669";
      previewBadge.textContent = `✅ Nhận diện: Lớp ${detectedClass} (${students.length} học sinh)`;
    } else {
      previewBadge.style.color = "#d97706";
      previewBadge.textContent = "Chưa phát hiện danh sách học sinh hợp lệ";
    }
  }
}

function parseVneduStudentData(rawText, fallbackClass, idMode, defaultPass) {
  const lines = rawText.split("\n");
  let detectedClass = fallbackClass || "12A1";

  // 1. Quét tìm tên lớp trong 15 dòng đầu
  for (let i = 0; i < Math.min(15, lines.length); i++) {
    const line = lines[i];
    const match = line.match(/Lớp\s*[:\-]?\s*([0-9]{1,2}[A-Za-z0-9]*)/i);
    if (match) {
      detectedClass = match[1].toUpperCase();
      break;
    }
  }

  const forbiddenWords = [
    "nhận xét", "sở giáo dục", "trường thpt", "bảng điểm", "mhk", "đtb", "tx1", "tx2", "tx3", "tx4", "tx5",
    "gk1", "ck1", "họ và tên", "họ tên", "stt", "khối", "thống kê", "chưa đạt", "số lượng"
  ];

  function isDate(s) {
    return /^\d{1,2}[/\-]\d{1,2}[/\-]\d{2,4}$/.test(s.trim());
  }

  function isClass(s) {
    const clean = s.trim();
    return /^[0-9]{1,2}[A-Za-z0-9_]*$/.test(clean) && /[A-Za-z]/.test(clean);
  }

  function isWord(s) {
    const clean = s.trim();
    if (!clean || isDate(clean) || isClass(clean) || /^\d+(\.0)?$/.test(clean)) return false;
    return /[a-zA-Zà-ỹÀ-Ỹ]/.test(clean);
  }

  const parsedStudents = [];

  for (let i = 0; i < lines.length; i++) {
    const lineClean = lines[i].trim();
    if (!lineClean) continue;

    // Dừng khi chạm phần thống kê cuối file vnEdu
    const upper = lineClean.toUpperCase();
    if (upper.includes("THỐNG KÊ") || upper.includes("SỐ HỌC SINH ĐẠT") || upper.includes("SỐ LƯỢNG - TỈ LỆ") || upper.includes("SỐ LƯỢNG")) {
      break;
    }

    // Tách dòng bởi dấu phẩy hoặc tab
    let parts = lineClean.split(/[\t,]/).map(p => p.trim().replace(/^"|"$/g, "")).filter(Boolean);
    if (parts.length === 0) continue;

    // 1. Kiểm tra và loại bỏ STT đầu dòng nếu là số
    let stt = null;
    if (/^\d+(\.0)?$/.test(parts[0])) {
      stt = parseInt(parts[0], 10);
      parts.shift();
    }
    if (parts.length === 0) continue;

    // 2. Kiểm tra và loại bỏ Mã học sinh nếu là dãy số >= 5 chữ số
    let vneduId = "";
    if (/^\d{5,12}(\.0)?$/.test(parts[0])) {
      const match = parts[0].match(/^(\d+)/);
      if (match) vneduId = match[1];
      parts.shift();
    }
    if (parts.length === 0) continue;

    // 3. Quét các phần còn lại để gom Họ đệm + Tên, Ngày sinh, Lớp
    const nameTokens = [];
    let className = detectedClass;
    let dob = "";

    for (let j = 0; j < parts.length; j++) {
      const p = parts[j];
      if (isDate(p)) {
        dob = p;
      } else if (isClass(p)) {
        className = p.toUpperCase();
      } else if (isWord(p)) {
        const lower = p.toLowerCase();
        if (!forbiddenWords.some(f => lower.includes(f))) {
          nameTokens.push(p);
        }
      }
    }

    if (nameTokens.length === 0) continue;

    // Ghép toàn bộ các thành phần tên lại (Họ đệm + Tên)
    const fullname = nameTokens.join(" ").replace(/\s+/g, " ").trim();
    if (fullname.length < 2 || /\d/.test(fullname)) continue;

    const seq = String(stt || (parsedStudents.length + 1)).padStart(2, "0");
    const username = (idMode === "vnedu_id" && vneduId)
      ? vneduId
      : `hs_${className.toLowerCase()}_${seq}`;

    parsedStudents.push({
      username: username,
      password: defaultPass,
      fullname: fullname,
      className: className,
      vnedu_id: vneduId,
      dob: dob,
      xp: 0,
      badges: ["Tân binh HTML"]
    });
  }

  return { detectedClass, students: parsedStudents };
}

function deleteClassStudents() {
  const currentClass = document.getElementById("filterClassSelect")?.value || "";
  const targetLabel = currentClass ? `lớp ${currentClass}` : "TẤT CẢ các lớp";
  if (confirm(`Thầy/Cô có chắc chắn muốn xóa toàn bộ học sinh của ${targetLabel} không?`)) {
    if (currentClass) {
      AppState.students = AppState.students.filter(s => s.className !== currentClass);
    } else {
      AppState.students = [];
    }
    saveStudentsToStorage();
    renderStudentsTable();
    populateClassFilterOptions();
    alert(`Đã xóa sạch danh sách học sinh của ${targetLabel}! Thầy/Cô có thể tiến hành Import lại.`);
  }
}

function processStudentImport() {
  const rawText = document.getElementById("importRawText").value.trim();
  const defaultClass = document.getElementById("importClassDefault").value.trim() || "12A1";
  const defaultPass = document.getElementById("importDefaultPassword").value.trim() || "123";
  const idMode = document.getElementById("importUsernameMode")?.value || "vnedu_id";

  if (!rawText) {
    alert("Vui lòng dán danh sách học sinh hoặc chọn file sổ điểm vnEdu!");
    return;
  }

  const { detectedClass, students: newStudents } = parseVneduStudentData(rawText, defaultClass, idMode, defaultPass);

  if (newStudents.length === 0) {
    alert("Không tìm thấy học sinh nào hợp lệ trong nội dung đã nhập! Vui lòng kiểm tra lại.");
    return;
  }

  let importedCount = 0;
  newStudents.forEach(stu => {
    // Đảm bảo không trùng username
    let finalUsername = stu.username;
    let counter = 1;
    while (AppState.students.some(s => s.username === finalUsername)) {
      finalUsername = `${stu.username}_${counter}`;
      counter++;
    }
    stu.username = finalUsername;

    AppState.students.push(stu);
    importedCount++;
  });

  saveStudentsToStorage();
  closeImportModal();
  renderStudentsTable();
  populateClassFilterOptions();

  alert(`🎉 Thành công! Đã tự động tạo và lưu ${importedCount} tài khoản học sinh Lớp ${detectedClass}!`);
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

// Xuất file CSV tài khoản
function exportStudentsToCSV() {
  if (AppState.students.length === 0) {
    alert("Chưa có học sinh nào để xuất file!");
    return;
  }

  let csv = "\uFEFFSTT,Mã đăng nhập,Mật khẩu,Họ và tên,Lớp,Điểm XP\n";
  AppState.students.forEach((s, idx) => {
    csv += `${idx + 1},"${s.username}","${s.password}","${s.fullname}","${s.className}",${s.xp || 0}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Danh_Sach_Tai_Khoan_Hoc_Sinh_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// In phiếu tài khoản cho học sinh
function printStudentAccounts() {
  const printWindow = window.open("", "_blank");
  let slipsHtml = "";

  AppState.students.forEach(s => {
    slipsHtml += `
      <div style="border: 2px dashed #333; padding: 12px; margin: 8px; width: 45%; display: inline-block; box-sizing: border-box; font-family: sans-serif;">
        <h4 style="margin: 0 0 6px 0; color: #4f46e5;">PHIẾU TÀI KHOẢN HỌC TIN HỌC 12</h4>
        <div>Họ và tên: <strong>${s.fullname}</strong></div>
        <div>Lớp: <strong>${s.className}</strong></div>
        <div>Tên đăng nhập: <code>${s.username}</code></div>
        <div>Mật khẩu: <code>${s.password}</code></div>
      </div>
    `;
  });

  printWindow.document.write(`
    <html>
      <head><title>In danh sách tài khoản</title></head>
      <body>
        <h2 style="text-align: center; font-family: sans-serif;">DANH SÁCH TÀI KHOẢN HỌC SINH ÔN LUYỆN TIN HỌC 12</h2>
        ${slipsHtml}
        <script>window.print();</script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

// =============================================================================
// QUẢN LÝ BẢNG ĐIỂM & KẾT QUẢ TRÊN WEBAPP
// =============================================================================
function renderResultsTable() {
  const tbody = document.getElementById("resultsTableBody");
  if (!tbody) return;

  const filterClass = document.getElementById("filterResultClass")?.value || "";
  const filterLesson = document.getElementById("filterResultLesson")?.value || "";
  const filterActivity = document.getElementById("filterResultActivity")?.value || "";
  const search = (document.getElementById("searchResultInput")?.value || "").toLowerCase().trim();

  const filtered = AppState.results.filter(r => {
    const matchClass = !filterClass || (r.className && r.className.trim() === filterClass.trim());
    const matchLesson = !filterLesson || (r.lessonTitle && r.lessonTitle.includes(filterLesson));
    const matchActivity = !filterActivity || (r.activityType && r.activityType.includes(filterActivity));
    const matchSearch = !search || 
      (r.fullname && r.fullname.toLowerCase().includes(search)) ||
      (r.username && r.username.toLowerCase().includes(search));
    return matchClass && matchLesson && matchActivity && matchSearch;
  });

  // Đồng bộ lại trạng thái nút lọc nhanh theo lớp
  const studentClasses = (AppState.students || []).map(s => s.className).filter(c => c && c !== "12A" && c !== "Giáo viên");
  const resultClasses = (AppState.results || []).map(r => r.className).filter(c => c && c !== "12A" && c !== "Giáo viên");
  const classes = [...new Set([...studentClasses, ...resultClasses])].sort();
  renderClassQuickFilterPills(classes);

  // Hiển thị tóm tắt thống kê điểm của lớp đang chọn
  updateClassStatsSummary(filtered, filterClass);

  tbody.innerHTML = "";
  if (filtered.length === 0) {
    const msg = filterClass ? `Chưa có dữ liệu bài làm nào của Lớp ${filterClass}.` : `Chưa có dữ liệu bài làm nào phù hợp.`;
    tbody.innerHTML = `<tr><td colspan="11" style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
      <div style="font-weight: 500;">${msg}</div>
    </td></tr>`;
    return;
  }

  filtered.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="white-space: nowrap; font-size: 0.8rem;">${r.timestamp}</td>
      <td><code>${r.username}</code></td>
      <td><strong>${r.fullname}</strong></td>
      <td><span class="badge-tag badge-indigo">${r.className}</span></td>
      <td>${r.lessonTitle}</td>
      <td><span class="badge-tag badge-amber">${r.activityType}</span></td>
      <td><strong style="color: #4f46e5; font-size: 1rem;">${r.score}</strong></td>
      <td>${r.ratio}</td>
      <td>${r.percentage}%</td>
      <td>${r.duration}</td>
      <td><span class="badge-tag badge-green">${r.evaluation}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function exportResultsToCSV() {
  if (AppState.results.length === 0) {
    alert("Chưa có kết quả nào để xuất!");
    return;
  }

  const filterClass = document.getElementById("filterResultClass")?.value || "";
  const filterLesson = document.getElementById("filterResultLesson")?.value || "";
  const filterActivity = document.getElementById("filterResultActivity")?.value || "";
  const search = (document.getElementById("searchResultInput")?.value || "").toLowerCase().trim();

  const exportList = AppState.results.filter(r => {
    const matchClass = !filterClass || (r.className && r.className.trim() === filterClass.trim());
    const matchLesson = !filterLesson || (r.lessonTitle && r.lessonTitle.includes(filterLesson));
    const matchActivity = !filterActivity || (r.activityType && r.activityType.includes(filterActivity));
    const matchSearch = !search || 
      (r.fullname && r.fullname.toLowerCase().includes(search)) ||
      (r.username && r.username.toLowerCase().includes(search));
    return matchClass && matchLesson && matchActivity && matchSearch;
  });

  if (exportList.length === 0) {
    alert("Không có kết quả nào phù hợp với bộ lọc hiện tại để xuất CSV!");
    return;
  }

  let csv = "\uFEFFThời gian,Mã HS,Họ và tên,Lớp,Bài học,Hoạt động,Điểm số,Kết quả,Tỷ lệ %,Thời gian,Đánh giá\n";
  exportList.forEach(r => {
    csv += `"${r.timestamp}","${r.username}","${r.fullname}","${r.className}","${r.lessonTitle}","${r.activityType}",${r.score},"${r.ratio}","${r.percentage}%","${r.duration}","${r.evaluation}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const classSuffix = filterClass ? `_Lop_${filterClass}` : "";
  a.download = `Bang_Diem_Tin_Hoc_12${classSuffix}_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function clearAllResults() {
  if (confirm("Thầy/Cô có chắc muốn xóa sạch toàn bộ lịch sử điểm số trong ứng dụng? (Dữ liệu trên Google Sheet sẽ không bị ảnh hưởng).")) {
    AppState.results = [];
    saveResultsToStorage();
    renderResultsTable();
  }
}

// =============================================================================
// CẤU HÌNH VÀ TEST GOOGLE SHEET WEBHOOK
// =============================================================================
function saveGoogleSheetUrl() {
  const url = document.getElementById("googleSheetUrlInput").value.trim();
  AppState.googleSheetUrl = url;
  localStorage.setItem("eduweb12_sheet_url", url);
  updateSheetStatusDisplay();
  alert("💾 Đã lưu cấu hình URL Google Sheet thành công!");
}

function openGoogleSheetFromApp() {
  const inputEl = document.getElementById("googleSheetUrlInput");
  const url = (inputEl && inputEl.value ? inputEl.value : AppState.googleSheetUrl || localStorage.getItem("eduweb12_sheet_url") || "").trim();
  if (!url) {
    alert("Thầy/Cô vui lòng dán URL Google Apps Script Webhook vào ô trước khi mở!");
    return;
  }
  window.open(url, "_blank");
}

function updateSheetStatusDisplay() {
  const statusDiv = document.getElementById("sheetStatusText");
  if (!statusDiv) return;

  if (AppState.googleSheetUrl) {
    statusDiv.style.color = "#059669";
    statusDiv.textContent = "✅ Đã kết nối Google Sheet Webhook. Học sinh nộp bài sẽ tự động gửi dòng mới vào trang tính.";
  } else {
    statusDiv.style.color = "#d97706";
    statusDiv.textContent = "⚠️ Chưa thiết lập URL Webhook. Vui lòng làm theo hướng dẫn 3 bước bên dưới.";
  }
}

function testGoogleSheetConnection() {
  const url = document.getElementById("googleSheetUrlInput").value.trim();
  if (!url) {
    alert("Vui lòng dán URL Google Apps Script Webhook vào ô trước khi kiểm tra!");
    return;
  }

  const testPayload = {
    timestamp: new Date().toLocaleString("vi-VN"),
    username: "test_gv",
    fullname: "Kiểm tra kết nối Webhook",
    className: "12A1",
    lessonTitle: "Bài 7: HTML và Cấu trúc",
    activityType: "Kiểm tra thử nghiệm",
    score: 10,
    ratio: "10/10",
    percentage: 100,
    duration: "10 giây",
    evaluation: "Hoàn hảo 🌟",
    studentName: "Kiểm tra kết nối Webhook",
    studentCode: "test_gv",
    completed: true,
    quizScore: 10,
    maxScore: 10,
    status: "Đã hoàn thành",
    submittedCode: "Hoàn hảo 🌟"
  };

  const statusDiv = document.getElementById("sheetStatusText");
  statusDiv.style.color = "#4f46e5";
  statusDiv.textContent = "⏳ Đang gửi yêu cầu kiểm tra đến Google Sheet...";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testPayload)
  }).then(() => {
    statusDiv.style.color = "#059669";
    statusDiv.textContent = "✅ Lệnh gửi thành công! Thầy/Cô hãy mở Google Sheet để kiểm tra dòng dữ liệu mẫu vừa được thêm vào.";
    alert("✅ Đã gửi tín hiệu Test thành công! Thầy/Cô hãy mở Google Sheet để xem dòng dữ liệu thử nghiệm.");
  }).catch(err => {
    statusDiv.style.color = "#dc2626";
    statusDiv.textContent = `❌ Lỗi kết nối: ${err.message}. Hãy kiểm tra quyền truy cập 'Anyone' trong lúc Triển khai Apps Script.`;
  });
}

function setupCodeCopyDisplay() {
  const gasCodeBox = document.getElementById("gasCodeDisplay");
  if (gasCodeBox) {
    const gasCode = `// 1. Hàm mở link trên trình duyệt (Tự động mở ngay Google Sheet xem kết quả)
function doGet(e) {
  var sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  return HtmlService.createHtmlOutput(
    '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Mở Google Sheet Kết Quả</title>' +
    '<script>window.location.href = "' + sheetUrl + '";</script>' +
    '</head>' +
    '<body style="font-family: Arial, sans-serif; text-align: center; padding: 40px; background: #f8fafc; color: #1e293b;">' +
    '<div style="max-width: 580px; margin: 0 auto; background: white; padding: 30px; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">' +
    '<div style="font-size: 42px; margin-bottom: 12px;">📊</div>' +
    '<h2 style="color: #059669; margin: 0 0 10px 0;">Đang mở Google Sheet xem kết quả...</h2>' +
    '<p style="color: #64748b; font-size: 14px; line-height: 1.6;">Nếu trình duyệt không tự chuyển trang, Thầy/Cô vui lòng bấm vào nút bên dưới:</p>' +
    '<div style="margin-top: 25px;">' +
    '<a href="' + sheetUrl + '" target="_blank" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 15px; display: inline-block; box-shadow: 0 3px 10px rgba(16,185,129,0.3);">' +
    '👉 Bấm vào đây để mở Trang tính Google Sheet ↗' +
    '</a>' +
    '</div>' +
    '</div>' +
    '</body></html>'
  ).setTitle("HTML SkillUp K12 - Kết Quả Google Sheet");
}

// 2. Nhận kết quả bài làm, điểm số & xếp loại tự động từ WebApp HTML SkillUp K12
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    
    var data = {};
    if (e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); } catch (err) { data = e.parameter || {}; }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");
    var username = data.username || data.studentCode || "";
    var fullname = data.fullname || data.studentName || "Học sinh";
    var className = data.className || "Chưa phân lớp";
    var lessonTitle = data.lessonTitle || data.lessonId || "Bài kiểm tra";
    var activityType = data.activityType || "Kiểm tra tổng hợp";
    var score = data.score !== undefined ? data.score : (data.quizScore !== undefined ? data.quizScore : 0);
    var ratio = data.ratio || (data.maxScore ? (score + "/" + data.maxScore) : "");
    var percentage = data.percentage !== undefined ? (data.percentage + (typeof data.percentage === "number" ? "%" : "")) : "";
    var duration = data.duration || "0 giây";
    
    var evaluation = data.evaluation || data.submittedCode || "";
    if (!evaluation || evaluation === "") {
      if (score >= 9.0) evaluation = "Xuất sắc 🌟";
      else if (score >= 8.0) evaluation = "Giỏi 🎯";
      else if (score >= 6.5) evaluation = "Khá 👍";
      else if (score >= 5.0) evaluation = "Đạt chuẩn 📖";
      else evaluation = "Cần cố gắng thêm";
    }

    var status = data.status || (data.completed ? "Đã hoàn thành" : (score > 0 ? "Đã hoàn thành" : "Đang học"));
    if (lessonTitle.indexOf("Kiểm tra") !== -1 || lessonTitle.indexOf("Thi thử") !== -1 || score > 0) {
      status = "Đã hoàn thành";
    }

    var row1 = lastRow > 0 ? sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0] : [];
    var isOld8Cols = row1.length >= 6 && (row1[5] === "Trạng Thái" || row1[1] === "Lớp Học");

    if (lastRow === 0) {
      var headers = ["Thời gian nộp", "Mã học sinh", "Họ và tên", "Lớp", "Bài học", "Loại hoạt động", "Điểm số (Thang 10)", "Kết quả / Số câu", "Tỷ lệ đạt (%)", "Thời gian làm bài", "Xếp loại đánh giá"];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setBackground("#4f46e5").setFontColor("#ffffff").setFontWeight("bold").setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
      sheet.appendRow([timestamp, username, fullname, className, lessonTitle, activityType, score, ratio, percentage, duration, evaluation]);
    } else if (isOld8Cols) {
      // Tương thích với Google Sheet dùng mẫu cũ 8 cột: Điểm và Xếp loại được ghi rõ ràng
      sheet.appendRow([timestamp, className, fullname, username, lessonTitle, status, (score !== undefined ? (score + " / 10") : ""), evaluation]);
    } else {
      sheet.appendRow([timestamp, username, fullname, className, lessonTitle, activityType, score, ratio, percentage, duration, evaluation]);
    }

    var newRow = sheet.getLastRow();
    sheet.getRange(newRow, 1).setHorizontalAlignment("center");
    sheet.getRange(newRow, 2).setHorizontalAlignment("center");
    sheet.getRange(newRow, 4).setHorizontalAlignment("center");
    sheet.getRange(newRow, 6).setHorizontalAlignment("center");
    sheet.getRange(newRow, 7).setHorizontalAlignment("center");
    sheet.getRange(newRow, 8).setHorizontalAlignment("center");

    return ContentService.createTextOutput(JSON.stringify({status: "success"})).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}`;
    gasCodeBox.textContent = gasCode;
  }
}

function copyGasCode() {
  const gasCode = document.getElementById("gasCodeDisplay").textContent;
  navigator.clipboard.writeText(gasCode).then(() => {
    alert("📋 Đã sao chép toàn bộ mã Google Apps Script vào bộ nhớ tạm! Thầy/Cô chỉ việc dán (Ctrl+V) vào cửa sổ Apps Script của Google Sheet.");
  });
}


// =============================================================================
// MÔ ĐUN: ÔN THI TỐT NGHIỆP THPT (CHỦ ĐỀ HTML - CÁC SỞ GD&ĐT)
// =============================================================================

function initGradPracticeView() {
  const provSelect = document.getElementById("gradFilterProvince");
  if (provSelect && provSelect.options.length <= 1) {
    if (typeof MOCK_GRADUATION_BANK !== "undefined" && MOCK_GRADUATION_BANK.provinces) {
      provSelect.innerHTML = `<option value="">-- Tất cả các Sở GD&ĐT (${MOCK_GRADUATION_BANK.provinces.length - 1} đơn vị) --</option>`;
      MOCK_GRADUATION_BANK.provinces.slice(1).forEach(prov => {
        provSelect.innerHTML += `<option value="${escapeHTML(prov)}">${escapeHTML(prov)}</option>`;
      });
    }
  }
  renderGradBankQuestions();
  renderMockExamsGrid();
}

function switchGradTab(tab) {
  const tabBank = document.getElementById("tabGradBank");
  const tabExam = document.getElementById("tabGradExam");
  const panelBank = document.getElementById("gradBankPanel");
  const panelExam = document.getElementById("gradExamPanel");

  if (!tabBank || !tabExam || !panelBank || !panelExam) return;

  if (tab === "bank") {
    tabBank.classList.add("active");
    tabExam.classList.remove("active");
    panelBank.style.display = "block";
    panelExam.style.display = "none";
    renderGradBankQuestions();
  } else {
    tabBank.classList.remove("active");
    tabExam.classList.add("active");
    panelBank.style.display = "none";
    panelExam.style.display = "block";
    renderMockExamsGrid();
  }
}

function selectGradExamPractice(examNum) {
  const select = document.getElementById("gradFilterExam");
  if (select) {
    select.value = String(examNum);
  }
  switchGradTab("bank");
  window.scrollTo({ top: 180, behavior: "smooth" });
}

function renderMockExamsGrid() {
  const grid = document.getElementById("mockExamsGrid");
  if (!grid || typeof MOCK_EXAM_METADATA === "undefined") return;

  const username = AppState.currentUser ? AppState.currentUser.username : null;
  const userProgress = (username && AppState.progress[username]) ? AppState.progress[username] : {};

  grid.innerHTML = MOCK_EXAM_METADATA.map(ex => {
    const progress = userProgress[ex.id];
    let statusHtml = "";
    if (progress) {
      const pDate = progress.date ? new Date(progress.date).toLocaleDateString("vi-VN") : "";
      statusHtml = `
        <div class="mock-exam-status-box has-score">
          <div style="font-weight: 700; margin-bottom: 0.2rem;">
            🏆 Điểm cao nhất: <span style="font-size: 1.05rem; color: #059669;">${progress.score}/10.0</span>
          </div>
          <div style="font-size: 0.8rem; color: #065f46;">
            Phần I: ${progress.correctP1}/24 câu • Phần II: ${progress.correctP2}/16 ý ${pDate ? `(${pDate})` : ""}
          </div>
        </div>
      `;
    } else {
      statusHtml = `
        <div class="mock-exam-status-box">
          <span style="color: var(--text-muted);">⏳ Em chưa làm bài thi thử này</span>
        </div>
      `;
    }

    return `
      <div class="mock-exam-card" id="mockCard_${ex.id}">
        <div>
          <div class="mock-exam-card-header">
            <span class="mock-exam-num-badge">ĐỀ THI THỬ SỐ 0${ex.num}</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: #6366f1;">${ex.code}</span>
          </div>
          <h4 class="mock-exam-title">${escapeHTML(ex.title)}</h4>
          <div class="mock-exam-sources">
            <strong>🏛️ Nguồn đề:</strong> Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT
          </div>
          <div class="mock-exam-specs">
            <span class="mock-exam-pill">⏱️ 45 phút</span>
            <span class="mock-exam-pill">📋 28 câu (40 ý)</span>
            <span class="mock-exam-pill">📊 Ma trận 4:3:3</span>
            <span class="mock-exam-pill">🎯 Thang 10.0đ</span>
          </div>
        </div>

        <div>
          ${statusHtml}
          <div class="mock-exam-actions">
            <button class="btn btn-primary" onclick="startComprehensiveExam('${ex.id}')">
              🚀 Làm bài thi thử
            </button>
            <button class="btn btn-outline" onclick="selectGradExamPractice(${ex.num})">
              📖 Ôn luyện
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderGradBankQuestions() {
  const container = document.getElementById("gradQuestionsContainer");
  const countBadge = document.getElementById("gradBankCountBadge");
  if (!container || typeof MOCK_GRADUATION_BANK === "undefined") return;

  const filterExam = document.getElementById("gradFilterExam")?.value || "all";
  const filterProvince = document.getElementById("gradFilterProvince")?.value || "";
  const filterLevel = document.getElementById("gradFilterLevel")?.value || "";
  const filterType = document.getElementById("gradFilterType")?.value || "all";

  // Lọc danh sách câu hỏi Phần I
  let listP1 = MOCK_GRADUATION_BANK.questionsP1 || [];
  if (filterExam !== "all") {
    const eNum = parseInt(filterExam);
    const targetExam = (typeof COMPREHENSIVE_EXAMS !== "undefined") ? COMPREHENSIVE_EXAMS[`exam_mock_grad_${eNum}`] : null;
    if (targetExam && targetExam.part1) {
      listP1 = targetExam.part1;
    } else {
      listP1 = listP1.filter(q => q.examNum === eNum);
    }
  }
  if (filterProvince) {
    const rawProv = filterProvince.replace("Sở GD&ĐT ", "").replace(" (Đề tham khảo)", "").trim();
    listP1 = listP1.filter(q => q.province === filterProvince || (q.source && q.source.includes(rawProv)));
  }
  if (filterLevel) {
    listP1 = listP1.filter(q => q.level === filterLevel);
  }
  if (filterType === "p2") {
    listP1 = [];
  }

  // Lọc danh sách câu hỏi Phần II (Đúng/Sai)
  let listP2 = MOCK_GRADUATION_BANK.questionsP2 || [];
  if (filterExam !== "all") {
    const eNum = parseInt(filterExam);
    const targetExam = (typeof COMPREHENSIVE_EXAMS !== "undefined") ? COMPREHENSIVE_EXAMS[`exam_mock_grad_${eNum}`] : null;
    if (targetExam && targetExam.part2) {
      listP2 = targetExam.part2;
    } else {
      listP2 = listP2.filter(q => q.examNum === eNum);
    }
  }
  if (filterProvince) {
    const rawProv = filterProvince.replace("Sở GD&ĐT ", "").replace(" (Đề tham khảo)", "").trim();
    listP2 = listP2.filter(q => q.province === filterProvince || (q.source && q.source.includes(rawProv)));
  }
  if (filterType === "p1") {
    listP2 = [];
  }
  if (filterLevel) {
    listP2 = listP2.map(q => {
      const matchingItems = q.items.filter(it => it.level === filterLevel);
      if (matchingItems.length > 0) {
        return { ...q, items: matchingItems };
      }
      return null;
    }).filter(Boolean);
  }

  const totalQuestions = listP1.length + listP2.length;
  const totalItemsP2 = listP2.reduce((acc, q) => acc + q.items.length, 0);
  const totalItems = listP1.length + totalItemsP2;

  let examFilterLabel = "";
  if (filterExam !== "all") {
    examFilterLabel = `[Đề số 0${filterExam}] `;
  }

  if (countBadge) {
    countBadge.textContent = `${examFilterLabel}Hiển thị: ${listP1.length} câu P1 + ${listP2.length} câu P2 (${totalItems} ý hỏi)`;
  }

  if (totalQuestions === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-card); border-radius: 12px; border: 1px dashed var(--border-color);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <p style="font-weight: 600; margin-bottom: 0.25rem;">Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.</p>
        <p style="font-size: 0.88rem;">Thầy/Cô và các em hãy thử chọn lại Bộ đề thi, Sở GD&ĐT hoặc Mức độ nhận thức khác nhé!</p>
      </div>
    `;
    return;
  }

  let html = "";

  // Mở khối giấy đề thi chuẩn (.grad-paper-sheet: toàn bộ đề trong 1 nền màu nhạt)
  html += `<div class="grad-paper-sheet">`;

  // Header chuẩn phong cách đề thi quốc gia: Tiêu đề ĐỀ SỐ ... lớn và nổi bật hơn Phần I
  let badgeText = filterExam !== "all" ? `ĐỀ SỐ 0${filterExam}` : "TẤT CẢ CÁC ĐỀ";
  let mainTitle = filterExam !== "all" ? `ĐỀ THI THỬ TỐT NGHIỆP THPT SỐ 0${filterExam}` : "NGÂN HÀNG ĐỀ THI THỬ TỐT NGHIỆP THPT";
  let subDesc = filterExam !== "all" 
    ? `Cấu trúc chuẩn Bộ GD&ĐT: 28 câu hỏi (24 câu Phần I + 4 câu Phần II) • Thang điểm 10.0 • Ma trận 4:3:3` 
    : `Tuyển chọn 96 câu trắc nghiệm Phần I và 16 câu Đúng/Sai Phần II (160 ý hỏi)`;

  html += `
    <div class="grad-paper-header">
      <div class="grad-paper-top-meta">
        <div class="grad-paper-top-left">
          <div>BỘ GIÁO DỤC VÀ ĐÀO TẠO</div>
          <div class="sub-org">Kho đề thi thử Tốt nghiệp THPT 2025</div>
        </div>
        <div class="grad-paper-top-right">
          <strong>KỲ THI TỐT NGHIỆP TRUNG HỌC PHỔ THÔNG NĂM 2025</strong>
          <div>Bài thi: <strong>TIN HỌC</strong> <em>(Chủ đề HTML / Web)</em></div>
          <div>Thời gian làm bài: <strong>45 phút</strong>, không kể thời gian phát đề</div>
        </div>
      </div>

      <div class="grad-paper-main-title-block">
        <div class="grad-paper-badge-wrap">
          <span class="grad-paper-badge">${badgeText}</span>
        </div>
        <h2 class="grad-paper-main-title">${mainTitle}</h2>
        <p class="grad-paper-sub-desc">${subDesc}</p>
        <div style="margin-top: 0.6rem;">
          <span style="display: inline-block; width: 70px; height: 3px; background: #6366f1; border-radius: 9999px;"></span>
        </div>
      </div>
    </div>
  `;

  // =========================================================================
  // 1. PHẦN I: CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN
  // =========================================================================
  if (listP1.length > 0) {
    html += `
      <div class="grad-section-divider">
        <div class="grad-sec-icon">📝</div>
        <div class="grad-sec-info">
          <h3 class="grad-sec-title">PHẦN I: CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN</h3>
          <p class="grad-sec-sub">Gồm ${listP1.length} câu hỏi (Câu 1 đến Câu ${listP1.length}) • Thí sinh chọn 01 phương án đúng nhất trong 4 phương án A, B, C, D</p>
        </div>
      </div>
    `;

    listP1.forEach((q, idx) => {
      const letters = ["A", "B", "C", "D"];
      const levelClass = q.level === "NB" ? "grad-badge-nb" : (q.level === "TH" ? "grad-badge-th" : "grad-badge-vd");
      const levelText = q.level === "NB" ? "Nhận biết" : (q.level === "TH" ? "Thông hiểu" : "Vận dụng");
      const answeredState = AppState.gradPracticeState?.answeredP1[q.id];

      let optionsHtml = "";
      q.options.forEach((opt, optIdx) => {
        let optClass = "grad-opt-btn";
        let disabledAttr = "";

        if (answeredState !== undefined) {
          disabledAttr = "disabled";
          if (optIdx === q.answer) {
            optClass += " correct";
          } else if (optIdx === answeredState.selected) {
            optClass += " wrong";
          }
        }

        optionsHtml += `
          <button class="${optClass}" id="btn_${q.id}_${optIdx}" onclick="checkGradP1Answer('${q.id}', ${optIdx})" ${disabledAttr}>
            <span class="grad-opt-letter">${letters[optIdx]}.</span>
            <span class="grad-opt-text">${escapeHTML(opt)}</span>
          </button>
        `;
      });

      let explanationHtml = "";
      if (answeredState !== undefined) {
        explanationHtml = `
          <div class="grad-explanation-box">
            <strong>💡 Giải thích chi tiết:</strong> ${escapeHTML(q.explanation)}
          </div>
        `;
      }

      html += `
        <div class="grad-card" id="card_${q.id}">
          <div class="grad-card-header">
            <span class="grad-badge ${levelClass}">🎯 ${levelText} (${q.level})</span>
            ${q.topic ? `<span class="grad-badge grad-badge-topic">📖 ${escapeHTML(q.topic)}</span>` : ""}
            <span style="margin-left: auto; font-size: 0.88rem; color: #4338ca; font-weight: 800;">Câu ${idx + 1}</span>
          </div>
          <div class="grad-question-text">
            <strong>Câu ${idx + 1}:</strong> ${formatQuestionTitle(q.question)}
          </div>
          <div class="grad-options-grid">
            ${optionsHtml}
          </div>
          <div id="exp_${q.id}">
            ${explanationHtml}
          </div>
        </div>
      `;
    });
  }

  // =========================================================================
  // 2. PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG / SAI
  // =========================================================================
  if (listP2.length > 0) {
    html += `
      <div class="grad-section-divider grad-sec-divider-p2">
        <div class="grad-sec-icon grad-sec-icon-p2">⚖️</div>
        <div class="grad-sec-info">
          <h3 class="grad-sec-title">PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG / SAI</h3>
          <p class="grad-sec-sub">Gồm ${listP2.length} câu tình huống (${totalItemsP2} ý hỏi) • Trong mỗi ý a), b), c), d), thí sinh chọn Đúng hoặc Sai</p>
        </div>
      </div>
    `;

    listP2.forEach((q, qIdx) => {
      let itemsHtml = "";
      q.items.forEach(it => {
        const itLevelClass = it.level === "NB" ? "grad-badge-nb" : (it.level === "TH" ? "grad-badge-th" : "grad-badge-vd");
        const itLevelText = it.level === "NB" ? "NB" : (it.level === "TH" ? "TH" : "VD");
        const answeredState = AppState.gradPracticeState?.answeredP2[it.id];

        let trueBtnClass = "grad-tf-btn";
        let falseBtnClass = "grad-tf-btn";
        let disabledAttr = "";

        if (answeredState !== undefined) {
          disabledAttr = "disabled";
          if (it.answer === true) {
            trueBtnClass += " correct";
            if (answeredState.selected === false) falseBtnClass += " wrong";
          } else {
            falseBtnClass += " correct";
            if (answeredState.selected === true) trueBtnClass += " wrong";
          }
        }

        let subExpHtml = "";
        if (answeredState !== undefined) {
          subExpHtml = `
            <div class="grad-p2-sub-exp">
              <strong>💡 Giải thích ý ${it.label}):</strong> ${escapeHTML(it.explanation)}
            </div>
          `;
        }

        itemsHtml += `
          <div class="grad-p2-item-row" id="row_${it.id}">
            <div class="grad-p2-item-text-wrap">
              <span class="grad-p2-item-letter">${it.label})</span>
              <span class="grad-badge ${itLevelClass}" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${itLevelText}</span>
              <span>${escapeHTML(it.text)}</span>
            </div>
            <div class="grad-p2-actions">
              <button class="${trueBtnClass}" id="btn_tf_${it.id}_true" onclick="checkGradP2Answer('${q.id}', '${it.id}', true)" ${disabledAttr}>
                Đúng
              </button>
              <button class="${falseBtnClass}" id="btn_tf_${it.id}_false" onclick="checkGradP2Answer('${q.id}', '${it.id}', false)" ${disabledAttr}>
                Sai
              </button>
            </div>
            <div id="subexp_${it.id}" style="width: 100%;">
              ${subExpHtml}
            </div>
          </div>
        `;
      });

      html += `
        <div class="grad-card" id="card_${q.id}">
          <div class="grad-card-header">
            <span class="grad-badge grad-badge-topic" style="background: #e0e7ff; color: #4338ca;">⚖️ Trắc nghiệm Đúng / Sai</span>
            <span style="margin-left: auto; font-size: 0.88rem; color: #0284c7; font-weight: 800;">Câu ${qIdx + 1}</span>
          </div>
          <div style="font-weight: 700; color: #1e293b; font-size: 1.05rem; margin-bottom: 0.4rem;">
            <strong>Câu ${qIdx + 1}:</strong> ${escapeHTML(q.title || "Tình huống thực tế trắc nghiệm Đúng / Sai")}
          </div>
          <div class="grad-p2-context">
            ${formatQuestionTitle(q.context)}
          </div>
          <div class="grad-p2-items-list">
            ${itemsHtml}
          </div>
        </div>
      `;
    });
  }

  // Chân tờ đề thi và đóng khối .grad-paper-sheet
  html += `
    <div class="grad-paper-footer">
      <div>--- HẾT ---</div>
      <div style="font-size: 0.82rem; margin-top: 0.25rem;">Thí sinh làm bài trực tiếp trên hệ thống • Bấm chọn phương án để xem đáp án đúng và lời giải chi tiết (+5 XP).</div>
    </div>
  </div>`; // Đóng .grad-paper-sheet

  container.innerHTML = html;
}

function checkGradP1Answer(qId, selectedIdx) {
  if (typeof MOCK_GRADUATION_BANK === "undefined") return;
  const q = MOCK_GRADUATION_BANK.questionsP1.find(item => item.id === qId);
  if (!q) return;

  if (!AppState.gradPracticeState) {
    AppState.gradPracticeState = { answeredP1: {}, answeredP2: {} };
  }

  const isFirstTime = AppState.gradPracticeState.answeredP1[qId] === undefined;
  const isCorrect = selectedIdx === q.answer;
  AppState.gradPracticeState.answeredP1[qId] = { selected: selectedIdx, isCorrect: isCorrect };

  // Highlight buttons
  for (let i = 0; i < q.options.length; i++) {
    const btn = document.getElementById(`btn_${qId}_${i}`);
    if (btn) {
      btn.disabled = true;
      if (i === q.answer) {
        btn.classList.add("correct");
      } else if (i === selectedIdx) {
        btn.classList.add("wrong");
      }
    }
  }

  // Inject explanation
  const expContainer = document.getElementById(`exp_${qId}`);
  if (expContainer) {
    expContainer.innerHTML = `
      <div class="grad-explanation-box">
        <strong>💡 Giải thích chi tiết:</strong> ${escapeHTML(q.explanation)}
      </div>
    `;
  }

  // Thưởng XP nếu trả lời đúng lần đầu
  if (isCorrect && isFirstTime) {
    awardXP(5);
  }
}

function checkGradP2Answer(qId, itemId, selectedVal) {
  if (typeof MOCK_GRADUATION_BANK === "undefined") return;
  const q = MOCK_GRADUATION_BANK.questionsP2.find(item => item.id === qId);
  if (!q) return;
  const subItem = q.items.find(it => it.id === itemId);
  if (!subItem) return;

  if (!AppState.gradPracticeState) {
    AppState.gradPracticeState = { answeredP1: {}, answeredP2: {} };
  }

  const isFirstTime = AppState.gradPracticeState.answeredP2[itemId] === undefined;
  const isCorrect = selectedVal === subItem.answer;
  AppState.gradPracticeState.answeredP2[itemId] = { selected: selectedVal, isCorrect: isCorrect };

  const btnTrue = document.getElementById(`btn_tf_${itemId}_true`);
  const btnFalse = document.getElementById(`btn_tf_${itemId}_false`);

  if (btnTrue) btnTrue.disabled = true;
  if (btnFalse) btnFalse.disabled = true;

  if (subItem.answer === true) {
    if (btnTrue) btnTrue.classList.add("correct");
    if (selectedVal === false && btnFalse) btnFalse.classList.add("wrong");
  } else {
    if (btnFalse) btnFalse.classList.add("correct");
    if (selectedVal === true && btnTrue) btnTrue.classList.add("wrong");
  }

  const expContainer = document.getElementById(`subexp_${itemId}`);
  if (expContainer) {
    expContainer.innerHTML = `
      <div class="grad-p2-sub-exp">
        <strong>💡 Giải thích ý ${subItem.label}):</strong> ${escapeHTML(subItem.explanation)}
      </div>
    `;
  }

  if (isCorrect && isFirstTime) {
    awardXP(5);
  }
}

// =============================================================================
// TẠO ĐỀ THI THỬ NGẪU NHIÊN CHUẨN MA TRẬN 4:3:3 (28 CÂU • 45 PHÚT)
// =============================================================================
function startRandomGradExam() {
  if (typeof MOCK_GRADUATION_BANK === "undefined") return;
  const allP1 = MOCK_GRADUATION_BANK.questionsP1 || [];
  const allP2 = MOCK_GRADUATION_BANK.questionsP2 || [];

  const nbList = allP1.filter(q => q.level === "NB").sort(() => 0.5 - Math.random()).slice(0, 10);
  const thList = allP1.filter(q => q.level === "TH").sort(() => 0.5 - Math.random()).slice(0, 7);
  const vdList = allP1.filter(q => q.level === "VD").sort(() => 0.5 - Math.random()).slice(0, 7);
  const randomP1 = [...nbList, ...thList, ...vdList].sort(() => 0.5 - Math.random());

  // 4 câu Đúng/Sai (16 ý: 6 NB, 5 TH, 5 VD)
  const randomP2 = allP2.slice().sort(() => 0.5 - Math.random()).slice(0, 4);

  const customExam = {
    id: "exam_mock_grad_random",
    code: "THI-THU-RANDOM",
    num: 0,
    title: "Đề thi thử Tốt nghiệp THPT (Ngẫu nhiên)",
    desc: "Đề thi thử được tạo ngẫu nhiên từ ngân hàng câu hỏi hơn 40 Sở GD&ĐT.",
    sources: "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    timeMinutes: 45,
    matrix: (typeof GRAD_MATRIX_STANDARD_28 !== "undefined" ? GRAD_MATRIX_STANDARD_28 : {
      nbTotal: 16, thTotal: 12, vdTotal: 12,
      part1: { total: 24, maxScore: 6.0 },
      part2: { total: 16, maxScore: 4.0 },
      totalQuestions: 28, totalItems: 40, totalScore: 10.0
    }),
    part1: randomP1,
    part2: randomP2
  };

  if (typeof COMPREHENSIVE_EXAMS !== "undefined") {
    COMPREHENSIVE_EXAMS["exam_mock_grad_random"] = customExam;
  }
  startComprehensiveExam("exam_mock_grad_random");
}

// Xuất tệp data.js hoàn chỉnh chứa danh sách học sinh hiện tại để tải lên GitHub
async function exportDataJsFile() {
  try {
    let content = "";
    try {
      const res = await fetch("data.js");
      content = await res.text();
    } catch (e) {
      content = "";
    }

    const studentsFormatted = JSON.stringify(AppState.students, null, 2);
    const newStudentsBlock = `const INITIAL_STUDENTS = ${studentsFormatted};`;

    if (content && content.includes("const INITIAL_STUDENTS =")) {
      content = content.replace(/const INITIAL_STUDENTS = \[[\s\S]*?\];/, newStudentsBlock);
    } else {
      content = newStudentsBlock + "\n\n" + content;
    }

    const blob = new Blob([content], { type: "application/javascript;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.js";
    a.click();
    URL.revokeObjectURL(url);
    alert("🎉 Đã tải về tệp data.js mới!\n\nThầy/Cô chỉ cần vào GitHub kéo thả tệp data.js này đè lên là tất cả học sinh trên mọi thiết bị sẽ đăng nhập được đầy đủ ngay lập tức!");
  } catch (err) {
    alert("Lỗi khi tạo file data.js: " + err.message);
  }
}
