// =============================================================================
// DỮ LIỆU BÀI HỌC VÀ BÀI TẬP ÔN LUYỆN - TIN HỌC 12 (KẾT NỐI TRI THỨC)
// Chủ đề: TẠO TRANG WEB VỚI HTML (Bài 7 -> Bài 12)
// Chuẩn thiết kế ôn luyện đa cấp độ: Flashcards -> Kéo thả -> Điền khuyết -> Trắc nghiệm
// =============================================================================

const LESSONS_DATA = [
  {
    id: "b7",
    code: "Bài 7",
    title: "HTML và Cấu trúc trang web",
    desc: "Tìm hiểu ngôn ngữ HTML, các thẻ đánh dấu, phần tử HTML và cấu trúc cơ bản của trang web.",
    icon: "🌐",
    color: "#4f46e5",
    theory: {
      overview: "HTML (HyperText Markup Language) là ngôn ngữ đánh dấu siêu văn bản, được sử dụng để tạo nên cấu trúc và nội dung của trang web. Trang web thực chất là tệp văn bản có phần mở rộng .html hoặc .htm.",
      sections: [
        {
          title: "1. Thẻ và Phần tử HTML",
          content: `
            <ul>
              <li><strong>Thẻ HTML (tag):</strong> Được viết trong cặp dấu &lt; &gt;, không phân biệt hoa thường (nên viết thường). Thẻ gồm <em>thẻ đôi</em> (có thẻ mở &lt;tag&gt; và thẻ đóng &lt;/tag&gt;) và <em>thẻ đơn</em> (&lt;tag&gt; hoặc &lt;tag /&gt; tự đóng như &lt;br&gt;, &lt;hr&gt;, &lt;img&gt;).</li>
              <li><strong>Phần tử HTML (element):</strong> Bao gồm thẻ mở + nội dung bên trong + thẻ đóng. Thể hiện một thành phần cấu trúc của trang web.</li>
              <li><strong>Mô hình cây (DOM Tree):</strong> Các phần tử HTML lồng nhau tạo thành cấu trúc phân cấp cây, trong đó phần tử bao ngoài là cha, phần tử bên trong là con.</li>
            </ul>
          `,
          codeSnippet: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Trang web đầu tiên</title>
  </head>
  <body>
    <h1>Chào mừng đến với HTML!</h1>
    <p>Đây là một đoạn văn bản mẫu.</p>
  </body>
</html>`
        },
        {
          title: "2. Cấu trúc chuẩn của một tệp HTML",
          content: `
            <ul>
              <li><code>&lt;!DOCTYPE html&gt;</code>: Khai báo phiên bản HTML (HTML5), luôn nằm ở dòng đầu tiên.</li>
              <li><code>&lt;html&gt; ... &lt;/html&gt;</code>: Phần tử gốc (root) bao bọc toàn bộ mã của trang web.</li>
              <li><code>&lt;head&gt; ... &lt;/head&gt;</code>: Chứa thông tin cấu hình trang web (tiêu đề trang &lt;title&gt;, bộ mã ký tự tiếng Việt &lt;meta charset="utf-8"&gt;, liên kết tệp CSS...). Nội dung trong &lt;head&gt; không hiển thị trực tiếp trên giao diện trình duyệt.</li>
              <li><code>&lt;body&gt; ... &lt;/body&gt;</code>: Chứa toàn bộ nội dung hiển thị cho người xem (tiêu đề, hình ảnh, văn bản, bảng, liên kết...).</li>
            </ul>
          `
        }
      ]
    },
    flashcards: [
      { id: "fc7_1", front: "<!DOCTYPE html>", back: "Khai báo kiểu tài liệu và phiên bản HTML5 cho trình duyệt nhận biết.", hint: "Khai báo ở dòng đầu tiên của tệp" },
      { id: "fc7_2", front: "<html> ... </html>", back: "Phần tử gốc (Root Element) bao bọc toàn bộ nội dung và cấu trúc của tài liệu HTML.", hint: "Phần tử bao ngoài cùng" },
      { id: "fc7_3", front: "<head> ... </head>", back: "Chứa thông tin cấu hình trang (tiêu đề, bộ mã ký tự utf-8, thẻ meta), không hiển thị trực tiếp trên trang.", hint: "Phần đầu trang web" },
      { id: "fc7_4", front: "<title> ... </title>", back: "Xác định tiêu đề của trang web, hiển thị trên thanh tiêu đề hoặc tab của trình duyệt.", hint: "Hiển thị trên tab trình duyệt" },
      { id: "fc7_5", front: "<body> ... </body>", back: "Chứa tất cả các nội dung hiển thị của trang web như văn bản, hình ảnh, âm thanh, bảng, siêu liên kết...", hint: "Phần thân hiển thị nội dung" },
      { id: "fc7_6", front: "Thẻ đơn (Self-closing)", back: "Thẻ không có nội dung văn bản bên trong và không có thẻ đóng riêng, ví dụ: <br>, <hr>, <img>.", hint: "Thẻ chỉ có một thẻ mở" }
    ],
    dragDrop: {
      instruction: "Kéo thả mỗi thẻ HTML vào đúng vai trò hoặc công dụng tương ứng của nó:",
      pairs: [
        { id: "dd7_1", item: "<title>", target: "Tiêu đề xuất hiện trên tab trình duyệt" },
        { id: "dd7_2", item: "<!DOCTYPE html>", target: "Khai báo phiên bản chuẩn HTML5" },
        { id: "dd7_3", item: "<body>", target: "Khu vực chứa nội dung nhìn thấy của web" },
        { id: "dd7_4", item: "<head>", target: "Khu vực chứa metadata và cấu hình trang" },
        { id: "dd7_5", item: "<meta charset='utf-8'>", target: "Cấu hình bảng mã gõ tiếng Việt" }
      ]
    },
    fillBlank: [
      {
        id: "fb7_1",
        question: "Dòng đầu tiên của mọi tài liệu HTML5 phải khai báo thẻ gì?",
        template: "<!____ html>",
        answer: "DOCTYPE",
        explanation: "Cú pháp chuẩn khai báo tài liệu HTML5 là: <!DOCTYPE html>"
      },
      {
        id: "fb7_2",
        question: "Phần tử nào là phần tử gốc bao trùm toàn bộ mã nguồn của trang web?",
        template: "<____> ... </html>",
        answer: "html",
        explanation: "Thẻ <html> là phần tử gốc (root element) của mọi trang web."
      },
      {
        id: "fb7_3",
        question: "Tiêu đề trang hiển thị trên tab của trình duyệt được đặt bên trong cặp thẻ nào?",
        template: "<____>Tên trang web</title>",
        answer: "title",
        explanation: "Thẻ <title> nằm trong phần <head> dùng để đặt tiêu đề trên thanh tab trình duyệt."
      },
      {
        id: "fb7_4",
        question: "Để trang web hiển thị đúng tiếng Việt không bị lỗi font, ta dùng thẻ meta với charset là gì?",
        template: '<meta charset="____">',
        answer: "utf-8",
        explanation: "Bảng mã UTF-8 hỗ trợ đầy đủ các ký tự tiếng Việt có dấu."
      }
    ],
    quiz: [
      {
        id: "q7_1",
        question: "HTML là từ viết tắt của cụm từ tiếng Anh nào?",
        options: [
          "HyperText Markup Language",
          "High Tech Modern Language",
          "Hyperlink and Text Management Language",
          "Home Tool Markup Language"
        ],
        answer: 0,
        explanation: "HTML là viết tắt của HyperText Markup Language (Ngôn ngữ đánh dấu siêu văn bản)."
      },
      {
        id: "q7_2",
        question: "Tệp mã nguồn HTML thường có phần mở rộng là gì?",
        options: [".doc hoặc .docx", ".html hoặc .htm", ".txt hoặc .pdf", ".exe hoặc .bat"],
        answer: 1,
        explanation: "Trang web HTML được lưu dưới định dạng tệp có đuôi .html hoặc .htm."
      },
      {
        id: "q7_3",
        question: "Phát biểu nào sau đây là ĐÚNG về thẻ HTML?",
        options: [
          "HTML bắt buộc phải viết hoa tất cả các thẻ",
          "Mọi thẻ HTML đều bắt buộc phải có thẻ đóng",
          "Thẻ HTML không phân biệt chữ hoa và chữ thường, nhưng khuyến nghị viết thường",
          "HTML là ngôn ngữ lập trình giải thuật giống Python và C++"
        ],
        answer: 2,
        explanation: "Thẻ HTML không phân biệt hoa thường, chuẩn W3C khuyến nghị viết thường để mã nguồn đồng nhất, sạch sẽ."
      },
      {
        id: "q7_4",
        question: "Cấu trúc một tài liệu HTML chuẩn gồm có hai phần chính nằm trong phần tử <html> là gì?",
        options: [
          "<title> và <p>",
          "<head> và <body>",
          "<h1> và <br>",
          "<form> và <table>"
        ],
        answer: 1,
        explanation: "Phần tử <html> chia làm 2 nhánh chính: <head> (chứa thông tin cấu hình) và <body> (chứa nội dung hiển thị)."
      },
      {
        id: "q7_5",
        question: "Nội dung nằm trong cặp thẻ nào sẽ được hiển thị trực tiếp trên màn hình trình duyệt cho người dùng xem?",
        options: ["<head>", "<title>", "<body>", "<meta>"],
        answer: 2,
        explanation: "Phần tử <body> chứa toàn bộ giao diện, hình ảnh, văn bản mà người xem nhìn thấy trên trang web."
      },
      {
        id: "q7_6",
        question: "Thẻ nào sau đây là 'thẻ đơn' (không có thẻ đóng riêng biệt)?",
        options: ["<p>", "<h1>", "<br>", "<html>"],
        answer: 2,
        explanation: "<br> (ngắt dòng) là thẻ đơn (empty/void element), không có nội dung và không cần thẻ đóng </br>."
      },
      {
        id: "q7_7",
        question: "Mô hình cấu trúc biểu diễn các phần tử HTML lồng nhau trong trang web được gọi là gì?",
        options: [
          "Mô hình cây phân cấp thông tin",
          "Mô hình bảng dữ liệu phẳng",
          "Mô hình mạng lưới phi tuyến",
          "Mô hình vòng tròn tuần hoàn"
        ],
        answer: 0,
        explanation: "Trang HTML được tổ chức theo mô hình cây thông tin phân cấp (DOM Tree) với phần tử gốc là <html>."
      },
      {
        id: "q7_8",
        question: "Cặp thẻ nào sau đây KHÔNG THỂ lồng nhau theo quan hệ cha con?",
        options: [
          "<body> chứa <p>",
          "<html> chứa <head>",
          "<h1> chứa <h2>",
          "<div> chứa <span>"
        ],
        answer: 2,
        explanation: "Các thẻ tiêu đề h1..h6 hoặc các thẻ khối tiêu đề độc lập không lồng nhau trực tiếp như h1 chứa h2."
      },
      {
        id: "q7_9",
        question: "Để phần mềm trình duyệt hiểu tệp văn bản tuân theo chuẩn HTML5, ta đặt câu lệnh nào đầu tệp?",
        options: [
          "<!DOCTYPE html>",
          "<html version='5'>",
          "<?xml version='1.0'?>",
          "<head html5='true'>"
        ],
        answer: 0,
        explanation: "<!DOCTYPE html> là khai báo chuẩn cho HTML5 ở dòng đầu tiên."
      },
      {
        id: "q7_10",
        question: "Khái niệm 'Phần tử HTML' (HTML Element) bao gồm những gì?",
        options: [
          "Chỉ gồm tên thẻ mở",
          "Chỉ gồm nội dung văn bản bên trong",
          "Bao gồm thẻ mở, nội dung bên trong và thẻ đóng (đối với thẻ đôi)",
          "Chỉ gồm thuộc tính style của trang"
        ],
        answer: 2,
        explanation: "Phần tử HTML hoàn chỉnh gồm: thẻ mở + nội dung bên trong + thẻ đóng tương ứng."
      }
    ]
  },
  {
    id: "b8",
    code: "Bài 8",
    title: "Định dạng văn bản",
    desc: "Sử dụng các thẻ định dạng tiêu đề, đoạn văn, ngắt dòng, đường kẻ ngang, in đậm, in nghiêng và thuộc tính style.",
    icon: "📝",
    color: "#059669",
    theory: {
      overview: "Để trang web dễ đọc, mạch lạc và thu hút, HTML cung cấp nhiều thẻ định dạng văn bản cùng thuộc tính style để thay đổi màu sắc, kích thước và căn lề.",
      sections: [
        {
          title: "1. Thẻ tiêu đề và đoạn văn",
          content: `
            <ul>
              <li><strong>Thẻ tiêu đề (&lt;h1&gt; đến &lt;h6&gt;):</strong> Xác định các cấp độ tiêu đề văn bản. &lt;h1&gt; là tiêu đề quan trọng nhất (kích thước lớn nhất), &lt;h6&gt; là cấp tiêu đề nhỏ nhất.</li>
              <li><strong>Thẻ đoạn văn (&lt;p&gt; ... &lt;/p&gt;):</strong> Dùng để định nghĩa một đoạn văn bản. Trình duyệt tự động chèn khoảng cách trống trước và sau mỗi đoạn văn.</li>
              <li><strong>Thẻ ngắt dòng (&lt;br&gt;):</strong> Thẻ đơn dùng để xuống dòng mà không tạo khoảng cách đoạn như thẻ &lt;p&gt;.</li>
              <li><strong>Thẻ đường kẻ ngang (&lt;hr&gt;):</strong> Thẻ đơn tạo đường phân cách ngang giữa các khối nội dung.</li>
            </ul>
          `,
          codeSnippet: `<h1>Tiêu đề bài viết cấp 1</h1>
<p>Đoạn văn thứ nhất có nội dung xuống dòng ngay tại đây.<br>Dòng này nằm trong cùng đoạn văn.</p>
<hr>
<h2>Tiêu đề phụ cấp 2</h2>`
        },
        {
          title: "2. Thẻ nhấn mạnh và kiểu chữ",
          content: `
            <ul>
              <li><code>&lt;b&gt;</code> hoặc <code>&lt;strong&gt;</code>: Chữ in đậm. &lt;strong&gt; mang ý nghĩa nhấn mạnh nội dung quan trọng.</li>
              <li><code>&lt;i&gt;</code> hoặc <code>&lt;em&gt;</code>: Chữ in nghiêng. &lt;em&gt; mang tính ngữ nghĩa nhấn mạnh.</li>
              <li><code>&lt;u&gt;</code>: Chữ gạch chân.</li>
              <li><code>&lt;mark&gt;</code>: Tô màu nổi bật (highlight).</li>
            </ul>
          `
        },
        {
          title: "3. Thuộc tính style (CSS nội dòng)",
          content: `
            <ul>
              <li>Cú pháp: <code>style="tên-thuộc-tính: giá-trị;"</code></li>
              <li>Đổi màu chữ: <code>style="color: red;"</code> hoặc <code>color: rgb(255, 0, 0);</code></li>
              <li>Đổi màu nền: <code>style="background-color: yellow;"</code></li>
              <li>Kích cỡ chữ: <code>style="font-size: 20px;"</code></li>
              <li>Căn lề: <code>style="text-align: center | left | right | justify;"</code></li>
            </ul>
          `
        }
      ]
    },
    flashcards: [
      { id: "fc8_1", front: "<h1> đến <h6>", back: "Các thẻ tiêu đề từ cấp 1 (lớn nhất) đến cấp 6 (nhỏ nhất).", hint: "Heading tags" },
      { id: "fc8_2", front: "<p> ... </p>", back: "Định dạng đoạn văn bản (Paragraph), tự động có khoảng cách trên và dưới.", hint: "Paragraph" },
      { id: "fc8_3", front: "<br>", back: "Thẻ ngắt dòng (Break line) ngay tại vị trí đặt thẻ mà không tạo đoạn mới.", hint: "Break" },
      { id: "fc8_4", front: "<hr>", back: "Tạo đường kẻ ngang phân tách các phần nội dung trên trang (Horizontal Rule).", hint: "Horizontal Rule" },
      { id: "fc8_5", front: "<b> / <strong>", back: "Làm chữ in đậm. Thẻ <strong> nhấn mạnh tầm quan trọng của nội dung.", hint: "Bold / Strong" },
      { id: "fc8_6", front: "<i> / <em>", back: "Làm chữ in nghiêng. Thẻ <em> thể hiện ngữ điệu nhấn mạnh.", hint: "Italic / Emphasis" },
      { id: "fc8_7", front: "style='color: blue;'", back: "Thuộc tính thiết lập màu sắc chữ xanh dương cho phần tử.", hint: "Inline CSS Color" }
    ],
    dragDrop: {
      instruction: "Kéo thẻ HTML vào đúng hiệu ứng văn bản mà nó tạo ra:",
      pairs: [
        { id: "dd8_1", item: "<h1>", target: "Tiêu đề lớn nhất, quan trọng nhất" },
        { id: "dd8_2", item: "<b> hoặc <strong>", target: "Chữ in đậm" },
        { id: "dd8_3", item: "<i> hoặc <em>", target: "Chữ in nghiêng" },
        { id: "dd8_4", item: "<br>", target: "Xuống dòng ngay tại vị trí đặt thẻ" },
        { id: "dd8_5", item: "<hr>", target: "Đường kẻ ngang phân cách" }
      ]
    },
    fillBlank: [
      {
        id: "fb8_1",
        question: "Thẻ tiêu đề có kích thước chữ lớn nhất và quan trọng nhất là thẻ nào?",
        template: "<____>Tiêu đề chính</h1>",
        answer: "h1",
        explanation: "Thẻ <h1> biểu thị tiêu đề cấp cao nhất trong HTML."
      },
      {
        id: "fb8_2",
        question: "Điền thẻ đơn dùng để ngắt xuống dòng mới trong đoạn văn:",
        template: "Dòng 1 <____> Dòng 2",
        answer: "br",
        explanation: "<br> là thẻ ngắt dòng (break line)."
      },
      {
        id: "fb8_3",
        question: "Để căn giữa đoạn văn bản, ta dùng thuộc tính style: text-align: ____ ;",
        template: '<p style="text-align: ____;">Nội dung</p>',
        answer: "center",
        explanation: "Giá trị 'center' căn giữa phần tử."
      },
      {
        id: "fb8_4",
        question: "Thẻ đơn tạo một đường kẻ ngang trên trang web là gì?",
        template: "<____>",
        answer: "hr",
        explanation: "<hr> (Horizontal Rule) tạo đường kẻ ngang."
      }
    ],
    quiz: [
      {
        id: "q8_1",
        question: "Trong HTML, thẻ tiêu đề nào sau đây có kích thước nhỏ nhất?",
        options: ["<h1>", "<h3>", "<h5>", "<h6>"],
        answer: 3,
        explanation: "HTML hỗ trợ từ <h1> đến <h6>, trong đó <h6> là nhỏ nhất."
      },
      {
        id: "q8_2",
        question: "Sự khác biệt chính giữa việc dùng thẻ <p> và thẻ <br> để xuống dòng là gì?",
        options: [
          "<br> tạo ra một đoạn mới với khoảng đệm lề, còn <p> thì không",
          "<p> định nghĩa một đoạn văn bản có khoảng cách trên dưới, còn <br> chỉ đơn thuần ngắt xuống dòng",
          "<br> làm chữ in đậm, <p> làm chữ in nghiêng",
          "Không có sự khác nhau nào giữa hai thẻ này"
        ],
        answer: 1,
        explanation: "<p> tạo khối đoạn văn bản riêng biệt có lề trên dưới, còn <br> chỉ đưa con trỏ xuống dòng tiếp theo."
      },
      {
        id: "q8_3",
        question: "Muốn chữ 'Tin học 12' được in đậm, ta dùng cặp thẻ nào?",
        options: [
          "<b>Tin học 12</b> hoặc <strong>Tin học 12</strong>",
          "<i>Tin học 12</i> hoặc <em>Tin học 12</em>",
          "<u>Tin học 12</u>",
          "<p>Tin học 12</p>"
        ],
        answer: 0,
        explanation: "Thẻ <b> và <strong> hiển thị văn bản in đậm."
      },
      {
        id: "q8_4",
        question: "Cú pháp nào sau đây dùng để đổi màu chữ của đoạn văn thành màu đỏ đúng chuẩn?",
        options: [
          "<p color='red'>Đoạn văn</p>",
          "<p style='color: red;'>Đoạn văn</p>",
          "<p font='red'>Đoạn văn</p>",
          "<p style='text-color: red;'>Đoạn văn</p>"
        ],
        answer: 1,
        explanation: "Trong HTML5 chuẩn, định dạng màu sắc sử dụng thuộc tính style với cú pháp: style='color: red;'."
      },
      {
        id: "q8_5",
        question: "Để gạch chân một đoạn văn bản, ta dùng thẻ nào?",
        options: ["<i>", "<mark>", "<u>", "<sub>"],
        answer: 2,
        explanation: "Thẻ <u> (underline) dùng để gạch chân văn bản."
      },
      {
        id: "q8_6",
        question: "Để tạo một đường kẻ phân cách ngang giữa hai nội dung, ta dùng thẻ nào?",
        options: ["<line>", "<br>", "<border>", "<hr>"],
        answer: 3,
        explanation: "<hr> tạo ra đường kẻ ngang (horizontal rule)."
      },
      {
        id: "q8_7",
        question: "Trong thuộc tính style, đặc tính nào dùng để căn lề cho khối văn bản?",
        options: ["align-text", "text-align", "text-margin", "font-align"],
        answer: 1,
        explanation: "CSS dùng 'text-align' với các giá trị như left, right, center, justify."
      },
      {
        id: "q8_8",
        question: "Thẻ nào sau đây mang ý nghĩa ngữ nghĩa 'nhấn mạnh nội dung' kèm theo hiệu ứng in nghiêng?",
        options: ["<em>", "<italic>", "<slant>", "<bold>"],
        answer: 0,
        explanation: "Thẻ <em> (emphasis) mang ngữ nghĩa nhấn mạnh và mặc định in nghiêng."
      },
      {
        id: "q8_9",
        question: "Để đổi màu nền của một đoạn văn bản thành màu xanh lục, ta dùng cú pháp nào?",
        options: [
          "<p style='background-color: green;'>Nội dung</p>",
          "<p bgcolor='green'>Nội dung</p>",
          "<p style='color: green;'>Nội dung</p>",
          "<p style='bg: green;'>Nội dung</p>"
        ],
        answer: 0,
        explanation: "Thuộc tính 'background-color' dùng để tô màu nền."
      },
      {
        id: "q8_10",
        question: "Thẻ <mark> trong HTML có tác dụng gì đối với văn bản được bao bọc?",
        options: [
          "Làm mờ chữ",
          "Tô màu nổi bật (highlight nền vàng)",
          "Xóa gạch ngang chữ",
          "Tạo chỉ số dưới"
        ],
        answer: 1,
        explanation: "Thẻ <mark> dùng để đánh dấu, tô sáng (highlight) văn bản."
      }
    ]
  },
  {
    id: "b9",
    code: "Bài 9",
    title: "Tạo danh sách, bảng",
    desc: "Tạo danh sách có thứ tự (ol), không thứ tự (ul) và bảng dữ liệu hoàn chỉnh (table, tr, td, th) kèm thuộc tính gộp ô.",
    icon: "📊",
    color: "#d97706",
    theory: {
      overview: "Danh sách và bảng là hai cấu trúc rất quan trọng trong thiết kế web, giúp trình bày dữ liệu dạng danh mục hoặc ma trận rõ ràng, khoa học.",
      sections: [
        {
          title: "1. Danh sách có thứ tự (<ol>) và không có thứ tự (<ul>)",
          content: `
            <ul>
              <li><strong>Danh sách có thứ tự (&lt;ol&gt;):</strong> Các mục được đánh số thứ tự (1, 2, 3.. hoặc a, b, c.. hoặc I, II, III..). Thuộc tính <code>type="1|a|A|i|I"</code>, <code>start="số_bắt_đầu"</code>.</li>
              <li><strong>Danh sách không có thứ tự (&lt;ul&gt;):</strong> Các mục được đánh dấu đầu dòng (bullet: chấm tròn disc, hình tròn rỗng circle, hình vuông square).</li>
              <li><strong>Mỗi mục trong danh sách (&lt;li&gt;):</strong> Cả &lt;ol&gt; và &lt;ul&gt; đều chứa các phần tử &lt;li&gt; (List Item).</li>
            </ul>
          `,
          codeSnippet: `<ol type="1" start="1">
  <li>Công nghệ thông tin</li>
  <li>Khoa học máy tính</li>
</ol>
<ul>
  <li>Hà Nội</li>
  <li>Đà Nẵng</li>
</ul>`
        },
        {
          title: "2. Cấu trúc bảng (<table>)",
          content: `
            <ul>
              <li><code>&lt;table&gt; ... &lt;/table&gt;</code>: Định nghĩa bảng.</li>
              <li><code>&lt;tr&gt; ... &lt;/tr&gt;</code>: Table Row - Định nghĩa một dòng trong bảng.</li>
              <li><code>&lt;th&gt; ... &lt;/th&gt;</code>: Table Header - Ô tiêu đề cột, chữ mặc định in đậm và căn giữa.</li>
              <li><code>&lt;td&gt; ... &lt;/td&gt;</code>: Table Data - Ô chứa dữ liệu bình thường.</li>
              <li><code>&lt;caption&gt; ... &lt;/caption&gt;</code>: Tiêu đề mô tả bảng.</li>
            </ul>
          `
        },
        {
          title: "3. Thuộc tính gộp ô (colspan & rowspan)",
          content: `
            <ul>
              <li><code>colspan="n"</code>: Gộp <strong>n</strong> ô trên cùng một dòng (gộp theo cột ngang).</li>
              <li><code>rowspan="n"</code>: Gộp <strong>n</strong> ô trên các dòng liên tiếp (gộp theo hàng dọc).</li>
              <li><code>border="1"</code>: Thêm đường viền cho bảng.</li>
            </ul>
          `,
          codeSnippet: `<table border="1">
  <tr>
    <th colspan="2">Thông tin học sinh</th>
  </tr>
  <tr>
    <td>Họ và tên</td>
    <td>Nguyễn Văn An</td>
  </tr>
</table>`
        }
      ]
    },
    flashcards: [
      { id: "fc9_1", front: "<ol> ... </ol>", back: "Ordered List - Danh sách có thứ tự (đánh số 1, 2, 3 hoặc A, B, C).", hint: "Ordered List" },
      { id: "fc9_2", front: "<ul> ... </ul>", back: "Unordered List - Danh sách không có thứ tự (dấu chấm tròn, vuông).", hint: "Unordered List" },
      { id: "fc9_3", front: "<li> ... </li>", back: "List Item - Định nghĩa từng mục nằm bên trong <ol> hoặc <ul>.", hint: "List Item" },
      { id: "fc9_4", front: "<tr> ... </tr>", back: "Table Row - Định nghĩa một dòng (hàng) ngang trong bảng.", hint: "Table Row" },
      { id: "fc9_5", front: "<th> ... </th>", back: "Table Header - Ô tiêu đề bảng (mặc định chữ in đậm và căn giữa).", hint: "Table Header" },
      { id: "fc9_6", front: "<td> ... </td>", back: "Table Data - Ô chứa nội dung dữ liệu thông thường trong bảng.", hint: "Table Data" },
      { id: "fc9_7", front: "colspan='2'", back: "Gộp 2 cột liên tiếp trên cùng một hàng thành một ô duy nhất.", hint: "Gộp ô theo chiều ngang" },
      { id: "fc9_8", front: "rowspan='2'", back: "Gộp 2 hàng liên tiếp trên cùng một cột thành một ô duy nhất.", hint: "Gộp ô theo chiều dọc" }
    ],
    dragDrop: {
      instruction: "Kéo thẻ hoặc thuộc tính bảng vào đúng vai trò mô tả:",
      pairs: [
        { id: "dd9_1", item: "<ol>", target: "Danh sách đánh số thứ tự 1, 2, 3..." },
        { id: "dd9_2", item: "<ul>", target: "Danh sách gạch đầu dòng ký hiệu" },
        { id: "dd9_3", item: "<th>", target: "Ô tiêu đề cột (in đậm, căn giữa)" },
        { id: "dd9_4", item: "colspan", target: "Gộp nhiều cột nằm ngang" },
        { id: "dd9_5", item: "rowspan", target: "Gộp nhiều dòng thẳng đứng" }
      ]
    },
    fillBlank: [
      {
        id: "fb9_1",
        question: "Cặp thẻ nào dùng để tạo danh sách có thứ tự được đánh số?",
        template: "<____> <li>Mục 1</li> </ol>",
        answer: "ol",
        explanation: "<ol> là Ordered List."
      },
      {
        id: "fb9_2",
        question: "Để định nghĩa một dòng trong bảng, ta dùng thẻ gì?",
        template: "<____> <td>Ô 1</td> <td>Ô 2</td> </tr>",
        answer: "tr",
        explanation: "<tr> viết tắt của Table Row."
      },
      {
        id: "fb9_3",
        question: "Thuộc tính nào dùng để gộp 3 ô theo chiều ngang (3 cột)?",
        template: '<td ____="3">Tiêu đề gộp</td>',
        answer: "colspan",
        explanation: "colspan='3' gộp 3 cột nằm ngang."
      },
      {
        id: "fb9_4",
        question: "Mỗi mục con bên trong danh sách được đặt trong cặp thẻ nào?",
        template: "<____>Nội dung mục</li>",
        answer: "li",
        explanation: "<li> (List Item) là phần tử cho từng mục."
      }
    ],
    quiz: [
      {
        id: "q9_1",
        question: "Để tạo danh sách KHÔNG có thứ tự (dấu chấm tròn đầu dòng), ta dùng cặp thẻ nào?",
        options: ["<ol>", "<ul>", "<dl>", "<list>"],
        answer: 1,
        explanation: "<ul> (Unordered List) dùng để tạo danh sách không thứ tự."
      },
      {
        id: "q9_2",
        question: "Phần tử nào sau đây dùng để chứa từng mục bên trong danh sách <ol> hoặc <ul>?",
        options: ["<item>", "<dt>", "<li>", "<tr>"],
        answer: 2,
        explanation: "<li> (List Item) biểu diễn từng phần tử mục trong danh sách."
      },
      {
        id: "q9_3",
        question: "Nếu muốn danh sách <ol> bắt đầu đánh số từ số 5, ta sử dụng thuộc tính nào?",
        options: ["begin='5'", "start='5'", "from='5'", "number='5'"],
        answer: 1,
        explanation: "Thuộc tính start='5' thiết lập giá trị bắt đầu đếm của danh sách có thứ tự."
      },
      {
        id: "q9_4",
        question: "Thẻ nào trong bảng HTML dùng để biểu diễn một dòng (hàng)?",
        options: ["<td>", "<th>", "<tr>", "<row>"],
        answer: 2,
        explanation: "<tr> (Table Row) định nghĩa một dòng trong bảng."
      },
      {
        id: "q9_5",
        question: "Nội dung trong thẻ <th> khác với thẻ <td> như thế nào theo mặc định của trình duyệt?",
        options: [
          "<th> in đậm và căn lề giữa, <td> in thường và căn trái",
          "<th> in nghiêng, <td> in đậm",
          "<th> có màu đỏ, <td> có màu đen",
          "Không có sự khác nhau nào"
        ],
        answer: 0,
        explanation: "<th> (Table Header) mặc định có font-weight: bold và text-align: center."
      },
      {
        id: "q9_6",
        question: "Thuộc tính nào dùng để gộp nhiều ô liền kề theo chiều dọc (qua nhiều dòng)?",
        options: ["colspan", "rowspan", "spanrow", "mergerow"],
        answer: 1,
        explanation: "rowspan dùng để gộp ô theo hàng dọc (nhiều dòng)."
      },
      {
        id: "q9_7",
        question: "Đoạn mã: <td colspan='3'> có ý nghĩa gì?",
        options: [
          "Tạo ô rộng gấp 3 pixel",
          "Gộp 3 ô liên tiếp theo chiều ngang (3 cột)",
          "Gộp 3 dòng liên tiếp theo chiều dọc",
          "Chia ô đó thành 3 phần bằng nhau"
        ],
        answer: 1,
        explanation: "colspan='3' chỉ định ô sẽ trải dài qua 3 cột ngang."
      },
      {
        id: "q9_8",
        question: "Thẻ nào dùng để thêm tiêu đề giải thích bên trên hoặc dưới bảng?",
        options: ["<title>", "<header>", "<caption>", "<summary>"],
        answer: 2,
        explanation: "<caption> được đặt ngay sau thẻ mở <table> để làm tiêu đề bảng."
      },
      {
        id: "q9_9",
        question: "Để vẽ đường viền đơn giản cho bảng dữ liệu, ta thêm thuộc tính nào vào thẻ <table>?",
        options: ["border='1'", "outline='1'", "line='1'", "stroke='1'"],
        answer: 0,
        explanation: "Thuộc tính border='1' quy định độ rộng viền của bảng."
      },
      {
        id: "q9_10",
        question: "Một danh sách có thể chứa một danh sách con bên trong nó không?",
        options: [
          "Có, bằng cách lồng thẻ <ol> hoặc <ul> bên trong một thẻ <li>",
          "Không, HTML nghiêm cấm lồng danh sách",
          "Chỉ <ol> mới lồng được, <ul> không lồng được",
          "Chỉ lồng được tối đa 1 cấp"
        ],
        answer: 0,
        explanation: "HTML cho phép tạo danh sách đa cấp (lồng nhau) bằng cách đặt danh sách con bên trong thẻ <li> của danh sách cha."
      }
    ]
  },
  {
    id: "b10",
    code: "Bài 10",
    title: "Tạo liên kết",
    desc: "Tìm hiểu siêu liên kết (hyperlink), đường dẫn tuyệt đối và tương đối, liên kết trang ngoài, liên kết nội bộ trong trang (anchor).",
    icon: "🔗",
    color: "#2563eb",
    theory: {
      overview: "Siêu liên kết (hyperlink) là linh hồn của World Wide Web, cho phép người dùng chuyển từ trang web này sang trang web khác hoặc di chuyển đến một vị trí cụ thể trên cùng trang chỉ với một cú nhấp chuột.",
      sections: [
        {
          title: "1. Siêu liên kết và Thẻ <a>",
          content: `
            <ul>
              <li><strong>Cú pháp:</strong> <code>&lt;a href="URL"&gt;Văn bản hiển thị liên kết&lt;/a&gt;</code></li>
              <li><code>href</code> (Hypertext Reference): Chỉ định địa chỉ đích mà liên kết trỏ tới.</li>
              <li><code>target="_blank"</code>: Mở trang web liên kết trong một tab (thẻ) trình duyệt mới.</li>
              <li>Có thể bọc liên kết quanh văn bản hoặc hình ảnh để biến hình ảnh thành nút bấm chuyển trang.</li>
            </ul>
          `,
          codeSnippet: `<a href="https://danang.gov.vn" target="_blank">
  Cổng thông tin TP Đà Nẵng
</a>`
        },
        {
          title: "2. Đường dẫn tuyệt đối và Đường dẫn tương đối",
          content: `
            <ul>
              <li><strong>Đường dẫn tuyệt đối:</strong> Chứa đầy đủ giao thức (https://), tên miền (domain) và đường dẫn tệp. Dùng để liên kết tới một website khác trên Internet. Ví dụ: <code>https://google.com</code>.</li>
              <li><strong>Đường dẫn tương đối:</strong> Chỉ ra vị trí của tệp đích so với tệp hiện tại trong cùng website, không cần tên miền. Ví dụ: <code>bai_tap/bai1.html</code> hoặc <code>../index.html</code>.</li>
            </ul>
          `
        },
        {
          title: "3. Liên kết nội bộ đến một vị trí trong cùng trang (Neo - Anchor)",
          content: `
            <ul>
              <li>Bước 1: Đặt thuộc tính <code>id="ten_vi_tri"</code> cho phần tử đích (ví dụ tiêu đề cần nhảy tới).</li>
              <li>Bước 2: Tạo liên kết với thuộc tính <code>href="#ten_vi_tri"</code> (bắt đầu bằng dấu #).</li>
            </ul>
          `,
          codeSnippet: `<!-- Vị trí đích -->
<h3 id="thethao">Câu lạc bộ Thể thao</h3>
<p>Thông tin CLB...</p>

<!-- Nút bấm nhảy tới đích -->
<a href="#thethao">Xem thông tin CLB Thể thao</a>`
        }
      ]
    },
    flashcards: [
      { id: "fc10_1", front: "<a href='...'>", back: "Thẻ Anchor tạo siêu liên kết (Hyperlink) dẫn tới tài liệu hoặc trang web khác.", hint: "Anchor tag" },
      { id: "fc10_2", front: "target='_blank'", back: "Mở trang web liên kết trong một tab hoặc cửa sổ trình duyệt mới.", hint: "Mở tab mới" },
      { id: "fc10_3", front: "Đường dẫn tuyệt đối", back: "Bao gồm đầy đủ giao thức (http/https), tên miền và đường dẫn tệp (vd: https://dantri.com.vn).", hint: "Full URL" },
      { id: "fc10_4", front: "Đường dẫn tương đối", back: "Xác định vị trí tệp đích so với vị trí của tệp hiện tại trong cùng một website.", hint: "Relative path" },
      { id: "fc10_5", front: "href='#muc1'", back: "Liên kết nội bộ (Bookmark/Anchor) nhảy ngay tới phần tử có id='muc1' trên cùng trang.", hint: "Nhảy tới vị trí id" },
      { id: "fc10_6", front: "href='mailto:...'", back: "Mở phần mềm gửi thư điện tử (email) trên máy người dùng tới địa chỉ chỉ định.", hint: "Liên kết gửi mail" }
    ],
    dragDrop: {
      instruction: "Kéo loại liên kết hoặc cú pháp vào đúng mô tả công dụng của nó:",
      pairs: [
        { id: "dd10_1", item: "href='https://edu.vn'", target: "Đường dẫn tuyệt đối liên kết đến website ngoài" },
        { id: "dd10_2", item: "href='bai_tap/b1.html'", target: "Đường dẫn tương đối liên kết trong cùng website" },
        { id: "dd10_3", item: "target='_blank'", target: "Mở trang đích trong tab trình duyệt mới" },
        { id: "dd10_4", item: "href='#noidung'", target: "Nhảy tới phần tử có id='noidung' trong trang" },
        { id: "dd10_5", item: "href='mailto:a@b.com'", target: "Kích hoạt ứng dụng gửi thư điện tử" }
      ]
    },
    fillBlank: [
      {
        id: "fb10_1",
        question: "Thẻ nào trong HTML dùng để tạo siêu liên kết?",
        template: "<____ href='trangchu.html'>Về trang chủ</a>",
        answer: "a",
        explanation: "Thẻ <a> (Anchor) dùng để tạo hyperlink."
      },
      {
        id: "fb10_2",
        question: "Thuộc tính nào chỉ định địa chỉ trang web hoặc tài liệu đích cần trỏ tới?",
        template: '<a ____="https://google.com">Tìm kiếm</a>',
        answer: "href",
        explanation: "href (Hypertext Reference) lưu đường dẫn trang đích."
      },
      {
        id: "fb10_3",
        question: "Để mở liên kết trong một thẻ tab mới của trình duyệt, ta gán target bằng giá trị gì?",
        template: '<a href="lienket.html" target="____">Mở tab mới</a>',
        answer: "_blank",
        explanation: "target='_blank' sẽ mở sang tab mới."
      },
      {
        id: "fb10_4",
        question: "Để liên kết nhảy tới phần tử có id='lienhe' trên cùng trang, giá trị href bắt đầu bằng ký tự gì?",
        template: '<a href="____lienhe">Liên hệ ngay</a>',
        answer: "#",
        explanation: "Dấu thăng (#) dùng để trỏ đến ID của phần tử trong trang."
      }
    ],
    quiz: [
      {
        id: "q10_1",
        question: "Cú pháp đúng nhất để tạo liên kết tới trang 'https://moet.gov.vn' là gì?",
        options: [
          "<a href='https://moet.gov.vn'>Bộ GD&ĐT</a>",
          "<a url='https://moet.gov.vn'>Bộ GD&ĐT</a>",
          "<link href='https://moet.gov.vn'>Bộ GD&ĐT</link>",
          "<a src='https://moet.gov.vn'>Bộ GD&ĐT</a>"
        ],
        answer: 0,
        explanation: "Thẻ <a> sử dụng thuộc tính href để chỉ định URL đích."
      },
      {
        id: "q10_2",
        question: "Đường dẫn nào sau đây là đường dẫn tuyệt đối?",
        options: [
          "images/logo.png",
          "../index.html",
          "https://danang.gov.vn/gioi-thieu",
          "gioi_thieu.html"
        ],
        answer: 2,
        explanation: "Đường dẫn tuyệt đối chứa đầy đủ giao thức https:// và tên miền."
      },
      {
        id: "q10_3",
        question: "Thuộc tính target='_blank' trong thẻ <a> có tác dụng gì?",
        options: [
          "Mở một trang web trống rỗng",
          "Mở liên kết trong một tab (thẻ) hoặc cửa sổ mới",
          "Tải tệp tin về máy tính",
          "Xóa lịch sử duyệt web"
        ],
        answer: 1,
        explanation: "Giá trị '_blank' yêu cầu trình duyệt mở URL đích ở một tab mới."
      },
      {
        id: "q10_4",
        question: "Muốn tạo liên kết đến một vị trí có <h2 id='diem_den'> trên cùng trang web, ta viết href như thế nào?",
        options: [
          "href='diem_den'",
          "href='#diem_den'",
          "href='*diem_den'",
          "href='@diem_den'"
        ],
        answer: 1,
        explanation: "Liên kết nội bộ tới phần tử có thuộc tính id dùng cú pháp '#ten_id'."
      },
      {
        id: "q10_5",
        question: "Để biến một hình ảnh thành một siêu liên kết (bấm vào ảnh thì chuyển trang), ta làm thế nào?",
        options: [
          "Đặt thẻ <img> bên trong cặp thẻ <a> ... </a>",
          "Đặt thuộc tính href vào trong thẻ <img>",
          "Đặt thẻ <a> bên trong thẻ <img>",
          "HTML không hỗ trợ biến ảnh thành liên kết"
        ],
        answer: 0,
        explanation: "Bọc thẻ <img> trong <a>: <a href='...'><img src='...'></a>."
      },
      {
        id: "q10_6",
        question: "Trong cấu trúc thư mục, ký hiệu hai dấu chấm '../' ở đầu đường dẫn tương đối có ý nghĩa gì?",
        options: [
          "Đi vào thư mục con",
          "Trở về thư mục cha (thư mục ở cấp trên một bậc)",
          "Trỏ đến thư mục gốc của ổ đĩa C",
          "Báo lỗi đường dẫn"
        ],
        answer: 1,
        explanation: "'../' biểu diễn việc di chuyển lên thư mục cha chứa thư mục hiện tại."
      },
      {
        id: "q10_7",
        question: "Đoạn mã: <a href='mailto:teacher@gmail.com'>Gửi thư</a> khi nhấp vào sẽ làm gì?",
        options: [
          "Mở trang tìm kiếm Google",
          "Kích hoạt ứng dụng email trên máy để soạn thư tới teacher@gmail.com",
          "Hiển thị mật khẩu email của giáo viên",
          "Tự động gửi email ngầm không báo trước"
        ],
        answer: 1,
        explanation: "Giao thức mailto: kích hoạt trình gửi mail mặc định của thiết bị."
      },
      {
        id: "q10_8",
        question: "Thuộc tính nào của một phần tử HTML cho phép nó trở thành một điểm neo (anchor target) duy nhất trên trang?",
        options: ["class", "id", "name", "style"],
        answer: 1,
        explanation: "Thuộc tính id gán định danh duy nhất cho một phần tử trên toàn bộ trang."
      },
      {
        id: "q10_9",
        question: "Nếu tệp index.html và tệp clb.html nằm cùng trong một thư mục, đường dẫn tương đối từ index sang clb là gì?",
        options: ["href='clb.html'", "href='/clb.html'", "href='../clb.html'", "href='root/clb.html'"],
        answer: 0,
        explanation: "Nằm cùng một thư mục chỉ cần ghi trực tiếp tên tệp: clb.html."
      },
      {
        id: "q10_10",
        question: "Ưu điểm nổi bật của đường dẫn tương đối so với đường dẫn tuyệt đối khi phát triển website là gì?",
        options: [
          "Tốc độ tải nhanh gấp 10 lần",
          "Khi chuyển website sang tên miền hoặc thư mục khác thì liên kết nội bộ vẫn hoạt động bình thường",
          "Bảo mật cao hơn đường dẫn tuyệt đối",
          "Không cần sử dụng trình duyệt để mở"
        ],
        answer: 1,
        explanation: "Đường dẫn tương đối linh hoạt, giúp website dễ dàng di chuyển lưu trữ mà không lo bị hỏng liên kết."
      }
    ]
  },
  {
    id: "b11",
    code: "Bài 11",
    title: "Chèn tệp đa phương tiện & Khung nội tuyến",
    desc: "Chèn hình ảnh (img), âm thanh (audio), video (video) và nhúng khung nội tuyến (iframe) từ YouTube hoặc trang web khác.",
    icon: "🎬",
    color: "#7c3aed",
    theory: {
      overview: "Đa phương tiện (hình ảnh, âm thanh, video) và khung nội tuyến giúp trang web trở nên sống động, trực quan và hấp dẫn hơn rất nhiều so với văn bản thuần túy.",
      sections: [
        {
          title: "1. Chèn hình ảnh (<img>)",
          content: `
            <ul>
              <li><strong>Cú pháp:</strong> <code>&lt;img src="đường_dẫn_ảnh" alt="mô_tả" width="rộng" height="cao"&gt;</code></li>
              <li><code>src</code>: Đường dẫn đến tệp hình ảnh (.jpg, .png, .gif, .webp, .svg).</li>
              <li><code>alt</code> (Alternative text): Văn bản thay thế khi ảnh bị lỗi không hiển thị hoặc dành cho người khiếm thị dùng trình đọc màn hình.</li>
              <li><code>width, height</code>: Kích thước hiển thị (pixel hoặc %). Lưu ý: Nếu chỉ đặt 1 trong 2 thuộc tính, trình duyệt sẽ tự co giãn tỷ lệ ảnh gốc mà không bị méo.</li>
            </ul>
          `,
          codeSnippet: `<img src="cau_vang.jpg" alt="Cầu Vàng Bà Nà Hills" width="400">`
        },
        {
          title: "2. Chèn Âm thanh (<audio>) và Video (<video>)",
          content: `
            <ul>
              <li><code>controls</code>: Hiển thị thanh điều khiển (nút Play/Pause, âm lượng, thời lượng).</li>
              <li><code>autoplay</code>: Tự động phát khi tải trang.</li>
              <li><code>loop</code>: Tự động lặp lại khi phát xong.</li>
              <li><code>muted</code>: Tắt tiếng mặc định.</li>
            </ul>
          `,
          codeSnippet: `<!-- Âm thanh -->
<audio src="nhac_nen.mp3" controls>Trình duyệt không hỗ trợ audio.</audio>

<!-- Video -->
<video src="gioi_thieu.mp4" width="600" controls autoplay muted>
</video>`
        },
        {
          title: "3. Nhúng khung nội tuyến (<iframe>)",
          content: `
            <ul>
              <li>Khung nội tuyến (Inline Frame) cho phép nhúng một trang web khác, bản đồ Google Maps hoặc video YouTube ngay bên trong trang hiện tại.</li>
              <li>Cú pháp: <code>&lt;iframe src="URL" width="chiều_rộng" height="chiều_cao"&gt;&lt;/iframe&gt;</code></li>
            </ul>
          `,
          codeSnippet: `<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" frameborder="0" allowfullscreen>
</iframe>`
        }
      ]
    },
    flashcards: [
      { id: "fc11_1", front: "<img src='...' alt='...'>", back: "Thẻ đơn chèn hình ảnh vào trang web. src là đường dẫn, alt là mô tả khi ảnh lỗi.", hint: "Image tag" },
      { id: "fc11_2", front: "Thuộc tính alt", back: "Alternative text - Hiển thị văn bản thay thế khi ảnh không tải được hoặc hỗ trợ đọc màn hình.", hint: "Văn bản thay thế" },
      { id: "fc11_3", front: "<audio controls>", back: "Chèn tệp âm thanh và hiển thị thanh điều khiển (phát/tạm dừng, chỉnh âm lượng).", hint: "Audio player" },
      { id: "fc11_4", front: "<video controls>", back: "Chèn tệp video hiển thị hình ảnh động kèm thanh phát video trên trang web.", hint: "Video player" },
      { id: "fc11_5", front: "<iframe> ... </iframe>", back: "Inline Frame - Nhúng một tài liệu hoặc video từ trang web khác vào trang hiện hành.", hint: "Nhúng YouTube/Maps" },
      { id: "fc11_6", front: "autoplay & muted", back: "Tự động phát video/âm thanh và tắt tiếng ban đầu (để trình duyệt không chặn phát tự động).", hint: "Tự phát không tiếng" }
    ],
    dragDrop: {
      instruction: "Kéo thẻ đa phương tiện vào đúng công dụng tương ứng:",
      pairs: [
        { id: "dd11_1", item: "<img src='a.png' alt='logo'>", target: "Hiển thị hình ảnh với chú thích lỗi" },
        { id: "dd11_2", item: "<audio controls>", target: "Phát bài hát có thanh nút điều khiển" },
        { id: "dd11_3", item: "<video width='640'>", target: "Trình phát video với kích thước chỉ định" },
        { id: "dd11_4", item: "<iframe src='...'>", target: "Nhúng video YouTube hoặc bản đồ ngoài" },
        { id: "dd11_5", item: "loop", target: "Lặp lại bài hát/video vô hạn" }
      ]
    },
    fillBlank: [
      {
        id: "fb11_1",
        question: "Thuộc tính bắt buộc nào trong thẻ <img> chỉ định đường dẫn tệp ảnh?",
        template: '<img ____="anh_dep.jpg" alt="Mô tả">',
        answer: "src",
        explanation: "src (Source) chỉ định đường dẫn của tệp hình ảnh/âm thanh/video."
      },
      {
        id: "fb11_2",
        question: "Thuộc tính nào cung cấp văn bản thay thế khi hình ảnh bị lỗi không hiển thị?",
        template: '<img src="logo.png" ____="Logo nhà trường">',
        answer: "alt",
        explanation: "alt (Alternative text) hiển thị nội dung thay thế ảnh."
      },
      {
        id: "fb11_3",
        question: "Để thanh điều khiển phát/tạm dừng/âm lượng xuất hiện trên thẻ audio hoặc video, ta thêm thuộc tính gì?",
        template: "<audio src='song.mp3' ____></audio>",
        answer: "controls",
        explanation: "Thuộc tính controls kích hoạt bảng điều khiển của trình duyệt."
      },
      {
        id: "fb11_4",
        question: "Thẻ nào cho phép nhúng một trang web khác hoặc video YouTube vào trang hiện tại?",
        template: "<____ src='https://youtube.com/embed/...'></iframe>",
        answer: "iframe",
        explanation: "<iframe> (Inline Frame) dùng để nhúng nội dung ngoại trú."
      }
    ],
    quiz: [
      {
        id: "q11_1",
        question: "Thẻ nào sau đây dùng để chèn hình ảnh vào trang web?",
        options: ["<image>", "<picture>", "<img>", "<photo>"],
        answer: 2,
        explanation: "Trong HTML, thẻ <img> là thẻ chuẩn để hiển thị hình ảnh."
      },
      {
        id: "q11_2",
        question: "Khi bức ảnh gốc có kích thước 720 x 450 px, nếu thiết lập width='360' và không đặt height thì chiều cao ảnh trên trang sẽ là bao nhiêu?",
        options: ["450 px", "225 px", "360 px", "100 px"],
        answer: 1,
        explanation: "Trình duyệt tự động giữ đúng tỷ lệ gốc: 360 * (450 / 720) = 225 px."
      },
      {
        id: "q11_3",
        question: "Thuộc tính alt trong thẻ <img> có ý nghĩa gì?",
        options: [
          "Quy định kích thước tối đa của ảnh",
          "Cung cấp văn bản thay thế hiển thị khi ảnh bị lỗi đường dẫn",
          "Tự động tải lại ảnh",
          "Chuyển ảnh sang dạng đen trắng"
        ],
        answer: 1,
        explanation: "alt (alternative text) cung cấp văn bản thay thế khi ảnh không tải được."
      },
      {
        id: "q11_4",
        question: "Để âm thanh tự động phát lại từ đầu sau khi phát hết bài, ta dùng thuộc tính nào trong thẻ <audio>?",
        options: ["repeat", "loop", "replay", "restart"],
        answer: 1,
        explanation: "Thuộc tính 'loop' cho phép phát lặp lại liên tục."
      },
      {
        id: "q11_5",
        question: "Định dạng tệp âm thanh nào được hỗ trợ phổ biến nhất trên hầu hết các trình duyệt hiện nay?",
        options: [".mp3", ".wav", ".ogg", "Tất cả các định dạng trên"],
        answer: 3,
        explanation: "HTML5 hỗ trợ chuẩn các định dạng âm thanh như MP3, WAV, OGG."
      },
      {
        id: "q11_6",
        question: "Thẻ <iframe> thường được sử dụng phổ biến nhất cho mục đích nào sau đây?",
        options: [
          "Tạo cơ sở dữ liệu trên máy chủ",
          "Nhúng video từ YouTube hoặc nhúng Google Maps vào trang web",
          "Nén file ảnh sang định dạng zip",
          "Tự động gửi email hàng loạt"
        ],
        answer: 1,
        explanation: "<iframe> được dùng nhiều nhất để nhúng video YouTube, Google Maps hoặc trang con."
      },
      {
        id: "q11_7",
        question: "Nếu không có thuộc tính controls trong thẻ <video>, điều gì sẽ xảy ra?",
        options: [
          "Video không thể phát được vì không có nút Play/Pause trên màn hình",
          "Video sẽ phóng to toàn màn hình",
          "Video tự động tải về máy",
          "Video biến thành một bức ảnh tĩnh"
        ],
        answer: 0,
        explanation: "Không có controls, trình duyệt không vẽ thanh điều khiển (trừ khi dùng JavaScript gọi lệnh phát)."
      },
      {
        id: "q11_8",
        question: "Định dạng video chuẩn được khuyến nghị và hỗ trợ tối ưu nhất trên các trình duyệt web hiện nay là gì?",
        options: [".avi", ".wmv", ".mp4 (H.264 / AAC)", ".flv"],
        answer: 2,
        explanation: "MP4 là chuẩn video được mọi trình duyệt hiện đại hỗ trợ hoàn hảo."
      },
      {
        id: "q11_9",
        question: "Thuộc tính muted trong thẻ <video> có tác dụng gì?",
        options: [
          "Tắt âm thanh mặc định khi video phát",
          "Làm mờ hình ảnh video",
          "Ẩn video khỏi trang web",
          "Tăng gấp đôi âm lượng video"
        ],
        answer: 0,
        explanation: "muted tắt tiếng của video."
      },
      {
        id: "q11_10",
        question: "Đoạn mã HTML nào sau đây là thẻ đơn?",
        options: ["<video>", "<audio>", "<iframe>", "<img>"],
        answer: 3,
        explanation: "<img> là thẻ đơn (void element), không có nội dung con và không có thẻ đóng </img>."
      }
    ]
  },
  {
    id: "b12",
    code: "Bài 12",
    title: "Tạo biểu mẫu (Form)",
    desc: "Tìm hiểu cấu trúc biểu mẫu (form), các loại trường nhập dữ liệu (input, radio, checkbox, textarea, select) và nút gửi (submit).",
    icon: "📋",
    color: "#db2777",
    theory: {
      overview: "Biểu mẫu (Form) là công cụ tương tác cốt lõi trên trang web, cho phép người dùng nhập thông tin (đăng nhập, đăng ký, khảo sát, đặt hàng) và gửi dữ liệu về máy chủ (Server) xử lý.",
      sections: [
        {
          title: "1. Cấu trúc tổng thể của biểu mẫu (<form>)",
          content: `
            <ul>
              <li><code>&lt;form action="URL" method="get | post"&gt; ... &lt;/form&gt;</code></li>
              <li><code>action</code>: Địa chỉ trang hoặc tập lệnh máy chủ sẽ tiếp nhận và xử lý dữ liệu biểu mẫu gửi lên.</li>
              <li><code>method</code>: Phương thức gửi dữ liệu:
                <ul>
                  <li><strong>GET:</strong> Dữ liệu được đính kèm trực tiếp trên thanh địa chỉ URL (không an toàn cho mật khẩu, giới hạn độ dài).</li>
                  <li><strong>POST:</strong> Dữ liệu được đóng gói ngầm trong phần thân của yêu cầu HTTP (bảo mật hơn, truyền được dữ liệu lớn).</li>
                </ul>
              </li>
            </ul>
          `,
          codeSnippet: `<form action="login.php" method="post">
  <label for="usr">Tên đăng nhập:</label>
  <input type="text" id="usr" name="username" required>
  
  <label for="pwd">Mật khẩu:</label>
  <input type="password" id="pwd" name="password" required>
  
  <button type="submit">Đăng nhập</button>
</form>`
        },
        {
          title: "2. Thẻ <input> và các loại (type) phổ biến",
          content: `
            <ul>
              <li><code>type="text"</code>: Ô nhập văn bản một dòng ngắn.</li>
              <li><code>type="password"</code>: Ô nhập mật khẩu (ký tự bị che bởi dấu sao/chấm tròn).</li>
              <li><code>type="radio"</code>: Nút chọn một duy nhất trong nhóm (các nút cùng nhóm phải có cùng <code>name</code>).</li>
              <li><code>type="checkbox"</code>: Hộp kiểm cho phép tích chọn nhiều mục độc lập.</li>
              <li><code>type="file"</code>: Nút chọn tệp từ máy tính để tải lên.</li>
              <li><code>type="date"</code>: Hộp chọn ngày tháng năm với lịch trực quan.</li>
              <li><code>type="submit"</code>: Nút bấm gửi toàn bộ dữ liệu biểu mẫu về máy chủ.</li>
              <li><code>type="reset"</code>: Nút xóa trắng dữ liệu đã nhập, trở về mặc định.</li>
            </ul>
          `
        },
        {
          title: "3. Các phần tử biểu mẫu khác",
          content: `
            <ul>
              <li><code>&lt;textarea rows="4" cols="50"&gt;</code>: Ô nhập văn bản nhiều dòng (ý kiến phản hồi, địa chỉ chi tiết).</li>
              <li><code>&lt;select&gt; ... &lt;option&gt;</code>: Danh sách lựa chọn thả xuống (Drop-down list).</li>
              <li><code>&lt;label&gt;</code>: Nhãn chú thích cho ô nhập, liên kết qua thuộc tính <code>for="id_của_input"</code>.</li>
            </ul>
          `,
          codeSnippet: `<label>Chọn tỉnh thành:</label>
<select name="city">
  <option value="dn">Đà Nẵng</option>
  <option value="hn">Hà Nội</option>
  <option value="hcm">TP Hồ Chí Minh</option>
</select>`
        }
      ]
    },
    flashcards: [
      { id: "fc12_1", front: "<form action='...' method='...'>", back: "Thẻ bao bọc toàn bộ biểu mẫu, thu thập dữ liệu và chuyển về máy chủ xử lý.", hint: "Form container" },
      { id: "fc12_2", front: "method='post'", back: "Gửi dữ liệu ngầm bảo mật trong thân HTTP request, dùng khi có mật khẩu hoặc dữ liệu lớn.", hint: "Phương thức POST an toàn" },
      { id: "fc12_3", front: "<input type='password'>", back: "Ô nhập mật khẩu, các ký tự gõ vào được che lại bằng dấu tròn chấm đen để bảo mật.", hint: "Mật khẩu che dấu" },
      { id: "fc12_4", front: "<input type='radio'>", back: "Nút chọn hình tròn chỉ cho phép chọn 1 giá trị duy nhất trong nhóm có cùng thuộc tính name.", hint: "Chọn 1 duy nhất" },
      { id: "fc12_5", front: "<input type='checkbox'>", back: "Hộp kiểm hình vuông cho phép người dùng đánh dấu chọn nhiều mục cùng lúc.", hint: "Chọn nhiều mục" },
      { id: "fc12_6", front: "<textarea> ... </textarea>", back: "Vùng nhập văn bản lớn nhiều dòng (như viết ý kiến, bình luận, bài luận).", hint: "Văn bản nhiều dòng" },
      { id: "fc12_7", front: "<select> và <option>", back: "Tạo hộp danh sách lựa chọn thả xuống (Drop-down select box).", hint: "Danh sách thả xuống" }
    ],
    dragDrop: {
      instruction: "Kéo loại ô nhập (type của input) vào đúng mục đích sử dụng thực tế:",
      pairs: [
        { id: "dd12_1", item: "type='password'", target: "Nhập mã PIN hoặc mật khẩu đăng nhập" },
        { id: "dd12_2", item: "type='radio'", target: "Chọn giới tính (Nam hoặc Nữ) chỉ 1 lựa chọn" },
        { id: "dd12_3", item: "type='checkbox'", target: "Chọn các sở thích (Âm nhạc, Thể thao, Đọc sách)" },
        { id: "dd12_4", item: "<textarea>", target: "Nhập lời nhận xét hoặc đoạn văn bản dài" },
        { id: "dd12_5", item: "type='submit'", target: "Nút bấm gửi dữ liệu form về máy chủ" }
      ]
    },
    fillBlank: [
      {
        id: "fb12_1",
        question: "Cặp thẻ bao quanh toàn bộ các trường nhập dữ liệu của biểu mẫu là gì?",
        template: "<____ action='save.php' method='post'> ... </form>",
        answer: "form",
        explanation: "Thẻ <form> định nghĩa biểu mẫu trên trang web."
      },
      {
        id: "fb12_2",
        question: "Điền giá trị của thuộc tính type để ô nhập che giấu ký tự mật khẩu:",
        template: '<input type="____" name="matkhau">',
        answer: "password",
        explanation: "type='password' che ký tự khi nhập."
      },
      {
        id: "fb12_3",
        question: "Để tạo hộp văn bản cho phép nhập nhiều dòng (như ghi chú, bình luận), ta dùng thẻ gì?",
        template: "<____ rows='4' cols='40'></textarea>",
        answer: "textarea",
        explanation: "<textarea> hỗ trợ nhập văn bản nhiều dòng."
      },
      {
        id: "fb12_4",
        question: "Để các nút radio chỉ được chọn 1 phương án duy nhất, chúng phải có chung thuộc tính gì?",
        template: '<input type="radio" ____="gioitinh" value="Nam">',
        answer: "name",
        explanation: "Các nút radio có cùng thuộc tính 'name' sẽ được nhóm lại để chỉ chọn được 1."
      }
    ],
    quiz: [
      {
        id: "q12_1",
        question: "Thẻ nào trong HTML được dùng để tạo biểu mẫu thu thập thông tin người dùng?",
        options: ["<table>", "<form>", "<input>", "<fieldset>"],
        answer: 1,
        explanation: "<form> là phần tử chứa các trường dữ liệu của biểu mẫu."
      },
      {
        id: "q12_2",
        question: "Phương thức truyền dữ liệu nào trong thẻ <form> được khuyến nghị khi gửi mật khẩu hoặc thông tin nhạy cảm?",
        options: ["method='get'", "method='post'", "method='send'", "method='put'"],
        answer: 1,
        explanation: "POST truyền dữ liệu ẩn trong thân gói tin HTTP, an toàn hơn nhiều so với GET."
      },
      {
        id: "q12_3",
        question: "Để cho phép người dùng chọn một hoặc nhiều sở thích cùng lúc, ta nên dùng phần tử nào?",
        options: [
          "<input type='radio'>",
          "<input type='checkbox'>",
          "<input type='password'>",
          "<input type='submit'>"
        ],
        answer: 1,
        explanation: "Checkbox cho phép người dùng chọn cùng lúc nhiều mục độc lập."
      },
      {
        id: "q12_4",
        question: "Muốn tạo nút bấm để người dùng nộp toàn bộ dữ liệu biểu mẫu về máy chủ, ta đặt type của input là gì?",
        options: ["type='button'", "type='reset'", "type='submit'", "type='send'"],
        answer: 2,
        explanation: "type='submit' là nút gửi form về máy chủ chỉ định ở thuộc tính action."
      },
      {
        id: "q12_5",
        question: "Khi cần cho người dùng nhập một đoạn văn bản dài có nhiều dòng (như ý kiến phản hồi), ta sử dụng thẻ nào?",
        options: [
          "<input type='text'>",
          "<input type='paragraph'>",
          "<textarea>",
          "<select>"
        ],
        answer: 2,
        explanation: "<textarea> cho phép nhập văn bản đa dòng (multiline)."
      },
      {
        id: "q12_6",
        question: "Để tạo một danh sách lựa chọn dạng hộp thả xuống (Drop-down list), ta kết hợp cặp thẻ nào?",
        options: [
          "<select> và <option>",
          "<dropdown> và <item>",
          "<ul> và <li>",
          "<menu> và <choice>"
        ],
        answer: 0,
        explanation: "<select> tạo khung chọn và các thẻ <option> bên trong tạo từng mục chọn."
      },
      {
        id: "q12_7",
        question: "Thuộc tính action trong thẻ <form> có vai trò gì?",
        options: [
          "Quy định hình thức trình bày màu sắc của form",
          "Chỉ định địa chỉ URL của trang máy chủ sẽ tiếp nhận dữ liệu form",
          "Kiểm tra tính đúng đắn của dữ liệu trước khi gửi",
          "Xóa dữ liệu người dùng vừa nhập"
        ],
        answer: 1,
        explanation: "action xác định điểm đến (URL xử lý) của dữ liệu biểu mẫu."
      },
      {
        id: "q12_8",
        question: "Muốn một ô nhập bắt buộc người dùng không được bỏ trống khi bấm nộp form, ta thêm thuộc tính nào?",
        options: ["checked", "disabled", "required", "readonly"],
        answer: 2,
        explanation: "Thuộc tính required buộc người dùng phải điền dữ liệu trước khi nộp form."
      },
      {
        id: "q12_9",
        question: "Để người dùng có thể chọn tệp từ máy tính tải lên form (như ảnh thẻ), ta dùng input type gì?",
        options: ["type='file'", "type='upload'", "type='doc'", "type='attachment'"],
        answer: 0,
        explanation: "<input type='file'> mở hộp thoại chọn tệp tin từ thiết bị người dùng."
      },
      {
        id: "q12_10",
        question: "Thẻ <label> dùng thuộc tính nào để liên kết với thuộc tính id của ô nhập dữ liệu?",
        options: ["target", "for", "to", "name"],
        answer: 1,
        explanation: "Thẻ <label for='id_input'> giúp khi nhấp vào chữ chú thích thì con trỏ tự động nhảy vào ô nhập tương ứng."
      }
    ]
  }
];

// =============================================================================
// DỮ LIỆU ĐỀ KIỂM TRA TỔNG HỢP BÀI 7 - 8 - 9 (TIN HỌC 12 - KẾT NỐI TRI THỨC)
// Cấu trúc chuẩn Đề thi Bộ GD&ĐT:
// - Phần I: 24 câu trắc nghiệm 4 lựa chọn (0.25đ/câu = 6.0 điểm)
// - Phần II: 4 câu trắc nghiệm Đúng/Sai (Mỗi câu 4 ý a,b,c,d = 1.0đ/câu = 4.0 điểm)
//   Quy tắc tính điểm Đúng/Sai: 1 ý đúng = 0.1đ; 2 ý đúng = 0.25đ; 3 ý đúng = 0.5đ; 4 ý đúng = 1.0đ
// Tổng điểm: 10.0 điểm | Thời gian: 45 phút
// =============================================================================

const COMPREHENSIVE_TEST_789 = {
  id: "exam_789",
  code: "KTTH-789",
  title: "Bài kiểm tra tổng hợp kiến thức (Bài 7 - 8 - 9)",
  desc: "Cấu trúc đề kiểm tra đánh giá định kỳ theo chuẩn ma trận Bộ GD&ĐT 2025. Tỉ lệ nhận thức: 40% Nhận biết (NB) : 30% Thông hiểu (TH) : 30% Vận dụng (VD).",
  timeMinutes: 45,
  matrix: {
    ratio: "4:3:3",
    nbPercent: 40,
    thPercent: 30,
    vdPercent: 30,
    part1: { nb: 10, th: 7, vd: 7, total: 24, maxScore: 6.0 },
    part2: { nb: 6, th: 5, vd: 5, total: 16, maxScore: 4.0 },
    totalQuestions: 28,
    totalItems: 40,
    totalScore: 10.0
  },
  part1: [
    // -------------------------------------------------------------
    // PHẦN I - NHÓM 1: 10 CÂU NHẬN BIẾT (NB) - 0.25đ / CÂU
    // -------------------------------------------------------------
    {
      id: "p1_q1",
      level: "NB",
      levelText: "Nhận biết",
      question: "HTML là viết tắt của cụm từ tiếng Anh nào sau đây?",
      options: [
        "HyperText Markup Language",
        "High Technology Modern Language",
        "Hyperlink and Text Management Language",
        "Home Tool Markup Language"
      ],
      answer: 0,
      lesson: "Bài 7",
      explanation: "HTML là viết tắt của HyperText Markup Language (Ngôn ngữ đánh dấu siêu văn bản)."
    },
    {
      id: "p1_q2",
      level: "NB",
      levelText: "Nhận biết",
      question: "Tệp mã nguồn trang web HTML chuẩn thường có phần mở rộng (đuôi tệp) là gì?",
      options: [".doc hoặc .docx", ".html hoặc .htm", ".txt hoặc .pdf", ".exe hoặc .bat"],
      answer: 1,
      lesson: "Bài 7",
      explanation: "Tệp HTML lưu dưới định dạng đuôi .html hoặc .htm."
    },
    {
      id: "p1_q3",
      level: "NB",
      levelText: "Nhận biết",
      question: "Dòng khai báo nào luôn nằm ở vị trí đầu tiên của mọi tài liệu chuẩn HTML5?",
      options: [
        "<!DOCTYPE html>",
        "<html version='5.0'>",
        "<?xml version='1.0'?>",
        "<meta charset='utf-8'>"
      ],
      answer: 0,
      lesson: "Bài 7",
      explanation: "<!DOCTYPE html> thông báo cho trình duyệt biết tài liệu tuân theo chuẩn HTML5."
    },
    {
      id: "p1_q4",
      level: "NB",
      levelText: "Nhận biết",
      question: "Cấu trúc của một tài liệu HTML chuẩn gồm có hai phần chính nằm trong phần tử <html> là gì?",
      options: [
        "<title> và <p>",
        "<head> và <body>",
        "<h1> và <br>",
        "<header> và <footer>"
      ],
      answer: 1,
      lesson: "Bài 7",
      explanation: "Phần tử gốc <html> gồm hai nhánh con chính: <head> (cấu hình, metadata) và <body> (nội dung hiển thị)."
    },
    {
      id: "p1_q5",
      level: "NB",
      levelText: "Nhận biết",
      question: "Để trang web hiển thị đúng tiếng Việt có dấu không bị lỗi phông chữ, ta sử dụng thẻ nào trong phần <head>?",
      options: [
        "<meta charset='utf-8'>",
        "<font lang='vietnamese'>",
        "<style charset='utf-8'>",
        "<lang value='vi'>"
      ],
      answer: 0,
      lesson: "Bài 7",
      explanation: "Thẻ <meta charset='utf-8'> thiết lập bảng mã UTF-8 hỗ trợ tiếng Việt đầy đủ."
    },
    {
      id: "p1_q6",
      level: "NB",
      levelText: "Nhận biết",
      question: "Nội dung nằm trong cặp thẻ nào sau đây sẽ được hiển thị trực tiếp trên màn hình trình duyệt cho người dùng xem?",
      options: ["<head>", "<title>", "<body>", "<meta>"],
      answer: 2,
      lesson: "Bài 7",
      explanation: "Phần tử <body> chứa toàn bộ giao diện và nội dung hiển thị cho người xem."
    },
    {
      id: "p1_q7",
      level: "NB",
      levelText: "Nhận biết",
      question: "Thẻ nào sau đây là 'thẻ đơn' (void element - không có nội dung văn bản bên trong và không có thẻ đóng riêng)?",
      options: ["<p>", "<h1>", "<hr>", "<div>"],
      answer: 2,
      lesson: "Bài 8",
      explanation: "<hr> là thẻ đơn tạo đường kẻ phân cách ngang, không có thẻ đóng riêng."
    },
    {
      id: "p1_q8",
      level: "NB",
      levelText: "Nhận biết",
      question: "Trong các thẻ tiêu đề của HTML, thẻ nào sau đây có cấp độ lớn nhất và quan trọng nhất?",
      options: ["<h1>", "<h3>", "<h5>", "<h6>"],
      answer: 0,
      lesson: "Bài 8",
      explanation: "<h1> là cấp tiêu đề quan trọng nhất và có kích thước hiển thị mặc định lớn nhất."
    },
    {
      id: "p1_q9",
      level: "NB",
      levelText: "Nhận biết",
      question: "Để tạo một danh sách CÓ thứ tự được đánh số (1, 2, 3... hoặc A, B, C...), ta sử dụng cặp thẻ nào?",
      options: ["<ul> ... </ul>", "<ol> ... </ol>", "<dl> ... </dl>", "<list> ... </list>"],
      answer: 1,
      lesson: "Bài 9",
      explanation: "<ol> (Ordered List) dùng để tạo danh sách có thứ tự."
    },
    {
      id: "p1_q10",
      level: "NB",
      levelText: "Nhận biết",
      question: "Thẻ nào trong bảng HTML dùng để biểu diễn một dòng (hàng)?",
      options: ["<td>", "<th>", "<tr>", "<table>"],
      answer: 2,
      lesson: "Bài 9",
      explanation: "<tr> (Table Row) định nghĩa một hàng (dòng) trong bảng."
    },

    // -------------------------------------------------------------
    // PHẦN I - NHÓM 2: 7 CÂU THÔNG HIỂU (TH) - 0.25đ / CÂU
    // -------------------------------------------------------------
    {
      id: "p1_q11",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Về mặt ngữ nghĩa (semantic) trong chuẩn HTML5, điểm khác nhau cơ bản giữa hai thẻ <b> và <strong> là gì?",
      options: [
        "<b> chỉ in đậm về mặt thị giác, còn <strong> nhấn mạnh nội dung mang tính quan trọng",
        "<b> làm chữ in nghiêng, còn <strong> làm chữ in đậm",
        "<strong> chỉ dùng cho tiêu đề, còn <b> chỉ dùng cho đoạn văn",
        "Hai thẻ này hoàn toàn giống nhau không có bất kỳ sự khác biệt nào"
      ],
      answer: 0,
      lesson: "Bài 8",
      explanation: "Thẻ <b> in đậm thuần thị giác, còn thẻ <strong> mang ý nghĩa ngữ nghĩa (semantic) nhấn mạnh tầm quan trọng của nội dung."
    },
    {
      id: "p1_q12",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Khi trình duyệt hiển thị, việc sử dụng thẻ <br> khác với việc kết thúc một đoạn văn <p> ở điểm cơ bản nào?",
      options: [
        "Thẻ <br> chỉ ngắt xuống dòng mới ngay tại vị trí đặt thẻ mà không tạo khoảng đệm lề trên dưới như <p>",
        "Thẻ <br> tự động đổi màu chữ của dòng kế tiếp",
        "Thẻ <br> bắt buộc phải có thẻ đóng </br> đi kèm",
        "Thẻ <br> làm tăng kích thước phông chữ của văn bản"
      ],
      answer: 0,
      lesson: "Bài 8",
      explanation: "Thẻ <br> chỉ đơn thuần đưa con trỏ xuống dòng tiếp theo mà không tạo ra khoảng đệm lề đoạn văn bản (margin) như thẻ <p>."
    },
    {
      id: "p1_q13",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Để định dạng một đoạn văn bản vừa có chữ màu đỏ (red) vừa được căn lề giữa trang, cú pháp thuộc tính style nào sau đây đúng chuẩn CSS?",
      options: [
        "style='color: red; text-align: center;'",
        "style='text-color: red, align: center;'",
        "style='font-color: red; text-center;'",
        "style='color: red & align: middle;'"
      ],
      answer: 0,
      lesson: "Bài 8",
      explanation: "Trong CSS inline: color quy định màu chữ, text-align quy định căn lề, các thuộc tính cách nhau bởi dấu chấm phẩy (;)."
    },
    {
      id: "p1_q14",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Khi hiển thị mặc định trên trình duyệt, ô tiêu đề cột <th> có định dạng khác ô dữ liệu thông thường <td> như thế nào?",
      options: [
        "<th> mặc định có chữ in đậm và căn lề giữa ô, còn <td> in thường và căn lề trái",
        "<th> có màu nền đỏ, còn <td> có màu nền trắng",
        "<th> có đường viền đôi, còn <td> không có đường viền",
        "<th> có chữ in nghiêng và căn lề phải"
      ],
      answer: 0,
      lesson: "Bài 9",
      explanation: "<th> (Table Header) có kiểu hiển thị mặc định là font-weight: bold và text-align: center."
    },
    {
      id: "p1_q15",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Để tạo một danh sách có thứ tự được đánh số bằng các chữ số La Mã viết hoa (I, II, III...), ta thiết lập thuộc tính của thẻ <ol> như thế nào?",
      options: [
        "<ol type='I'>",
        "<ol format='roman'>",
        "<ol style='number: roman;'>",
        "<ul type='I'>"
      ],
      answer: 0,
      lesson: "Bài 9",
      explanation: "Thuộc tính type='I' trong thẻ <ol> quy định đánh số theo chữ số La Mã viết hoa."
    },
    {
      id: "p1_q16",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Trong một bảng HTML, nếu một ô dữ liệu được gán thuộc tính colspan='3', điều này có ý nghĩa gì?",
      options: [
        "Ô này sẽ gộp 3 ô liên tiếp theo chiều ngang (trải rộng qua 3 cột)",
        "Ô này sẽ gộp 3 dòng liên tiếp theo chiều dọc",
        "Ô này sẽ tự động nhân bản nội dung bên trong thành 3 lần",
        "Ô này có kích thước đường viền dày gấp 3 lần bình thường"
      ],
      answer: 0,
      lesson: "Bài 9",
      explanation: "colspan='3' (column span) dùng để gộp ô trải dài qua 3 cột theo chiều ngang."
    },
    {
      id: "p1_q17",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Trong mô hình cây DOM của tài liệu HTML, mối quan hệ giữa thẻ <html>, thẻ <head> và thẻ <body> được mô tả chính xác nhất là gì?",
      options: [
        "<html> là phần tử gốc (cha), còn <head> và <body> là hai phần tử con cùng cấp (anh em) nằm bên trong <html>",
        "<head> là phần tử cha bao bọc cả <html> và <body>",
        "<body> là phần tử gốc chứa toàn bộ <head> và <html>",
        "Cả ba thẻ này hoàn toàn độc lập và không chứa nhau"
      ],
      answer: 0,
      lesson: "Bài 7",
      explanation: "<html> là nút gốc của cây thông tin; <head> và <body> là hai nút nhánh con trực tiếp của <html>."
    },

    // -------------------------------------------------------------
    // PHẦN I - NHÓM 3: 7 CÂU VẬN DỤNG (VD) - 0.25đ / CÂU
    // -------------------------------------------------------------
    {
      id: "p1_q18",
      level: "VD",
      levelText: "Vận dụng",
      question: "Cho đoạn mã định dạng sau:\n<p style='color: red; font-size: 18px; text-align: right;'>Thông báo quan trọng!</p>\nKhi hiển thị trên trình duyệt, dòng chữ sẽ có đặc điểm nào sau đây?",
      options: [
        "Chữ màu đỏ, kích thước 18 pixel và được căn sát lề bên phải trang web",
        "Chữ màu đỏ, kích thước 18 pixel và được căn lề giữa trang web",
        "Chữ màu đen, nền màu đỏ và được căn sát lề bên phải",
        "Tiêu đề in đậm cỡ lớn nhất và căn lề giữa"
      ],
      answer: 0,
      lesson: "Bài 8",
      explanation: "Đoạn mã kết hợp 3 thuộc tính CSS inline: color: red (chữ đỏ), font-size: 18px (cỡ chữ 18px) và text-align: right (căn phải)."
    },
    {
      id: "p1_q19",
      level: "VD",
      levelText: "Vận dụng",
      question: "Một học sinh muốn tạo danh sách có thứ tự gồm các bước ôn thi nhưng muốn bắt đầu đánh số từ số 5 trở đi (5. Bước năm, 6. Bước sáu). Đoạn mã HTML nào sau đây thực hiện chính xác yêu cầu?",
      options: [
        "<ol start='5'> <li>Bước năm</li> <li>Bước sáu</li> </ol>",
        "<ol begin='5'> <li>Bước năm</li> <li>Bước sáu</li> </ol>",
        "<ol count='5'> <li>Bước năm</li> <li>Bước sáu</li> </ol>",
        "<ul start='5'> <li>Bước năm</li> <li>Bước sáu</li> </ul>"
      ],
      answer: 0,
      lesson: "Bài 9",
      explanation: "Thuộc tính start='5' của thẻ <ol> quy định giá trị số bắt đầu đánh số của danh sách."
    },
    {
      id: "p1_q20",
      level: "VD",
      levelText: "Vận dụng",
      question: "Quan sát đoạn mã danh sách đa cấp sau:\n<ul>\n  <li>Khối 12\n    <ol>\n      <li>Lớp 12A1</li>\n      <li>Lớp 12A2</li>\n    </ol>\n  </li>\n</ul>\nCách hiển thị nào sau đây là chính xác trên trình duyệt?",
      options: [
        "Mục 'Khối 12' có dấu đầu dòng (bullet), còn 'Lớp 12A1' và 'Lớp 12A2' được đánh số 1, 2 và lùi lề vào trong",
        "Cả ba mục đều được đánh số thứ tự 1, 2, 3",
        "Cả ba mục đều có dấu chấm tròn đầu dòng",
        "Trình duyệt báo lỗi do không cho phép lồng thẻ <ol> bên trong thẻ <ul>"
      ],
      answer: 0,
      lesson: "Bài 9",
      explanation: "Danh sách <ol> nằm bên trong thẻ <li> của <ul> sẽ tạo danh sách con đa cấp lùi vào trong với số thứ tự 1, 2."
    },
    {
      id: "p1_q21",
      level: "VD",
      levelText: "Vận dụng",
      question: "Cho đoạn mã tạo bảng sau:\n<table border='1'>\n  <tr>\n    <th colspan='2'>Bảng Điểm Lớp 12</th>\n  </tr>\n  <tr>\n    <td>Toán: 9.0</td>\n    <td>Tin học: 10</td>\n  </tr>\n</table>\nNhận xét nào sau đây đúng về cấu trúc hiển thị của bảng trên?",
      options: [
        "Hàng thứ nhất chỉ có 1 ô tiêu đề duy nhất trải rộng bằng bề ngang của cả 2 cột ở hàng thứ hai",
        "Bảng có 2 hàng và mỗi hàng đều hiển thị 2 ô tách biệt độc lập",
        "Ô 'Bảng Điểm Lớp 12' bị kéo dài xuống hàng thứ hai",
        "Bảng bị lỗi cấu trúc do hàng thứ nhất bị thiếu một thẻ <th>"
      ],
      answer: 0,
      lesson: "Bài 9",
      explanation: "Thuộc tính colspan='2' giúp ô tiêu đề ở hàng 1 gộp 2 cột, tạo thành ô tiêu đề chung bao trùm cả 2 cột dữ liệu bên dưới."
    },
    {
      id: "p1_q22",
      level: "VD",
      levelText: "Vận dụng",
      question: "Giáo viên muốn tạo bảng Thời khóa biểu, trong đó tiết 1 và tiết 2 của buổi sáng thứ Hai đều học môn 'Tin học' và muốn gộp hai ô này lại theo chiều dọc thành một ô duy nhất qua 2 dòng. Đoạn mã nào sau đây là đúng?",
      options: [
        "<td rowspan='2'>Tin học</td>",
        "<td colspan='2'>Tin học</td>",
        "<td mergerow='2'>Tin học</td>",
        "<td linespan='2'>Tin học</td>"
      ],
      answer: 0,
      lesson: "Bài 9",
      explanation: "rowspan='2' (row span) gộp 2 ô theo chiều dọc (qua 2 hàng liên tiếp)."
    },
    {
      id: "p1_q23",
      level: "VD",
      levelText: "Vận dụng",
      question: "Đoạn mã HTML nào sau đây tạo ra một tiêu đề cấp 2 có chữ màu xanh lá cây (green) và có một đường kẻ ngang phân cách ngay bên dưới tiêu đề?",
      options: [
        "<h2 style='color: green;'>Chủ đề 4: Web</h2><hr>",
        "<h2 color='green'>Chủ đề 4: Web<hr></h2>",
        "<p style='font-weight: bold; color: green;'><line>Chủ đề 4: Web</line></p>",
        "<h2 style='color: green; border: line;'>Chủ đề 4: Web</h2>"
      ],
      answer: 0,
      lesson: "Bài 8",
      explanation: "Dùng thẻ <h2> với style='color: green;' để tạo tiêu đề cấp 2 màu xanh, kết hợp thẻ đơn <hr> đặt ngay sau để tạo đường kẻ ngang."
    },
    {
      id: "p1_q24",
      level: "VD",
      levelText: "Vận dụng",
      question: "Quan sát đoạn mã HTML sau của một học sinh:\n<p>Chào mừng bạn đến với <b><i>CLB Tin học</b></i> trường tôi.</p>\nĐoạn mã trên vi phạm nguyên tắc cơ bản nào của HTML?",
      options: [
        "Vi phạm nguyên tắc lồng thẻ: thẻ <i> mở sau thẻ <b> nhưng lại đóng sau thẻ <b> (lồng chéo nhau)",
        "Thẻ <i> không được phép đặt bên trong thẻ <b>",
        "Thiếu thuộc tính style bắt buộc cho thẻ đoạn văn <p>",
        "Thẻ <b> không được phép đặt bên trong thẻ <p>"
      ],
      answer: 0,
      lesson: "Bài 7",
      explanation: "Trong HTML, các cặp thẻ phải lồng nhau hoàn chỉnh theo thứ tự LIFO (thẻ nào mở sau phải đóng trước: <b><i>...</i></b>). Việc viết <b><i>...</b></i> là sai cú pháp lồng thẻ."
    }
  ],

  part2: [
    // -------------------------------------------------------------
    // PHẦN II - CÂU 1: CẤU TRÚC TỆP HTML & MÔ HÌNH CÂY THÔNG TIN
    // -------------------------------------------------------------
    {
      id: "p2_q1",
      title: "Câu 1: Về cấu trúc tệp HTML và mô hình cây thông tin",
      context: "Bạn An đang thiết kế trang web đầu tiên cho lớp và viết mã nguồn trong tệp index.html. Trong quá trình học tập, An đưa ra các nhận định sau:",
      items: [
        {
          id: "p2_q1_a",
          label: "a",
          level: "NB",
          levelText: "Nhận biết",
          text: "Khai báo <!DOCTYPE html> là phần tử gốc của trang và bắt buộc phải có thẻ đóng </!DOCTYPE> tương ứng.",
          answer: false,
          explanation: "Sai. <!DOCTYPE html> là lời khai báo kiểu tài liệu (document type declaration), không phải phần tử gốc và là thẻ đơn không có thẻ đóng."
        },
        {
          id: "p2_q1_b",
          label: "b",
          level: "NB",
          levelText: "Nhận biết",
          text: "Toàn bộ nội dung nhìn thấy trên màn hình trình duyệt (tiêu đề bài viết, ảnh, văn bản, bảng) đều phải nằm bên trong cặp thẻ <body> ... </body>.",
          answer: true,
          explanation: "Đúng. Phần tử <body> chứa toàn bộ giao diện và nội dung hiển thị cho người xem."
        },
        {
          id: "p2_q1_c",
          label: "c",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Nội dung trong cặp thẻ <title> ... </title> được hiển thị trên thanh tiêu đề hoặc tab của trình duyệt, không nằm trong vùng hiển thị trang web.",
          answer: true,
          explanation: "Đúng. Thẻ <title> nằm trong <head> dùng để đặt tiêu đề cho tab trình duyệt."
        },
        {
          id: "p2_q1_d",
          label: "d",
          level: "VD",
          levelText: "Vận dụng",
          text: "Khi soạn thảo trang web bằng phần mềm Notepad, nếu bạn An lưu tệp với phần mở rộng là index.txt thì khi mở bằng trình duyệt web, trình duyệt vẫn tự động thông dịch mã nguồn và hiển thị giao diện trang web hoàn chỉnh.",
          answer: false,
          explanation: "Sai. Tệp có đuôi .txt sẽ chỉ được xem như văn bản thuần túy và trình duyệt sẽ hiển thị toàn bộ mã nguồn thô chứ không thông dịch thành trang web HTML."
        }
      ]
    },

    // -------------------------------------------------------------
    // PHẦN II - CÂU 2: ĐỊNH DẠNG VĂN BẢN VÀ THUỘC TÍNH STYLE
    // -------------------------------------------------------------
    {
      id: "p2_q2",
      title: "Câu 2: Về định dạng văn bản và thuộc tính style trong HTML",
      context: "Khi thực hành định dạng văn bản cho một bài viết giới thiệu trường học, nhóm học sinh thảo luận về các thẻ và thuộc tính CSS inline:",
      items: [
        {
          id: "p2_q2_a",
          label: "a",
          level: "NB",
          levelText: "Nhận biết",
          text: "Thẻ <hr> là một thẻ đơn dùng để tạo đường kẻ ngang phân tách các phần nội dung trên trang web.",
          answer: true,
          explanation: "Đúng. <hr> (Horizontal Rule) là thẻ đơn tạo đường phân cách ngang."
        },
        {
          id: "p2_q2_b",
          label: "b",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Thẻ <br> được sử dụng để ngắt xuống dòng mới ngay tại vị trí đặt thẻ mà không tạo ra khoảng đệm lề trên dưới như thẻ đoạn văn <p>.",
          answer: true,
          explanation: "Đúng. Thẻ <br> chỉ đơn thuần đưa con trỏ xuống dòng mới."
        },
        {
          id: "p2_q2_c",
          label: "c",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Hai cặp thẻ <b> và <strong> hoàn toàn giống nhau về mặt ngữ nghĩa trong HTML5, không có bất kỳ sự khác biệt nào.",
          answer: false,
          explanation: "Sai. Thẻ <b> chỉ in đậm về mặt thị giác, còn thẻ <strong> mang ý nghĩa ngữ nghĩa (semantic) nhấn mạnh tầm quan trọng của nội dung."
        },
        {
          id: "p2_q2_d",
          label: "d",
          level: "VD",
          levelText: "Vận dụng",
          text: "Đoạn mã: <h2 style='color: blue; text-align: center;'>Giới thiệu</h2> sẽ tạo tiêu đề cấp 2 có chữ màu xanh dương và được căn lề giữa trang.",
          answer: true,
          explanation: "Đúng. color: blue đặt màu chữ xanh, text-align: center căn giữa."
        }
      ]
    },

    // -------------------------------------------------------------
    // PHẦN II - CÂU 3: DANH SÁCH CÓ THỨ TỰ VÀ KHÔNG THỨ TỰ
    // -------------------------------------------------------------
    {
      id: "p2_q3",
      title: "Câu 3: Về danh sách có thứ tự và không thứ tự trong HTML",
      context: "Để tạo mục lục danh sách các môn học và phân ban cho khối 12, một nhóm học sinh sử dụng các thẻ danh sách HTML:",
      items: [
        {
          id: "p2_q3_a",
          label: "a",
          level: "NB",
          levelText: "Nhận biết",
          text: "Mỗi mục con bên trong danh sách <ol> hoặc <ul> bắt buộc phải được bao bọc trong cặp thẻ <li> ... </li>.",
          answer: true,
          explanation: "Đúng. Thẻ <li> (List Item) là phần tử chứa từng mục con của cả <ol> và <ul>."
        },
        {
          id: "p2_q3_b",
          label: "b",
          level: "NB",
          levelText: "Nhận biết",
          text: "Thuộc tính type trong thẻ <ol> có thể nhận các giá trị như '1', 'a', 'A', 'i', 'I' để thay đổi kiểu đánh số thứ tự cho các mục.",
          answer: true,
          explanation: "Đúng. Thuộc tính type của <ol> cho phép đánh số 1, 2, 3.. chữ cái a, b, c.. hoặc chữ số La Mã I, II, III.."
        },
        {
          id: "p2_q3_c",
          label: "c",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Khi thiết lập thuộc tính start='5' trong thẻ <ol>, danh sách sẽ bắt đầu đánh số từ số 5 trở đi.",
          answer: true,
          explanation: "Đúng. Thuộc tính start xác định giá trị bắt đầu đếm của danh sách có thứ tự."
        },
        {
          id: "p2_q3_d",
          label: "d",
          level: "VD",
          levelText: "Vận dụng",
          text: "HTML hoàn toàn cho phép lồng một danh sách con <ol> vào bên trong một mục <li> của danh sách <ul> để tạo mục lục đa cấp phân cấp rõ ràng.",
          answer: true,
          explanation: "Đúng. HTML cho phép lồng danh sách đa cấp bằng cách đặt danh sách con bên trong thẻ <li> của danh sách cha."
        }
      ]
    },

    // -------------------------------------------------------------
    // PHẦN II - CÂU 4: CẤU TRÚC BẢNG VÀ KỸ THUẬT GỘP Ô
    // -------------------------------------------------------------
    {
      id: "p2_q4",
      title: "Câu 4: Về cấu trúc bảng và kỹ thuật gộp ô trong HTML",
      context: "Quan sát bảng Thời khóa biểu thực tế được trình duyệt hiển thị như bên dưới. Dựa vào quan sát cấu trúc bảng và các ô gộp, em hãy xác định tính Đúng/Sai của các phát biểu sau:",
      tablePreview: `<div class="exam-table-preview-box">
  <table class="exam-demo-table">
    <caption>BẢNG THỜI KHÓA BIỂU BUỔI SÁNG LỚP 12A1</caption>
    <thead>
      <tr>
        <th style="width: 80px;">Tiết</th>
        <th>Thứ Hai</th>
        <th>Thứ Ba</th>
        <th>Thứ Tư</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight: 700;">Tiết 1</td>
        <td rowspan="2" class="cell-merged-v">Chào cờ &amp; SHDC</td>
        <td>Toán</td>
        <td>Ngữ văn</td>
      </tr>
      <tr>
        <td style="font-weight: 700;">Tiết 2</td>
        <td>Toán</td>
        <td>Vật lí</td>
      </tr>
      <tr>
        <td style="font-weight: 700;">Tiết 3</td>
        <td>Tin học</td>
        <td colspan="2" class="cell-merged-h">Thực hành Tin học (Phòng máy)</td>
      </tr>
    </tbody>
  </table>
</div>`,
      items: [
        {
          id: "p2_q4_a",
          label: "a",
          level: "NB",
          levelText: "Nhận biết",
          text: "Để hiển thị dòng chữ 'BẢNG THỜI KHÓA BIỂU BUỔI SÁNG LỚP 12A1' làm tiêu đề phía trên bảng, ta cần sử dụng thẻ <caption> đặt ngay sau thẻ mở <table>.",
          answer: true,
          explanation: "Đúng. Thẻ <caption> dùng để tạo tiêu đề mô tả cho bảng dữ liệu trong HTML."
        },
        {
          id: "p2_q4_b",
          label: "b",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Ô 'Thực hành Tin học (Phòng máy)' ở Tiết 3 đang trải rộng qua 2 cột Thứ Ba và Thứ Tư, do đó trong mã nguồn ô này được thiết lập thuộc tính rowspan='2'.",
          answer: false,
          explanation: "Sai. Ô này gộp qua 2 cột theo chiều ngang nên phải sử dụng thuộc tính colspan='2', còn rowspan dùng để gộp theo chiều dọc (qua nhiều dòng)."
        },
        {
          id: "p2_q4_c",
          label: "c",
          level: "VD",
          levelText: "Vận dụng",
          text: "Do ô 'Chào cờ & SHDC' ở cột Thứ Hai đã sử dụng thuộc tính rowspan='2', nên trong thẻ <tr> của Tiết 2 chỉ cần viết đúng 3 thẻ <td> (cho Tiết 2, Toán, Vật lí) là bảng vẫn đủ 4 cột cân đối.",
          answer: true,
          explanation: "Đúng. Dòng Tiết 2 không cần thẻ <td> cho cột Thứ Hai nữa vì ô ở dòng trên đã chiếm chỗ qua thuộc tính rowspan='2'."
        },
        {
          id: "p2_q4_d",
          label: "d",
          level: "VD",
          levelText: "Vận dụng",
          text: "Để xây dựng toàn bộ cấu trúc bảng hiển thị như trên (bao gồm cả dòng tiêu đề cột và 3 dòng tiết học), tổng số cặp thẻ <tr> ... </tr> cần viết trong mã nguồn là 4 cặp thẻ.",
          answer: true,
          explanation: "Đúng. Bảng gồm 1 dòng tiêu đề cột (chứa <th>) và 3 dòng tiết học dữ liệu (chứa <td>), tổng cộng cần đúng 4 cặp thẻ <tr> ... </tr>."
        }
      ]
    }
  ]
};

// Danh sách tài khoản học sinh mẫu ban đầu (Giáo viên có thể thêm/import tùy ý)
// =============================================================================
// ĐỀ KIỂM TRA ĐÁNH GIÁ ĐỊNH KỲ TỔNG HỢP KIẾN THỨC (BÀI 10 - 11 - 12)
// Chuẩn cấu trúc ma trận Bộ Giáo dục & Đào tạo 2025
// Tỉ lệ nhận thức: 40% Nhận biết (NB) : 30% Thông hiểu (TH) : 30% Vận dụng (VD)
// Tổng thời gian: 45 phút | Thang điểm: 10.0
// Phần I: 24 câu trắc nghiệm nhiều lựa chọn (6.0 điểm)
// Phần II: 4 câu trắc nghiệm Đúng/Sai (16 lệnh hỏi - 4.0 điểm)
// =============================================================================

const COMPREHENSIVE_TEST_101112 = {
  id: "exam_101112",
  code: "KTTH-101112",
  title: "Bài kiểm tra tổng hợp kiến thức (Bài 10 - 11 - 12)",
  desc: "Cấu trúc đề kiểm tra đánh giá định kỳ theo chuẩn ma trận Bộ GD&ĐT 2025. Tỉ lệ nhận thức: 40% Nhận biết (NB) : 30% Thông hiểu (TH) : 30% Vận dụng (VD).",
  timeMinutes: 45,
  matrix: {
    ratio: "4:3:3",
    nbPercent: 40,
    thPercent: 30,
    vdPercent: 30,
    part1: { nb: 10, th: 7, vd: 7, total: 24, maxScore: 6.0 },
    part2: { nb: 6, th: 5, vd: 5, total: 16, maxScore: 4.0 },
    totalQuestions: 28,
    totalItems: 40,
    totalScore: 10.0
  },
  part1: [
    // -------------------------------------------------------------
    // PHẦN I - NHÓM 1: 10 CÂU NHẬN BIẾT (NB) - 0.25đ / CÂU
    // -------------------------------------------------------------
    {
      id: "p1_q1",
      level: "NB",
      levelText: "Nhận biết",
      question: "Trong ngôn ngữ HTML, phần tử nào sau đây được sử dụng để tạo siêu liên kết (hyperlink)?",
      options: [
        "Thẻ <a>",
        "Thẻ <link>",
        "Thẻ <href>",
        "Thẻ <hyperlink>"
      ],
      answer: 0,
      lesson: "Bài 10",
      explanation: "Thẻ <a> (Anchor) là phần tử chuẩn trong HTML dùng để tạo siêu liên kết kết nối các trang web hoặc vị trí trên trang."
    },
    {
      id: "p1_q2",
      level: "NB",
      levelText: "Nhận biết",
      question: "Trong thẻ <a>, thuộc tính nào là bắt buộc để chỉ định địa chỉ URL của tài nguyên hoặc trang web đích?",
      options: [
        "src",
        "href",
        "target",
        "title"
      ],
      answer: 1,
      lesson: "Bài 10",
      explanation: "Thuộc tính href (Hypertext Reference) dùng để xác định đường dẫn đích mà người dùng sẽ chuyển đến khi nhấp chuột."
    },
    {
      id: "p1_q3",
      level: "NB",
      levelText: "Nhận biết",
      question: "Để yêu cầu trình duyệt mở trang web liên kết trong một tab (thẻ) mới hoặc cửa sổ mới, ta thiết lập giá trị nào cho thuộc tính target?",
      options: [
        "target='_self'",
        "target='_blank'",
        "target='_parent'",
        "target='_newtab'"
      ],
      answer: 1,
      lesson: "Bài 10",
      explanation: "Giá trị target='_blank' chỉ định trình duyệt mở trang đích trong một tab hoặc cửa sổ mới độc lập."
    },
    {
      id: "p1_q4",
      level: "NB",
      levelText: "Nhận biết",
      question: "Để tạo liên kết nội bộ nhảy đến một vị trí có định danh id='lienhe' trong cùng một trang web, thuộc tính href được viết như thế nào?",
      options: [
        "href='lienhe'",
        "href='#lienhe'",
        "href='.lienhe'",
        "href='//lienhe'"
      ],
      answer: 1,
      lesson: "Bài 10",
      explanation: "Liên kết nội bộ (Neo - Anchor) bắt đầu bằng ký tự dấu thăng (#) đi liền trước tên định danh id của vị trí đích: href='#lienhe'."
    },
    {
      id: "p1_q5",
      level: "NB",
      levelText: "Nhận biết",
      question: "Thẻ HTML nào sau đây được sử dụng để chèn hình ảnh vào nội dung trang web?",
      options: [
        "Thẻ <image>",
        "Thẻ <picture>",
        "Thẻ <img>",
        "Thẻ <figure>"
      ],
      answer: 2,
      lesson: "Bài 11",
      explanation: "Trong chuẩn HTML, thẻ <img> là thẻ đơn (void element) chuyên dụng để chèn và hiển thị hình ảnh."
    },
    {
      id: "p1_q6",
      level: "NB",
      levelText: "Nhận biết",
      question: "Trong thẻ <img>, thuộc tính nào cung cấp văn bản thay thế khi hình ảnh bị lỗi không tải được hoặc hỗ trợ người khiếm thị dùng phần mềm đọc màn hình?",
      options: [
        "title",
        "alt",
        "src",
        "desc"
      ],
      answer: 1,
      lesson: "Bài 11",
      explanation: "Thuộc tính alt (Alternative Text) cung cấp văn bản mô tả thay thế hiển thị khi tệp hình ảnh không tải được."
    },
    {
      id: "p1_q7",
      level: "NB",
      levelText: "Nhận biết",
      question: "Để hiển thị thanh điều khiển (nút Phát/Tạm dừng, thanh trượt thời gian, nút tăng giảm âm lượng) cho tệp âm thanh hoặc video, ta cần thêm thuộc tính nào?",
      options: [
        "controls",
        "autoplay",
        "loop",
        "playback"
      ],
      answer: 0,
      lesson: "Bài 11",
      explanation: "Thuộc tính controls (thuộc tính boolean) kích hoạt thanh điều khiển phát đa phương tiện của trình duyệt."
    },
    {
      id: "p1_q8",
      level: "NB",
      levelText: "Nhận biết",
      question: "Phần tử nào sau đây cho phép nhúng một trang web khác, bản đồ Google Maps hoặc video YouTube vào một khung hiển thị bên trong trang hiện tại?",
      options: [
        "<iframe>",
        "<embed>",
        "<frame>",
        "<object>"
      ],
      answer: 0,
      lesson: "Bài 11",
      explanation: "Thẻ <iframe> (Inline Frame - Khung nội tuyến) được sử dụng để nhúng nội dung từ một trang web bên ngoài vào trang hiện tại."
    },
    {
      id: "p1_q9",
      level: "NB",
      levelText: "Nhận biết",
      question: "Phần tử nào là phần tử bao bọc toàn bộ các trường nhập liệu và nút bấm của một biểu mẫu thu thập dữ liệu người dùng?",
      options: [
        "<input>",
        "<form>",
        "<table>",
        "<fieldset>"
      ],
      answer: 1,
      lesson: "Bài 12",
      explanation: "Thẻ <form> định nghĩa một biểu mẫu HTML dùng để thu thập thông tin người dùng gửi về máy chủ."
    },
    {
      id: "p1_q10",
      level: "NB",
      levelText: "Nhận biết",
      question: "Trong thẻ <input>, giá trị nào của thuộc tính type được sử dụng để tạo ô nhập văn bản một dòng thông thường?",
      options: [
        "type='text'",
        "type='password'",
        "type='textarea'",
        "type='string'"
      ],
      answer: 0,
      lesson: "Bài 12",
      explanation: "Cú pháp <input type='text'> tạo một trường nhập văn bản ngắn một dòng (mặc định nếu không chỉ định type)."
    },

    // -------------------------------------------------------------
    // PHẦN I - NHÓM 2: 7 CÂU THÔNG HIỂU (TH) - 0.25đ / CÂU
    // -------------------------------------------------------------
    {
      id: "p1_q11",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Phát biểu nào sau đây phân biệt chính xác nhất giữa đường dẫn tuyệt đối và đường dẫn tương đối?",
      options: [
        "Đường dẫn tuyệt đối chứa đầy đủ giao thức (https://) và tên miền; đường dẫn tương đối xác định vị trí tệp đích dựa trên vị trí tệp hiện tại.",
        "Đường dẫn tuyệt đối chỉ áp dụng cho tệp hình ảnh; đường dẫn tương đối chỉ áp dụng cho siêu liên kết văn bản.",
        "Đường dẫn tương đối bắt buộc người dùng phải có kết nối mạng Internet mới hoạt động được.",
        "Đường dẫn tuyệt đối luôn bắt đầu bằng ký hiệu '../' để quay về thư mục cha."
      ],
      answer: 0,
      lesson: "Bài 10",
      explanation: "Đường dẫn tuyệt đối chứa đầy đủ địa chỉ web (URL) bao gồm giao thức và tên miền. Đường dẫn tương đối chỉ ra vị trí quan hệ giữa các tệp trong cùng một thư mục hoặc hệ thống tệp."
    },
    {
      id: "p1_q12",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Để biến một hình ảnh logo 'logo.png' thành một nút bấm có thể nhấp chuột để chuyển hướng về trang chủ 'index.html', đoạn mã HTML nào sau đây là đúng chuẩn?",
      options: [
        "<a href='index.html'><img src='logo.png' alt='Logo'></a>",
        "<img src='logo.png' href='index.html' alt='Logo'>",
        "<a src='logo.png'><img href='index.html'></a>",
        "<link src='logo.png' url='index.html'>"
      ],
      answer: 0,
      lesson: "Bài 10",
      explanation: "Để biến hình ảnh thành liên kết, ta đặt phần tử <img> vào bên trong cặp thẻ <a> ... </a> với thuộc tính href chỉ định trang đích."
    },
    {
      id: "p1_q13",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Một bức ảnh có kích thước gốc là 800 × 600 px. Trong thẻ <img>, nếu lập trình viên chỉ thiết lập width='400' và không khai báo thuộc tính height, trình duyệt sẽ hiển thị chiều cao của ảnh là bao nhiêu?",
      options: [
        "600 px",
        "300 px",
        "400 px",
        "200 px"
      ],
      answer: 1,
      lesson: "Bài 11",
      explanation: "Khi chỉ đặt 1 trong 2 thuộc tính (width hoặc height), trình duyệt sẽ tự động tính toán chiều còn lại theo đúng tỷ lệ gốc: 400 × (600 / 800) = 300 px, giúp ảnh không bị biến dạng."
    },
    {
      id: "p1_q14",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Để âm thanh hoặc video tự động phát lặp lại liên tục từ đầu ngay sau khi phát hết bài, ta cần bổ sung thuộc tính nào vào thẻ <audio> hoặc <video>?",
      options: [
        "repeat",
        "loop",
        "replay",
        "restart"
      ],
      answer: 1,
      lesson: "Bài 11",
      explanation: "Thuộc tính loop trong thẻ <audio> và <video> có chức năng yêu cầu trình duyệt tự động lặp lại tệp đa phương tiện vô hạn."
    },
    {
      id: "p1_q15",
      level: "TH",
      levelText: "Thông hiểu",
      question: "So sánh giữa trường chọn type='radio' và type='checkbox' trong biểu mẫu HTML, phát biểu nào sau đây là đúng?",
      options: [
        "Radio cho phép chọn duy nhất 1 mục trong một nhóm; Checkbox cho phép người dùng chọn một hoặc nhiều mục cùng lúc.",
        "Radio chỉ dùng để nhập chữ; Checkbox chỉ dùng để nhập số liệu.",
        "Checkbox chỉ dùng để gửi dữ liệu về máy chủ; Radio dùng để xóa trắng biểu mẫu.",
        "Radio không cần đặt tên name; Checkbox bắt buộc các ô phải có cùng name mới hoạt động."
      ],
      answer: 0,
      lesson: "Bài 12",
      explanation: "Radio button (nút chọn một) chỉ cho phép chọn 1 mục duy nhất trong nhóm có cùng name. Checkbox (hộp kiểm) cho phép tích chọn nhiều mục độc lập."
    },
    {
      id: "p1_q16",
      level: "TH",
      levelText: "Thông hiểu",
      question: "So sánh hai phương thức truyền dữ liệu method='get' và method='post' trong thẻ <form>, nhận định nào sau đây là chính xác?",
      options: [
        "Phương thức GET đính kèm dữ liệu trực tiếp trên thanh URL; còn POST đóng gói dữ liệu ngầm trong thân HTTP request nên an toàn hơn khi gửi mật khẩu.",
        "Phương thức GET an toàn và bảo mật hơn phương thức POST vì dữ liệu được mã hóa hai lớp.",
        "Phương thức POST không cho phép gửi chuỗi ký tự văn bản có dấu tiếng Việt.",
        "Phương thức GET có thể gửi tệp đính kèm có dung lượng lớn hàng trăm Megabyte mà không giới hạn độ dài."
      ],
      answer: 0,
      lesson: "Bài 12",
      explanation: "GET nối dữ liệu trực tiếp lên URL (query string), dễ bị lộ thông tin và giới hạn độ dài. POST gửi dữ liệu ngầm trong HTTP body, không hiển thị trên URL và phù hợp cho dữ liệu lớn/nhạy cảm."
    },
    {
      id: "p1_q17",
      level: "TH",
      levelText: "Thông hiểu",
      question: "Trong thiết kế biểu mẫu, để khi người dùng nhấp chuột vào dòng chữ mô tả (ví dụ chữ 'Nam') thì nút chọn radio tương ứng tự động được chọn, cặp thuộc tính nào phải có giá trị trùng khớp nhau?",
      options: [
        "Thuộc tính for của thẻ <label> và thuộc tính id của thẻ <input>",
        "Thuộc tính name của thẻ <label> và thuộc tính id của thẻ <input>",
        "Thuộc tính value của thẻ <label> và thuộc tính name của thẻ <input>",
        "Thuộc tính class của thẻ <label> và thuộc tính type của thẻ <input>"
      ],
      answer: 0,
      lesson: "Bài 12",
      explanation: "Thẻ <label for='id_input'> liên kết với ô nhập có id='id_input'. Khi nhấp vào nhãn, tiêu điểm hoặc trạng thái chọn sẽ được chuyển sang ô nhập tương ứng."
    },

    // -------------------------------------------------------------
    // PHẦN I - NHÓM 3: 7 CÂU VẬN DỤNG (VD) - 0.25đ / CÂU
    // -------------------------------------------------------------
    {
      id: "p1_q18",
      level: "VD",
      levelText: "Vận dụng",
      question: "Cấu trúc thư mục website gồm: thư mục gốc chứa tệp index.html và thư mục con 'gioithieu/' chứa tệp 'truong.html'. Từ tệp 'truong.html', cú pháp đường dẫn tương đối nào giúp liên kết quay trở về trang 'index.html'?",
      options: [
        "<a href='../index.html'>Trang chủ</a>",
        "<a href='./index.html'>Trang chủ</a>",
        "<a href='/gioithieu/index.html'>Trang chủ</a>",
        "<a href='#index.html'>Trang chủ</a>"
      ],
      answer: 0,
      lesson: "Bài 10",
      explanation: "Ký hiệu '../' dùng để lùi lên thư mục cha chứa thư mục hiện tại: '../index.html' dẫn từ 'gioithieu/' ra ngoài thư mục gốc."
    },
    {
      id: "p1_q19",
      level: "VD",
      levelText: "Vận dụng",
      question: "Để tạo một đường liên kết trên trang web trường mà khi học sinh chạm/nhấp vào trên điện thoại thông minh sẽ tự động gọi ngay đến số điện thoại đường dây nóng '02363822222', giá trị href nào là đúng?",
      options: [
        "href='tel:02363822222'",
        "href='phone:02363822222'",
        "href='call://02363822222'",
        "href='dial#02363822222'"
      ],
      answer: 0,
      lesson: "Bài 10",
      explanation: "Giao thức 'tel:' là cú pháp chuẩn của HTML để mở ứng dụng quay số gọi điện thoại: <a href='tel:02363822222'>Gọi ngay</a>."
    },
    {
      id: "p1_q20",
      level: "VD",
      levelText: "Vận dụng",
      question: "Cho đoạn mã: <audio controls autoplay muted><source src='sound.mp3' type='audio/mpeg'></audio>. Hiện tượng gì xảy ra khi người dùng truy cập vào trang web trên trình duyệt Google Chrome?",
      options: [
        "Âm thanh tự động phát ngay ở trạng thái tắt tiếng (muted), người dùng muốn nghe âm thanh phải tự bấm bật loa trên thanh điều khiển.",
        "Trình duyệt báo lỗi và ngừng phát do hai thuộc tính controls và autoplay xung đột lẫn nhau.",
        "Âm thanh tự động phát với âm lượng tối đa ngay khi vừa mở trang mà người dùng không thể tắt được.",
        "Trình duyệt tự động tải tệp sound.mp3 về máy tính người dùng mà không phát."
      ],
      answer: 0,
      lesson: "Bài 11",
      explanation: "Do chính sách trải nghiệm người dùng, trình duyệt chặn tự động phát âm thanh có tiếng. Muốn dùng autoplay, lập trình viên phải kết hợp thuộc tính muted (tắt tiếng)."
    },
    {
      id: "p1_q21",
      level: "VD",
      levelText: "Vận dụng",
      question: "Khi nhúng một video bài giảng trực tuyến từ YouTube vào trang web bằng thẻ <iframe>, thuộc tính nào sau đây cho phép người học bấm phóng to xem video toàn màn hình?",
      options: [
        "allowfullscreen",
        "fullscreen='true'",
        "maximize='allow'",
        "screensize='full'"
      ],
      answer: 0,
      lesson: "Bài 11",
      explanation: "Thuộc tính 'allowfullscreen' trong thẻ <iframe> cấp quyền cho phần tử nhúng bên trong được kích hoạt chế độ xem toàn màn hình (Fullscreen API)."
    },
    {
      id: "p1_q22",
      level: "VD",
      levelText: "Vận dụng",
      question: "Trong một form chọn giới tính gồm 2 nút: <input type='radio' name='gt' value='nam'> Nam và <input type='radio' name='gt' value='nu'> Nữ. Nếu người lập trình vô tình đổi thuộc tính name của nút thứ hai thành name='gt2', sự cố nào sẽ xảy ra?",
      options: [
        "Người dùng có thể tích chọn cả hai nút Nam và Nữ cùng một lúc, làm mất tính năng chọn một duy nhất trong nhóm.",
        "Cả hai nút radio đều bị vô hiệu hóa (disabled) không thể nhấn chuột được nữa.",
        "Trình duyệt báo lỗi cú pháp HTML và từ chối tải toàn bộ biểu mẫu.",
        "Hai nút radio bị tự động chuyển đổi thành ô nhập mật khẩu password."
      ],
      answer: 0,
      lesson: "Bài 12",
      explanation: "Các nút radio chỉ thuộc cùng một nhóm lựa chọn duy nhất khi chúng có chung thuộc tính name. Nếu đặt khác name, chúng trở thành hai nhóm độc lập và đều có thể chọn cùng lúc."
    },
    {
      id: "p1_q23",
      level: "VD",
      levelText: "Vận dụng",
      question: "Một trường nhập Email bắt buộc học sinh không được để trống khi nhấn gửi form, đồng thời hiển thị dòng chữ mờ gợi ý 'vidu@gmail.com' khi chưa có dữ liệu. Đoạn mã nào sau đây đáp ứng chuẩn xác các yêu cầu trên?",
      options: [
        "<input type='email' placeholder='vidu@gmail.com' required>",
        "<input type='email' value='vidu@gmail.com' readonly>",
        "<input type='text' title='vidu@gmail.com' disabled>",
        "<input type='email' name='vidu@gmail.com' locked>"
      ],
      answer: 0,
      lesson: "Bài 12",
      explanation: "placeholder tạo chữ mờ gợi ý; required bắt buộc người dùng phải điền thông tin trước khi submit form."
    },
    {
      id: "p1_q24",
      level: "VD",
      levelText: "Vận dụng",
      question: "Khi cần thu thập đoạn ý kiến đóng góp hoặc nội dung bài luận dài nhiều dòng của học sinh trên biểu mẫu khảo sát, phần tử HTML nào sau đây là lựa chọn tối ưu nhất?",
      options: [
        "<textarea name='gopy' rows='6' cols='50'></textarea>",
        "<input type='text' multiline='true' rows='6'>",
        "<select name='gopy' multiple rows='6'></select>",
        "<input type='paragraph' size='50'>"
      ],
      answer: 0,
      lesson: "Bài 12",
      explanation: "Thẻ <textarea> được thiết kế chuyên biệt để nhập văn bản nhiều dòng với kích thước quy định bởi các thuộc tính rows (số dòng) và cols (số ký tự mỗi dòng)."
    }
  ],

  part2: [
    // -------------------------------------------------------------
    // PHẦN II - CÂU 1: KỸ THUẬT TẠO LIÊN KẾT VÀ ĐIỀU HƯỚNG TRANG WEB (BÀI 10)
    // -------------------------------------------------------------
    {
      id: "p2_q1",
      title: "Câu 1: Về kỹ thuật tạo siêu liên kết và điều hướng trang web",
      context: "Khi xây dựng cổng thông tin trường học trực tuyến, nhóm học sinh lớp 12 xây dựng hệ thống siêu liên kết nội bộ và liên kết ngoài. Dựa vào các kiến thức đã học ở Bài 10, em hãy xác định tính Đúng/Sai của các phát biểu sau:",
      items: [
        {
          id: "p2_q1_a",
          label: "a",
          level: "NB",
          levelText: "Nhận biết",
          text: "Thẻ <a> là thẻ đôi, trong đó nội dung nằm giữa thẻ mở <a> và thẻ đóng </a> có thể là văn bản hoặc một phần tử hình ảnh <img> để tạo liên kết hình ảnh.",
          answer: true,
          explanation: "Đúng. Thẻ <a> có thể bao bọc văn bản, nút bấm hoặc hình ảnh <img> để biến chúng thành đối tượng có thể nhấp chuột liên kết."
        },
        {
          id: "p2_q1_b",
          label: "b",
          level: "NB",
          levelText: "Nhận biết",
          text: "Để tạo một liên kết mà khi người dùng nhấp vào sẽ tự động kích hoạt phần mềm gửi thư điện tử mặc định của thiết bị gửi đến địa chỉ ban_giam_hieu@truong.edu.vn, ta thiết lập giá trị thuộc tính href='mailto:ban_giam_hieu@truong.edu.vn'.",
          answer: true,
          explanation: "Đúng. Cú pháp href='mailto:email@address' dùng để mở ứng dụng email mặc định gửi thư tới địa chỉ chỉ định."
        },
        {
          id: "p2_q1_c",
          label: "c",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Tại trang 'tintuc/sukien.html', để tạo liên kết chuyển về tệp 'index.html' nằm ở thư mục cha bên ngoài, ta khai báo thuộc tính href='./index.html'.",
          answer: false,
          explanation: "Sai. Ký hiệu './' chỉ thư mục hiện tại. Muốn nhảy ra ngoài thư mục cha, bắt buộc phải dùng ký hiệu '../index.html'."
        },
        {
          id: "p2_q1_d",
          label: "d",
          level: "VD",
          levelText: "Vận dụng",
          text: "Trong một trang giới thiệu rất dài, tại vị trí tiêu đề cuối trang có đặt thẻ <h3 id='lienhe'>Liên hệ tuyển sinh</h3>, ở đầu trang ta có thể tạo liên kết cuộn nhanh xuống vị trí này bằng đoạn mã <a href='#lienhe'>Chuyển tới Liên hệ</a>.",
          answer: true,
          explanation: "Đúng. Đây là kỹ thuật liên kết nội bộ (Neo - Anchor), sử dụng dấu thăng (#) kết hợp với thuộc tính id của phần tử đích."
        }
      ]
    },

    // -------------------------------------------------------------
    // PHẦN II - CÂU 2: CHÈN VÀ TỐI ƯU HÓA ĐA PHƯƠNG TIỆN (BÀI 11)
    // -------------------------------------------------------------
    {
      id: "p2_q2",
      title: "Câu 2: Về chèn và xử lý tệp đa phương tiện hình ảnh, âm thanh, video",
      context: "Trong bài thực hành số hóa tài nguyên học tập, một học sinh thực hiện chèn hình ảnh, file ghi âm podcast và video phóng sự vào trang web. Em hãy xác định tính Đúng/Sai của các phát biểu kỹ thuật sau:",
      items: [
        {
          id: "p2_q2_a",
          label: "a",
          level: "NB",
          levelText: "Nhận biết",
          text: "Thẻ <img> là thẻ đơn (không có thẻ đóng riêng) và bắt buộc phải có thuộc tính src để trình duyệt biết đường dẫn tệp ảnh cần hiển thị.",
          answer: true,
          explanation: "Đúng. Thẻ <img> là void element, không có nội dung văn bản bên trong và dùng thuộc tính src để nạp tệp ảnh."
        },
        {
          id: "p2_q2_b",
          label: "b",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Các phần tử <audio> và <video> cho phép lồng các thẻ con <source> bên trong nhằm cung cấp nhiều định dạng tệp khác nhau (như .mp4, .webm, .ogg) để trình duyệt tự động lựa chọn định dạng phù hợp nhất mà nó hỗ trợ.",
          answer: true,
          explanation: "Đúng. Thẻ con <source src='...' type='...'> giúp tăng độ tương thích đa trình duyệt cho âm thanh và video."
        },
        {
          id: "p2_q2_c",
          label: "c",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Một tệp hình ảnh có tỷ lệ gốc là 4:3 (kích thước gốc 800 × 600 px). Nếu học sinh thiết lập cùng lúc hai thuộc tính width='400' và height='400' trong thẻ <img>, hình ảnh trên trang vẫn giữ nguyên được tỷ lệ thẩm mỹ gốc ban đầu mà không bị bẹp hay méo mó.",
          answer: false,
          explanation: "Sai. Chiều rộng 400 và chiều cao 400 tạo thành tỷ lệ hình vuông 1:1, trong khi ảnh gốc là 4:3 nên ảnh sẽ bị co bẹp theo chiều ngang hoặc biến dạng méo hình."
        },
        {
          id: "p2_q2_d",
          label: "d",
          level: "VD",
          levelText: "Vận dụng",
          text: "Trên các trình duyệt phổ biến hiện nay, do chính sách bảo vệ trải nghiệm người dùng chống ô nhiễm tiếng ồn, nếu muốn một video tự động phát (autoplay) ngay khi tải trang thì video đó bắt buộc phải được thiết lập kèm thuộc tính tắt tiếng (muted).",
          answer: true,
          explanation: "Đúng. Chính sách Autoplay Policy của Chrome, Edge yêu cầu các video tự động chạy phải có thuộc tính 'muted'."
        }
      ]
    },

    // -------------------------------------------------------------
    // PHẦN II - CÂU 3: NHÚNG KHUNG NỘI TUYẾN IFRAME VÀ TÀI NGUYÊN SỐ (BÀI 11)
    // -------------------------------------------------------------
    {
      id: "p2_q3",
      title: "Câu 3: Về nhúng khung nội tuyến <iframe> và tích hợp dịch vụ số",
      context: "Trang web 'Liên hệ' của Đoàn trường cần tích hợp bản đồ số Google Maps và video phát trực tiếp từ YouTube bằng khung nội tuyến. Dựa vào kiến thức về <iframe>, hãy xác định tính Đúng/Sai của các ý kiến sau:",
      items: [
        {
          id: "p2_q3_a",
          label: "a",
          level: "NB",
          levelText: "Nhận biết",
          text: "Thẻ <iframe> (Inline Frame) dùng để tạo ra một khung hiển thị độc lập, cho phép nhúng một tài liệu HTML hoặc dịch vụ web khác vào bên trong trang hiện tại.",
          answer: true,
          explanation: "Đúng. <iframe> tạo ra một khung ngữ cảnh duyệt web riêng biệt để hiển thị trang web hoặc nội dung bên ngoài."
        },
        {
          id: "p2_q3_b",
          label: "b",
          level: "NB",
          levelText: "Nhận biết",
          text: "Kích thước độ rộng (width) và chiều cao (height) của khung nội tuyến <iframe> có thể được thiết lập bằng đơn vị điểm ảnh pixel (px) hoặc tỷ lệ phần trăm (%).",
          answer: true,
          explanation: "Đúng. Thuộc tính width và height của <iframe> hỗ trợ cả giá trị tuyệt đối pixel và tỷ lệ phần trăm co giãn."
        },
        {
          id: "p2_q3_c",
          label: "c",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Khi nhúng video từ YouTube vào thẻ <iframe>, ta có thể sao chép trực tiếp đường link xem video trên thanh địa chỉ URL dạng 'https://www.youtube.com/watch?v=kY7_h6xM' dán vào thuộc tính src mà khung vẫn hiển thị video bình thường.",
          answer: false,
          explanation: "Sai. YouTube chặn hiển thị các URL dạng /watch do chính sách X-Frame-Options; bắt buộc phải đổi URL sang dạng mã nhúng embed: 'https://www.youtube.com/embed/kY7_h6xM'."
        },
        {
          id: "p2_q3_d",
          label: "d",
          level: "VD",
          levelText: "Vận dụng",
          text: "Để khung bản đồ Google Maps tự động co giãn vừa khít 100% bề rộng màn hình trên cả máy tính lẫn điện thoại thông minh, ta có thể thiết lập thuộc tính width='100%' cho thẻ <iframe>.",
          answer: true,
          explanation: "Đúng. Đặt width='100%' giúp khung <iframe> trở nên linh hoạt (responsive), tự động mở rộng bằng toàn bộ độ rộng phần tử cha chứa nó."
        }
      ]
    },

    // -------------------------------------------------------------
    // PHẦN II - CÂU 4: THIẾT KẾ VÀ XỬ LÝ BIỂU MẪU (FORM) (BÀI 12)
    // -------------------------------------------------------------
    {
      id: "p2_q4",
      title: "Câu 4: Về thiết kế và xử lý dữ liệu biểu mẫu (Form)",
      context: "Quan sát giao diện biểu mẫu Đăng ký thành viên Câu lạc bộ Tin học & STEM được trình duyệt hiển thị trực quan như bên dưới. Dựa vào quan sát các trường thông tin và kiến thức về Form HTML, em hãy xác định tính Đúng/Sai của các phát biểu sau:",
      tablePreview: `<div class="exam-table-preview-box">
  <div style="max-width: 540px; margin: 0 auto; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 1.25rem;">
    <div style="text-align: center; font-weight: 800; font-size: 1rem; color: #1e293b; margin-bottom: 1rem; text-transform: uppercase;">
      📝 ĐĂNG KÝ CÂU LẠC BỘ TIN HỌC &amp; STEM 2026
    </div>
    <div style="margin-bottom: 0.75rem;">
      <label style="display: block; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.25rem;">Họ và tên học sinh (*):</label>
      <input type="text" placeholder="Nhập đầy đủ họ và tên..." style="width: 100%; padding: 0.4rem 0.6rem; border: 1px solid #94a3b8; border-radius: 4px; font-size: 0.88rem; background: #fff;" disabled>
    </div>
    <div style="margin-bottom: 0.75rem;">
      <label style="display: block; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.25rem;">Mật khẩu tài khoản (*):</label>
      <input type="password" value="secret123" style="width: 100%; padding: 0.4rem 0.6rem; border: 1px solid #94a3b8; border-radius: 4px; font-size: 0.88rem; background: #fff;" disabled>
    </div>
    <div style="margin-bottom: 0.75rem;">
      <label style="display: block; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.25rem;">Chi đoàn Lớp:</label>
      <select style="width: 100%; padding: 0.4rem 0.6rem; border: 1px solid #94a3b8; border-radius: 4px; font-size: 0.88rem; background: #fff;" disabled>
        <option>-- Chọn lớp học --</option>
        <option selected>Lớp 12A1</option>
        <option>Lớp 12A2</option>
      </select>
    </div>
    <div style="margin-bottom: 0.75rem;">
      <label style="display: block; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.25rem;">Giới tính:</label>
      <div style="display: flex; gap: 1.5rem; font-size: 0.88rem;">
        <label><input type="radio" checked disabled> Nam</label>
        <label><input type="radio" disabled> Nữ</label>
      </div>
    </div>
    <div style="margin-bottom: 0.75rem;">
      <label style="display: block; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.25rem;">Lĩnh vực yêu thích (chọn nhiều mục):</label>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; font-size: 0.88rem;">
        <label><input type="checkbox" checked disabled> Lập trình Web</label>
        <label><input type="checkbox" checked disabled> Trí tuệ nhân tạo (AI)</label>
        <label><input type="checkbox" disabled> Lắp ráp Robot</label>
      </div>
    </div>
    <div style="margin-bottom: 0.75rem;">
      <label style="display: block; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.25rem;">Nguyện vọng đóng góp:</label>
      <textarea rows="2" placeholder="Ghi chú thêm về bản thân..." style="width: 100%; padding: 0.4rem 0.6rem; border: 1px solid #94a3b8; border-radius: 4px; font-size: 0.88rem; background: #fff;" disabled></textarea>
    </div>
    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1rem;">
      <button type="button" style="padding: 0.4rem 0.9rem; background: #e2e8f0; color: #475569; border: none; border-radius: 4px; font-weight: 600; font-size: 0.85rem;">Nhập lại (Reset)</button>
      <button type="button" style="padding: 0.4rem 1.1rem; background: #4f46e5; color: #fff; border: none; border-radius: 4px; font-weight: 700; font-size: 0.85rem;">Gửi đăng ký (Submit)</button>
    </div>
  </div>
</div>`,
      items: [
        {
          id: "p2_q4_a",
          label: "a",
          level: "NB",
          levelText: "Nhận biết",
          text: "Để tạo danh sách chọn chi đoàn lớp dạng menu thả xuống như trên giao diện, ta sử dụng phần tử <select> kết hợp các phần tử con <option> bên trong.",
          answer: true,
          explanation: "Đúng. Menu thả xuống trong HTML được định nghĩa bằng thẻ <select> và các mục chọn con là <option>."
        },
        {
          id: "p2_q4_b",
          label: "b",
          level: "TH",
          levelText: "Thông hiểu",
          text: "Tại trường 'Lĩnh vực yêu thích' cho phép học sinh tích chọn nhiều mục cùng một lúc, nhóm tác giả phải sử dụng các thẻ <input type='radio'> cho từng mục lựa chọn.",
          answer: false,
          explanation: "Sai. Để cho phép chọn nhiều mục cùng lúc, bắt buộc phải dùng hộp kiểm <input type='checkbox'>. Nút type='radio' chỉ cho phép chọn duy nhất 1 mục trong nhóm."
        },
        {
          id: "p2_q4_c",
          label: "c",
          level: "VD",
          levelText: "Vận dụng",
          text: "Trong biểu mẫu trên có chứa trường nhập thông tin nhạy cảm là 'Mật khẩu tài khoản', do đó ở thẻ mở <form>, thuộc tính phương thức gửi dữ liệu bắt buộc phải thiết lập là method='post' thay vì method='get' để tránh làm lộ mật khẩu trên thanh địa chỉ URL.",
          answer: true,
          explanation: "Đúng. Phương thức POST đóng gói dữ liệu ngầm trong phần thân của yêu cầu HTTP, giúp bảo mật dữ liệu nhạy cảm như mật khẩu tốt hơn nhiều so với GET."
        },
        {
          id: "p2_q4_d",
          label: "d",
          level: "VD",
          levelText: "Vận dụng",
          text: "Nếu nút 'Gửi đăng ký' được viết trong mã nguồn là <input type='reset' value='Gửi đăng ký'>, khi người dùng nhấp vào nút này thì toàn bộ dữ liệu học sinh vừa nhập sẽ được gửi an toàn về máy chủ chỉ định ở thuộc tính action.",
          answer: false,
          explanation: "Sai. Nút có type='reset' chỉ có chức năng xóa trắng toàn bộ dữ liệu đã nhập trên form trở về giá trị mặc định ban đầu. Để gửi dữ liệu về máy chủ, bắt buộc phải dùng nút có type='submit' hoặc <button type='submit'>."
        }
      ]
    }
  ]
};

// Bộ từ điển truy xuất nhanh các bài kiểm tra tổng hợp định kỳ
// =============================================================================
// NGÂN HÀNG ĐỀ THI THỬ TỐT NGHIỆP THPT (CHỦ ĐỀ HTML - HƠN 40 SỞ GD&ĐT)
// Cấu trúc chuẩn Bộ GD&ĐT 2025: 28 câu hỏi (24 câu Phần I + 4 câu Phần II với 16 ý)
// Thời gian 45 phút, Thang điểm 10.0, Chuẩn ma trận 4:3:3 (16 NB : 12 TH : 12 VD)
// =============================================================================

const MOCK_EXAM_METADATA = [
  {
    "id": "exam_mock_grad_1",
    "code": "THI-THU-01",
    "num": 1,
    "title": "Đề thi thử Tốt nghiệp THPT Số 01",
    "desc": "Đề thi chuẩn 28 câu hỏi (24 câu Phần I + 4 câu Phần II), thời gian 45 phút, chuẩn ma trận 4:3:3.",
    "sources": "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    "timeMinutes": 45,
    "totalQuestions": 28,
    "totalItems": 40,
    "ratio": "4:3:3 (16 NB : 12 TH : 12 VD)",
    "maxScore": 10.0
  },
  {
    "id": "exam_mock_grad_2",
    "code": "THI-THU-02",
    "num": 2,
    "title": "Đề thi thử Tốt nghiệp THPT Số 02",
    "desc": "Đề thi chuẩn 28 câu hỏi (24 câu Phần I + 4 câu Phần II), thời gian 45 phút, chuẩn ma trận 4:3:3.",
    "sources": "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    "timeMinutes": 45,
    "totalQuestions": 28,
    "totalItems": 40,
    "ratio": "4:3:3 (16 NB : 12 TH : 12 VD)",
    "maxScore": 10.0
  },
  {
    "id": "exam_mock_grad_3",
    "code": "THI-THU-03",
    "num": 3,
    "title": "Đề thi thử Tốt nghiệp THPT Số 03",
    "desc": "Đề thi chuẩn 28 câu hỏi (24 câu Phần I + 4 câu Phần II), thời gian 45 phút, chuẩn ma trận 4:3:3.",
    "sources": "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    "timeMinutes": 45,
    "totalQuestions": 28,
    "totalItems": 40,
    "ratio": "4:3:3 (16 NB : 12 TH : 12 VD)",
    "maxScore": 10.0
  },
  {
    "id": "exam_mock_grad_4",
    "code": "THI-THU-04",
    "num": 4,
    "title": "Đề thi thử Tốt nghiệp THPT Số 04",
    "desc": "Đề thi chuẩn 28 câu hỏi (24 câu Phần I + 4 câu Phần II), thời gian 45 phút, chuẩn ma trận 4:3:3.",
    "sources": "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    "timeMinutes": 45,
    "totalQuestions": 28,
    "totalItems": 40,
    "ratio": "4:3:3 (16 NB : 12 TH : 12 VD)",
    "maxScore": 10.0
  },
  {
    "id": "exam_mock_grad_5",
    "code": "THI-THU-05",
    "num": 5,
    "title": "Đề thi thử Tốt nghiệp THPT Số 05",
    "desc": "Đề thi chuẩn 28 câu hỏi (24 câu Phần I + 4 câu Phần II), thời gian 45 phút, chuẩn ma trận 4:3:3.",
    "sources": "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    "timeMinutes": 45,
    "totalQuestions": 28,
    "totalItems": 40,
    "ratio": "4:3:3 (16 NB : 12 TH : 12 VD)",
    "maxScore": 10.0
  },
  {
    "id": "exam_mock_grad_6",
    "code": "THI-THU-06",
    "num": 6,
    "title": "Đề thi thử Tốt nghiệp THPT Số 06",
    "desc": "Đề thi chuẩn 28 câu hỏi (24 câu Phần I + 4 câu Phần II), thời gian 45 phút, chuẩn ma trận 4:3:3.",
    "sources": "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    "timeMinutes": 45,
    "totalQuestions": 28,
    "totalItems": 40,
    "ratio": "4:3:3 (16 NB : 12 TH : 12 VD)",
    "maxScore": 10.0
  },
  {
    "id": "exam_mock_grad_7",
    "code": "THI-THU-07",
    "num": 7,
    "title": "Đề thi thử Tốt nghiệp THPT Số 07",
    "desc": "Đề thi chuẩn 28 câu hỏi (24 câu Phần I + 4 câu Phần II), thời gian 45 phút, chuẩn ma trận 4:3:3.",
    "sources": "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    "timeMinutes": 45,
    "totalQuestions": 28,
    "totalItems": 40,
    "ratio": "4:3:3 (16 NB : 12 TH : 12 VD)",
    "maxScore": 10.0
  },
  {
    "id": "exam_mock_grad_8",
    "code": "THI-THU-08",
    "num": 8,
    "title": "Đề thi thử Tốt nghiệp THPT Số 08",
    "desc": "Đề thi chuẩn 28 câu hỏi (24 câu Phần I + 4 câu Phần II), thời gian 45 phút, chuẩn ma trận 4:3:3.",
    "sources": "Tuyển chọn ngẫu nhiên từ hơn 40 Sở GD&ĐT trên toàn quốc",
    "timeMinutes": 45,
    "totalQuestions": 28,
    "totalItems": 40,
    "ratio": "4:3:3 (16 NB : 12 TH : 12 VD)",
    "maxScore": 10.0
  }
];

const MOCK_GRADUATION_BANK = {
  title: "Ngân hàng đề thi thử Tốt nghiệp THPT (Chủ đề HTML)",
  desc: "Tuyển chọn 96 câu trắc nghiệm nhiều lựa chọn và 16 câu Đúng/Sai (64 ý) từ các Sở GD&ĐT trên toàn quốc.",
  provinces: [
    "Tất cả các Sở GD&ĐT",
    "Bộ GD&ĐT (Đề tham khảo)",
    "Sở GD&ĐT Hà Nội",
    "Sở GD&ĐT Nam Định",
    "Sở GD&ĐT Nghệ An",
    "Sở GD&ĐT Ninh Bình",
    "Sở GD&ĐT Đà Nẵng",
    "Sở GD&ĐT Bắc Giang",
    "Sở GD&ĐT Bắc Ninh",
    "Sở GD&ĐT Thái Nguyên",
    "Sở GD&ĐT Quảng Ninh",
    "Sở GD&ĐT Hải Phòng",
    "Sở GD&ĐT Vĩnh Phúc",
    "THPT Hưng Hóa (Phú Thọ)",
    "Sở GD&ĐT Thanh Hóa",
    "Sở GD&ĐT Hà Tĩnh",
    "Sở GD&ĐT Thừa Thiên Huế",
    "Sở GD&ĐT Quảng Nam",
    "Sở GD&ĐT Bình Định",
    "Sở GD&ĐT Gia Lai",
    "Sở GD&ĐT Quảng Ngãi",
    "Sở GD&ĐT Phú Yên",
    "Sở GD&ĐT TP. Hồ Chí Minh",
    "Sở GD&ĐT Cần Thơ",
    "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "Sở GD&ĐT Bình Thuận",
    "Sở GD&ĐT Vĩnh Long",
    "Sở GD&ĐT An Giang",
    "Sở GD&ĐT Lâm Đồng"
],
  exams: MOCK_EXAM_METADATA,
  questionsP1: [
  {
    "id": "mg_p1_01",
    "source": "Đề Tham Khảo Bộ GD&ĐT",
    "province": "Bộ GD&ĐT",
    "topic": "Định dạng văn bản & Thẻ HTML",
    "level": "NB",
    "question": "Cặp thẻ HTML nào sau đây được sử dụng để nhấn mạnh văn bản quan trọng bằng cách hiển thị chữ in đậm?",
    "options": [
      "<important> </important>",
      "<strong> </strong>",
      "<mark> </mark>",
      "<em> </em>"
    ],
    "answer": 1,
    "explanation": "Trong chuẩn HTML5, thẻ <strong> được sử dụng để xác định văn bản có mức độ quan trọng cao và trình duyệt mặc định hiển thị in đậm.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_001"
  },
  {
    "id": "mg_p1_02",
    "source": "Đề Tham Khảo Bộ GD&ĐT",
    "province": "Bộ GD&ĐT",
    "topic": "Định dạng CSS",
    "level": "TH",
    "question": "Trong ngôn ngữ CSS, thuộc tính nào sau đây được sử dụng để thiết lập kiểu đường viền (như nét liền, nét đứt, chấm tròn) cho một phần tử?",
    "options": [
      "border-style",
      "border-width",
      "border-color",
      "outline-style"
    ],
    "answer": 0,
    "explanation": "Thuộc tính border-style quy định kiểu hiển thị của đường viền (solid, dashed, dotted, double...).",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu",
    "globalId": "bank_p1_002"
  },
  {
    "id": "mg_p1_03",
    "source": "Đề Tham Khảo Bộ GD&ĐT",
    "province": "Bộ GD&ĐT",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Phần mềm nào sau đây thường được sử dụng phổ biến và thuận tiện nhất để lập trình, soạn thảo mã nguồn HTML?",
    "options": [
      "Microsoft Word",
      "Adobe Photoshop",
      "Visual Studio Code (hoặc Notepad++)",
      "Google Chrome"
    ],
    "answer": 2,
    "explanation": "Visual Studio Code, Notepad++, Sublime Text là các trình biên soạn mã nguồn (code editor) chuyên dụng cho lập trình web.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_003"
  },
  {
    "id": "mg_p1_04",
    "source": "Sở GD&ĐT Hà Nội",
    "province": "Hà Nội",
    "topic": "Định dạng CSS",
    "level": "VD",
    "question": "Để tạo đường viền màu xanh dương (blue), nét liền (solid), dày 1px và cỡ chữ 13px cho toàn bộ nội dung phần thân trang web, cú pháp CSS nào sau đây là chính xác?",
    "options": [
      "body {border = 1px solid blue; font-size: 13px;}",
      "body {border: solid blue 1px; font-weight: 13px;}",
      "body {border: 1px solid blue; font-size: 13px;}",
      "body {border: 1px dashed blue; font-size: 13px;}"
    ],
    "answer": 2,
    "explanation": "Cú pháp CSS chuẩn sử dụng dấu hai chấm giữa tên thuộc tính và giá trị, kết thúc bằng dấu chấm phẩy: border: 1px solid blue; font-size: 13px;.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng",
    "globalId": "bank_p1_004"
  },
  {
    "id": "mg_p1_05",
    "source": "Sở GD&ĐT Hà Nội",
    "province": "Hà Nội",
    "topic": "Định dạng CSS",
    "level": "NB",
    "question": "Trong CSS, thuộc tính nào sau đây được sử dụng để thiết lập màu sắc của chữ (văn bản)?",
    "options": [
      "font-color",
      "color",
      "text-color",
      "background-color"
    ],
    "answer": 1,
    "explanation": "Trong CSS, thuộc tính 'color' quy định màu chữ, còn 'background-color' quy định màu nền.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_005"
  },
  {
    "id": "mg_p1_06",
    "source": "Sở GD&ĐT Hà Nội",
    "province": "Hà Nội",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Khi thiết kế biểu mẫu đăng nhập gồm tên đăng nhập và mật khẩu, thuộc tính nào của thẻ <form> quy định địa chỉ trang hoặc tập lệnh máy chủ sẽ tiếp nhận xử lý thông tin gửi lên?",
    "options": [
      "method",
      "action",
      "target",
      "enctype"
    ],
    "answer": 1,
    "explanation": "Thuộc tính action='URL' chỉ định địa chỉ máy chủ xử lý dữ liệu biểu mẫu khi người dùng nhấn gửi.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu",
    "globalId": "bank_p1_006"
  },
  {
    "id": "mg_p1_07",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Thuộc tính nào sau đây của thẻ <img> trong HTML xác định văn bản thay thế hiển thị khi hình ảnh không tải được?",
    "options": [
      "alt",
      "title",
      "text",
      "error"
    ],
    "answer": 0,
    "explanation": "alt (Alternative text) cung cấp văn bản thay thế khi hình ảnh bị lỗi hoặc cho người khiếm thị dùng trình đọc màn hình.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_007"
  },
  {
    "id": "mg_p1_08",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "question": "Cho đoạn mã sau: <form action='xuly.php' method='POST'><input name='hoten'><button type='submit'>Gửi</button></form>. Tên tệp nhận dữ liệu và phương thức truyền tải là gì?",
    "options": [
      "xuly.php và phương thức button",
      "hoten và phương thức POST",
      "xuly.php và phương thức POST",
      "hoten và phương thức submit"
    ],
    "answer": 2,
    "explanation": "Tệp máy chủ nhận xử lý là 'xuly.php' (ở thuộc tính action) và phương thức truyền dữ liệu là 'POST' (ở thuộc tính method).",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng",
    "globalId": "bank_p1_008"
  },
  {
    "id": "mg_p1_09",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "topic": "Định dạng CSS",
    "level": "TH",
    "question": "Đoạn mã CSS nào dưới đây thiết lập màu chữ xanh (blue) cho toàn bộ nội dung nằm bên trong các thẻ đoạn văn <p> trên trang web?",
    "options": [
      "p = color: blue;",
      "p ( color: blue )",
      "p { color = blue; }",
      "p { color: blue; }"
    ],
    "answer": 3,
    "explanation": "Cú pháp CSS đúng: bộ chọn phần tử p { color: blue; }.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu",
    "globalId": "bank_p1_009"
  },
  {
    "id": "mg_p1_10",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Trong tài liệu HTML, cặp thẻ nào sau đây được sử dụng để bao quanh toàn bộ nội dung chính của trang web mà người dùng nhìn thấy trên màn hình trình duyệt?",
    "options": [
      "<head> ... </head>",
      "<title> ... </title>",
      "<body> ... </body>",
      "<html> ... </html>"
    ],
    "answer": 2,
    "explanation": "Phần tử <body> chứa tất cả các phần tử giao diện hiển thị cho người dùng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_010"
  },
  {
    "id": "mg_p1_11",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Định dạng văn bản & Thẻ HTML",
    "level": "NB",
    "question": "Trong HTML, thẻ nào sau đây được sử dụng để bắt đầu một đoạn văn bản mới?",
    "options": [
      "<h1>",
      "<br>",
      "<p>",
      "<a>"
    ],
    "answer": 2,
    "explanation": "Thẻ <p> (Paragraph) dùng để định nghĩa một đoạn văn bản.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_011"
  },
  {
    "id": "mg_p1_12",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Tệp nguồn chứa mã HTML thường được lưu với phần mở rộng chuẩn nào sau đây?",
    "options": [
      ".doc hoặc .docx",
      ".txt hoặc .pdf",
      ".html hoặc .htm",
      ".css hoặc .js"
    ],
    "answer": 2,
    "explanation": "Mã nguồn trang web HTML được lưu dưới định dạng tệp .html hoặc .htm.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_012"
  },
  {
    "id": "mg_p1_13",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Siêu liên kết",
    "level": "VD",
    "question": "Một website có cấu trúc: thư mục gốc chứa trang index.html và thư mục con 'tintuc' chứa trang 'sukien.html'. Để tạo liên kết từ 'sukien.html' quay về 'index.html', cú pháp nào đúng?",
    "options": [
      "<a href='index.html'>Trang chủ</a>",
      "<a href='../index.html'>Trang chủ</a>",
      "<a href='/tintuc/index.html'>Trang chủ</a>",
      "<a href='./index.html'>Trang chủ</a>"
    ],
    "answer": 1,
    "explanation": "Ký hiệu '../' biểu thị việc di chuyển lên thư mục cha chứa thư mục hiện tại.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng",
    "globalId": "bank_p1_013"
  },
  {
    "id": "mg_p1_14",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "question": "Khi xây dựng trang web giới thiệu hoạt động ngoại khóa, tệp HTML và tệp hình ảnh có tên 'Hoatdong1.jpg' được lưu trong cùng một thư mục. Đoạn mã HTML nào phù hợp nhất để chèn ảnh?",
    "options": [
      "<img src='Hoatdong1.jpg' alt='Hoạt động 1'>",
      "<image src='Hoatdong/Hoatdong1.jpg' alt='Hoạt động 1'>",
      "<image link='Hoatdong1.jpg' alt='Mô tả ảnh'>",
      "<img url='Hoatdong1.jpg' alt='Mô tả ảnh'>"
    ],
    "answer": 0,
    "explanation": "Thẻ chuẩn là <img> và sử dụng thuộc tính src với tên tệp trong cùng thư mục: <img src='Hoatdong1.jpg' alt='Hoạt động 1'>.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng",
    "globalId": "bank_p1_014"
  },
  {
    "id": "mg_p1_15",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "topic": "Bảng dữ liệu & Gộp ô",
    "level": "VD",
    "question": "Trong bảng HTML, khi muốn gộp 2 ô liền kề nhau trên cùng một hàng (chiếm độ rộng của 2 cột), ta sử dụng thuộc tính nào ở thẻ <td>?",
    "options": [
      "rowspan='2'",
      "colspan='2'",
      "span='2'",
      "merge='2'"
    ],
    "answer": 1,
    "explanation": "colspan='k' gộp k ô theo chiều ngang (cột); rowspan='k' gộp k ô theo chiều dọc (hàng).",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng",
    "globalId": "bank_p1_015"
  },
  {
    "id": "mg_p1_16",
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Đà Nẵng",
    "topic": "Siêu liên kết",
    "level": "TH",
    "question": "Phát biểu nào sau đây KHÔNG ĐÚNG khi nói về thẻ tạo siêu liên kết <a> trong HTML?",
    "options": [
      "Thẻ <a> dùng để tạo liên kết kết nối các trang web hoặc tài nguyên.",
      "Thuộc tính href là bắt buộc để chỉ định đích đến của siêu liên kết.",
      "Thẻ <a> chỉ có thể bao bọc văn bản thuần túy chứ không thể bọc quanh hình ảnh <img>.",
      "Thuộc tính target='_blank' giúp mở trang đích trong một tab hoặc cửa sổ mới."
    ],
    "answer": 2,
    "explanation": "Thẻ <a> hoàn toàn có thể bọc quanh thẻ <img> để biến bức ảnh thành nút bấm chuyển hướng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu",
    "globalId": "bank_p1_016"
  },
  {
    "id": "mg_p1_17",
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Đà Nẵng",
    "topic": "Bảng dữ liệu & Gộp ô",
    "level": "NB",
    "question": "Thẻ nào trong HTML được sử dụng để tạo một ô tiêu đề cột trong bảng (mặc định được in đậm và căn giữa)?",
    "options": [
      "<td>",
      "<tr>",
      "<th>",
      "<caption >"
    ],
    "answer": 2,
    "explanation": "<th> (Table Header) được dùng để định nghĩa ô tiêu đề bảng, mặc định văn bản in đậm và căn giữa.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_017"
  },
  {
    "id": "mg_p1_18",
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Bắc Giang",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Phần tử HTML nào cho phép nhúng một trang web khác hoặc video YouTube vào một khung hiển thị bên trong trang hiện tại?",
    "options": [
      "<iframe>",
      "<include>",
      "<embed-page>",
      "<webframe>"
    ],
    "answer": 0,
    "explanation": "<iframe> (Inline Frame) là thẻ chuẩn trong HTML dùng để nhúng trang web hoặc dịch vụ ngoại vi.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_018"
  },
  {
    "id": "mg_p1_19",
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Bắc Giang",
    "topic": "Cấu trúc HTML",
    "level": "TH",
    "question": "Trong ngôn ngữ HTML, phát biểu nào sau đây là chính xác nhất?",
    "options": [
      "Tất cả các phần tử hiển thị nội dung cho người xem đều được đặt bên trong phần tử <body>.",
      "Thẻ HTML bắt buộc phải viết hoa hoàn toàn thì trình duyệt mới hiểu.",
      "Phần tử <head> là nơi chứa các hình ảnh và video trình chiếu cho người xem.",
      "Tài liệu HTML không thể hiển thị được tiếng Việt có dấu."
    ],
    "answer": 0,
    "explanation": "Toàn bộ giao diện nhìn thấy của trang web đều được đặt bên trong phần tử <body>.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu",
    "globalId": "bank_p1_019"
  },
  {
    "id": "mg_p1_20",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "question": "Bạn muốn khi người dùng nhấn nút 'Gửi', dữ liệu form được chuyển đến tệp 'save.php' và KHÔNG hiển thị lộ liễu trên thanh URL. Cấu trúc form nào sau đây là đúng?",
    "options": [
      "<form action='save.php' method='get'>",
      "<form action='save.php' method='post'>",
      "<form href='save.php' method='post'>",
      "<form action='save.php' method='send'>"
    ],
    "answer": 1,
    "explanation": "Phương thức POST gửi dữ liệu ngầm trong phần thân HTTP request, không làm lộ dữ liệu trên thanh địa chỉ URL.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng",
    "globalId": "bank_p1_020"
  },
  {
    "id": "mg_p1_21",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Phương án nào sau đây thể hiện đúng nhất vai trò của thuộc tính 'name' trong các phần tử nhập liệu (<input>, <select>) của biểu mẫu?",
    "options": [
      "Dùng để hiển thị nhãn của trường nhập liệu trên giao diện trình duyệt.",
      "Giúp máy chủ nhận biết và thu thập giá trị của trường đó khi biểu mẫu được gửi về.",
      "Quy định kiểu phông chữ hiển thị trong ô nhập liệu.",
      "Bắt buộc người dùng không được bỏ trống trường dữ liệu đó."
    ],
    "answer": 1,
    "explanation": "Thuộc tính name đóng vai trò là khóa (key) định danh dữ liệu để máy chủ trích xuất giá trị tương ứng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu",
    "globalId": "bank_p1_021"
  },
  {
    "id": "mg_p1_22",
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Bình Thuận",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Trong HTML, để chèn nội dung đa phương tiện như hình ảnh (<img>), âm thanh (<audio>), video (<video>), các thẻ này đều bắt buộc phải có thuộc tính nào để xác định đường dẫn tệp nguồn?",
    "options": [
      "src",
      "controls",
      "alt",
      "href"
    ],
    "answer": 0,
    "explanation": "Thuộc tính src (Source) được dùng chung ở các thẻ <img>, <audio>, <video> để chỉ định vị trí tệp đa phương tiện.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết",
    "globalId": "bank_p1_022"
  },
  {
    "id": "mg_p1_23",
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Bình Thuận",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Trong biểu mẫu HTML, phần tử nào được sử dụng để người dùng nhập một đoạn văn bản dài nhiều dòng như ý kiến nhận xét hoặc phản hồi?",
    "options": [
      "<input type='text'>",
      "<textarea>",
      "<select>",
      "<input type='multiline'>"
    ],
    "answer": 1,
    "explanation": "<textarea> cho phép nhập nội dung văn bản dài nhiều dòng với số dòng rows và cột cols tùy ý.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu",
    "globalId": "bank_p1_023"
  },
  {
    "id": "mg_p1_24",
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Lâm Đồng",
    "topic": "Định dạng CSS",
    "level": "VD",
    "question": "Mã lệnh CSS nào sau đây cho phép thiết lập cùng lúc màu chữ đỏ (red) cho cả 3 cấp tiêu đề <h1>, <h2> và <h3>?",
    "options": [
      "h1; h2; h3 {color: red;}",
      "h1 h2 h3 {color: red;}",
      "h1, h2, h3 {color: red;}",
      "{h1, h2, h3: color red;}"
    ],
    "answer": 2,
    "explanation": "Trong CSS, dấu phẩy ',' được sử dụng để nhóm các bộ chọn cùng áp dụng một khối quy tắc định dạng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng",
    "globalId": "bank_p1_024"
  },
  {
    "id": "mg_p1_25",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong CSS, bộ chọn ID (ID Selector) được bắt đầu bằng ký tự đặc biệt nào sau đây?",
    "options": [
      "Dấu chấm (.)",
      "Dấu thăng (#)",
      "Dấu hai chấm (:)",
      "Dấu hoa thị (*)"
    ],
    "answer": 1,
    "explanation": "Trong CSS, bộ chọn ID sử dụng dấu thăng (#) đi kèm với tên định danh ID của phần tử, ví dụ: #header.",
    "globalId": "bank_p1_025"
  },
  {
    "id": "mg_p1_26",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Phần tử nào sau đây trong HTML được sử dụng để chứa các thông tin mô tả về tài liệu web (metadata) mà không hiển thị trực tiếp lên màn hình trang web?",
    "options": [
      "<body>",
      "<head>",
      "<meta-content>",
      "<footer>"
    ],
    "answer": 1,
    "explanation": "Phần tử <head> chứa các thẻ metadata như <title>, <meta>, <link>, <style>... chứa thông tin kỹ thuật về trang web.",
    "globalId": "bank_p1_026"
  },
  {
    "id": "mg_p1_27",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <audio> và <video> quy định việc phát lại tệp âm thanh/video tự động liên tục ngay khi kết thúc?",
    "options": [
      "repeat",
      "loop",
      "autoplay",
      "controls"
    ],
    "answer": 1,
    "explanation": "Thuộc tính 'loop' cho phép phát lặp đi lặp lại nội dung âm thanh hoặc video khi kết thúc.",
    "globalId": "bank_p1_027"
  },
  {
    "id": "mg_p1_28",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong biểu mẫu HTML, thuộc tính nào sau đây của thẻ <input> được dùng để ẩn ký tự khi người dùng nhập dữ liệu nhạy cảm?",
    "options": [
      "type='hidden'",
      "type='secret'",
      "type='password'",
      "type='security'"
    ],
    "answer": 2,
    "explanation": "Thuộc tính type='password' làm cho các ký tự nhập vào hiển thị dưới dạng dấu chấm hoặc dấu sao để bảo mật.",
    "globalId": "bank_p1_028"
  },
  {
    "id": "mg_p1_29",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong danh sách có thứ tự <ol>, nếu muốn thứ tự bắt đầu từ số 5 thay vì số 1, ta sử dụng cú pháp nào sau đây?",
    "options": [
      "<ol from='5'>",
      "<ol start='5'>",
      "<ol begin='5'>",
      "<ol index='5'>"
    ],
    "answer": 1,
    "explanation": "Thuộc tính start trong thẻ <ol> quy định giá trị số bắt đầu của danh sách có thứ tự, ví dụ <ol start='5'>.",
    "globalId": "bank_p1_029"
  },
  {
    "id": "mg_p1_30",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng chữ in đậm (bold) và căn lề giữa (center) cho tất cả các thẻ tiêu đề <h2>?",
    "options": [
      "h2 {font-weight: bold; text-align: center;}",
      "h2 {font-style: bold; align: center;}",
      "h2 {text-weight: bold; text-center: true;}",
      "h2 {font: bold center;}"
    ],
    "answer": 0,
    "explanation": "Trong CSS, font-weight: bold quy định độ đậm của chữ, còn text-align: center quy định căn giữa dòng.",
    "globalId": "bank_p1_030"
  },
  {
    "id": "mg_p1_31",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Để tạo một danh sách chọn thả xuống (drop-down list) trong biểu mẫu HTML, ta sử dụng thẻ nào sau đây?",
    "options": [
      "<dropdown>",
      "<select>",
      "<list>",
      "<option-group>"
    ],
    "answer": 1,
    "explanation": "Thẻ <select> kết hợp với các thẻ con <option> được dùng để tạo danh sách thả xuống trong form.",
    "globalId": "bank_p1_031"
  },
  {
    "id": "mg_p1_32",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để liên kết nhảy đến một phần nội dung có định danh id='lienhe' nằm ngay trên cùng trang web hiện tại, thuộc tính href của thẻ <a> được viết là:",
    "options": [
      "href='lienhe'",
      "href='#lienhe'",
      "href='@lienhe'",
      "href='.lienhe'"
    ],
    "answer": 1,
    "explanation": "Ký hiệu '#' đi trước tên định danh id được dùng để tạo siêu liên kết nội bộ trong cùng một trang web (Bookmark/Anchor link).",
    "globalId": "bank_p1_032"
  },
  {
    "id": "mg_p1_33",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong một form khảo sát sở thích, học sinh được phép chọn nhiều môn thể thao cùng lúc. Kiểu nhập liệu nào của thẻ <input> là phù hợp nhất?",
    "options": [
      "type='radio'",
      "type='checkbox'",
      "type='select'",
      "type='multiple'"
    ],
    "answer": 1,
    "explanation": "type='checkbox' (hộp kiểm) cho phép người dùng tích chọn đồng thời nhiều lựa chọn độc lập trong nhóm.",
    "globalId": "bank_p1_033"
  },
  {
    "id": "mg_p1_34",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để ngắt dòng văn bản mà không tạo ra khoảng cách đoạn lớn như thẻ <p>?",
    "options": [
      "<enter>",
      "<break>",
      "<br>",
      "<hr>"
    ],
    "answer": 2,
    "explanation": "Thẻ <br> (Line Break) dùng để xuống hàng ngay tại vị trí đặt thẻ mà không phân tách thành đoạn văn mới.",
    "globalId": "bank_p1_034"
  },
  {
    "id": "mg_p1_35",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi nhúng bản đồ số từ Google Maps bằng thẻ <iframe>, nếu muốn khung bản đồ chiếm trọn chiều rộng của cột chứa và có chiều cao cố định 400px, thuộc tính nào đúng?",
    "options": [
      "width='100%' height='400px'",
      "width='full' height='400'",
      "size='100%, 400'",
      "width='auto' height='fixed'"
    ],
    "answer": 0,
    "explanation": "Thẻ iframe cho phép khai báo thuộc tính width='100%' (chiếm toàn bộ độ rộng phần tử chứa) và height='400px' (hoặc height='400').",
    "globalId": "bank_p1_035"
  },
  {
    "id": "mg_p1_36",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để nhúng tệp bảng định dạng CSS ngoài (External Style Sheet) vào trang web?",
    "options": [
      "<style>",
      "<css>",
      "<link>",
      "<script>"
    ],
    "answer": 2,
    "explanation": "Thẻ <link rel='stylesheet' href='style.css'> nằm trong phần <head> được dùng để liên kết tệp CSS ngoài.",
    "globalId": "bank_p1_036"
  },
  {
    "id": "mg_p1_37",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào sau đây trong HTML được sử dụng để tạo một dòng (hàng) trong bảng dữ liệu?",
    "options": [
      "<td>",
      "<th>",
      "<tr>",
      "<row>"
    ],
    "answer": 2,
    "explanation": "<tr> (Table Row) được dùng để định nghĩa một hàng trong bảng HTML.",
    "globalId": "bank_p1_037"
  },
  {
    "id": "mg_p1_38",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Bộ chọn CSS nào sau đây áp dụng định dạng cho tất cả các phần tử có thuộc tính class='tieude'?",
    "options": [
      "#tieude",
      ".tieude",
      "*tieude",
      "tieude"
    ],
    "answer": 1,
    "explanation": "Bộ chọn Class trong CSS sử dụng dấu chấm (.) phía trước tên lớp, ví dụ: .tieude.",
    "globalId": "bank_p1_038"
  },
  {
    "id": "mg_p1_39",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong bảng HTML, khi muốn gộp 3 ô ở 3 hàng liên tiếp trên cùng một cột lại thành một ô duy nhất, thuộc tính nào sau đây là chính xác?",
    "options": [
      "colspan='3'",
      "rowspan='3'",
      "merge='3'",
      "spanrow='3'"
    ],
    "answer": 1,
    "explanation": "rowspan='k' gộp k ô theo chiều dọc (các hàng liên tiếp); colspan='k' gộp k ô theo chiều ngang (các cột liên tiếp).",
    "globalId": "bank_p1_039"
  },
  {
    "id": "mg_p1_40",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Cặp thẻ HTML nào sau đây định nghĩa tiêu đề của trang web được hiển thị trên thanh tiêu đề của trình duyệt?",
    "options": [
      "<header> ... </header>",
      "<title> ... </title>",
      "<heading> ... </heading>",
      "<caption> ... </caption>"
    ],
    "answer": 1,
    "explanation": "Thẻ <title> nằm trong thẻ <head> dùng để xác định tiêu đề hiển thị trên thanh tab của trình duyệt.",
    "globalId": "bank_p1_040"
  },
  {
    "id": "mg_p1_41",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong HTML, thẻ nào sau đây tạo đường kẻ ngang phân cách giữa các phần nội dung của trang web?",
    "options": [
      "<line>",
      "<divider>",
      "<hr>",
      "<border>"
    ],
    "answer": 2,
    "explanation": "<hr> (Horizontal Rule) tạo một đường kẻ ngang phân tách các khối nội dung trên trang web.",
    "globalId": "bank_p1_041"
  },
  {
    "id": "mg_p1_42",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <input> được dùng để hiển thị sẵn một văn bản gợi ý mờ bên trong ô nhập liệu (tự động biến mất khi người dùng gõ phím)?",
    "options": [
      "value",
      "placeholder",
      "hint",
      "default"
    ],
    "answer": 1,
    "explanation": "placeholder quy định chuỗi văn bản gợi ý mờ hiển thị trong ô nhập liệu khi ô đó chưa có dữ liệu.",
    "globalId": "bank_p1_042"
  },
  {
    "id": "mg_p1_43",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Định dạng tệp hình ảnh nào sau đây hỗ trợ độ trong suốt (transparency) và thường được dùng cho logo trên các trang web?",
    "options": [
      "BMP",
      "PNG",
      "JPEG (JPG)",
      "TIFF"
    ],
    "answer": 1,
    "explanation": "Định dạng PNG (Portable Network Graphics) hỗ trợ nền trong suốt (kênh Alpha), rất phổ biến cho logo và biểu tượng web.",
    "globalId": "bank_p1_043"
  },
  {
    "id": "mg_p1_44",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Siêu liên kết",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Một liên kết được viết như sau: <a href='tailieu.pdf' target='_blank'>Tải tài liệu</a>. Khi người dùng nhấp vào liên kết này, trình duyệt sẽ làm gì?",
    "options": [
      "Mở tệp tailieu.pdf trong một tab hoặc cửa sổ mới",
      "Ghi đè nội dung tệp tailieu.pdf lên tab hiện tại",
      "Tải lại toàn bộ trang chủ của website",
      "Đóng tab trình duyệt hiện tại ngay lập tức"
    ],
    "answer": 0,
    "explanation": "Thuộc tính target='_blank' chỉ thị cho trình duyệt mở trang đích hoặc tài nguyên trong một tab hoặc cửa sổ mới.",
    "globalId": "bank_p1_044"
  },
  {
    "id": "mg_p1_45",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong form nhập thông tin, để bắt buộc người dùng không được bỏ trống ô 'Họ và tên' trước khi nhấn nút gửi, lập trình viên cần bổ sung thuộc tính nào?",
    "options": [
      "validate",
      "required",
      "checked",
      "important"
    ],
    "answer": 1,
    "explanation": "Thuộc tính required là thuộc tính boolean trong HTML5 quy định trường nhập liệu bắt buộc phải có giá trị mới được nộp form.",
    "globalId": "bank_p1_045"
  },
  {
    "id": "mg_p1_46",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong CSS, thuộc tính nào sau đây được sử dụng để thay đổi kiểu phông chữ (như Arial, Times New Roman, Tahoma)?",
    "options": [
      "font-style",
      "font-family",
      "font-weight",
      "font-type"
    ],
    "answer": 1,
    "explanation": "Thuộc tính font-family quy định danh sách các họ phông chữ được áp dụng cho văn bản.",
    "globalId": "bank_p1_046"
  },
  {
    "id": "mg_p1_47",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Vĩnh Phúc",
    "province": "Sở GD&ĐT Vĩnh Phúc",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong CSS, thuộc tính nào sau đây quy định khoảng cách đệm bên trong (khoảng cách giữa nội dung và đường viền) của một phần tử hộp?",
    "options": [
      "margin",
      "padding",
      "border",
      "spacing"
    ],
    "answer": 1,
    "explanation": "padding quy định khoảng cách đệm bên trong viền; margin quy định khoảng cách lề bên ngoài viền.",
    "globalId": "bank_p1_047"
  },
  {
    "id": "mg_p1_48",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Vĩnh Phúc",
    "province": "Sở GD&ĐT Vĩnh Phúc",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi người dùng chọn một tệp hình ảnh từ máy tính để tải lên máy chủ thông qua thẻ <input type='file'>, thẻ <form> bao bọc bắt buộc phải có thuộc tính mã hóa nào?",
    "options": [
      "enctype='multipart/form-data'",
      "enctype='text/plain'",
      "method='GET'",
      "type='file-upload'"
    ],
    "answer": 0,
    "explanation": "Để truyền tải tệp nhị phân (hình ảnh, tệp tin) qua form, bắt buộc phải dùng method='POST' và enctype='multipart/form-data'.",
    "globalId": "bank_p1_048"
  },
  {
    "id": "mg_p1_49",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong tài liệu HTML5, thẻ nào sau đây chứa toàn bộ các nội dung hiển thị trực quan cho người dùng như văn bản, hình ảnh, video?",
    "options": [
      "<head>",
      "<body>",
      "<main-page>",
      "<content>"
    ],
    "answer": 1,
    "explanation": "Phần tử <body> là nơi chứa tất cả nội dung được kết xuất trên màn hình trình duyệt.",
    "globalId": "bank_p1_049"
  },
  {
    "id": "mg_p1_50",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ tiêu đề nào trong HTML quy định kích thước chữ lớn nhất và mức độ quan trọng cao nhất?",
    "options": [
      "<h6>",
      "<h3>",
      "<h1>",
      "<head>"
    ],
    "answer": 2,
    "explanation": "<h1> là thẻ tiêu đề cấp 1, có kích thước hiển thị lớn nhất và độ ưu tiên ngữ nghĩa cao nhất.",
    "globalId": "bank_p1_050"
  },
  {
    "id": "mg_p1_51",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Quy tắc CSS nào sau đây được viết dưới dạng CSS nội tuyến (Inline CSS)?",
    "options": [
      "<p style='color: red;'>Nội dung</p>",
      "<style>p {color: red;}</style>",
      "<link rel='stylesheet' href='red.css'>",
      "<p class='red'>Nội dung</p>"
    ],
    "answer": 0,
    "explanation": "CSS nội tuyến được viết trực tiếp vào thuộc tính style của từng thẻ HTML cụ thể.",
    "globalId": "bank_p1_051"
  },
  {
    "id": "mg_p1_52",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi thiết kế form đăng ký tài khoản, muốn ô nhập tuổi chỉ nhận số nguyên từ 15 đến 60, ta sử dụng cú pháp nào?",
    "options": [
      "<input type='number' min='15' max='60'>",
      "<input type='text' range='15-60'>",
      "<input type='digits' from='15' to='60'>",
      "<input type='number' limit='15,60'>"
    ],
    "answer": 0,
    "explanation": "type='number' kết hợp hai thuộc tính min và max quy định giới hạn giá trị số hợp lệ.",
    "globalId": "bank_p1_052"
  },
  {
    "id": "mg_p1_53",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Siêu liên kết",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thuộc tính nào của thẻ <a> là bắt buộc phải có để chỉ định địa chỉ trang web đích của siêu liên kết?",
    "options": [
      "src",
      "href",
      "link",
      "target"
    ],
    "answer": 1,
    "explanation": "href (Hypertext Reference) là thuộc tính chứa địa chỉ URL của tài nguyên đích.",
    "globalId": "bank_p1_053"
  },
  {
    "id": "mg_p1_54",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để chèn một đoạn video kèm theo thanh điều khiển và ảnh bìa đại diện khi video chưa phát, ta sử dụng thuộc tính nào sau đây của thẻ <video>?",
    "options": [
      "cover",
      "poster",
      "preview",
      "thumbnail"
    ],
    "answer": 1,
    "explanation": "Thuộc tính poster quy định đường dẫn hình ảnh hiển thị làm ảnh bìa khi video đang tải hoặc chưa phát.",
    "globalId": "bank_p1_054"
  },
  {
    "id": "mg_p1_55",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây thiết lập đường viền tròn hoàn toàn (hình tròn) cho một bức ảnh vuông có kích thước 100px x 100px?",
    "options": [
      "img {border-radius: 50%;}",
      "img {border-circle: true;}",
      "img {border-style: round;}",
      "img {border-corner: 100%;}"
    ],
    "answer": 0,
    "explanation": "border-radius: 50% bo tròn đều các góc tạo thành hình tròn hoàn hảo cho ảnh hình vuông.",
    "globalId": "bank_p1_055"
  },
  {
    "id": "mg_p1_56",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào sau đây trong HTML được sử dụng để tạo một danh sách không có thứ tự (hiển thị bằng các dấu chấm đầu dòng)?",
    "options": [
      "<ol>",
      "<ul>",
      "<dl>",
      "<list>"
    ],
    "answer": 1,
    "explanation": "<ul> (Unordered List) tạo danh sách không có thứ tự với các dấu ký hiệu đầu dòng.",
    "globalId": "bank_p1_056"
  },
  {
    "id": "mg_p1_57",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị văn bản dưới dạng in nghiêng?",
    "options": [
      "<b>",
      "<i>",
      "<u>",
      "<s>"
    ],
    "answer": 1,
    "explanation": "Thẻ <i> (hoặc <em>) dùng để hiển thị chữ in nghiêng (italic).",
    "globalId": "bank_p1_057"
  },
  {
    "id": "mg_p1_58",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Sự khác biệt quan trọng giữa phương thức GET và POST trong thẻ <form> là gì?",
    "options": [
      "GET gửi dữ liệu hiển thị trên thanh URL; POST gửi dữ liệu ngầm trong phần thân HTTP request",
      "GET chỉ dùng cho hình ảnh; POST chỉ dùng cho văn bản",
      "GET bảo mật hơn phương thức POST khi gửi mật khẩu",
      "GET và POST hoàn toàn giống nhau, không có khác biệt"
    ],
    "answer": 0,
    "explanation": "GET đính dữ liệu vào thanh URL (query string); POST gói dữ liệu vào phần thân bản tin, bảo mật hơn và gửi được khối lượng dữ liệu lớn.",
    "globalId": "bank_p1_058"
  },
  {
    "id": "mg_p1_59",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi muốn áp dụng kiểu chữ màu xanh lam và gạch chân cho tất cả các thẻ liên kết <a> khi rê chuột vào (hover), cú pháp CSS nào là chính xác?",
    "options": [
      "a:hover {color: blue; text-decoration: underline;}",
      "a:active {color: blue; text-style: underline;}",
      "a.hover {color: blue; font-underline: true;}",
      "a#hover {text-color: blue; decoration: line;}"
    ],
    "answer": 0,
    "explanation": "Lớp giả :hover kết hợp với text-decoration: underline tạo hiệu ứng đổi màu và gạch chân khi rê chuột.",
    "globalId": "bank_p1_059"
  },
  {
    "id": "mg_p1_60",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Khai báo nào sau đây luôn được đặt ở dòng đầu tiên của tài liệu để thông báo phiên bản HTML5 cho trình duyệt?",
    "options": [
      "<DOCTYPE html5>",
      "<!DOCTYPE html>",
      "<html>",
      "<html version='5'>"
    ],
    "answer": 1,
    "explanation": "<!DOCTYPE html> là khai báo chuẩn phiên bản HTML5 đặt ở dòng đầu tiên.",
    "globalId": "bank_p1_060"
  },
  {
    "id": "mg_p1_61",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong bảng HTML, để thêm một dòng chú thích tiêu đề cho toàn bộ bảng, thẻ nào sau đây được đặt ngay sau thẻ mở <table>?",
    "options": [
      "<title>",
      "<caption>",
      "<header>",
      "<summary>"
    ],
    "answer": 1,
    "explanation": "Thẻ <caption> dùng để tạo tiêu đề mô tả ngắn gọn cho bảng dữ liệu.",
    "globalId": "bank_p1_061"
  },
  {
    "id": "mg_p1_62",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Siêu liên kết",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Từ trang web 'sanpham/chitiet.html', để tạo liên kết quay trở về trang 'gioithieu.html' nằm trong thư mục gốc của website, đường dẫn tương đối đúng là:",
    "options": [
      "<a href='../gioithieu.html'>Giới thiệu</a>",
      "<a href='gioithieu.html'>Giới thiệu</a>",
      "<a href='./gioithieu.html'>Giới thiệu</a>",
      "<a href='sanpham/gioithieu.html'>Giới thiệu</a>"
    ],
    "answer": 0,
    "explanation": "Từ thư mục con 'sanpham', dùng '../' để lùi ra một cấp thư mục cha (thư mục gốc) rồi liên kết đến 'gioithieu.html'.",
    "globalId": "bank_p1_062"
  },
  {
    "id": "mg_p1_63",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để chèn một hình ảnh tĩnh vào trang web?",
    "options": [
      "<picture>",
      "<image>",
      "<img>",
      "<photo>"
    ],
    "answer": 2,
    "explanation": "Thẻ <img> (Image) là thẻ chuẩn trong HTML để chèn hình ảnh.",
    "globalId": "bank_p1_063"
  },
  {
    "id": "mg_p1_64",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi áp dụng định dạng cho cùng một phần tử, thứ tự ưu tiên áp dụng (từ cao nhất đến thấp nhất) của 3 loại CSS là:",
    "options": [
      "Inline CSS (Nội tuyến) > Internal CSS (Nội bộ) > External CSS (Ngoài)",
      "External CSS > Internal CSS > Inline CSS",
      "Internal CSS > External CSS > Inline CSS",
      "Cả 3 loại có độ ưu tiên hoàn toàn bằng nhau"
    ],
    "answer": 0,
    "explanation": "Inline CSS gắn trực tiếp ở thuộc tính style có mức độ ưu tiên ghi đè cao nhất, tiếp theo là Internal CSS và cuối cùng là External CSS.",
    "globalId": "bank_p1_064"
  },
  {
    "id": "mg_p1_65",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong form nhập mật khẩu, muốn đặt số ký tự tối thiểu là 8 ký tự để bảo mật, ta sử dụng thuộc tính nào sau đây của thẻ <input>?",
    "options": [
      "minlength='8'",
      "min='8'",
      "length='8'",
      "size='8'"
    ],
    "answer": 0,
    "explanation": "minlength quy định độ dài tối thiểu của chuỗi văn bản nhập vào ở các thẻ input dạng text, password.",
    "globalId": "bank_p1_065"
  },
  {
    "id": "mg_p1_66",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong HTML, thẻ nào sau đây được dùng để đánh dấu nổi bật văn bản bằng màu nền vàng nhạt giống bút dạ quang?",
    "options": [
      "<highlight>",
      "<mark>",
      "<b>",
      "<color>"
    ],
    "answer": 1,
    "explanation": "<mark> là thẻ ngữ nghĩa HTML5 dùng để làm nổi bật văn bản với màu nền mặc định là vàng.",
    "globalId": "bank_p1_066"
  },
  {
    "id": "mg_p1_67",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <table> quy định độ dày đường viền hiển thị bao quanh bảng?",
    "options": [
      "border",
      "outline",
      "stroke",
      "width"
    ],
    "answer": 0,
    "explanation": "Thuộc tính border='1' quy định bảng hiển thị đường viền dày 1 pixel.",
    "globalId": "bank_p1_067"
  },
  {
    "id": "mg_p1_68",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi chèn bức ảnh 'banner.png', muốn giới hạn chiều rộng là 600px và chiều cao tự động co giãn theo tỷ lệ ảnh gốc, cú pháp nào đúng?",
    "options": [
      "<img src='banner.png' style='width: 600px; height: auto;'>",
      "<img src='banner.png' width='600px' height='fixed'>",
      "<img link='banner.png' size='600, auto'>",
      "<img url='banner.png' max-width='600'>"
    ],
    "answer": 0,
    "explanation": "Đặt width: 600px và height: auto giúp ảnh giữ nguyên tỷ lệ khung hình (aspect ratio) chuẩn mà không bị méo.",
    "globalId": "bank_p1_068"
  },
  {
    "id": "mg_p1_69",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Ngãi",
    "province": "Sở GD&ĐT Quảng Ngãi",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ <meta charset='UTF-8'> đặt trong phần <head> có tác dụng gì đối với trang web?",
    "options": [
      "Khai báo bảng mã ký tự Unicode để hiển thị chính xác tiếng Việt có dấu",
      "Quy định tốc độ tải trang web nhanh hơn",
      "Thiết lập độ phân giải màn hình hiển thị",
      "Tự động dịch trang web sang tiếng Anh"
    ],
    "answer": 0,
    "explanation": "Khai báo bảng mã ký tự UTF-8 cho phép hiển thị đầy đủ và chuẩn xác các ngôn ngữ có dấu như tiếng Việt.",
    "globalId": "bank_p1_069"
  },
  {
    "id": "mg_p1_70",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Ngãi",
    "province": "Sở GD&ĐT Quảng Ngãi",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong biểu mẫu HTML được dùng để tạo nút bấm xóa trắng toàn bộ dữ liệu người dùng đã nhập về trạng thái ban đầu?",
    "options": [
      "<input type='reset'>",
      "<input type='delete'>",
      "<input type='clear'>",
      "<input type='cancel'>"
    ],
    "answer": 0,
    "explanation": "type='reset' đặt lại tất cả các trường nhập liệu trong form về giá trị mặc định ban đầu.",
    "globalId": "bank_p1_070"
  },
  {
    "id": "mg_p1_71",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Phú Yên",
    "province": "Sở GD&ĐT Phú Yên",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong CSS, thuộc tính text-align nhận những giá trị căn lề hợp lệ nào sau đây?",
    "options": [
      "left, right, center, justify",
      "top, bottom, middle, center",
      "start, end, middle, inside",
      "bold, italic, normal, underline"
    ],
    "answer": 0,
    "explanation": "text-align hỗ trợ các giá trị căn lề văn bản: left (trái), right (phải), center (giữa) và justify (căn đều hai bên).",
    "globalId": "bank_p1_071"
  },
  {
    "id": "mg_p1_72",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Phú Yên",
    "province": "Sở GD&ĐT Phú Yên",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho bảng HTML gồm 3 hàng, mỗi hàng có 4 ô <td>. Khi muốn gộp 2 ô ở hàng thứ nhất thành 1 ô, ta phải thêm colspan='2' vào một ô và đồng thời làm gì?",
    "options": [
      "Xóa bớt 1 ô <td> trong hàng thứ nhất đó",
      "Thêm 1 ô <td> nữa vào hàng thứ hai",
      "Xóa toàn bộ hàng thứ nhất",
      "Không cần thay đổi số lượng ô <td>"
    ],
    "answer": 0,
    "explanation": "Vì ô có colspan='2' chiếm độ rộng của 2 ô nên phải xóa bớt 1 ô <td> thừa trên hàng đó để bảng không bị tràn cấu trúc.",
    "globalId": "bank_p1_072"
  },
  {
    "id": "mg_p1_73",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong tài liệu HTML, cặp thẻ nào sau đây chứa toàn bộ cấu trúc mã nguồn của trang web?",
    "options": [
      "<web> </web>",
      "<html> </html>",
      "<body> </body>",
      "<head> </head>"
    ],
    "answer": 1,
    "explanation": "Thẻ <html> là phần tử gốc (root element) bao bọc toàn bộ mã nguồn của tài liệu HTML.",
    "globalId": "bank_p1_073"
  },
  {
    "id": "mg_p1_74",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị chỉ số dưới (như số 2 trong công thức hóa học H₂O)?",
    "options": [
      "<sup>",
      "<sub>",
      "<down>",
      "<small>"
    ],
    "answer": 1,
    "explanation": "Thẻ <sub> (Subscript) định dạng chỉ số dưới (H<sub>2</sub>O); thẻ <sup> (Superscript) định dạng số mũ chỉ số trên.",
    "globalId": "bank_p1_074"
  },
  {
    "id": "mg_p1_75",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi chèn âm thanh bằng thẻ <audio>, thuộc tính nào cho phép tệp nhạc bắt đầu phát ngay lập tức khi trang web được tải?",
    "options": [
      "play",
      "start",
      "autoplay",
      "controls"
    ],
    "answer": 2,
    "explanation": "Thuộc tính autoplay quy định tệp âm thanh tự động phát ngay khi nạp trang.",
    "globalId": "bank_p1_075"
  },
  {
    "id": "mg_p1_76",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng thẻ <div> có độ rộng 300px, màu nền xám (#eee), đường viền nét liền màu đen 1px và lề trên 20px?",
    "options": [
      "div {width: 300px; background-color: #eee; border: 1px solid black; margin-top: 20px;}",
      "div {size: 300px; bg: #eee; border: 1px black; padding-top: 20px;}",
      "div {width: 300px; color: #eee; border-line: black 1px; top: 20px;}",
      "div {max-width: 300px; background: #eee; outline: 1px; margin: 20px;}"
    ],
    "answer": 0,
    "explanation": "Cú pháp CSS chuẩn kết hợp width, background-color, border: 1px solid black và margin-top: 20px.",
    "globalId": "bank_p1_076"
  },
  {
    "id": "mg_p1_77",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ <label for='id_input'> trong biểu mẫu HTML có tác dụng gì đối với trải nghiệm người dùng?",
    "options": [
      "Gắn nhãn văn bản với trường nhập liệu, giúp nhấp vào chữ vẫn kích hoạt được ô input",
      "Đổi màu chữ của ô nhập liệu sang màu xanh",
      "Bắt buộc người dùng phải nhập đúng định dạng số",
      "Xóa trắng dữ liệu đã nhập trong form"
    ],
    "answer": 0,
    "explanation": "Thuộc tính for của thẻ <label> liên kết với id của input giúp mở rộng vùng nhấp chuột cho người dùng.",
    "globalId": "bank_p1_077"
  },
  {
    "id": "mg_p1_78",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để tạo liên kết khi người dùng nhấp vào sẽ tự động mở ứng dụng gửi thư điện tử đến hòm thư 'cskh@web.com', cú pháp href đúng là:",
    "options": [
      "href='email:cskh@web.com'",
      "href='mailto:cskh@web.com'",
      "href='sendto:cskh@web.com'",
      "href='mail:cskh@web.com'"
    ],
    "answer": 1,
    "explanation": "Giao thức chuẩn trong HTML là mailto:diachi@email.com dùng để kích hoạt ứng dụng email mặc định.",
    "globalId": "bank_p1_078"
  },
  {
    "id": "mg_p1_79",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho đoạn mã: <input type='text' name='username' value='admin' readonly>. Người dùng có thể làm gì với ô nhập này trên giao diện?",
    "options": [
      "Xem và sao chép được giá trị 'admin', nhưng không thể xóa hoặc gõ sửa nội dung",
      "Tự do xóa và nhập nội dung mới bất kỳ",
      "Không nhìn thấy ô nhập này vì bị ẩn hoàn toàn",
      "Bắt buộc phải nhấp chuột 2 lần mới sửa được"
    ],
    "answer": 0,
    "explanation": "Thuộc tính readonly (chỉ đọc) cho phép người xem nhìn thấy và bôi đen sao chép giá trị nhưng ngăn không cho sửa đổi.",
    "globalId": "bank_p1_079"
  },
  {
    "id": "mg_p1_80",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Cặp thẻ nào sau đây được dùng để định nghĩa toàn bộ khối bảng dữ liệu trong HTML?",
    "options": [
      "<grid> </grid>",
      "<table> </table>",
      "<tab> </tab>",
      "<board> </board>"
    ],
    "answer": 1,
    "explanation": "Thẻ <table> dùng để khởi tạo một bảng dữ liệu trong HTML.",
    "globalId": "bank_p1_080"
  },
  {
    "id": "mg_p1_81",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thuộc tính nào trong CSS được dùng để thiết lập khoảng cách lề bên ngoài (khoảng cách giữa các khối phần tử với nhau)?",
    "options": [
      "padding",
      "spacing",
      "margin",
      "border"
    ],
    "answer": 2,
    "explanation": "margin quy định khoảng cách lề bên ngoài đường viền của phần tử hộp.",
    "globalId": "bank_p1_081"
  },
  {
    "id": "mg_p1_82",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Phát biểu nào sau đây thể hiện đúng nhất về đường dẫn tuyệt đối (Absolute URL) trong HTML?",
    "options": [
      "Chỉ bao gồm tên tệp tin nằm trong cùng thư mục",
      "Bao gồm đầy đủ giao thức (https://), tên miền và đường dẫn chi tiết đến máy chủ chứa tài nguyên",
      "Bắt đầu bằng ký hiệu ../ để lùi ra thư mục cha",
      "Chỉ sử dụng được khi không có mạng internet"
    ],
    "answer": 1,
    "explanation": "Đường dẫn tuyệt đối chứa đầy đủ giao thức, tên miền và địa chỉ chính xác của tài nguyên trên Internet.",
    "globalId": "bank_p1_082"
  },
  {
    "id": "mg_p1_83",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi nhúng mã video YouTube vào trang web bằng thẻ <iframe>, nếu video có kích thước chuẩn 560px x 315px, để tắt đường viền khung của iframe, thuộc tính hoặc style CSS nào đúng?",
    "options": [
      "style='border: none;' hoặc frameborder='0'",
      "border='false'",
      "frame='hide'",
      "no-border='true'"
    ],
    "answer": 0,
    "explanation": "Đặt thuộc tính HTML frameborder='0' hoặc thuộc tính CSS style='border: none;' giúp ẩn đường viền khung của iframe.",
    "globalId": "bank_p1_083"
  },
  {
    "id": "mg_p1_84",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Các thẻ như <img>, <br>, <hr>, <input> được xếp vào nhóm thẻ nào sau đây trong HTML?",
    "options": [
      "Thẻ đôi (phải có thẻ đóng)",
      "Thẻ đơn (thẻ rỗng / void elements)",
      "Thẻ khối văn bản",
      "Thẻ bảng"
    ],
    "answer": 1,
    "explanation": "Thẻ đơn (void elements) là các thẻ tự đóng, không có cặp thẻ đóng riêng biệt và không chứa phần tử con bên trong.",
    "globalId": "bank_p1_084"
  },
  {
    "id": "mg_p1_85",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong thẻ <input>, sự khác nhau cơ bản giữa thuộc tính 'name' và thuộc tính 'id' là gì?",
    "options": [
      "name dùng để gửi dữ liệu về máy chủ (Server); id dùng để định danh duy nhất cho CSS và JavaScript",
      "name chỉ dùng cho CSS; id chỉ dùng cho máy chủ",
      "name và id hoàn toàn giống nhau, có thể thay thế lẫn nhau ở mọi nơi",
      "name bắt buộc là số; id bắt buộc là chữ cái"
    ],
    "answer": 0,
    "explanation": "name đóng vai trò là khóa định danh dữ liệu gửi trong HTTP Request; id là định danh duy nhất trên trang để CSS/JS truy xuất.",
    "globalId": "bank_p1_085"
  },
  {
    "id": "mg_p1_86",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho đoạn mã bảng sau: <tr><td colspan='3'>A</td></tr><tr><td>B</td><td>C</td><td>D</td></tr>. Ô 'A' ở hàng thứ nhất sẽ hiển thị như thế nào?",
    "options": [
      "Chiếm độ rộng trải dài ngang bằng cả 3 cột bên dưới (B, C, D)",
      "Chiếm chiều cao bằng 3 hàng",
      "Bị lỗi cú pháp không hiển thị được",
      "Hiển thị nhỏ bằng 1/3 ô thông thường"
    ],
    "answer": 0,
    "explanation": "colspan='3' làm cho ô A mở rộng trải dài chiếm toàn bộ độ rộng của 3 cột B, C, D bên dưới.",
    "globalId": "bank_p1_086"
  },
  {
    "id": "mg_p1_87",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Vĩnh Long",
    "province": "Sở GD&ĐT Vĩnh Long",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị một đoạn văn bản (Paragraph)?",
    "options": [
      "<para>",
      "<text>",
      "<p>",
      "<pg>"
    ],
    "answer": 2,
    "explanation": "Thẻ <p> (Paragraph) dùng để định nghĩa một đoạn văn bản trong HTML.",
    "globalId": "bank_p1_087"
  },
  {
    "id": "mg_p1_88",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Vĩnh Long",
    "province": "Sở GD&ĐT Vĩnh Long",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để bỏ dấu gạch chân mặc định của các thẻ liên kết <a> trên toàn bộ trang web, quy tắc CSS nào là đúng?",
    "options": [
      "a {text-decoration: none;}",
      "a {text-underline: false;}",
      "a {decoration: no-line;}",
      "a {font-style: clean;}"
    ],
    "answer": 0,
    "explanation": "text-decoration: none; là thuộc tính chuẩn để loại bỏ dấu gạch chân mặc định của thẻ liên kết.",
    "globalId": "bank_p1_088"
  },
  {
    "id": "mg_p1_89",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Vĩnh Long",
    "province": "Sở GD&ĐT Vĩnh Long",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi muốn khi mở trang web, con trỏ soạn thảo tự động nhảy ngay vào ô 'Tên đăng nhập' mà người dùng không cần lấy chuột bấm vào, ta dùng thuộc tính nào?",
    "options": [
      "focus",
      "autofocus",
      "cursor='active'",
      "selected"
    ],
    "answer": 1,
    "explanation": "Thuộc tính autofocus là thuộc tính boolean trong HTML5 giúp tự động đặt tiêu điểm (focus) vào ô nhập khi trang tải xong.",
    "globalId": "bank_p1_089"
  },
  {
    "id": "mg_p1_90",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị văn bản có đường gạch ngang ở giữa (gạch xóa văn bản cũ)?",
    "options": [
      "<s> (hoặc <del>)",
      "<u>",
      "<line>",
      "<strike-bold>"
    ],
    "answer": 0,
    "explanation": "Thẻ <s> hoặc <del> (Deleted text) dùng để hiển thị chữ có đường gạch ngang ở giữa.",
    "globalId": "bank_p1_090"
  },
  {
    "id": "mg_p1_91",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi chèn tệp âm thanh bài giảng dài 45 phút vào trang web, thuộc tính nào sau đây của thẻ <audio> KHÔNG NÊN đặt để tránh gây khó chịu cho người nghe?",
    "options": [
      "controls",
      "autoplay",
      "src",
      "preload"
    ],
    "answer": 1,
    "explanation": "Không nên đặt autoplay cho tệp âm thanh dài vì có thể phát tiếng bất ngờ làm giật mình và tốn băng thông của người dùng.",
    "globalId": "bank_p1_091"
  },
  {
    "id": "mg_p1_92",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng chữ in hoa toàn bộ (UPPERCASE) cho tất cả các tiêu đề <h1>?",
    "options": [
      "h1 {text-transform: uppercase;}",
      "h1 {font-case: upper;}",
      "h1 {text-style: capital;}",
      "h1 {text-upper: true;}"
    ],
    "answer": 0,
    "explanation": "text-transform: uppercase; là thuộc tính CSS chuyển đổi toàn bộ ký tự văn bản thành chữ hoa.",
    "globalId": "bank_p1_092"
  },
  {
    "id": "mg_p1_93",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được dùng để tạo một danh sách có thứ tự (được đánh số tự động 1, 2, 3...)?",
    "options": [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>"
    ],
    "answer": 1,
    "explanation": "<ol> (Ordered List) tạo danh sách có thứ tự đánh số tự động.",
    "globalId": "bank_p1_093"
  },
  {
    "id": "mg_p1_94",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Để ghi chú một dòng thông tin trong mã nguồn HTML mà trình duyệt bỏ qua không hiển thị ra màn hình, cú pháp đúng là:",
    "options": [
      "<!-- Đây là ghi chú -->",
      "// Đây là ghi chú",
      "/* Đây là ghi chú */",
      "# Đây là ghi chú"
    ],
    "answer": 0,
    "explanation": "Cú pháp chú thích (Comment) trong HTML bắt đầu bằng <!-- và kết thúc bằng -->.",
    "globalId": "bank_p1_094"
  },
  {
    "id": "mg_p1_95",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi người dùng nhấn vào một bức ảnh có mã sau: <a href='https://moet.gov.vn'><img src='logo.png' alt='Bộ GD'></a>, trình duyệt sẽ thực hiện điều gì?",
    "options": [
      "Chuyển hướng người dùng đến trang web của Bộ Giáo dục & Đào tạo (https://moet.gov.vn)",
      "Chỉ hiển thị bức ảnh mà không có liên kết nào",
      "Tự động tải bức ảnh logo.png về máy tính",
      "Báo lỗi cú pháp HTML"
    ],
    "answer": 0,
    "explanation": "Thẻ <a> bọc quanh thẻ <img> biến hình ảnh thành một nút liên kết chuyển hướng đến URL chỉ định ở href.",
    "globalId": "bank_p1_095"
  },
  {
    "id": "mg_p1_96",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong một form đặt vé tàu hỏa, muốn tạo một nhóm chọn loại vé (Vé ngồi mềm / Vé giường nằm) sao cho người dùng chọn mục này thì mục kia tự bỏ chọn, hai thẻ <input type='radio'> bắt buộc phải thỏa mãn điều kiện gì?",
    "options": [
      "Phải có cùng giá trị của thuộc tính name",
      "Phải có cùng giá trị của thuộc tính id",
      "Phải có cùng giá trị của thuộc tính value",
      "Phải đặt cạnh nhau trên cùng một dòng"
    ],
    "answer": 0,
    "explanation": "Các nút type='radio' muốn hoạt động theo nhóm loại trừ lẫn nhau (chỉ chọn 1) bắt buộc phải có chung thuộc tính name.",
    "globalId": "bank_p1_096"
  }
],
  questionsP2: [
  {
    "id": "mg_p2_01",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "title": "Câu 1: Về thiết kế trang báo tường điện tử của chi đoàn",
    "context": "Lớp 12A thiết kế một trang web báo tường điện tử chào mừng ngày thành lập Đoàn 26/3. Trang web gồm trang chủ index.html, các bài viết trong thư mục con 'baiviet/' và hình ảnh minh họa trong thư mục 'hinhanh/'. Xác định tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_01_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để hiển thị tiêu đề trên thanh tab của trình duyệt web, nhóm học sinh cần đặt dòng chữ tiêu đề bên trong cặp thẻ <title> ... </title> nằm trong phần <head>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <title> nằm trong <head> xác định tiêu đề hiển thị trên thanh tab của trình duyệt."
      },
      {
        "id": "mg_p2_01_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Từ tệp 'baiviet/bai1.html', để chèn bức ảnh 'anh1.jpg' nằm trong thư mục 'hinhanh/' (ngang cấp với thư mục 'baiviet'), đường dẫn tương đối đúng là src='../hinhanh/anh1.jpg'.",
        "answer": true,
        "explanation": "Đúng. Cần dùng '../' để lùi ra thư mục cha rồi đi vào thư mục 'hinhanh/anh1.jpg'."
      },
      {
        "id": "mg_p2_01_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để đổi màu chữ tiêu đề thành màu đỏ bằng CSS nội tuyến (Inline CSS), học sinh viết thuộc tính: style='font-color: red;'.",
        "answer": false,
        "explanation": "Sai. Trong CSS, thuộc tính đổi màu chữ là 'color: red;' chứ không có thuộc tính 'font-color'."
      },
      {
        "id": "mg_p2_01_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi sử dụng đường dẫn tương đối để tạo siêu liên kết giữa các trang trong cùng một website, trang web vẫn hoạt động hoàn toàn chính xác khi sao chép toàn bộ thư mục website sang một máy tính khác mà không bị đứt gãy liên kết.",
        "answer": true,
        "explanation": "Đúng. Ưu điểm nổi bật của đường dẫn tương đối là tính cơ động, không phụ thuộc vào ổ đĩa hay tên miền tuyệt đối."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "globalId": "bank_p2_001"
  },
  {
    "id": "mg_p2_02",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "title": "Câu 2: Về cấu trúc tài liệu và siêu liên kết trong trang tin điện tử",
    "context": "Một nhóm học sinh tham gia dự án xây dựng trang tin 'Hải đảo quê hương'. Khi kiểm tra cấu trúc mã nguồn HTML của website, các bạn đưa ra các nhận định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_02_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Khai báo <!DOCTYPE html> ở dòng đầu tiên nhằm thông báo cho trình duyệt biết trang web tuân theo chuẩn ngôn ngữ HTML5.",
        "answer": true,
        "explanation": "Đúng. <!DOCTYPE html> là khai báo chuẩn phiên bản HTML5."
      },
      {
        "id": "mg_p2_02_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Các thẻ <br> và <hr> là các thẻ đơn (void elements), không có thẻ đóng riêng biệt và không chứa văn bản bên trong.",
        "answer": true,
        "explanation": "Đúng. <br> (ngắt dòng) và <hr> (đường kẻ ngang) là các thẻ đơn tự đóng."
      },
      {
        "id": "mg_p2_02_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi người dùng nhấp vào liên kết có cú pháp href='mailto:admin@truong.edu.vn', trình duyệt sẽ tự động tải tệp tin có tên admin@truong.edu.vn về máy tính.",
        "answer": false,
        "explanation": "Sai. Giao thức 'mailto:' dùng để mở ứng dụng gửi email mặc định của thiết bị, không phải để tải tệp tin."
      },
      {
        "id": "mg_p2_02_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Có thể biến bức ảnh cờ Tổ quốc thành một nút bấm chuyển trang bằng cách đặt thẻ <img> bên trong cặp thẻ mở <a> và thẻ đóng </a>.",
        "answer": true,
        "explanation": "Đúng. HTML cho phép lồng phần tử <img> bên trong thẻ <a> để tạo liên kết hình ảnh."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "globalId": "bank_p2_002"
  },
  {
    "id": "mg_p2_03",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "title": "Câu 3: Về tích hợp đa phương tiện và nhúng tài nguyên trực tuyến",
    "context": "Trong bài thực hành số hóa thông tin du lịch địa phương, học sinh tiến hành nhúng bản đồ số và video thuyết minh vào trang web. Em hãy xác định tính Đúng/Sai của các khẳng định sau:",
    "items": [
      {
        "id": "mg_p2_03_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> cho phép tạo ra một khung nội tuyến độc lập để hiển thị nội dung của một trang web khác ngay trong trang web hiện tại.",
        "answer": true,
        "explanation": "Đúng. <iframe> dùng để nhúng khung hiển thị tài nguyên hoặc trang web bên ngoài."
      },
      {
        "id": "mg_p2_03_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi nhúng video bài giảng từ YouTube vào thẻ <iframe>, ta bắt buộc phải sử dụng đường link dạng '/embed/' thay cho đường link xem '/watch' trên thanh địa chỉ URL.",
        "answer": true,
        "explanation": "Đúng. YouTube chặn nhúng link xem watch thông thường qua chính sách X-Frame-Options; bắt buộc phải dùng định dạng mã nhúng embed."
      },
      {
        "id": "mg_p2_03_c",
        "label": "c",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thuộc tính 'controls' trong thẻ <video> có chức năng tự động phát video ngay khi người dùng vừa truy cập vào trang web.",
        "answer": false,
        "explanation": "Sai. 'controls' hiển thị thanh điều khiển (Play/Pause, âm lượng); còn tự động phát là thuộc tính 'autoplay'."
      },
      {
        "id": "mg_p2_03_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi thiết lập thuộc tính width='100%' cho thẻ <iframe>, khung hiển thị bản đồ sẽ tự động co giãn vừa vặn với độ rộng màn hình của mọi thiết bị (máy tính, điện thoại).",
        "answer": true,
        "explanation": "Đúng. Đặt đơn vị % giúp phần tử co giãn linh hoạt (responsive) theo kích thước phần tử cha chứa nó."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "globalId": "bank_p2_003"
  },
  {
    "id": "mg_p2_04",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "title": "Câu 4: Về thiết kế biểu mẫu (Form) thu thập thông tin",
    "context": "Đoàn trường thiết kế biểu mẫu trực tuyến để tiếp nhận đăng ký tham gia Câu lạc bộ STEM. Biểu mẫu gồm các trường: Họ và tên, Ngày sinh, Lớp học, Giới tính, Lĩnh vực quan tâm và Nút nộp phiếu. Dựa vào kiến thức về Form trong HTML, hãy xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_04_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Toàn bộ các trường dữ liệu và nút bấm gửi thông tin phải được đặt bên trong cặp thẻ <form> ... </form>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <form> là phần tử bao bọc toàn bộ thành phần của biểu mẫu thu thập dữ liệu."
      },
      {
        "id": "mg_p2_04_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Tại mục chọn Giới tính (Nam / Nữ) chỉ được phép chọn duy nhất 1 mục, ta phải thiết lập thuộc tính type='checkbox' cho các ô lựa chọn.",
        "answer": false,
        "explanation": "Sai. Chọn duy nhất 1 mục trong nhóm bắt buộc dùng type='radio' và có cùng thuộc tính name. Checkbox dùng để chọn nhiều mục."
      },
      {
        "id": "mg_p2_04_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để hỗ trợ học sinh chạm vào nhãn chữ 'Nam' hoặc 'Nữ' mà nút tròn radio tương ứng vẫn tự động được tích chọn, ta sử dụng thẻ <label for='id_input'> gắn với id của ô input đó.",
        "answer": true,
        "explanation": "Đúng. Thẻ <label for> liên kết với thuộc tính id của phần tử input giúp mở rộng vùng nhấp chuột thuận tiện."
      },
      {
        "id": "mg_p2_04_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi người dùng nhấn nút có khai báo <input type='reset' value='Nộp hồ sơ'>, toàn bộ thông tin đăng ký của học sinh sẽ được đóng gói và gửi về máy chủ.",
        "answer": false,
        "explanation": "Sai. type='reset' chỉ xóa trắng dữ liệu đã nhập về mặc định. Để gửi dữ liệu về máy chủ, bắt buộc phải dùng type='submit'."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "globalId": "bank_p2_004"
  },
  {
    "id": "mg_p2_05",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "title": "Câu 1: Về việc nhúng video và âm thanh vào website câu lạc bộ",
    "context": "Nhóm học sinh xây dựng website cho CLB Âm nhạc trường học. Trang web có phát bài hát truyền thống bằng thẻ <audio> và video giới thiệu bằng thẻ <video>. Hãy xác định tính Đúng/Sai của các nhận định sau:",
    "items": [
      {
        "id": "mg_p2_05_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <audio> và <video> đều sử dụng thuộc tính src để cung cấp đường dẫn đến tệp đa phương tiện.",
        "answer": true,
        "explanation": "Đúng. Cả hai thẻ đa phương tiện đều dùng thuộc tính src để định vị tệp nguồn."
      },
      {
        "id": "mg_p2_05_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Nếu không có thuộc tính 'controls', trình duyệt vẫn hiển thị đầy đủ nút Phát/Tạm dừng và thanh âm lượng cho người xem tương tác.",
        "answer": false,
        "explanation": "Sai. Nếu thiếu 'controls', trình duyệt sẽ ẩn hoàn toàn thanh điều khiển giao diện."
      },
      {
        "id": "mg_p2_05_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính 'loop' cho phép tệp nhạc hoặc video tự động lặp lại liên tục sau khi phát hết.",
        "answer": true,
        "explanation": "Đúng. Thuộc tính loop có chức năng lặp vô hạn nội dung đa phương tiện."
      },
      {
        "id": "mg_p2_05_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để tuân thủ chính sách Autoplay Policy của các trình duyệt hiện đại (như Chrome, Edge), khi muốn video tự động chạy ngay khi tải trang, bắt buộc phải kết hợp cả hai thuộc tính autoplay và muted.",
        "answer": true,
        "explanation": "Đúng. Trình duyệt chỉ cho phép autoplay nếu video đã được tắt tiếng (muted) để tránh làm phiền người dùng."
      }
    ],
    "globalId": "bank_p2_005"
  },
  {
    "id": "mg_p2_06",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "title": "Câu 2: Về thiết kế biểu mẫu khảo sát ý kiến trực tuyến",
    "context": "Chi đoàn trường THPT tạo một form khảo sát chọn địa điểm dã ngoại với các trường thông tin: Họ tên, Lớp, Địa điểm đề xuất (chỉ chọn 1 trong 3 nơi), Góp ý thêm và Nút gửi. Xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_06_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Toàn bộ các ô nhập dữ liệu khảo sát và nút bấm gửi biểu mẫu bắt buộc phải nằm bên trong cặp thẻ <form> ... </form>.",
        "answer": true,
        "explanation": "Đúng. Cặp thẻ <form> bao bọc các thành phần nhập liệu của biểu mẫu."
      },
      {
        "id": "mg_p2_06_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để người dùng chỉ được phép chọn duy nhất 1 địa điểm trong 3 địa điểm đề xuất, ta sử dụng 3 thẻ <input type='radio'> có cùng giá trị của thuộc tính name.",
        "answer": true,
        "explanation": "Đúng. Các nút radio có cùng thuộc tính name sẽ tạo thành một nhóm chọn duy nhất 1 phương án."
      },
      {
        "id": "mg_p2_06_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để nhập đoạn ý kiến 'Góp ý thêm' có độ dài nhiều dòng, thẻ <input type='text'> là phần tử tối ưu nhất.",
        "answer": false,
        "explanation": "Sai. <input type='text'> chỉ nhập 1 dòng ngắn. Để nhập văn bản nhiều dòng cần dùng <textarea>."
      },
      {
        "id": "mg_p2_06_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi người dùng nhấn vào nút <button type='submit'>, dữ liệu trên form sẽ được gửi đến URL chỉ định ở thuộc tính action của thẻ <form> theo phương thức quy định ở method.",
        "answer": true,
        "explanation": "Đúng. Nút type='submit' kích hoạt việc đóng gói và chuyển dữ liệu form đến máy chủ chỉ định."
      }
    ],
    "globalId": "bank_p2_006"
  },
  {
    "id": "mg_p2_07",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "title": "Câu 3: Về cấu trúc danh sách và bảng biểu trên trang web",
    "context": "Một học sinh lập trình bảng thời khóa biểu và danh sách đồ dùng học tập bằng HTML. Hãy đánh giá tính Đúng/Sai của các khẳng định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_07_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Trong HTML, thẻ <th> dùng để tạo ô tiêu đề của bảng, văn bản bên trong mặc định được in đậm và căn giữa.",
        "answer": true,
        "explanation": "Đúng. <th> (Table Header) tự động in đậm và căn giữa nội dung."
      },
      {
        "id": "mg_p2_07_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Mỗi mục con bên trong danh sách <ul> hoặc <ol> đều được biểu diễn bằng thẻ <li>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <li> (List Item) biểu diễn từng phần tử mục con trong danh sách."
      },
      {
        "id": "mg_p2_07_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Thuộc tính colspan='2' ở thẻ <td> làm cho ô đó mở rộng chiếm chiều cao của 2 hàng liên tiếp.",
        "answer": false,
        "explanation": "Sai. colspan='2' mở rộng chiều rộng của 2 cột; mở rộng 2 hàng là rowspan='2'."
      },
      {
        "id": "mg_p2_07_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Có thể lồng một bảng nhỏ <table> vào bên trong một ô <td> của một bảng khác để tạo bố cục giao diện phức tạp.",
        "answer": true,
        "explanation": "Đúng. HTML hỗ trợ bảng lồng nhau (Nested Tables) bên trong ô dữ liệu <td>."
      }
    ],
    "globalId": "bank_p2_007"
  },
  {
    "id": "mg_p2_08",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "title": "Câu 4: Về nhúng tài nguyên và định dạng giao diện bằng CSS",
    "context": "Khi xây dựng trang web giới thiệu trường THPT, nhóm bạn Lan viết mã HTML và CSS. Hãy xem xét tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_08_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> cho phép nhúng một trang web bên ngoài hoặc bản đồ vào một khung nhìn độc lập trong trang web hiện tại.",
        "answer": true,
        "explanation": "Đúng. <iframe> tạo khung nội tuyến để hiển thị nội dung tài nguyên bên ngoài."
      },
      {
        "id": "mg_p2_08_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "CSS nội bộ (Internal CSS) được đặt bên trong cặp thẻ <style> ... </style> nằm ở phần <body> của tài liệu.",
        "answer": false,
        "explanation": "Sai. CSS nội bộ chuẩn W3C được đặt trong thẻ <style> nằm ở phần <head> của tài liệu."
      },
      {
        "id": "mg_p2_08_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Bộ chọn lớp (.classname) có thể áp dụng đồng thời cho nhiều phần tử khác nhau trên cùng một trang web.",
        "answer": true,
        "explanation": "Đúng. Class được dùng để tái sử dụng kiểu dáng cho nhiều phần tử khác nhau."
      },
      {
        "id": "mg_p2_08_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi khai báo đường viền trong CSS với cú pháp border: 2px dashed red;, đường viền sẽ có độ dày 2px, nét đứt khúc và màu đỏ.",
        "answer": true,
        "explanation": "Đúng. Cú pháp shorthand border quy định độ dày 2px, kiểu dashed (nét đứt) và màu đỏ."
      }
    ],
    "globalId": "bank_p2_008"
  },
  {
    "id": "mg_p2_09",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "title": "Câu 1: Về xây dựng website giới thiệu di sản văn hóa Lam Kinh",
    "context": "Nhóm học sinh xây dựng website 'Di sản Lam Kinh'. Website gồm trang chủ index.html, thư mục 'css/' chứa style.css, thư mục 'img/' chứa hình ảnh và thư mục 'video/' chứa clip giới thiệu. Xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_09_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Tệp hình ảnh và tệp video cần được đặt đúng thư mục và gọi bằng đường dẫn tương đối để trang web hiển thị ổn định khi chuyển thư mục.",
        "answer": true,
        "explanation": "Đúng. Đường dẫn tương đối giúp website hoạt động linh hoạt khi chuyển đổi máy tính."
      },
      {
        "id": "mg_p2_09_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để liên kết tệp style.css từ trang index.html, cú pháp đúng là <link rel='stylesheet' href='css/style.css'>.",
        "answer": true,
        "explanation": "Đúng. Tệp CSS nằm trong thư mục con 'css/' nên đường dẫn tương đối là 'css/style.css'."
      },
      {
        "id": "mg_p2_09_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính alt='Ảnh bia Vĩnh Lăng' trong thẻ <img> sẽ hiển thị nội dung video giới thiệu nếu người dùng không có kết nối internet.",
        "answer": false,
        "explanation": "Sai. alt là thuộc tính hiển thị văn bản thay thế khi hình ảnh bị lỗi, không liên quan đến video."
      },
      {
        "id": "mg_p2_09_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để tạo nút bấm 'Xem video' mở clip trong tab mới, cú pháp phù hợp là <a href='video/gioithieu.mp4' target='_blank'>Xem video</a>.",
        "answer": true,
        "explanation": "Đúng. target='_blank' mở tài nguyên đích trong tab hoặc cửa sổ mới."
      }
    ],
    "globalId": "bank_p2_009"
  },
  {
    "id": "mg_p2_10",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "title": "Câu 2: Về thiết kế biểu mẫu đóng góp ý kiến bạn đọc",
    "context": "Trang tin của trường tạo form đóng góp bài viết gồm các ô: Tiêu đề bài viết, Tên tác giả, Email, Chuyên mục (chọn 1 trong 4 mục), Tệp đính kèm và Nút gửi bài. Hãy xác định tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_10_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Ô nhập Email người dùng có thể sử dụng thẻ <input type='email'> để trình duyệt tự động kiểm tra định dạng email hợp lệ (có ký tự @).",
        "answer": true,
        "explanation": "Đúng. type='email' có tính năng tự động kiểm tra cú pháp địa chỉ email chuẩn."
      },
      {
        "id": "mg_p2_10_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để chọn chuyên mục trong danh sách 4 mục gọn gàng, thẻ <select> kết hợp với 4 thẻ <option> là giải pháp phù hợp.",
        "answer": true,
        "explanation": "Đúng. <select> và <option> tạo danh sách chọn dạng thả xuống giúp tiết kiệm không gian trang web."
      },
      {
        "id": "mg_p2_10_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Phương thức method='GET' là lựa chọn bắt buộc khi form có chứa tệp tin đính kèm dung lượng lớn.",
        "answer": false,
        "explanation": "Sai. Gửi tệp đính kèm bắt buộc dùng method='POST' và enctype='multipart/form-data'."
      },
      {
        "id": "mg_p2_10_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Nếu nút nộp form được khai báo là <input type='button' value='Gửi bài'> mà không có mã JavaScript xử lý thì khi bấm nút dữ liệu sẽ không tự động được gửi đi.",
        "answer": true,
        "explanation": "Đúng. type='button' là nút bấm thông thường, không có hành vi tự động nộp form như type='submit'."
      }
    ],
    "globalId": "bank_p2_010"
  },
  {
    "id": "mg_p2_11",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "title": "Câu 3: Về cấu trúc bảng điểm và định dạng CSS cho bảng",
    "context": "Một học sinh lập trình bảng kết quả rèn luyện học tập có các cột: STT, Họ và tên, Điểm Toán, Điểm Văn, Điểm Tin và Xếp loại. Đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_11_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Trong bảng HTML, mỗi ô dữ liệu thông thường ở các hàng nội dung được đặt bên trong thẻ <td> ... </td>.",
        "answer": true,
        "explanation": "Đúng. <td> (Table Data) định nghĩa các ô dữ liệu thông thường trong bảng."
      },
      {
        "id": "mg_p2_11_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <tr> chỉ có thể chứa các thẻ con là <th> hoặc <td>, không thể chứa trực tiếp đoạn văn bản thô.",
        "answer": true,
        "explanation": "Đúng. Hàng bảng <tr> chỉ hợp lệ khi chứa các ô <th> hoặc <td>."
      },
      {
        "id": "mg_p2_11_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để định dạng bảng có đường viền nét liền màu xám dày 1px và các ô dính liền nhau (không bị hở khe viền đôi), ta dùng CSS: table, td, th {border: 1px solid gray; border-collapse: collapse;}.",
        "answer": true,
        "explanation": "Đúng. border-collapse: collapse giúp gộp các đường viền kép của bảng thành viền đơn liền mạch."
      },
      {
        "id": "mg_p2_11_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Thuộc tính rowspan='2' nếu được đặt ở ô tiêu đề 'STT' của hàng thứ nhất thì ở hàng thứ hai bắt buộc phải giữ nguyên ô <td> của cột STT đó.",
        "answer": false,
        "explanation": "Sai. Vì ô ở hàng 1 đã gộp chiếm hàng 2, nên ở hàng 2 không được viết ô <td> của cột đó nữa."
      }
    ],
    "globalId": "bank_p2_011"
  },
  {
    "id": "mg_p2_12",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "title": "Câu 4: Về quy tắc kế thừa và bộ chọn trong CSS",
    "context": "Khi tìm hiểu về cách CSS định dạng trang web, nhóm học sinh đưa ra các nhận định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_12_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Bộ chọn thẻ (Element Selector) như p, h1, body áp dụng kiểu dáng cho toàn bộ các phần tử cùng tên trên trang web.",
        "answer": true,
        "explanation": "Đúng. Bộ chọn phần tử tác động lên tất cả các phần tử mang thẻ đó."
      },
      {
        "id": "mg_p2_12_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Các thuộc tính định dạng chữ như color, font-family, font-size khi được khai báo ở phần tử cha <body> sẽ tự động được kế thừa bởi các phần tử con bên trong.",
        "answer": true,
        "explanation": "Đúng. Tính kế thừa (Inheritance) trong CSS tự động truyền các thuộc tính kiểu chữ từ phần tử cha xuống phần tử con."
      },
      {
        "id": "mg_p2_12_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Một phần tử HTML chỉ có thể thuộc về tối đa một lớp class duy nhất.",
        "answer": false,
        "explanation": "Sai. Một phần tử HTML có thể chứa nhiều lớp class cách nhau bởi dấu cách, ví dụ: class='btn btn-primary active'."
      },
      {
        "id": "mg_p2_12_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi một phần tử vừa chịu tác động của bộ chọn ID (#menu {color: blue;}) vừa chịu tác động của bộ chọn Class (.nav {color: red;}), chữ của phần tử đó sẽ có màu xanh (blue).",
        "answer": true,
        "explanation": "Đúng. Bộ chọn ID có độ đặc hiệu (Specificity) cao hơn bộ chọn Class nên quy tắc màu xanh của ID sẽ thắng."
      }
    ],
    "globalId": "bank_p2_012"
  },
  {
    "id": "mg_p2_13",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "title": "Câu 1: Về thiết kế menu điều hướng và bảng giá dịch vụ",
    "context": "Nhóm bạn Nam thiết kế website kinh doanh đặc sản miền Tây gồm thanh điều hướng (Menu) và bảng bảng giá. Em hãy xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_13_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thanh điều hướng (navigation bar) của website thường được xây dựng dựa trên cấu trúc danh sách không có thứ tự <ul> kết hợp các thẻ <li> và <a>.",
        "answer": true,
        "explanation": "Đúng. Cấu trúc ngữ nghĩa chuẩn để tạo thanh menu trong HTML là <ul><li><a>."
      },
      {
        "id": "mg_p2_13_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <caption> nếu có trong bảng dữ liệu thì bắt buộc phải đặt ở vị trí sau cùng của bảng, ngay trước thẻ đóng </table>.",
        "answer": false,
        "explanation": "Sai. Thẻ <caption> phải được đặt ngay sau thẻ mở <table>, trước các hàng <tr>."
      },
      {
        "id": "mg_p2_13_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để hiển thị tiêu đề bảng được in đậm và căn giữa tự động, học sinh sử dụng thẻ <th> thay cho thẻ <td> ở hàng đầu tiên.",
        "answer": true,
        "explanation": "Đúng. Thẻ <th> (Table Header) tự động định dạng chữ đậm và căn giữa ô."
      },
      {
        "id": "mg_p2_13_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi bảng giá có 4 cột, ô 'Tổng cộng thanh toán' ở hàng cuối cùng muốn chiếm độ rộng của 3 cột đầu tiên thì thẻ đó viết là <td colspan='3'>Tổng cộng</td>.",
        "answer": true,
        "explanation": "Đúng. colspan='3' gộp 3 ô liên tiếp theo chiều ngang (cột)."
      }
    ],
    "globalId": "bank_p2_013"
  },
  {
    "id": "mg_p2_14",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "title": "Câu 2: Về tích hợp đa phương tiện và nhúng bản đồ du lịch",
    "context": "Nhóm học sinh xây dựng trang web du lịch Chợ nổi Cái Răng có chèn hình ảnh đặc sản, video giới thiệu và bản đồ chỉ đường Google Maps. Đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_14_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <img> là thẻ đơn không có thẻ đóng riêng biệt, thông tin vị trí ảnh được cung cấp ở thuộc tính src.",
        "answer": true,
        "explanation": "Đúng. <img> là thẻ đơn tự đóng và dùng thuộc tính src để định vị ảnh."
      },
      {
        "id": "mg_p2_14_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> chỉ có thể nhúng được video của YouTube chứ không thể nhúng được bản đồ Google Maps hay trang web khác.",
        "answer": false,
        "explanation": "Sai. <iframe> nhúng được bất kỳ tài nguyên web nào hỗ trợ nhúng (bản đồ, tài liệu, video, trang web khác)."
      },
      {
        "id": "mg_p2_14_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính poster trong thẻ <video> có tác dụng hiển thị một bức ảnh tĩnh đại diện trước khi người dùng bấm phát video.",
        "answer": true,
        "explanation": "Đúng. Thuộc tính poster cung cấp hình ảnh bìa (thumbnail) đại diện cho video."
      },
      {
        "id": "mg_p2_14_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để khung bản đồ số <iframe> co giãn linh hoạt vừa khít với mọi kích thước màn hình điện thoại di động của du khách, ta nên thiết lập thuộc tính style='width: 100%; border: 0;'.",
        "answer": true,
        "explanation": "Đúng. Đơn vị tương đối 100% giúp khung hình tự động co giãn theo chiều rộng màn hình thiết bị."
      }
    ],
    "globalId": "bank_p2_014"
  },
  {
    "id": "mg_p2_15",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "title": "Câu 3: Về biểu mẫu đặt phòng khách sạn trực tuyến",
    "context": "Một website khách sạn tại Vũng Tàu thiết kế form đặt phòng gồm: Họ tên, Số điện thoại, Ngày nhận phòng, Loại phòng (Đơn/Đôi/VIP) và Nút xác nhận. Xem xét tính Đúng/Sai của các khẳng định sau:",
    "items": [
      {
        "id": "mg_p2_15_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để người dùng chọn ngày nhận phòng trên lịch số trực quan, HTML5 cung cấp thẻ <input type='date'>.",
        "answer": true,
        "explanation": "Đúng. type='date' cung cấp bảng chọn ngày tháng năm lịch số trực quan."
      },
      {
        "id": "mg_p2_15_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính required đặt ở ô nhập 'Số điện thoại' sẽ bắt buộc người dùng phải điền thông tin trước khi form được gửi đi.",
        "answer": true,
        "explanation": "Đúng. required ngăn không cho gửi form nếu trường dữ liệu đó đang bị bỏ trống."
      },
      {
        "id": "mg_p2_15_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi người dùng chọn Loại phòng bằng thẻ <select>, nếu không có thuộc tính multiple thì người dùng có thể chọn đồng thời cả 3 loại phòng cùng lúc.",
        "answer": false,
        "explanation": "Sai. <select> mặc định chỉ chọn duy nhất 1 mục; muốn chọn nhiều mục phải có thêm thuộc tính multiple."
      },
      {
        "id": "mg_p2_15_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để đảm bảo các thông tin đặt phòng nhạy cảm (như số điện thoại, thông tin cá nhân) không bị lộ trên thanh địa chỉ URL, thẻ <form> bắt buộc phải thiết lập thuộc tính method='POST'.",
        "answer": true,
        "explanation": "Đúng. Phương thức POST giấu kín dữ liệu trong phần thân gói tin, bảo mật thông tin cá nhân của khách hàng."
      }
    ],
    "globalId": "bank_p2_015"
  },
  {
    "id": "mg_p2_16",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "title": "Câu 4: Về tổ chức cấu trúc tệp website và định dạng CSS",
    "context": "Một website trường THPT có cấu trúc thư mục chuẩn: thư mục gốc chứa index.html, thư mục con 'css/' chứa style.css, thư mục 'gioithieu/' chứa lichsu.html. Hãy đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_16_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Tệp bảng định dạng CSS ngoài có phần mở rộng chuẩn là .css và không chứa các thẻ HTML như <style> hay </style> bên trong.",
        "answer": true,
        "explanation": "Đúng. Tệp .css thuần túy chỉ chứa các quy tắc định dạng CSS, không được chứa thẻ HTML."
      },
      {
        "id": "mg_p2_16_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Bộ chọn dấu hoa thị (*) trong CSS là bộ chọn toàn cục (Universal Selector), áp dụng định dạng cho tất cả các phần tử trên trang web.",
        "answer": true,
        "explanation": "Đúng. Bộ chọn * tác động lên tất cả các phần tử HTML trong tài liệu."
      },
      {
        "id": "mg_p2_16_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Từ tệp 'gioithieu/lichsu.html', để liên kết đến tệp định dạng 'css/style.css' ở thư mục gốc, đường dẫn tương đối đúng là <link rel='stylesheet' href='../css/style.css'>.",
        "answer": true,
        "explanation": "Đúng. Cần '../' để lùi ra thư mục gốc rồi đi vào 'css/style.css'."
      },
      {
        "id": "mg_p2_16_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Quy tắc CSS h1, p {color: green;} và quy tắc h1 p {color: green;} có ý nghĩa và cách tác động hoàn toàn giống nhau.",
        "answer": false,
        "explanation": "Sai. 'h1, p' (có dấu phẩy) tác động lên cả thẻ h1 và thẻ p; còn 'h1 p' (không dấu phẩy) là bộ chọn hậu duệ chỉ tác động lên thẻ p nằm BÊN TRONG thẻ h1."
      }
    ],
    "globalId": "bank_p2_016"
  }
]
};

// Ma trận chuẩn Bộ GD&ĐT 2025 cho đề thi thử 28 câu (40 ý hỏi, 45 phút, Thang 10.0)
const GRAD_MATRIX_STANDARD_28 = {
  "ratio": "4:3:3",
  "nbPercent": 40,
  "thPercent": 30,
  "vdPercent": 30,
  "nbTotal": 16,
  "thTotal": 12,
  "vdTotal": 12,
  "part1": {
    "nb": 10,
    "th": 7,
    "vd": 7,
    "total": 24,
    "maxScore": 6.0
  },
  "part2": {
    "nb": 6,
    "th": 5,
    "vd": 5,
    "total": 16,
    "maxScore": 4.0
  },
  "totalQuestions": 28,
  "totalItems": 40,
  "totalScore": 10.0
};

// 8 bộ đề thi thử độc lập chuẩn 28 câu (24 P1 + 4 P2)
const COMPREHENSIVE_TEST_GRAD_1 = {
  id: "exam_mock_grad_1",
  code: "THI-THU-01",
  num: 1,
  title: "Đề thi thử Tốt nghiệp THPT Số 01",
  desc: "Tuyển chọn ngẫu nhiên 28 câu hỏi (24 câu Phần I + 4 câu Phần II) từ ngân hàng đề thi thử các Sở GD&ĐT.",
  sources: "Tuyển chọn từ hơn 40 Sở GD&ĐT trên toàn quốc",
  timeMinutes: 45,
  matrix: GRAD_MATRIX_STANDARD_28,
  part1: [
  {
    "id": "mg_p1_01",
    "source": "Đề Tham Khảo Bộ GD&ĐT",
    "province": "Bộ GD&ĐT",
    "topic": "Định dạng văn bản & Thẻ HTML",
    "level": "NB",
    "question": "Cặp thẻ HTML nào sau đây được sử dụng để nhấn mạnh văn bản quan trọng bằng cách hiển thị chữ in đậm?",
    "options": [
      "<important> </important>",
      "<strong> </strong>",
      "<mark> </mark>",
      "<em> </em>"
    ],
    "answer": 1,
    "explanation": "Trong chuẩn HTML5, thẻ <strong> được sử dụng để xác định văn bản có mức độ quan trọng cao và trình duyệt mặc định hiển thị in đậm.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_03",
    "source": "Đề Tham Khảo Bộ GD&ĐT",
    "province": "Bộ GD&ĐT",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Phần mềm nào sau đây thường được sử dụng phổ biến và thuận tiện nhất để lập trình, soạn thảo mã nguồn HTML?",
    "options": [
      "Microsoft Word",
      "Adobe Photoshop",
      "Visual Studio Code (hoặc Notepad++)",
      "Google Chrome"
    ],
    "answer": 2,
    "explanation": "Visual Studio Code, Notepad++, Sublime Text là các trình biên soạn mã nguồn (code editor) chuyên dụng cho lập trình web.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_05",
    "source": "Sở GD&ĐT Hà Nội",
    "province": "Hà Nội",
    "topic": "Định dạng CSS",
    "level": "NB",
    "question": "Trong CSS, thuộc tính nào sau đây được sử dụng để thiết lập màu sắc của chữ (văn bản)?",
    "options": [
      "font-color",
      "color",
      "text-color",
      "background-color"
    ],
    "answer": 1,
    "explanation": "Trong CSS, thuộc tính 'color' quy định màu chữ, còn 'background-color' quy định màu nền.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_07",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Thuộc tính nào sau đây của thẻ <img> trong HTML xác định văn bản thay thế hiển thị khi hình ảnh không tải được?",
    "options": [
      "alt",
      "title",
      "text",
      "error"
    ],
    "answer": 0,
    "explanation": "alt (Alternative text) cung cấp văn bản thay thế khi hình ảnh bị lỗi hoặc cho người khiếm thị dùng trình đọc màn hình.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_10",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Trong tài liệu HTML, cặp thẻ nào sau đây được sử dụng để bao quanh toàn bộ nội dung chính của trang web mà người dùng nhìn thấy trên màn hình trình duyệt?",
    "options": [
      "<head> ... </head>",
      "<title> ... </title>",
      "<body> ... </body>",
      "<html> ... </html>"
    ],
    "answer": 2,
    "explanation": "Phần tử <body> chứa tất cả các phần tử giao diện hiển thị cho người dùng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_11",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Định dạng văn bản & Thẻ HTML",
    "level": "NB",
    "question": "Trong HTML, thẻ nào sau đây được sử dụng để bắt đầu một đoạn văn bản mới?",
    "options": [
      "<h1>",
      "<br>",
      "<p>",
      "<a>"
    ],
    "answer": 2,
    "explanation": "Thẻ <p> (Paragraph) dùng để định nghĩa một đoạn văn bản.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_12",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Tệp nguồn chứa mã HTML thường được lưu với phần mở rộng chuẩn nào sau đây?",
    "options": [
      ".doc hoặc .docx",
      ".txt hoặc .pdf",
      ".html hoặc .htm",
      ".css hoặc .js"
    ],
    "answer": 2,
    "explanation": "Mã nguồn trang web HTML được lưu dưới định dạng tệp .html hoặc .htm.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_17",
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Đà Nẵng",
    "topic": "Bảng dữ liệu & Gộp ô",
    "level": "NB",
    "question": "Thẻ nào trong HTML được sử dụng để tạo một ô tiêu đề cột trong bảng (mặc định được in đậm và căn giữa)?",
    "options": [
      "<td>",
      "<tr>",
      "<th>",
      "<caption >"
    ],
    "answer": 2,
    "explanation": "<th> (Table Header) được dùng để định nghĩa ô tiêu đề bảng, mặc định văn bản in đậm và căn giữa.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_18",
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Bắc Giang",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Phần tử HTML nào cho phép nhúng một trang web khác hoặc video YouTube vào một khung hiển thị bên trong trang hiện tại?",
    "options": [
      "<iframe>",
      "<include>",
      "<embed-page>",
      "<webframe>"
    ],
    "answer": 0,
    "explanation": "<iframe> (Inline Frame) là thẻ chuẩn trong HTML dùng để nhúng trang web hoặc dịch vụ ngoại vi.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_22",
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Bình Thuận",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Trong HTML, để chèn nội dung đa phương tiện như hình ảnh (<img>), âm thanh (<audio>), video (<video>), các thẻ này đều bắt buộc phải có thuộc tính nào để xác định đường dẫn tệp nguồn?",
    "options": [
      "src",
      "controls",
      "alt",
      "href"
    ],
    "answer": 0,
    "explanation": "Thuộc tính src (Source) được dùng chung ở các thẻ <img>, <audio>, <video> để chỉ định vị trí tệp đa phương tiện.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_02",
    "source": "Đề Tham Khảo Bộ GD&ĐT",
    "province": "Bộ GD&ĐT",
    "topic": "Định dạng CSS",
    "level": "TH",
    "question": "Trong ngôn ngữ CSS, thuộc tính nào sau đây được sử dụng để thiết lập kiểu đường viền (như nét liền, nét đứt, chấm tròn) cho một phần tử?",
    "options": [
      "border-style",
      "border-width",
      "border-color",
      "outline-style"
    ],
    "answer": 0,
    "explanation": "Thuộc tính border-style quy định kiểu hiển thị của đường viền (solid, dashed, dotted, double...).",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_06",
    "source": "Sở GD&ĐT Hà Nội",
    "province": "Hà Nội",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Khi thiết kế biểu mẫu đăng nhập gồm tên đăng nhập và mật khẩu, thuộc tính nào của thẻ <form> quy định địa chỉ trang hoặc tập lệnh máy chủ sẽ tiếp nhận xử lý thông tin gửi lên?",
    "options": [
      "method",
      "action",
      "target",
      "enctype"
    ],
    "answer": 1,
    "explanation": "Thuộc tính action='URL' chỉ định địa chỉ máy chủ xử lý dữ liệu biểu mẫu khi người dùng nhấn gửi.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_09",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "topic": "Định dạng CSS",
    "level": "TH",
    "question": "Đoạn mã CSS nào dưới đây thiết lập màu chữ xanh (blue) cho toàn bộ nội dung nằm bên trong các thẻ đoạn văn <p> trên trang web?",
    "options": [
      "p = color: blue;",
      "p ( color: blue )",
      "p { color = blue; }",
      "p { color: blue; }"
    ],
    "answer": 3,
    "explanation": "Cú pháp CSS đúng: bộ chọn phần tử p { color: blue; }.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_16",
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Đà Nẵng",
    "topic": "Siêu liên kết",
    "level": "TH",
    "question": "Phát biểu nào sau đây KHÔNG ĐÚNG khi nói về thẻ tạo siêu liên kết <a> trong HTML?",
    "options": [
      "Thẻ <a> dùng để tạo liên kết kết nối các trang web hoặc tài nguyên.",
      "Thuộc tính href là bắt buộc để chỉ định đích đến của siêu liên kết.",
      "Thẻ <a> chỉ có thể bao bọc văn bản thuần túy chứ không thể bọc quanh hình ảnh <img>.",
      "Thuộc tính target='_blank' giúp mở trang đích trong một tab hoặc cửa sổ mới."
    ],
    "answer": 2,
    "explanation": "Thẻ <a> hoàn toàn có thể bọc quanh thẻ <img> để biến bức ảnh thành nút bấm chuyển hướng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_19",
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Bắc Giang",
    "topic": "Cấu trúc HTML",
    "level": "TH",
    "question": "Trong ngôn ngữ HTML, phát biểu nào sau đây là chính xác nhất?",
    "options": [
      "Tất cả các phần tử hiển thị nội dung cho người xem đều được đặt bên trong phần tử <body>.",
      "Thẻ HTML bắt buộc phải viết hoa hoàn toàn thì trình duyệt mới hiểu.",
      "Phần tử <head> là nơi chứa các hình ảnh và video trình chiếu cho người xem.",
      "Tài liệu HTML không thể hiển thị được tiếng Việt có dấu."
    ],
    "answer": 0,
    "explanation": "Toàn bộ giao diện nhìn thấy của trang web đều được đặt bên trong phần tử <body>.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_21",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Phương án nào sau đây thể hiện đúng nhất vai trò của thuộc tính 'name' trong các phần tử nhập liệu (<input>, <select>) của biểu mẫu?",
    "options": [
      "Dùng để hiển thị nhãn của trường nhập liệu trên giao diện trình duyệt.",
      "Giúp máy chủ nhận biết và thu thập giá trị của trường đó khi biểu mẫu được gửi về.",
      "Quy định kiểu phông chữ hiển thị trong ô nhập liệu.",
      "Bắt buộc người dùng không được bỏ trống trường dữ liệu đó."
    ],
    "answer": 1,
    "explanation": "Thuộc tính name đóng vai trò là khóa (key) định danh dữ liệu để máy chủ trích xuất giá trị tương ứng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_23",
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Bình Thuận",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Trong biểu mẫu HTML, phần tử nào được sử dụng để người dùng nhập một đoạn văn bản dài nhiều dòng như ý kiến nhận xét hoặc phản hồi?",
    "options": [
      "<input type='text'>",
      "<textarea>",
      "<select>",
      "<input type='multiline'>"
    ],
    "answer": 1,
    "explanation": "<textarea> cho phép nhập nội dung văn bản dài nhiều dòng với số dòng rows và cột cols tùy ý.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_04",
    "source": "Sở GD&ĐT Hà Nội",
    "province": "Hà Nội",
    "topic": "Định dạng CSS",
    "level": "VD",
    "question": "Để tạo đường viền màu xanh dương (blue), nét liền (solid), dày 1px và cỡ chữ 13px cho toàn bộ nội dung phần thân trang web, cú pháp CSS nào sau đây là chính xác?",
    "options": [
      "body {border = 1px solid blue; font-size: 13px;}",
      "body {border: solid blue 1px; font-weight: 13px;}",
      "body {border: 1px solid blue; font-size: 13px;}",
      "body {border: 1px dashed blue; font-size: 13px;}"
    ],
    "answer": 2,
    "explanation": "Cú pháp CSS chuẩn sử dụng dấu hai chấm giữa tên thuộc tính và giá trị, kết thúc bằng dấu chấm phẩy: border: 1px solid blue; font-size: 13px;.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_08",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "question": "Cho đoạn mã sau: <form action='xuly.php' method='POST'><input name='hoten'><button type='submit'>Gửi</button></form>. Tên tệp nhận dữ liệu và phương thức truyền tải là gì?",
    "options": [
      "xuly.php và phương thức button",
      "hoten và phương thức POST",
      "xuly.php và phương thức POST",
      "hoten và phương thức submit"
    ],
    "answer": 2,
    "explanation": "Tệp máy chủ nhận xử lý là 'xuly.php' (ở thuộc tính action) và phương thức truyền dữ liệu là 'POST' (ở thuộc tính method).",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_13",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Siêu liên kết",
    "level": "VD",
    "question": "Một website có cấu trúc: thư mục gốc chứa trang index.html và thư mục con 'tintuc' chứa trang 'sukien.html'. Để tạo liên kết từ 'sukien.html' quay về 'index.html', cú pháp nào đúng?",
    "options": [
      "<a href='index.html'>Trang chủ</a>",
      "<a href='../index.html'>Trang chủ</a>",
      "<a href='/tintuc/index.html'>Trang chủ</a>",
      "<a href='./index.html'>Trang chủ</a>"
    ],
    "answer": 1,
    "explanation": "Ký hiệu '../' biểu thị việc di chuyển lên thư mục cha chứa thư mục hiện tại.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_14",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "question": "Khi xây dựng trang web giới thiệu hoạt động ngoại khóa, tệp HTML và tệp hình ảnh có tên 'Hoatdong1.jpg' được lưu trong cùng một thư mục. Đoạn mã HTML nào phù hợp nhất để chèn ảnh?",
    "options": [
      "<img src='Hoatdong1.jpg' alt='Hoạt động 1'>",
      "<image src='Hoatdong/Hoatdong1.jpg' alt='Hoạt động 1'>",
      "<image link='Hoatdong1.jpg' alt='Mô tả ảnh'>",
      "<img url='Hoatdong1.jpg' alt='Mô tả ảnh'>"
    ],
    "answer": 0,
    "explanation": "Thẻ chuẩn là <img> và sử dụng thuộc tính src với tên tệp trong cùng thư mục: <img src='Hoatdong1.jpg' alt='Hoạt động 1'>.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_15",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "topic": "Bảng dữ liệu & Gộp ô",
    "level": "VD",
    "question": "Trong bảng HTML, khi muốn gộp 2 ô liền kề nhau trên cùng một hàng (chiếm độ rộng của 2 cột), ta sử dụng thuộc tính nào ở thẻ <td>?",
    "options": [
      "rowspan='2'",
      "colspan='2'",
      "span='2'",
      "merge='2'"
    ],
    "answer": 1,
    "explanation": "colspan='k' gộp k ô theo chiều ngang (cột); rowspan='k' gộp k ô theo chiều dọc (hàng).",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_20",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "question": "Bạn muốn khi người dùng nhấn nút 'Gửi', dữ liệu form được chuyển đến tệp 'save.php' và KHÔNG hiển thị lộ liễu trên thanh URL. Cấu trúc form nào sau đây là đúng?",
    "options": [
      "<form action='save.php' method='get'>",
      "<form action='save.php' method='post'>",
      "<form href='save.php' method='post'>",
      "<form action='save.php' method='send'>"
    ],
    "answer": 1,
    "explanation": "Phương thức POST gửi dữ liệu ngầm trong phần thân HTTP request, không làm lộ dữ liệu trên thanh địa chỉ URL.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_24",
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Lâm Đồng",
    "topic": "Định dạng CSS",
    "level": "VD",
    "question": "Mã lệnh CSS nào sau đây cho phép thiết lập cùng lúc màu chữ đỏ (red) cho cả 3 cấp tiêu đề <h1>, <h2> và <h3>?",
    "options": [
      "h1; h2; h3 {color: red;}",
      "h1 h2 h3 {color: red;}",
      "h1, h2, h3 {color: red;}",
      "{h1, h2, h3: color red;}"
    ],
    "answer": 2,
    "explanation": "Trong CSS, dấu phẩy ',' được sử dụng để nhóm các bộ chọn cùng áp dụng một khối quy tắc định dạng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  }
],
  part2: [
  {
    "id": "mg_p2_01",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "title": "Câu 1: Về thiết kế trang báo tường điện tử của chi đoàn",
    "context": "Lớp 12A thiết kế một trang web báo tường điện tử chào mừng ngày thành lập Đoàn 26/3. Trang web gồm trang chủ index.html, các bài viết trong thư mục con 'baiviet/' và hình ảnh minh họa trong thư mục 'hinhanh/'. Xác định tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_01_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để hiển thị tiêu đề trên thanh tab của trình duyệt web, nhóm học sinh cần đặt dòng chữ tiêu đề bên trong cặp thẻ <title> ... </title> nằm trong phần <head>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <title> nằm trong <head> xác định tiêu đề hiển thị trên thanh tab của trình duyệt."
      },
      {
        "id": "mg_p2_01_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Từ tệp 'baiviet/bai1.html', để chèn bức ảnh 'anh1.jpg' nằm trong thư mục 'hinhanh/' (ngang cấp với thư mục 'baiviet'), đường dẫn tương đối đúng là src='../hinhanh/anh1.jpg'.",
        "answer": true,
        "explanation": "Đúng. Cần dùng '../' để lùi ra thư mục cha rồi đi vào thư mục 'hinhanh/anh1.jpg'."
      },
      {
        "id": "mg_p2_01_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để đổi màu chữ tiêu đề thành màu đỏ bằng CSS nội tuyến (Inline CSS), học sinh viết thuộc tính: style='font-color: red;'.",
        "answer": false,
        "explanation": "Sai. Trong CSS, thuộc tính đổi màu chữ là 'color: red;' chứ không có thuộc tính 'font-color'."
      },
      {
        "id": "mg_p2_01_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi sử dụng đường dẫn tương đối để tạo siêu liên kết giữa các trang trong cùng một website, trang web vẫn hoạt động hoàn toàn chính xác khi sao chép toàn bộ thư mục website sang một máy tính khác mà không bị đứt gãy liên kết.",
        "answer": true,
        "explanation": "Đúng. Ưu điểm nổi bật của đường dẫn tương đối là tính cơ động, không phụ thuộc vào ổ đĩa hay tên miền tuyệt đối."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1
  },
  {
    "id": "mg_p2_02",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "title": "Câu 2: Về cấu trúc tài liệu và siêu liên kết trong trang tin điện tử",
    "context": "Một nhóm học sinh tham gia dự án xây dựng trang tin 'Hải đảo quê hương'. Khi kiểm tra cấu trúc mã nguồn HTML của website, các bạn đưa ra các nhận định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_02_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Khai báo <!DOCTYPE html> ở dòng đầu tiên nhằm thông báo cho trình duyệt biết trang web tuân theo chuẩn ngôn ngữ HTML5.",
        "answer": true,
        "explanation": "Đúng. <!DOCTYPE html> là khai báo chuẩn phiên bản HTML5."
      },
      {
        "id": "mg_p2_02_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Các thẻ <br> và <hr> là các thẻ đơn (void elements), không có thẻ đóng riêng biệt và không chứa văn bản bên trong.",
        "answer": true,
        "explanation": "Đúng. <br> (ngắt dòng) và <hr> (đường kẻ ngang) là các thẻ đơn tự đóng."
      },
      {
        "id": "mg_p2_02_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi người dùng nhấp vào liên kết có cú pháp href='mailto:admin@truong.edu.vn', trình duyệt sẽ tự động tải tệp tin có tên admin@truong.edu.vn về máy tính.",
        "answer": false,
        "explanation": "Sai. Giao thức 'mailto:' dùng để mở ứng dụng gửi email mặc định của thiết bị, không phải để tải tệp tin."
      },
      {
        "id": "mg_p2_02_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Có thể biến bức ảnh cờ Tổ quốc thành một nút bấm chuyển trang bằng cách đặt thẻ <img> bên trong cặp thẻ mở <a> và thẻ đóng </a>.",
        "answer": true,
        "explanation": "Đúng. HTML cho phép lồng phần tử <img> bên trong thẻ <a> để tạo liên kết hình ảnh."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1
  },
  {
    "id": "mg_p2_03",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "title": "Câu 3: Về tích hợp đa phương tiện và nhúng tài nguyên trực tuyến",
    "context": "Trong bài thực hành số hóa thông tin du lịch địa phương, học sinh tiến hành nhúng bản đồ số và video thuyết minh vào trang web. Em hãy xác định tính Đúng/Sai của các khẳng định sau:",
    "items": [
      {
        "id": "mg_p2_03_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> cho phép tạo ra một khung nội tuyến độc lập để hiển thị nội dung của một trang web khác ngay trong trang web hiện tại.",
        "answer": true,
        "explanation": "Đúng. <iframe> dùng để nhúng khung hiển thị tài nguyên hoặc trang web bên ngoài."
      },
      {
        "id": "mg_p2_03_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi nhúng video bài giảng từ YouTube vào thẻ <iframe>, ta bắt buộc phải sử dụng đường link dạng '/embed/' thay cho đường link xem '/watch' trên thanh địa chỉ URL.",
        "answer": true,
        "explanation": "Đúng. YouTube chặn nhúng link xem watch thông thường qua chính sách X-Frame-Options; bắt buộc phải dùng định dạng mã nhúng embed."
      },
      {
        "id": "mg_p2_03_c",
        "label": "c",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thuộc tính 'controls' trong thẻ <video> có chức năng tự động phát video ngay khi người dùng vừa truy cập vào trang web.",
        "answer": false,
        "explanation": "Sai. 'controls' hiển thị thanh điều khiển (Play/Pause, âm lượng); còn tự động phát là thuộc tính 'autoplay'."
      },
      {
        "id": "mg_p2_03_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi thiết lập thuộc tính width='100%' cho thẻ <iframe>, khung hiển thị bản đồ sẽ tự động co giãn vừa vặn với độ rộng màn hình của mọi thiết bị (máy tính, điện thoại).",
        "answer": true,
        "explanation": "Đúng. Đặt đơn vị % giúp phần tử co giãn linh hoạt (responsive) theo kích thước phần tử cha chứa nó."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1
  },
  {
    "id": "mg_p2_04",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "title": "Câu 4: Về thiết kế biểu mẫu (Form) thu thập thông tin",
    "context": "Đoàn trường thiết kế biểu mẫu trực tuyến để tiếp nhận đăng ký tham gia Câu lạc bộ STEM. Biểu mẫu gồm các trường: Họ và tên, Ngày sinh, Lớp học, Giới tính, Lĩnh vực quan tâm và Nút nộp phiếu. Dựa vào kiến thức về Form trong HTML, hãy xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_04_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Toàn bộ các trường dữ liệu và nút bấm gửi thông tin phải được đặt bên trong cặp thẻ <form> ... </form>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <form> là phần tử bao bọc toàn bộ thành phần của biểu mẫu thu thập dữ liệu."
      },
      {
        "id": "mg_p2_04_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Tại mục chọn Giới tính (Nam / Nữ) chỉ được phép chọn duy nhất 1 mục, ta phải thiết lập thuộc tính type='checkbox' cho các ô lựa chọn.",
        "answer": false,
        "explanation": "Sai. Chọn duy nhất 1 mục trong nhóm bắt buộc dùng type='radio' và có cùng thuộc tính name. Checkbox dùng để chọn nhiều mục."
      },
      {
        "id": "mg_p2_04_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để hỗ trợ học sinh chạm vào nhãn chữ 'Nam' hoặc 'Nữ' mà nút tròn radio tương ứng vẫn tự động được tích chọn, ta sử dụng thẻ <label for='id_input'> gắn với id của ô input đó.",
        "answer": true,
        "explanation": "Đúng. Thẻ <label for> liên kết với thuộc tính id của phần tử input giúp mở rộng vùng nhấp chuột thuận tiện."
      },
      {
        "id": "mg_p2_04_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi người dùng nhấn nút có khai báo <input type='reset' value='Nộp hồ sơ'>, toàn bộ thông tin đăng ký của học sinh sẽ được đóng gói và gửi về máy chủ.",
        "answer": false,
        "explanation": "Sai. type='reset' chỉ xóa trắng dữ liệu đã nhập về mặc định. Để gửi dữ liệu về máy chủ, bắt buộc phải dùng type='submit'."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1
  }
]
};

const COMPREHENSIVE_TEST_GRAD_2 = {
  id: "exam_mock_grad_2",
  code: "THI-THU-02",
  num: 2,
  title: "Đề thi thử Tốt nghiệp THPT Số 02",
  desc: "Tuyển chọn ngẫu nhiên 28 câu hỏi (24 câu Phần I + 4 câu Phần II) từ ngân hàng đề thi thử các Sở GD&ĐT.",
  sources: "Tuyển chọn từ hơn 40 Sở GD&ĐT trên toàn quốc",
  timeMinutes: 45,
  matrix: GRAD_MATRIX_STANDARD_28,
  part1: [
  {
    "id": "mg_p1_11",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Định dạng văn bản & Thẻ HTML",
    "level": "NB",
    "question": "Trong HTML, thẻ nào sau đây được sử dụng để bắt đầu một đoạn văn bản mới?",
    "options": [
      "<h1>",
      "<br>",
      "<p>",
      "<a>"
    ],
    "answer": 2,
    "explanation": "Thẻ <p> (Paragraph) dùng để định nghĩa một đoạn văn bản.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_12",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Tệp nguồn chứa mã HTML thường được lưu với phần mở rộng chuẩn nào sau đây?",
    "options": [
      ".doc hoặc .docx",
      ".txt hoặc .pdf",
      ".html hoặc .htm",
      ".css hoặc .js"
    ],
    "answer": 2,
    "explanation": "Mã nguồn trang web HTML được lưu dưới định dạng tệp .html hoặc .htm.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_17",
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Đà Nẵng",
    "topic": "Bảng dữ liệu & Gộp ô",
    "level": "NB",
    "question": "Thẻ nào trong HTML được sử dụng để tạo một ô tiêu đề cột trong bảng (mặc định được in đậm và căn giữa)?",
    "options": [
      "<td>",
      "<tr>",
      "<th>",
      "<caption >"
    ],
    "answer": 2,
    "explanation": "<th> (Table Header) được dùng để định nghĩa ô tiêu đề bảng, mặc định văn bản in đậm và căn giữa.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_18",
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Bắc Giang",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Phần tử HTML nào cho phép nhúng một trang web khác hoặc video YouTube vào một khung hiển thị bên trong trang hiện tại?",
    "options": [
      "<iframe>",
      "<include>",
      "<embed-page>",
      "<webframe>"
    ],
    "answer": 0,
    "explanation": "<iframe> (Inline Frame) là thẻ chuẩn trong HTML dùng để nhúng trang web hoặc dịch vụ ngoại vi.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_22",
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Bình Thuận",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Trong HTML, để chèn nội dung đa phương tiện như hình ảnh (<img>), âm thanh (<audio>), video (<video>), các thẻ này đều bắt buộc phải có thuộc tính nào để xác định đường dẫn tệp nguồn?",
    "options": [
      "src",
      "controls",
      "alt",
      "href"
    ],
    "answer": 0,
    "explanation": "Thuộc tính src (Source) được dùng chung ở các thẻ <img>, <audio>, <video> để chỉ định vị trí tệp đa phương tiện.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_25",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong CSS, bộ chọn ID (ID Selector) được bắt đầu bằng ký tự đặc biệt nào sau đây?",
    "options": [
      "Dấu chấm (.)",
      "Dấu thăng (#)",
      "Dấu hai chấm (:)",
      "Dấu hoa thị (*)"
    ],
    "answer": 1,
    "explanation": "Trong CSS, bộ chọn ID sử dụng dấu thăng (#) đi kèm với tên định danh ID của phần tử, ví dụ: #header."
  },
  {
    "id": "mg_p1_26",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Phần tử nào sau đây trong HTML được sử dụng để chứa các thông tin mô tả về tài liệu web (metadata) mà không hiển thị trực tiếp lên màn hình trang web?",
    "options": [
      "<body>",
      "<head>",
      "<meta-content>",
      "<footer>"
    ],
    "answer": 1,
    "explanation": "Phần tử <head> chứa các thẻ metadata như <title>, <meta>, <link>, <style>... chứa thông tin kỹ thuật về trang web."
  },
  {
    "id": "mg_p1_28",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong biểu mẫu HTML, thuộc tính nào sau đây của thẻ <input> được dùng để ẩn ký tự khi người dùng nhập dữ liệu nhạy cảm?",
    "options": [
      "type='hidden'",
      "type='secret'",
      "type='password'",
      "type='security'"
    ],
    "answer": 2,
    "explanation": "Thuộc tính type='password' làm cho các ký tự nhập vào hiển thị dưới dạng dấu chấm hoặc dấu sao để bảo mật."
  },
  {
    "id": "mg_p1_31",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Để tạo một danh sách chọn thả xuống (drop-down list) trong biểu mẫu HTML, ta sử dụng thẻ nào sau đây?",
    "options": [
      "<dropdown>",
      "<select>",
      "<list>",
      "<option-group>"
    ],
    "answer": 1,
    "explanation": "Thẻ <select> kết hợp với các thẻ con <option> được dùng để tạo danh sách thả xuống trong form."
  },
  {
    "id": "mg_p1_34",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để ngắt dòng văn bản mà không tạo ra khoảng cách đoạn lớn như thẻ <p>?",
    "options": [
      "<enter>",
      "<break>",
      "<br>",
      "<hr>"
    ],
    "answer": 2,
    "explanation": "Thẻ <br> (Line Break) dùng để xuống hàng ngay tại vị trí đặt thẻ mà không phân tách thành đoạn văn mới."
  },
  {
    "id": "mg_p1_16",
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Đà Nẵng",
    "topic": "Siêu liên kết",
    "level": "TH",
    "question": "Phát biểu nào sau đây KHÔNG ĐÚNG khi nói về thẻ tạo siêu liên kết <a> trong HTML?",
    "options": [
      "Thẻ <a> dùng để tạo liên kết kết nối các trang web hoặc tài nguyên.",
      "Thuộc tính href là bắt buộc để chỉ định đích đến của siêu liên kết.",
      "Thẻ <a> chỉ có thể bao bọc văn bản thuần túy chứ không thể bọc quanh hình ảnh <img>.",
      "Thuộc tính target='_blank' giúp mở trang đích trong một tab hoặc cửa sổ mới."
    ],
    "answer": 2,
    "explanation": "Thẻ <a> hoàn toàn có thể bọc quanh thẻ <img> để biến bức ảnh thành nút bấm chuyển hướng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_19",
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Bắc Giang",
    "topic": "Cấu trúc HTML",
    "level": "TH",
    "question": "Trong ngôn ngữ HTML, phát biểu nào sau đây là chính xác nhất?",
    "options": [
      "Tất cả các phần tử hiển thị nội dung cho người xem đều được đặt bên trong phần tử <body>.",
      "Thẻ HTML bắt buộc phải viết hoa hoàn toàn thì trình duyệt mới hiểu.",
      "Phần tử <head> là nơi chứa các hình ảnh và video trình chiếu cho người xem.",
      "Tài liệu HTML không thể hiển thị được tiếng Việt có dấu."
    ],
    "answer": 0,
    "explanation": "Toàn bộ giao diện nhìn thấy của trang web đều được đặt bên trong phần tử <body>.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_21",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Phương án nào sau đây thể hiện đúng nhất vai trò của thuộc tính 'name' trong các phần tử nhập liệu (<input>, <select>) của biểu mẫu?",
    "options": [
      "Dùng để hiển thị nhãn của trường nhập liệu trên giao diện trình duyệt.",
      "Giúp máy chủ nhận biết và thu thập giá trị của trường đó khi biểu mẫu được gửi về.",
      "Quy định kiểu phông chữ hiển thị trong ô nhập liệu.",
      "Bắt buộc người dùng không được bỏ trống trường dữ liệu đó."
    ],
    "answer": 1,
    "explanation": "Thuộc tính name đóng vai trò là khóa (key) định danh dữ liệu để máy chủ trích xuất giá trị tương ứng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_23",
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Bình Thuận",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Trong biểu mẫu HTML, phần tử nào được sử dụng để người dùng nhập một đoạn văn bản dài nhiều dòng như ý kiến nhận xét hoặc phản hồi?",
    "options": [
      "<input type='text'>",
      "<textarea>",
      "<select>",
      "<input type='multiline'>"
    ],
    "answer": 1,
    "explanation": "<textarea> cho phép nhập nội dung văn bản dài nhiều dòng với số dòng rows và cột cols tùy ý.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_27",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <audio> và <video> quy định việc phát lại tệp âm thanh/video tự động liên tục ngay khi kết thúc?",
    "options": [
      "repeat",
      "loop",
      "autoplay",
      "controls"
    ],
    "answer": 1,
    "explanation": "Thuộc tính 'loop' cho phép phát lặp đi lặp lại nội dung âm thanh hoặc video khi kết thúc."
  },
  {
    "id": "mg_p1_29",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong danh sách có thứ tự <ol>, nếu muốn thứ tự bắt đầu từ số 5 thay vì số 1, ta sử dụng cú pháp nào sau đây?",
    "options": [
      "<ol from='5'>",
      "<ol start='5'>",
      "<ol begin='5'>",
      "<ol index='5'>"
    ],
    "answer": 1,
    "explanation": "Thuộc tính start trong thẻ <ol> quy định giá trị số bắt đầu của danh sách có thứ tự, ví dụ <ol start='5'>."
  },
  {
    "id": "mg_p1_32",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để liên kết nhảy đến một phần nội dung có định danh id='lienhe' nằm ngay trên cùng trang web hiện tại, thuộc tính href của thẻ <a> được viết là:",
    "options": [
      "href='lienhe'",
      "href='#lienhe'",
      "href='@lienhe'",
      "href='.lienhe'"
    ],
    "answer": 1,
    "explanation": "Ký hiệu '#' đi trước tên định danh id được dùng để tạo siêu liên kết nội bộ trong cùng một trang web (Bookmark/Anchor link)."
  },
  {
    "id": "mg_p1_14",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "question": "Khi xây dựng trang web giới thiệu hoạt động ngoại khóa, tệp HTML và tệp hình ảnh có tên 'Hoatdong1.jpg' được lưu trong cùng một thư mục. Đoạn mã HTML nào phù hợp nhất để chèn ảnh?",
    "options": [
      "<img src='Hoatdong1.jpg' alt='Hoạt động 1'>",
      "<image src='Hoatdong/Hoatdong1.jpg' alt='Hoạt động 1'>",
      "<image link='Hoatdong1.jpg' alt='Mô tả ảnh'>",
      "<img url='Hoatdong1.jpg' alt='Mô tả ảnh'>"
    ],
    "answer": 0,
    "explanation": "Thẻ chuẩn là <img> và sử dụng thuộc tính src với tên tệp trong cùng thư mục: <img src='Hoatdong1.jpg' alt='Hoạt động 1'>.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_15",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "topic": "Bảng dữ liệu & Gộp ô",
    "level": "VD",
    "question": "Trong bảng HTML, khi muốn gộp 2 ô liền kề nhau trên cùng một hàng (chiếm độ rộng của 2 cột), ta sử dụng thuộc tính nào ở thẻ <td>?",
    "options": [
      "rowspan='2'",
      "colspan='2'",
      "span='2'",
      "merge='2'"
    ],
    "answer": 1,
    "explanation": "colspan='k' gộp k ô theo chiều ngang (cột); rowspan='k' gộp k ô theo chiều dọc (hàng).",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_20",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "question": "Bạn muốn khi người dùng nhấn nút 'Gửi', dữ liệu form được chuyển đến tệp 'save.php' và KHÔNG hiển thị lộ liễu trên thanh URL. Cấu trúc form nào sau đây là đúng?",
    "options": [
      "<form action='save.php' method='get'>",
      "<form action='save.php' method='post'>",
      "<form href='save.php' method='post'>",
      "<form action='save.php' method='send'>"
    ],
    "answer": 1,
    "explanation": "Phương thức POST gửi dữ liệu ngầm trong phần thân HTTP request, không làm lộ dữ liệu trên thanh địa chỉ URL.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_24",
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Lâm Đồng",
    "topic": "Định dạng CSS",
    "level": "VD",
    "question": "Mã lệnh CSS nào sau đây cho phép thiết lập cùng lúc màu chữ đỏ (red) cho cả 3 cấp tiêu đề <h1>, <h2> và <h3>?",
    "options": [
      "h1; h2; h3 {color: red;}",
      "h1 h2 h3 {color: red;}",
      "h1, h2, h3 {color: red;}",
      "{h1, h2, h3: color red;}"
    ],
    "answer": 2,
    "explanation": "Trong CSS, dấu phẩy ',' được sử dụng để nhóm các bộ chọn cùng áp dụng một khối quy tắc định dạng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_30",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng chữ in đậm (bold) và căn lề giữa (center) cho tất cả các thẻ tiêu đề <h2>?",
    "options": [
      "h2 {font-weight: bold; text-align: center;}",
      "h2 {font-style: bold; align: center;}",
      "h2 {text-weight: bold; text-center: true;}",
      "h2 {font: bold center;}"
    ],
    "answer": 0,
    "explanation": "Trong CSS, font-weight: bold quy định độ đậm của chữ, còn text-align: center quy định căn giữa dòng."
  },
  {
    "id": "mg_p1_33",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong một form khảo sát sở thích, học sinh được phép chọn nhiều môn thể thao cùng lúc. Kiểu nhập liệu nào của thẻ <input> là phù hợp nhất?",
    "options": [
      "type='radio'",
      "type='checkbox'",
      "type='select'",
      "type='multiple'"
    ],
    "answer": 1,
    "explanation": "type='checkbox' (hộp kiểm) cho phép người dùng tích chọn đồng thời nhiều lựa chọn độc lập trong nhóm."
  },
  {
    "id": "mg_p1_35",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi nhúng bản đồ số từ Google Maps bằng thẻ <iframe>, nếu muốn khung bản đồ chiếm trọn chiều rộng của cột chứa và có chiều cao cố định 400px, thuộc tính nào đúng?",
    "options": [
      "width='100%' height='400px'",
      "width='full' height='400'",
      "size='100%, 400'",
      "width='auto' height='fixed'"
    ],
    "answer": 0,
    "explanation": "Thẻ iframe cho phép khai báo thuộc tính width='100%' (chiếm toàn bộ độ rộng phần tử chứa) và height='400px' (hoặc height='400')."
  }
],
  part2: [
  {
    "id": "mg_p2_05",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "title": "Câu 1: Về việc nhúng video và âm thanh vào website câu lạc bộ",
    "context": "Nhóm học sinh xây dựng website cho CLB Âm nhạc trường học. Trang web có phát bài hát truyền thống bằng thẻ <audio> và video giới thiệu bằng thẻ <video>. Hãy xác định tính Đúng/Sai của các nhận định sau:",
    "items": [
      {
        "id": "mg_p2_05_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <audio> và <video> đều sử dụng thuộc tính src để cung cấp đường dẫn đến tệp đa phương tiện.",
        "answer": true,
        "explanation": "Đúng. Cả hai thẻ đa phương tiện đều dùng thuộc tính src để định vị tệp nguồn."
      },
      {
        "id": "mg_p2_05_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Nếu không có thuộc tính 'controls', trình duyệt vẫn hiển thị đầy đủ nút Phát/Tạm dừng và thanh âm lượng cho người xem tương tác.",
        "answer": false,
        "explanation": "Sai. Nếu thiếu 'controls', trình duyệt sẽ ẩn hoàn toàn thanh điều khiển giao diện."
      },
      {
        "id": "mg_p2_05_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính 'loop' cho phép tệp nhạc hoặc video tự động lặp lại liên tục sau khi phát hết.",
        "answer": true,
        "explanation": "Đúng. Thuộc tính loop có chức năng lặp vô hạn nội dung đa phương tiện."
      },
      {
        "id": "mg_p2_05_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để tuân thủ chính sách Autoplay Policy của các trình duyệt hiện đại (như Chrome, Edge), khi muốn video tự động chạy ngay khi tải trang, bắt buộc phải kết hợp cả hai thuộc tính autoplay và muted.",
        "answer": true,
        "explanation": "Đúng. Trình duyệt chỉ cho phép autoplay nếu video đã được tắt tiếng (muted) để tránh làm phiền người dùng."
      }
    ]
  },
  {
    "id": "mg_p2_06",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "title": "Câu 2: Về thiết kế biểu mẫu khảo sát ý kiến trực tuyến",
    "context": "Chi đoàn trường THPT tạo một form khảo sát chọn địa điểm dã ngoại với các trường thông tin: Họ tên, Lớp, Địa điểm đề xuất (chỉ chọn 1 trong 3 nơi), Góp ý thêm và Nút gửi. Xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_06_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Toàn bộ các ô nhập dữ liệu khảo sát và nút bấm gửi biểu mẫu bắt buộc phải nằm bên trong cặp thẻ <form> ... </form>.",
        "answer": true,
        "explanation": "Đúng. Cặp thẻ <form> bao bọc các thành phần nhập liệu của biểu mẫu."
      },
      {
        "id": "mg_p2_06_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để người dùng chỉ được phép chọn duy nhất 1 địa điểm trong 3 địa điểm đề xuất, ta sử dụng 3 thẻ <input type='radio'> có cùng giá trị của thuộc tính name.",
        "answer": true,
        "explanation": "Đúng. Các nút radio có cùng thuộc tính name sẽ tạo thành một nhóm chọn duy nhất 1 phương án."
      },
      {
        "id": "mg_p2_06_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để nhập đoạn ý kiến 'Góp ý thêm' có độ dài nhiều dòng, thẻ <input type='text'> là phần tử tối ưu nhất.",
        "answer": false,
        "explanation": "Sai. <input type='text'> chỉ nhập 1 dòng ngắn. Để nhập văn bản nhiều dòng cần dùng <textarea>."
      },
      {
        "id": "mg_p2_06_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi người dùng nhấn vào nút <button type='submit'>, dữ liệu trên form sẽ được gửi đến URL chỉ định ở thuộc tính action của thẻ <form> theo phương thức quy định ở method.",
        "answer": true,
        "explanation": "Đúng. Nút type='submit' kích hoạt việc đóng gói và chuyển dữ liệu form đến máy chủ chỉ định."
      }
    ]
  },
  {
    "id": "mg_p2_07",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "title": "Câu 3: Về cấu trúc danh sách và bảng biểu trên trang web",
    "context": "Một học sinh lập trình bảng thời khóa biểu và danh sách đồ dùng học tập bằng HTML. Hãy đánh giá tính Đúng/Sai của các khẳng định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_07_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Trong HTML, thẻ <th> dùng để tạo ô tiêu đề của bảng, văn bản bên trong mặc định được in đậm và căn giữa.",
        "answer": true,
        "explanation": "Đúng. <th> (Table Header) tự động in đậm và căn giữa nội dung."
      },
      {
        "id": "mg_p2_07_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Mỗi mục con bên trong danh sách <ul> hoặc <ol> đều được biểu diễn bằng thẻ <li>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <li> (List Item) biểu diễn từng phần tử mục con trong danh sách."
      },
      {
        "id": "mg_p2_07_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Thuộc tính colspan='2' ở thẻ <td> làm cho ô đó mở rộng chiếm chiều cao của 2 hàng liên tiếp.",
        "answer": false,
        "explanation": "Sai. colspan='2' mở rộng chiều rộng của 2 cột; mở rộng 2 hàng là rowspan='2'."
      },
      {
        "id": "mg_p2_07_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Có thể lồng một bảng nhỏ <table> vào bên trong một ô <td> của một bảng khác để tạo bố cục giao diện phức tạp.",
        "answer": true,
        "explanation": "Đúng. HTML hỗ trợ bảng lồng nhau (Nested Tables) bên trong ô dữ liệu <td>."
      }
    ]
  },
  {
    "id": "mg_p2_08",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "title": "Câu 4: Về nhúng tài nguyên và định dạng giao diện bằng CSS",
    "context": "Khi xây dựng trang web giới thiệu trường THPT, nhóm bạn Lan viết mã HTML và CSS. Hãy xem xét tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_08_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> cho phép nhúng một trang web bên ngoài hoặc bản đồ vào một khung nhìn độc lập trong trang web hiện tại.",
        "answer": true,
        "explanation": "Đúng. <iframe> tạo khung nội tuyến để hiển thị nội dung tài nguyên bên ngoài."
      },
      {
        "id": "mg_p2_08_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "CSS nội bộ (Internal CSS) được đặt bên trong cặp thẻ <style> ... </style> nằm ở phần <body> của tài liệu.",
        "answer": false,
        "explanation": "Sai. CSS nội bộ chuẩn W3C được đặt trong thẻ <style> nằm ở phần <head> của tài liệu."
      },
      {
        "id": "mg_p2_08_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Bộ chọn lớp (.classname) có thể áp dụng đồng thời cho nhiều phần tử khác nhau trên cùng một trang web.",
        "answer": true,
        "explanation": "Đúng. Class được dùng để tái sử dụng kiểu dáng cho nhiều phần tử khác nhau."
      },
      {
        "id": "mg_p2_08_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi khai báo đường viền trong CSS với cú pháp border: 2px dashed red;, đường viền sẽ có độ dày 2px, nét đứt khúc và màu đỏ.",
        "answer": true,
        "explanation": "Đúng. Cú pháp shorthand border quy định độ dày 2px, kiểu dashed (nét đứt) và màu đỏ."
      }
    ]
  }
]
};

const COMPREHENSIVE_TEST_GRAD_3 = {
  id: "exam_mock_grad_3",
  code: "THI-THU-03",
  num: 3,
  title: "Đề thi thử Tốt nghiệp THPT Số 03",
  desc: "Tuyển chọn ngẫu nhiên 28 câu hỏi (24 câu Phần I + 4 câu Phần II) từ ngân hàng đề thi thử các Sở GD&ĐT.",
  sources: "Tuyển chọn từ hơn 40 Sở GD&ĐT trên toàn quốc",
  timeMinutes: 45,
  matrix: GRAD_MATRIX_STANDARD_28,
  part1: [
  {
    "id": "mg_p1_25",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong CSS, bộ chọn ID (ID Selector) được bắt đầu bằng ký tự đặc biệt nào sau đây?",
    "options": [
      "Dấu chấm (.)",
      "Dấu thăng (#)",
      "Dấu hai chấm (:)",
      "Dấu hoa thị (*)"
    ],
    "answer": 1,
    "explanation": "Trong CSS, bộ chọn ID sử dụng dấu thăng (#) đi kèm với tên định danh ID của phần tử, ví dụ: #header."
  },
  {
    "id": "mg_p1_26",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Phần tử nào sau đây trong HTML được sử dụng để chứa các thông tin mô tả về tài liệu web (metadata) mà không hiển thị trực tiếp lên màn hình trang web?",
    "options": [
      "<body>",
      "<head>",
      "<meta-content>",
      "<footer>"
    ],
    "answer": 1,
    "explanation": "Phần tử <head> chứa các thẻ metadata như <title>, <meta>, <link>, <style>... chứa thông tin kỹ thuật về trang web."
  },
  {
    "id": "mg_p1_28",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong biểu mẫu HTML, thuộc tính nào sau đây của thẻ <input> được dùng để ẩn ký tự khi người dùng nhập dữ liệu nhạy cảm?",
    "options": [
      "type='hidden'",
      "type='secret'",
      "type='password'",
      "type='security'"
    ],
    "answer": 2,
    "explanation": "Thuộc tính type='password' làm cho các ký tự nhập vào hiển thị dưới dạng dấu chấm hoặc dấu sao để bảo mật."
  },
  {
    "id": "mg_p1_31",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Để tạo một danh sách chọn thả xuống (drop-down list) trong biểu mẫu HTML, ta sử dụng thẻ nào sau đây?",
    "options": [
      "<dropdown>",
      "<select>",
      "<list>",
      "<option-group>"
    ],
    "answer": 1,
    "explanation": "Thẻ <select> kết hợp với các thẻ con <option> được dùng để tạo danh sách thả xuống trong form."
  },
  {
    "id": "mg_p1_34",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để ngắt dòng văn bản mà không tạo ra khoảng cách đoạn lớn như thẻ <p>?",
    "options": [
      "<enter>",
      "<break>",
      "<br>",
      "<hr>"
    ],
    "answer": 2,
    "explanation": "Thẻ <br> (Line Break) dùng để xuống hàng ngay tại vị trí đặt thẻ mà không phân tách thành đoạn văn mới."
  },
  {
    "id": "mg_p1_36",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để nhúng tệp bảng định dạng CSS ngoài (External Style Sheet) vào trang web?",
    "options": [
      "<style>",
      "<css>",
      "<link>",
      "<script>"
    ],
    "answer": 2,
    "explanation": "Thẻ <link rel='stylesheet' href='style.css'> nằm trong phần <head> được dùng để liên kết tệp CSS ngoài."
  },
  {
    "id": "mg_p1_37",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào sau đây trong HTML được sử dụng để tạo một dòng (hàng) trong bảng dữ liệu?",
    "options": [
      "<td>",
      "<th>",
      "<tr>",
      "<row>"
    ],
    "answer": 2,
    "explanation": "<tr> (Table Row) được dùng để định nghĩa một hàng trong bảng HTML."
  },
  {
    "id": "mg_p1_40",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Cặp thẻ HTML nào sau đây định nghĩa tiêu đề của trang web được hiển thị trên thanh tiêu đề của trình duyệt?",
    "options": [
      "<header> ... </header>",
      "<title> ... </title>",
      "<heading> ... </heading>",
      "<caption> ... </caption>"
    ],
    "answer": 1,
    "explanation": "Thẻ <title> nằm trong thẻ <head> dùng để xác định tiêu đề hiển thị trên thanh tab của trình duyệt."
  },
  {
    "id": "mg_p1_41",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong HTML, thẻ nào sau đây tạo đường kẻ ngang phân cách giữa các phần nội dung của trang web?",
    "options": [
      "<line>",
      "<divider>",
      "<hr>",
      "<border>"
    ],
    "answer": 2,
    "explanation": "<hr> (Horizontal Rule) tạo một đường kẻ ngang phân tách các khối nội dung trên trang web."
  },
  {
    "id": "mg_p1_46",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong CSS, thuộc tính nào sau đây được sử dụng để thay đổi kiểu phông chữ (như Arial, Times New Roman, Tahoma)?",
    "options": [
      "font-style",
      "font-family",
      "font-weight",
      "font-type"
    ],
    "answer": 1,
    "explanation": "Thuộc tính font-family quy định danh sách các họ phông chữ được áp dụng cho văn bản."
  },
  {
    "id": "mg_p1_23",
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Bình Thuận",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "question": "Trong biểu mẫu HTML, phần tử nào được sử dụng để người dùng nhập một đoạn văn bản dài nhiều dòng như ý kiến nhận xét hoặc phản hồi?",
    "options": [
      "<input type='text'>",
      "<textarea>",
      "<select>",
      "<input type='multiline'>"
    ],
    "answer": 1,
    "explanation": "<textarea> cho phép nhập nội dung văn bản dài nhiều dòng với số dòng rows và cột cols tùy ý.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Thông hiểu"
  },
  {
    "id": "mg_p1_27",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <audio> và <video> quy định việc phát lại tệp âm thanh/video tự động liên tục ngay khi kết thúc?",
    "options": [
      "repeat",
      "loop",
      "autoplay",
      "controls"
    ],
    "answer": 1,
    "explanation": "Thuộc tính 'loop' cho phép phát lặp đi lặp lại nội dung âm thanh hoặc video khi kết thúc."
  },
  {
    "id": "mg_p1_29",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong danh sách có thứ tự <ol>, nếu muốn thứ tự bắt đầu từ số 5 thay vì số 1, ta sử dụng cú pháp nào sau đây?",
    "options": [
      "<ol from='5'>",
      "<ol start='5'>",
      "<ol begin='5'>",
      "<ol index='5'>"
    ],
    "answer": 1,
    "explanation": "Thuộc tính start trong thẻ <ol> quy định giá trị số bắt đầu của danh sách có thứ tự, ví dụ <ol start='5'>."
  },
  {
    "id": "mg_p1_32",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để liên kết nhảy đến một phần nội dung có định danh id='lienhe' nằm ngay trên cùng trang web hiện tại, thuộc tính href của thẻ <a> được viết là:",
    "options": [
      "href='lienhe'",
      "href='#lienhe'",
      "href='@lienhe'",
      "href='.lienhe'"
    ],
    "answer": 1,
    "explanation": "Ký hiệu '#' đi trước tên định danh id được dùng để tạo siêu liên kết nội bộ trong cùng một trang web (Bookmark/Anchor link)."
  },
  {
    "id": "mg_p1_38",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Bộ chọn CSS nào sau đây áp dụng định dạng cho tất cả các phần tử có thuộc tính class='tieude'?",
    "options": [
      "#tieude",
      ".tieude",
      "*tieude",
      "tieude"
    ],
    "answer": 1,
    "explanation": "Bộ chọn Class trong CSS sử dụng dấu chấm (.) phía trước tên lớp, ví dụ: .tieude."
  },
  {
    "id": "mg_p1_42",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <input> được dùng để hiển thị sẵn một văn bản gợi ý mờ bên trong ô nhập liệu (tự động biến mất khi người dùng gõ phím)?",
    "options": [
      "value",
      "placeholder",
      "hint",
      "default"
    ],
    "answer": 1,
    "explanation": "placeholder quy định chuỗi văn bản gợi ý mờ hiển thị trong ô nhập liệu khi ô đó chưa có dữ liệu."
  },
  {
    "id": "mg_p1_43",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Định dạng tệp hình ảnh nào sau đây hỗ trợ độ trong suốt (transparency) và thường được dùng cho logo trên các trang web?",
    "options": [
      "BMP",
      "PNG",
      "JPEG (JPG)",
      "TIFF"
    ],
    "answer": 1,
    "explanation": "Định dạng PNG (Portable Network Graphics) hỗ trợ nền trong suốt (kênh Alpha), rất phổ biến cho logo và biểu tượng web."
  },
  {
    "id": "mg_p1_24",
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Lâm Đồng",
    "topic": "Định dạng CSS",
    "level": "VD",
    "question": "Mã lệnh CSS nào sau đây cho phép thiết lập cùng lúc màu chữ đỏ (red) cho cả 3 cấp tiêu đề <h1>, <h2> và <h3>?",
    "options": [
      "h1; h2; h3 {color: red;}",
      "h1 h2 h3 {color: red;}",
      "h1, h2, h3 {color: red;}",
      "{h1, h2, h3: color red;}"
    ],
    "answer": 2,
    "explanation": "Trong CSS, dấu phẩy ',' được sử dụng để nhóm các bộ chọn cùng áp dụng một khối quy tắc định dạng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Vận dụng"
  },
  {
    "id": "mg_p1_30",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng chữ in đậm (bold) và căn lề giữa (center) cho tất cả các thẻ tiêu đề <h2>?",
    "options": [
      "h2 {font-weight: bold; text-align: center;}",
      "h2 {font-style: bold; align: center;}",
      "h2 {text-weight: bold; text-center: true;}",
      "h2 {font: bold center;}"
    ],
    "answer": 0,
    "explanation": "Trong CSS, font-weight: bold quy định độ đậm của chữ, còn text-align: center quy định căn giữa dòng."
  },
  {
    "id": "mg_p1_33",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong một form khảo sát sở thích, học sinh được phép chọn nhiều môn thể thao cùng lúc. Kiểu nhập liệu nào của thẻ <input> là phù hợp nhất?",
    "options": [
      "type='radio'",
      "type='checkbox'",
      "type='select'",
      "type='multiple'"
    ],
    "answer": 1,
    "explanation": "type='checkbox' (hộp kiểm) cho phép người dùng tích chọn đồng thời nhiều lựa chọn độc lập trong nhóm."
  },
  {
    "id": "mg_p1_35",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi nhúng bản đồ số từ Google Maps bằng thẻ <iframe>, nếu muốn khung bản đồ chiếm trọn chiều rộng của cột chứa và có chiều cao cố định 400px, thuộc tính nào đúng?",
    "options": [
      "width='100%' height='400px'",
      "width='full' height='400'",
      "size='100%, 400'",
      "width='auto' height='fixed'"
    ],
    "answer": 0,
    "explanation": "Thẻ iframe cho phép khai báo thuộc tính width='100%' (chiếm toàn bộ độ rộng phần tử chứa) và height='400px' (hoặc height='400')."
  },
  {
    "id": "mg_p1_39",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong bảng HTML, khi muốn gộp 3 ô ở 3 hàng liên tiếp trên cùng một cột lại thành một ô duy nhất, thuộc tính nào sau đây là chính xác?",
    "options": [
      "colspan='3'",
      "rowspan='3'",
      "merge='3'",
      "spanrow='3'"
    ],
    "answer": 1,
    "explanation": "rowspan='k' gộp k ô theo chiều dọc (các hàng liên tiếp); colspan='k' gộp k ô theo chiều ngang (các cột liên tiếp)."
  },
  {
    "id": "mg_p1_44",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Siêu liên kết",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Một liên kết được viết như sau: <a href='tailieu.pdf' target='_blank'>Tải tài liệu</a>. Khi người dùng nhấp vào liên kết này, trình duyệt sẽ làm gì?",
    "options": [
      "Mở tệp tailieu.pdf trong một tab hoặc cửa sổ mới",
      "Ghi đè nội dung tệp tailieu.pdf lên tab hiện tại",
      "Tải lại toàn bộ trang chủ của website",
      "Đóng tab trình duyệt hiện tại ngay lập tức"
    ],
    "answer": 0,
    "explanation": "Thuộc tính target='_blank' chỉ thị cho trình duyệt mở trang đích hoặc tài nguyên trong một tab hoặc cửa sổ mới."
  },
  {
    "id": "mg_p1_45",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong form nhập thông tin, để bắt buộc người dùng không được bỏ trống ô 'Họ và tên' trước khi nhấn nút gửi, lập trình viên cần bổ sung thuộc tính nào?",
    "options": [
      "validate",
      "required",
      "checked",
      "important"
    ],
    "answer": 1,
    "explanation": "Thuộc tính required là thuộc tính boolean trong HTML5 quy định trường nhập liệu bắt buộc phải có giá trị mới được nộp form."
  }
],
  part2: [
  {
    "id": "mg_p2_09",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "title": "Câu 1: Về xây dựng website giới thiệu di sản văn hóa Lam Kinh",
    "context": "Nhóm học sinh xây dựng website 'Di sản Lam Kinh'. Website gồm trang chủ index.html, thư mục 'css/' chứa style.css, thư mục 'img/' chứa hình ảnh và thư mục 'video/' chứa clip giới thiệu. Xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_09_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Tệp hình ảnh và tệp video cần được đặt đúng thư mục và gọi bằng đường dẫn tương đối để trang web hiển thị ổn định khi chuyển thư mục.",
        "answer": true,
        "explanation": "Đúng. Đường dẫn tương đối giúp website hoạt động linh hoạt khi chuyển đổi máy tính."
      },
      {
        "id": "mg_p2_09_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để liên kết tệp style.css từ trang index.html, cú pháp đúng là <link rel='stylesheet' href='css/style.css'>.",
        "answer": true,
        "explanation": "Đúng. Tệp CSS nằm trong thư mục con 'css/' nên đường dẫn tương đối là 'css/style.css'."
      },
      {
        "id": "mg_p2_09_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính alt='Ảnh bia Vĩnh Lăng' trong thẻ <img> sẽ hiển thị nội dung video giới thiệu nếu người dùng không có kết nối internet.",
        "answer": false,
        "explanation": "Sai. alt là thuộc tính hiển thị văn bản thay thế khi hình ảnh bị lỗi, không liên quan đến video."
      },
      {
        "id": "mg_p2_09_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để tạo nút bấm 'Xem video' mở clip trong tab mới, cú pháp phù hợp là <a href='video/gioithieu.mp4' target='_blank'>Xem video</a>.",
        "answer": true,
        "explanation": "Đúng. target='_blank' mở tài nguyên đích trong tab hoặc cửa sổ mới."
      }
    ]
  },
  {
    "id": "mg_p2_10",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "title": "Câu 2: Về thiết kế biểu mẫu đóng góp ý kiến bạn đọc",
    "context": "Trang tin của trường tạo form đóng góp bài viết gồm các ô: Tiêu đề bài viết, Tên tác giả, Email, Chuyên mục (chọn 1 trong 4 mục), Tệp đính kèm và Nút gửi bài. Hãy xác định tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_10_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Ô nhập Email người dùng có thể sử dụng thẻ <input type='email'> để trình duyệt tự động kiểm tra định dạng email hợp lệ (có ký tự @).",
        "answer": true,
        "explanation": "Đúng. type='email' có tính năng tự động kiểm tra cú pháp địa chỉ email chuẩn."
      },
      {
        "id": "mg_p2_10_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để chọn chuyên mục trong danh sách 4 mục gọn gàng, thẻ <select> kết hợp với 4 thẻ <option> là giải pháp phù hợp.",
        "answer": true,
        "explanation": "Đúng. <select> và <option> tạo danh sách chọn dạng thả xuống giúp tiết kiệm không gian trang web."
      },
      {
        "id": "mg_p2_10_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Phương thức method='GET' là lựa chọn bắt buộc khi form có chứa tệp tin đính kèm dung lượng lớn.",
        "answer": false,
        "explanation": "Sai. Gửi tệp đính kèm bắt buộc dùng method='POST' và enctype='multipart/form-data'."
      },
      {
        "id": "mg_p2_10_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Nếu nút nộp form được khai báo là <input type='button' value='Gửi bài'> mà không có mã JavaScript xử lý thì khi bấm nút dữ liệu sẽ không tự động được gửi đi.",
        "answer": true,
        "explanation": "Đúng. type='button' là nút bấm thông thường, không có hành vi tự động nộp form như type='submit'."
      }
    ]
  },
  {
    "id": "mg_p2_11",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "title": "Câu 3: Về cấu trúc bảng điểm và định dạng CSS cho bảng",
    "context": "Một học sinh lập trình bảng kết quả rèn luyện học tập có các cột: STT, Họ và tên, Điểm Toán, Điểm Văn, Điểm Tin và Xếp loại. Đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_11_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Trong bảng HTML, mỗi ô dữ liệu thông thường ở các hàng nội dung được đặt bên trong thẻ <td> ... </td>.",
        "answer": true,
        "explanation": "Đúng. <td> (Table Data) định nghĩa các ô dữ liệu thông thường trong bảng."
      },
      {
        "id": "mg_p2_11_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <tr> chỉ có thể chứa các thẻ con là <th> hoặc <td>, không thể chứa trực tiếp đoạn văn bản thô.",
        "answer": true,
        "explanation": "Đúng. Hàng bảng <tr> chỉ hợp lệ khi chứa các ô <th> hoặc <td>."
      },
      {
        "id": "mg_p2_11_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để định dạng bảng có đường viền nét liền màu xám dày 1px và các ô dính liền nhau (không bị hở khe viền đôi), ta dùng CSS: table, td, th {border: 1px solid gray; border-collapse: collapse;}.",
        "answer": true,
        "explanation": "Đúng. border-collapse: collapse giúp gộp các đường viền kép của bảng thành viền đơn liền mạch."
      },
      {
        "id": "mg_p2_11_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Thuộc tính rowspan='2' nếu được đặt ở ô tiêu đề 'STT' của hàng thứ nhất thì ở hàng thứ hai bắt buộc phải giữ nguyên ô <td> của cột STT đó.",
        "answer": false,
        "explanation": "Sai. Vì ô ở hàng 1 đã gộp chiếm hàng 2, nên ở hàng 2 không được viết ô <td> của cột đó nữa."
      }
    ]
  },
  {
    "id": "mg_p2_12",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "title": "Câu 4: Về quy tắc kế thừa và bộ chọn trong CSS",
    "context": "Khi tìm hiểu về cách CSS định dạng trang web, nhóm học sinh đưa ra các nhận định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_12_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Bộ chọn thẻ (Element Selector) như p, h1, body áp dụng kiểu dáng cho toàn bộ các phần tử cùng tên trên trang web.",
        "answer": true,
        "explanation": "Đúng. Bộ chọn phần tử tác động lên tất cả các phần tử mang thẻ đó."
      },
      {
        "id": "mg_p2_12_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Các thuộc tính định dạng chữ như color, font-family, font-size khi được khai báo ở phần tử cha <body> sẽ tự động được kế thừa bởi các phần tử con bên trong.",
        "answer": true,
        "explanation": "Đúng. Tính kế thừa (Inheritance) trong CSS tự động truyền các thuộc tính kiểu chữ từ phần tử cha xuống phần tử con."
      },
      {
        "id": "mg_p2_12_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Một phần tử HTML chỉ có thể thuộc về tối đa một lớp class duy nhất.",
        "answer": false,
        "explanation": "Sai. Một phần tử HTML có thể chứa nhiều lớp class cách nhau bởi dấu cách, ví dụ: class='btn btn-primary active'."
      },
      {
        "id": "mg_p2_12_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi một phần tử vừa chịu tác động của bộ chọn ID (#menu {color: blue;}) vừa chịu tác động của bộ chọn Class (.nav {color: red;}), chữ của phần tử đó sẽ có màu xanh (blue).",
        "answer": true,
        "explanation": "Đúng. Bộ chọn ID có độ đặc hiệu (Specificity) cao hơn bộ chọn Class nên quy tắc màu xanh của ID sẽ thắng."
      }
    ]
  }
]
};

const COMPREHENSIVE_TEST_GRAD_4 = {
  id: "exam_mock_grad_4",
  code: "THI-THU-04",
  num: 4,
  title: "Đề thi thử Tốt nghiệp THPT Số 04",
  desc: "Tuyển chọn ngẫu nhiên 28 câu hỏi (24 câu Phần I + 4 câu Phần II) từ ngân hàng đề thi thử các Sở GD&ĐT.",
  sources: "Tuyển chọn từ hơn 40 Sở GD&ĐT trên toàn quốc",
  timeMinutes: 45,
  matrix: GRAD_MATRIX_STANDARD_28,
  part1: [
  {
    "id": "mg_p1_36",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để nhúng tệp bảng định dạng CSS ngoài (External Style Sheet) vào trang web?",
    "options": [
      "<style>",
      "<css>",
      "<link>",
      "<script>"
    ],
    "answer": 2,
    "explanation": "Thẻ <link rel='stylesheet' href='style.css'> nằm trong phần <head> được dùng để liên kết tệp CSS ngoài."
  },
  {
    "id": "mg_p1_37",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào sau đây trong HTML được sử dụng để tạo một dòng (hàng) trong bảng dữ liệu?",
    "options": [
      "<td>",
      "<th>",
      "<tr>",
      "<row>"
    ],
    "answer": 2,
    "explanation": "<tr> (Table Row) được dùng để định nghĩa một hàng trong bảng HTML."
  },
  {
    "id": "mg_p1_40",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Cặp thẻ HTML nào sau đây định nghĩa tiêu đề của trang web được hiển thị trên thanh tiêu đề của trình duyệt?",
    "options": [
      "<header> ... </header>",
      "<title> ... </title>",
      "<heading> ... </heading>",
      "<caption> ... </caption>"
    ],
    "answer": 1,
    "explanation": "Thẻ <title> nằm trong thẻ <head> dùng để xác định tiêu đề hiển thị trên thanh tab của trình duyệt."
  },
  {
    "id": "mg_p1_41",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong HTML, thẻ nào sau đây tạo đường kẻ ngang phân cách giữa các phần nội dung của trang web?",
    "options": [
      "<line>",
      "<divider>",
      "<hr>",
      "<border>"
    ],
    "answer": 2,
    "explanation": "<hr> (Horizontal Rule) tạo một đường kẻ ngang phân tách các khối nội dung trên trang web."
  },
  {
    "id": "mg_p1_46",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong CSS, thuộc tính nào sau đây được sử dụng để thay đổi kiểu phông chữ (như Arial, Times New Roman, Tahoma)?",
    "options": [
      "font-style",
      "font-family",
      "font-weight",
      "font-type"
    ],
    "answer": 1,
    "explanation": "Thuộc tính font-family quy định danh sách các họ phông chữ được áp dụng cho văn bản."
  },
  {
    "id": "mg_p1_49",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong tài liệu HTML5, thẻ nào sau đây chứa toàn bộ các nội dung hiển thị trực quan cho người dùng như văn bản, hình ảnh, video?",
    "options": [
      "<head>",
      "<body>",
      "<main-page>",
      "<content>"
    ],
    "answer": 1,
    "explanation": "Phần tử <body> là nơi chứa tất cả nội dung được kết xuất trên màn hình trình duyệt."
  },
  {
    "id": "mg_p1_50",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ tiêu đề nào trong HTML quy định kích thước chữ lớn nhất và mức độ quan trọng cao nhất?",
    "options": [
      "<h6>",
      "<h3>",
      "<h1>",
      "<head>"
    ],
    "answer": 2,
    "explanation": "<h1> là thẻ tiêu đề cấp 1, có kích thước hiển thị lớn nhất và độ ưu tiên ngữ nghĩa cao nhất."
  },
  {
    "id": "mg_p1_53",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Siêu liên kết",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thuộc tính nào của thẻ <a> là bắt buộc phải có để chỉ định địa chỉ trang web đích của siêu liên kết?",
    "options": [
      "src",
      "href",
      "link",
      "target"
    ],
    "answer": 1,
    "explanation": "href (Hypertext Reference) là thuộc tính chứa địa chỉ URL của tài nguyên đích."
  },
  {
    "id": "mg_p1_56",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào sau đây trong HTML được sử dụng để tạo một danh sách không có thứ tự (hiển thị bằng các dấu chấm đầu dòng)?",
    "options": [
      "<ol>",
      "<ul>",
      "<dl>",
      "<list>"
    ],
    "answer": 1,
    "explanation": "<ul> (Unordered List) tạo danh sách không có thứ tự với các dấu ký hiệu đầu dòng."
  },
  {
    "id": "mg_p1_57",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị văn bản dưới dạng in nghiêng?",
    "options": [
      "<b>",
      "<i>",
      "<u>",
      "<s>"
    ],
    "answer": 1,
    "explanation": "Thẻ <i> (hoặc <em>) dùng để hiển thị chữ in nghiêng (italic)."
  },
  {
    "id": "mg_p1_32",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để liên kết nhảy đến một phần nội dung có định danh id='lienhe' nằm ngay trên cùng trang web hiện tại, thuộc tính href của thẻ <a> được viết là:",
    "options": [
      "href='lienhe'",
      "href='#lienhe'",
      "href='@lienhe'",
      "href='.lienhe'"
    ],
    "answer": 1,
    "explanation": "Ký hiệu '#' đi trước tên định danh id được dùng để tạo siêu liên kết nội bộ trong cùng một trang web (Bookmark/Anchor link)."
  },
  {
    "id": "mg_p1_38",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Bộ chọn CSS nào sau đây áp dụng định dạng cho tất cả các phần tử có thuộc tính class='tieude'?",
    "options": [
      "#tieude",
      ".tieude",
      "*tieude",
      "tieude"
    ],
    "answer": 1,
    "explanation": "Bộ chọn Class trong CSS sử dụng dấu chấm (.) phía trước tên lớp, ví dụ: .tieude."
  },
  {
    "id": "mg_p1_42",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "THPT Hưng Hóa (Phú Thọ)",
    "province": "THPT Hưng Hóa (Phú Thọ)",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <input> được dùng để hiển thị sẵn một văn bản gợi ý mờ bên trong ô nhập liệu (tự động biến mất khi người dùng gõ phím)?",
    "options": [
      "value",
      "placeholder",
      "hint",
      "default"
    ],
    "answer": 1,
    "explanation": "placeholder quy định chuỗi văn bản gợi ý mờ hiển thị trong ô nhập liệu khi ô đó chưa có dữ liệu."
  },
  {
    "id": "mg_p1_43",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Định dạng tệp hình ảnh nào sau đây hỗ trợ độ trong suốt (transparency) và thường được dùng cho logo trên các trang web?",
    "options": [
      "BMP",
      "PNG",
      "JPEG (JPG)",
      "TIFF"
    ],
    "answer": 1,
    "explanation": "Định dạng PNG (Portable Network Graphics) hỗ trợ nền trong suốt (kênh Alpha), rất phổ biến cho logo và biểu tượng web."
  },
  {
    "id": "mg_p1_47",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Vĩnh Phúc",
    "province": "Sở GD&ĐT Vĩnh Phúc",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong CSS, thuộc tính nào sau đây quy định khoảng cách đệm bên trong (khoảng cách giữa nội dung và đường viền) của một phần tử hộp?",
    "options": [
      "margin",
      "padding",
      "border",
      "spacing"
    ],
    "answer": 1,
    "explanation": "padding quy định khoảng cách đệm bên trong viền; margin quy định khoảng cách lề bên ngoài viền."
  },
  {
    "id": "mg_p1_51",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Quy tắc CSS nào sau đây được viết dưới dạng CSS nội tuyến (Inline CSS)?",
    "options": [
      "<p style='color: red;'>Nội dung</p>",
      "<style>p {color: red;}</style>",
      "<link rel='stylesheet' href='red.css'>",
      "<p class='red'>Nội dung</p>"
    ],
    "answer": 0,
    "explanation": "CSS nội tuyến được viết trực tiếp vào thuộc tính style của từng thẻ HTML cụ thể."
  },
  {
    "id": "mg_p1_54",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để chèn một đoạn video kèm theo thanh điều khiển và ảnh bìa đại diện khi video chưa phát, ta sử dụng thuộc tính nào sau đây của thẻ <video>?",
    "options": [
      "cover",
      "poster",
      "preview",
      "thumbnail"
    ],
    "answer": 1,
    "explanation": "Thuộc tính poster quy định đường dẫn hình ảnh hiển thị làm ảnh bìa khi video đang tải hoặc chưa phát."
  },
  {
    "id": "mg_p1_35",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi nhúng bản đồ số từ Google Maps bằng thẻ <iframe>, nếu muốn khung bản đồ chiếm trọn chiều rộng của cột chứa và có chiều cao cố định 400px, thuộc tính nào đúng?",
    "options": [
      "width='100%' height='400px'",
      "width='full' height='400'",
      "size='100%, 400'",
      "width='auto' height='fixed'"
    ],
    "answer": 0,
    "explanation": "Thẻ iframe cho phép khai báo thuộc tính width='100%' (chiếm toàn bộ độ rộng phần tử chứa) và height='400px' (hoặc height='400')."
  },
  {
    "id": "mg_p1_39",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Quảng Ninh",
    "province": "Sở GD&ĐT Quảng Ninh",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong bảng HTML, khi muốn gộp 3 ô ở 3 hàng liên tiếp trên cùng một cột lại thành một ô duy nhất, thuộc tính nào sau đây là chính xác?",
    "options": [
      "colspan='3'",
      "rowspan='3'",
      "merge='3'",
      "spanrow='3'"
    ],
    "answer": 1,
    "explanation": "rowspan='k' gộp k ô theo chiều dọc (các hàng liên tiếp); colspan='k' gộp k ô theo chiều ngang (các cột liên tiếp)."
  },
  {
    "id": "mg_p1_44",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Siêu liên kết",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Một liên kết được viết như sau: <a href='tailieu.pdf' target='_blank'>Tải tài liệu</a>. Khi người dùng nhấp vào liên kết này, trình duyệt sẽ làm gì?",
    "options": [
      "Mở tệp tailieu.pdf trong một tab hoặc cửa sổ mới",
      "Ghi đè nội dung tệp tailieu.pdf lên tab hiện tại",
      "Tải lại toàn bộ trang chủ của website",
      "Đóng tab trình duyệt hiện tại ngay lập tức"
    ],
    "answer": 0,
    "explanation": "Thuộc tính target='_blank' chỉ thị cho trình duyệt mở trang đích hoặc tài nguyên trong một tab hoặc cửa sổ mới."
  },
  {
    "id": "mg_p1_45",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong form nhập thông tin, để bắt buộc người dùng không được bỏ trống ô 'Họ và tên' trước khi nhấn nút gửi, lập trình viên cần bổ sung thuộc tính nào?",
    "options": [
      "validate",
      "required",
      "checked",
      "important"
    ],
    "answer": 1,
    "explanation": "Thuộc tính required là thuộc tính boolean trong HTML5 quy định trường nhập liệu bắt buộc phải có giá trị mới được nộp form."
  },
  {
    "id": "mg_p1_48",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Vĩnh Phúc",
    "province": "Sở GD&ĐT Vĩnh Phúc",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi người dùng chọn một tệp hình ảnh từ máy tính để tải lên máy chủ thông qua thẻ <input type='file'>, thẻ <form> bao bọc bắt buộc phải có thuộc tính mã hóa nào?",
    "options": [
      "enctype='multipart/form-data'",
      "enctype='text/plain'",
      "method='GET'",
      "type='file-upload'"
    ],
    "answer": 0,
    "explanation": "Để truyền tải tệp nhị phân (hình ảnh, tệp tin) qua form, bắt buộc phải dùng method='POST' và enctype='multipart/form-data'."
  },
  {
    "id": "mg_p1_52",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi thiết kế form đăng ký tài khoản, muốn ô nhập tuổi chỉ nhận số nguyên từ 15 đến 60, ta sử dụng cú pháp nào?",
    "options": [
      "<input type='number' min='15' max='60'>",
      "<input type='text' range='15-60'>",
      "<input type='digits' from='15' to='60'>",
      "<input type='number' limit='15,60'>"
    ],
    "answer": 0,
    "explanation": "type='number' kết hợp hai thuộc tính min và max quy định giới hạn giá trị số hợp lệ."
  },
  {
    "id": "mg_p1_55",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây thiết lập đường viền tròn hoàn toàn (hình tròn) cho một bức ảnh vuông có kích thước 100px x 100px?",
    "options": [
      "img {border-radius: 50%;}",
      "img {border-circle: true;}",
      "img {border-style: round;}",
      "img {border-corner: 100%;}"
    ],
    "answer": 0,
    "explanation": "border-radius: 50% bo tròn đều các góc tạo thành hình tròn hoàn hảo cho ảnh hình vuông."
  }
],
  part2: [
  {
    "id": "mg_p2_13",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "title": "Câu 1: Về thiết kế menu điều hướng và bảng giá dịch vụ",
    "context": "Nhóm bạn Nam thiết kế website kinh doanh đặc sản miền Tây gồm thanh điều hướng (Menu) và bảng bảng giá. Em hãy xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_13_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thanh điều hướng (navigation bar) của website thường được xây dựng dựa trên cấu trúc danh sách không có thứ tự <ul> kết hợp các thẻ <li> và <a>.",
        "answer": true,
        "explanation": "Đúng. Cấu trúc ngữ nghĩa chuẩn để tạo thanh menu trong HTML là <ul><li><a>."
      },
      {
        "id": "mg_p2_13_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <caption> nếu có trong bảng dữ liệu thì bắt buộc phải đặt ở vị trí sau cùng của bảng, ngay trước thẻ đóng </table>.",
        "answer": false,
        "explanation": "Sai. Thẻ <caption> phải được đặt ngay sau thẻ mở <table>, trước các hàng <tr>."
      },
      {
        "id": "mg_p2_13_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để hiển thị tiêu đề bảng được in đậm và căn giữa tự động, học sinh sử dụng thẻ <th> thay cho thẻ <td> ở hàng đầu tiên.",
        "answer": true,
        "explanation": "Đúng. Thẻ <th> (Table Header) tự động định dạng chữ đậm và căn giữa ô."
      },
      {
        "id": "mg_p2_13_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi bảng giá có 4 cột, ô 'Tổng cộng thanh toán' ở hàng cuối cùng muốn chiếm độ rộng của 3 cột đầu tiên thì thẻ đó viết là <td colspan='3'>Tổng cộng</td>.",
        "answer": true,
        "explanation": "Đúng. colspan='3' gộp 3 ô liên tiếp theo chiều ngang (cột)."
      }
    ]
  },
  {
    "id": "mg_p2_14",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "title": "Câu 2: Về tích hợp đa phương tiện và nhúng bản đồ du lịch",
    "context": "Nhóm học sinh xây dựng trang web du lịch Chợ nổi Cái Răng có chèn hình ảnh đặc sản, video giới thiệu và bản đồ chỉ đường Google Maps. Đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_14_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <img> là thẻ đơn không có thẻ đóng riêng biệt, thông tin vị trí ảnh được cung cấp ở thuộc tính src.",
        "answer": true,
        "explanation": "Đúng. <img> là thẻ đơn tự đóng và dùng thuộc tính src để định vị ảnh."
      },
      {
        "id": "mg_p2_14_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> chỉ có thể nhúng được video của YouTube chứ không thể nhúng được bản đồ Google Maps hay trang web khác.",
        "answer": false,
        "explanation": "Sai. <iframe> nhúng được bất kỳ tài nguyên web nào hỗ trợ nhúng (bản đồ, tài liệu, video, trang web khác)."
      },
      {
        "id": "mg_p2_14_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính poster trong thẻ <video> có tác dụng hiển thị một bức ảnh tĩnh đại diện trước khi người dùng bấm phát video.",
        "answer": true,
        "explanation": "Đúng. Thuộc tính poster cung cấp hình ảnh bìa (thumbnail) đại diện cho video."
      },
      {
        "id": "mg_p2_14_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để khung bản đồ số <iframe> co giãn linh hoạt vừa khít với mọi kích thước màn hình điện thoại di động của du khách, ta nên thiết lập thuộc tính style='width: 100%; border: 0;'.",
        "answer": true,
        "explanation": "Đúng. Đơn vị tương đối 100% giúp khung hình tự động co giãn theo chiều rộng màn hình thiết bị."
      }
    ]
  },
  {
    "id": "mg_p2_15",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "title": "Câu 3: Về biểu mẫu đặt phòng khách sạn trực tuyến",
    "context": "Một website khách sạn tại Vũng Tàu thiết kế form đặt phòng gồm: Họ tên, Số điện thoại, Ngày nhận phòng, Loại phòng (Đơn/Đôi/VIP) và Nút xác nhận. Xem xét tính Đúng/Sai của các khẳng định sau:",
    "items": [
      {
        "id": "mg_p2_15_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để người dùng chọn ngày nhận phòng trên lịch số trực quan, HTML5 cung cấp thẻ <input type='date'>.",
        "answer": true,
        "explanation": "Đúng. type='date' cung cấp bảng chọn ngày tháng năm lịch số trực quan."
      },
      {
        "id": "mg_p2_15_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính required đặt ở ô nhập 'Số điện thoại' sẽ bắt buộc người dùng phải điền thông tin trước khi form được gửi đi.",
        "answer": true,
        "explanation": "Đúng. required ngăn không cho gửi form nếu trường dữ liệu đó đang bị bỏ trống."
      },
      {
        "id": "mg_p2_15_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi người dùng chọn Loại phòng bằng thẻ <select>, nếu không có thuộc tính multiple thì người dùng có thể chọn đồng thời cả 3 loại phòng cùng lúc.",
        "answer": false,
        "explanation": "Sai. <select> mặc định chỉ chọn duy nhất 1 mục; muốn chọn nhiều mục phải có thêm thuộc tính multiple."
      },
      {
        "id": "mg_p2_15_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để đảm bảo các thông tin đặt phòng nhạy cảm (như số điện thoại, thông tin cá nhân) không bị lộ trên thanh địa chỉ URL, thẻ <form> bắt buộc phải thiết lập thuộc tính method='POST'.",
        "answer": true,
        "explanation": "Đúng. Phương thức POST giấu kín dữ liệu trong phần thân gói tin, bảo mật thông tin cá nhân của khách hàng."
      }
    ]
  },
  {
    "id": "mg_p2_16",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "title": "Câu 4: Về tổ chức cấu trúc tệp website và định dạng CSS",
    "context": "Một website trường THPT có cấu trúc thư mục chuẩn: thư mục gốc chứa index.html, thư mục con 'css/' chứa style.css, thư mục 'gioithieu/' chứa lichsu.html. Hãy đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_16_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Tệp bảng định dạng CSS ngoài có phần mở rộng chuẩn là .css và không chứa các thẻ HTML như <style> hay </style> bên trong.",
        "answer": true,
        "explanation": "Đúng. Tệp .css thuần túy chỉ chứa các quy tắc định dạng CSS, không được chứa thẻ HTML."
      },
      {
        "id": "mg_p2_16_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Bộ chọn dấu hoa thị (*) trong CSS là bộ chọn toàn cục (Universal Selector), áp dụng định dạng cho tất cả các phần tử trên trang web.",
        "answer": true,
        "explanation": "Đúng. Bộ chọn * tác động lên tất cả các phần tử HTML trong tài liệu."
      },
      {
        "id": "mg_p2_16_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Từ tệp 'gioithieu/lichsu.html', để liên kết đến tệp định dạng 'css/style.css' ở thư mục gốc, đường dẫn tương đối đúng là <link rel='stylesheet' href='../css/style.css'>.",
        "answer": true,
        "explanation": "Đúng. Cần '../' để lùi ra thư mục gốc rồi đi vào 'css/style.css'."
      },
      {
        "id": "mg_p2_16_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Quy tắc CSS h1, p {color: green;} và quy tắc h1 p {color: green;} có ý nghĩa và cách tác động hoàn toàn giống nhau.",
        "answer": false,
        "explanation": "Sai. 'h1, p' (có dấu phẩy) tác động lên cả thẻ h1 và thẻ p; còn 'h1 p' (không dấu phẩy) là bộ chọn hậu duệ chỉ tác động lên thẻ p nằm BÊN TRONG thẻ h1."
      }
    ]
  }
]
};

const COMPREHENSIVE_TEST_GRAD_5 = {
  id: "exam_mock_grad_5",
  code: "THI-THU-05",
  num: 5,
  title: "Đề thi thử Tốt nghiệp THPT Số 05",
  desc: "Tuyển chọn ngẫu nhiên 28 câu hỏi (24 câu Phần I + 4 câu Phần II) từ ngân hàng đề thi thử các Sở GD&ĐT.",
  sources: "Tuyển chọn từ hơn 40 Sở GD&ĐT trên toàn quốc",
  timeMinutes: 45,
  matrix: GRAD_MATRIX_STANDARD_28,
  part1: [
  {
    "id": "mg_p1_49",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong tài liệu HTML5, thẻ nào sau đây chứa toàn bộ các nội dung hiển thị trực quan cho người dùng như văn bản, hình ảnh, video?",
    "options": [
      "<head>",
      "<body>",
      "<main-page>",
      "<content>"
    ],
    "answer": 1,
    "explanation": "Phần tử <body> là nơi chứa tất cả nội dung được kết xuất trên màn hình trình duyệt."
  },
  {
    "id": "mg_p1_50",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ tiêu đề nào trong HTML quy định kích thước chữ lớn nhất và mức độ quan trọng cao nhất?",
    "options": [
      "<h6>",
      "<h3>",
      "<h1>",
      "<head>"
    ],
    "answer": 2,
    "explanation": "<h1> là thẻ tiêu đề cấp 1, có kích thước hiển thị lớn nhất và độ ưu tiên ngữ nghĩa cao nhất."
  },
  {
    "id": "mg_p1_53",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Siêu liên kết",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thuộc tính nào của thẻ <a> là bắt buộc phải có để chỉ định địa chỉ trang web đích của siêu liên kết?",
    "options": [
      "src",
      "href",
      "link",
      "target"
    ],
    "answer": 1,
    "explanation": "href (Hypertext Reference) là thuộc tính chứa địa chỉ URL của tài nguyên đích."
  },
  {
    "id": "mg_p1_56",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào sau đây trong HTML được sử dụng để tạo một danh sách không có thứ tự (hiển thị bằng các dấu chấm đầu dòng)?",
    "options": [
      "<ol>",
      "<ul>",
      "<dl>",
      "<list>"
    ],
    "answer": 1,
    "explanation": "<ul> (Unordered List) tạo danh sách không có thứ tự với các dấu ký hiệu đầu dòng."
  },
  {
    "id": "mg_p1_57",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị văn bản dưới dạng in nghiêng?",
    "options": [
      "<b>",
      "<i>",
      "<u>",
      "<s>"
    ],
    "answer": 1,
    "explanation": "Thẻ <i> (hoặc <em>) dùng để hiển thị chữ in nghiêng (italic)."
  },
  {
    "id": "mg_p1_60",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Khai báo nào sau đây luôn được đặt ở dòng đầu tiên của tài liệu để thông báo phiên bản HTML5 cho trình duyệt?",
    "options": [
      "<DOCTYPE html5>",
      "<!DOCTYPE html>",
      "<html>",
      "<html version='5'>"
    ],
    "answer": 1,
    "explanation": "<!DOCTYPE html> là khai báo chuẩn phiên bản HTML5 đặt ở dòng đầu tiên."
  },
  {
    "id": "mg_p1_63",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để chèn một hình ảnh tĩnh vào trang web?",
    "options": [
      "<picture>",
      "<image>",
      "<img>",
      "<photo>"
    ],
    "answer": 2,
    "explanation": "Thẻ <img> (Image) là thẻ chuẩn trong HTML để chèn hình ảnh."
  },
  {
    "id": "mg_p1_66",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong HTML, thẻ nào sau đây được dùng để đánh dấu nổi bật văn bản bằng màu nền vàng nhạt giống bút dạ quang?",
    "options": [
      "<highlight>",
      "<mark>",
      "<b>",
      "<color>"
    ],
    "answer": 1,
    "explanation": "<mark> là thẻ ngữ nghĩa HTML5 dùng để làm nổi bật văn bản với màu nền mặc định là vàng."
  },
  {
    "id": "mg_p1_69",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Ngãi",
    "province": "Sở GD&ĐT Quảng Ngãi",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ <meta charset='UTF-8'> đặt trong phần <head> có tác dụng gì đối với trang web?",
    "options": [
      "Khai báo bảng mã ký tự Unicode để hiển thị chính xác tiếng Việt có dấu",
      "Quy định tốc độ tải trang web nhanh hơn",
      "Thiết lập độ phân giải màn hình hiển thị",
      "Tự động dịch trang web sang tiếng Anh"
    ],
    "answer": 0,
    "explanation": "Khai báo bảng mã ký tự UTF-8 cho phép hiển thị đầy đủ và chuẩn xác các ngôn ngữ có dấu như tiếng Việt."
  },
  {
    "id": "mg_p1_70",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Ngãi",
    "province": "Sở GD&ĐT Quảng Ngãi",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong biểu mẫu HTML được dùng để tạo nút bấm xóa trắng toàn bộ dữ liệu người dùng đã nhập về trạng thái ban đầu?",
    "options": [
      "<input type='reset'>",
      "<input type='delete'>",
      "<input type='clear'>",
      "<input type='cancel'>"
    ],
    "answer": 0,
    "explanation": "type='reset' đặt lại tất cả các trường nhập liệu trong form về giá trị mặc định ban đầu."
  },
  {
    "id": "mg_p1_43",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Định dạng tệp hình ảnh nào sau đây hỗ trợ độ trong suốt (transparency) và thường được dùng cho logo trên các trang web?",
    "options": [
      "BMP",
      "PNG",
      "JPEG (JPG)",
      "TIFF"
    ],
    "answer": 1,
    "explanation": "Định dạng PNG (Portable Network Graphics) hỗ trợ nền trong suốt (kênh Alpha), rất phổ biến cho logo và biểu tượng web."
  },
  {
    "id": "mg_p1_47",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Vĩnh Phúc",
    "province": "Sở GD&ĐT Vĩnh Phúc",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong CSS, thuộc tính nào sau đây quy định khoảng cách đệm bên trong (khoảng cách giữa nội dung và đường viền) của một phần tử hộp?",
    "options": [
      "margin",
      "padding",
      "border",
      "spacing"
    ],
    "answer": 1,
    "explanation": "padding quy định khoảng cách đệm bên trong viền; margin quy định khoảng cách lề bên ngoài viền."
  },
  {
    "id": "mg_p1_51",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Quy tắc CSS nào sau đây được viết dưới dạng CSS nội tuyến (Inline CSS)?",
    "options": [
      "<p style='color: red;'>Nội dung</p>",
      "<style>p {color: red;}</style>",
      "<link rel='stylesheet' href='red.css'>",
      "<p class='red'>Nội dung</p>"
    ],
    "answer": 0,
    "explanation": "CSS nội tuyến được viết trực tiếp vào thuộc tính style của từng thẻ HTML cụ thể."
  },
  {
    "id": "mg_p1_54",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để chèn một đoạn video kèm theo thanh điều khiển và ảnh bìa đại diện khi video chưa phát, ta sử dụng thuộc tính nào sau đây của thẻ <video>?",
    "options": [
      "cover",
      "poster",
      "preview",
      "thumbnail"
    ],
    "answer": 1,
    "explanation": "Thuộc tính poster quy định đường dẫn hình ảnh hiển thị làm ảnh bìa khi video đang tải hoặc chưa phát."
  },
  {
    "id": "mg_p1_58",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Sự khác biệt quan trọng giữa phương thức GET và POST trong thẻ <form> là gì?",
    "options": [
      "GET gửi dữ liệu hiển thị trên thanh URL; POST gửi dữ liệu ngầm trong phần thân HTTP request",
      "GET chỉ dùng cho hình ảnh; POST chỉ dùng cho văn bản",
      "GET bảo mật hơn phương thức POST khi gửi mật khẩu",
      "GET và POST hoàn toàn giống nhau, không có khác biệt"
    ],
    "answer": 0,
    "explanation": "GET đính dữ liệu vào thanh URL (query string); POST gói dữ liệu vào phần thân bản tin, bảo mật hơn và gửi được khối lượng dữ liệu lớn."
  },
  {
    "id": "mg_p1_61",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong bảng HTML, để thêm một dòng chú thích tiêu đề cho toàn bộ bảng, thẻ nào sau đây được đặt ngay sau thẻ mở <table>?",
    "options": [
      "<title>",
      "<caption>",
      "<header>",
      "<summary>"
    ],
    "answer": 1,
    "explanation": "Thẻ <caption> dùng để tạo tiêu đề mô tả ngắn gọn cho bảng dữ liệu."
  },
  {
    "id": "mg_p1_64",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi áp dụng định dạng cho cùng một phần tử, thứ tự ưu tiên áp dụng (từ cao nhất đến thấp nhất) của 3 loại CSS là:",
    "options": [
      "Inline CSS (Nội tuyến) > Internal CSS (Nội bộ) > External CSS (Ngoài)",
      "External CSS > Internal CSS > Inline CSS",
      "Internal CSS > External CSS > Inline CSS",
      "Cả 3 loại có độ ưu tiên hoàn toàn bằng nhau"
    ],
    "answer": 0,
    "explanation": "Inline CSS gắn trực tiếp ở thuộc tính style có mức độ ưu tiên ghi đè cao nhất, tiếp theo là Internal CSS và cuối cùng là External CSS."
  },
  {
    "id": "mg_p1_45",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Hải Phòng",
    "province": "Sở GD&ĐT Hải Phòng",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong form nhập thông tin, để bắt buộc người dùng không được bỏ trống ô 'Họ và tên' trước khi nhấn nút gửi, lập trình viên cần bổ sung thuộc tính nào?",
    "options": [
      "validate",
      "required",
      "checked",
      "important"
    ],
    "answer": 1,
    "explanation": "Thuộc tính required là thuộc tính boolean trong HTML5 quy định trường nhập liệu bắt buộc phải có giá trị mới được nộp form."
  },
  {
    "id": "mg_p1_48",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Vĩnh Phúc",
    "province": "Sở GD&ĐT Vĩnh Phúc",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi người dùng chọn một tệp hình ảnh từ máy tính để tải lên máy chủ thông qua thẻ <input type='file'>, thẻ <form> bao bọc bắt buộc phải có thuộc tính mã hóa nào?",
    "options": [
      "enctype='multipart/form-data'",
      "enctype='text/plain'",
      "method='GET'",
      "type='file-upload'"
    ],
    "answer": 0,
    "explanation": "Để truyền tải tệp nhị phân (hình ảnh, tệp tin) qua form, bắt buộc phải dùng method='POST' và enctype='multipart/form-data'."
  },
  {
    "id": "mg_p1_52",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi thiết kế form đăng ký tài khoản, muốn ô nhập tuổi chỉ nhận số nguyên từ 15 đến 60, ta sử dụng cú pháp nào?",
    "options": [
      "<input type='number' min='15' max='60'>",
      "<input type='text' range='15-60'>",
      "<input type='digits' from='15' to='60'>",
      "<input type='number' limit='15,60'>"
    ],
    "answer": 0,
    "explanation": "type='number' kết hợp hai thuộc tính min và max quy định giới hạn giá trị số hợp lệ."
  },
  {
    "id": "mg_p1_55",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây thiết lập đường viền tròn hoàn toàn (hình tròn) cho một bức ảnh vuông có kích thước 100px x 100px?",
    "options": [
      "img {border-radius: 50%;}",
      "img {border-circle: true;}",
      "img {border-style: round;}",
      "img {border-corner: 100%;}"
    ],
    "answer": 0,
    "explanation": "border-radius: 50% bo tròn đều các góc tạo thành hình tròn hoàn hảo cho ảnh hình vuông."
  },
  {
    "id": "mg_p1_59",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi muốn áp dụng kiểu chữ màu xanh lam và gạch chân cho tất cả các thẻ liên kết <a> khi rê chuột vào (hover), cú pháp CSS nào là chính xác?",
    "options": [
      "a:hover {color: blue; text-decoration: underline;}",
      "a:active {color: blue; text-style: underline;}",
      "a.hover {color: blue; font-underline: true;}",
      "a#hover {text-color: blue; decoration: line;}"
    ],
    "answer": 0,
    "explanation": "Lớp giả :hover kết hợp với text-decoration: underline tạo hiệu ứng đổi màu và gạch chân khi rê chuột."
  },
  {
    "id": "mg_p1_62",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Siêu liên kết",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Từ trang web 'sanpham/chitiet.html', để tạo liên kết quay trở về trang 'gioithieu.html' nằm trong thư mục gốc của website, đường dẫn tương đối đúng là:",
    "options": [
      "<a href='../gioithieu.html'>Giới thiệu</a>",
      "<a href='gioithieu.html'>Giới thiệu</a>",
      "<a href='./gioithieu.html'>Giới thiệu</a>",
      "<a href='sanpham/gioithieu.html'>Giới thiệu</a>"
    ],
    "answer": 0,
    "explanation": "Từ thư mục con 'sanpham', dùng '../' để lùi ra một cấp thư mục cha (thư mục gốc) rồi liên kết đến 'gioithieu.html'."
  },
  {
    "id": "mg_p1_65",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong form nhập mật khẩu, muốn đặt số ký tự tối thiểu là 8 ký tự để bảo mật, ta sử dụng thuộc tính nào sau đây của thẻ <input>?",
    "options": [
      "minlength='8'",
      "min='8'",
      "length='8'",
      "size='8'"
    ],
    "answer": 0,
    "explanation": "minlength quy định độ dài tối thiểu của chuỗi văn bản nhập vào ở các thẻ input dạng text, password."
  }
],
  part2: [
  {
    "id": "mg_p2_01",
    "source": "Sở GD&ĐT Ninh Bình",
    "province": "Ninh Bình",
    "title": "Câu 1: Về thiết kế trang báo tường điện tử của chi đoàn",
    "context": "Lớp 12A thiết kế một trang web báo tường điện tử chào mừng ngày thành lập Đoàn 26/3. Trang web gồm trang chủ index.html, các bài viết trong thư mục con 'baiviet/' và hình ảnh minh họa trong thư mục 'hinhanh/'. Xác định tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_01_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để hiển thị tiêu đề trên thanh tab của trình duyệt web, nhóm học sinh cần đặt dòng chữ tiêu đề bên trong cặp thẻ <title> ... </title> nằm trong phần <head>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <title> nằm trong <head> xác định tiêu đề hiển thị trên thanh tab của trình duyệt."
      },
      {
        "id": "mg_p2_01_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Từ tệp 'baiviet/bai1.html', để chèn bức ảnh 'anh1.jpg' nằm trong thư mục 'hinhanh/' (ngang cấp với thư mục 'baiviet'), đường dẫn tương đối đúng là src='../hinhanh/anh1.jpg'.",
        "answer": true,
        "explanation": "Đúng. Cần dùng '../' để lùi ra thư mục cha rồi đi vào thư mục 'hinhanh/anh1.jpg'."
      },
      {
        "id": "mg_p2_01_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để đổi màu chữ tiêu đề thành màu đỏ bằng CSS nội tuyến (Inline CSS), học sinh viết thuộc tính: style='font-color: red;'.",
        "answer": false,
        "explanation": "Sai. Trong CSS, thuộc tính đổi màu chữ là 'color: red;' chứ không có thuộc tính 'font-color'."
      },
      {
        "id": "mg_p2_01_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi sử dụng đường dẫn tương đối để tạo siêu liên kết giữa các trang trong cùng một website, trang web vẫn hoạt động hoàn toàn chính xác khi sao chép toàn bộ thư mục website sang một máy tính khác mà không bị đứt gãy liên kết.",
        "answer": true,
        "explanation": "Đúng. Ưu điểm nổi bật của đường dẫn tương đối là tính cơ động, không phụ thuộc vào ổ đĩa hay tên miền tuyệt đối."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1
  },
  {
    "id": "mg_p2_02",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "title": "Câu 2: Về cấu trúc tài liệu và siêu liên kết trong trang tin điện tử",
    "context": "Một nhóm học sinh tham gia dự án xây dựng trang tin 'Hải đảo quê hương'. Khi kiểm tra cấu trúc mã nguồn HTML của website, các bạn đưa ra các nhận định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_02_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Khai báo <!DOCTYPE html> ở dòng đầu tiên nhằm thông báo cho trình duyệt biết trang web tuân theo chuẩn ngôn ngữ HTML5.",
        "answer": true,
        "explanation": "Đúng. <!DOCTYPE html> là khai báo chuẩn phiên bản HTML5."
      },
      {
        "id": "mg_p2_02_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Các thẻ <br> và <hr> là các thẻ đơn (void elements), không có thẻ đóng riêng biệt và không chứa văn bản bên trong.",
        "answer": true,
        "explanation": "Đúng. <br> (ngắt dòng) và <hr> (đường kẻ ngang) là các thẻ đơn tự đóng."
      },
      {
        "id": "mg_p2_02_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi người dùng nhấp vào liên kết có cú pháp href='mailto:admin@truong.edu.vn', trình duyệt sẽ tự động tải tệp tin có tên admin@truong.edu.vn về máy tính.",
        "answer": false,
        "explanation": "Sai. Giao thức 'mailto:' dùng để mở ứng dụng gửi email mặc định của thiết bị, không phải để tải tệp tin."
      },
      {
        "id": "mg_p2_02_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Có thể biến bức ảnh cờ Tổ quốc thành một nút bấm chuyển trang bằng cách đặt thẻ <img> bên trong cặp thẻ mở <a> và thẻ đóng </a>.",
        "answer": true,
        "explanation": "Đúng. HTML cho phép lồng phần tử <img> bên trong thẻ <a> để tạo liên kết hình ảnh."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1
  },
  {
    "id": "mg_p2_03",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "title": "Câu 3: Về tích hợp đa phương tiện và nhúng tài nguyên trực tuyến",
    "context": "Trong bài thực hành số hóa thông tin du lịch địa phương, học sinh tiến hành nhúng bản đồ số và video thuyết minh vào trang web. Em hãy xác định tính Đúng/Sai của các khẳng định sau:",
    "items": [
      {
        "id": "mg_p2_03_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> cho phép tạo ra một khung nội tuyến độc lập để hiển thị nội dung của một trang web khác ngay trong trang web hiện tại.",
        "answer": true,
        "explanation": "Đúng. <iframe> dùng để nhúng khung hiển thị tài nguyên hoặc trang web bên ngoài."
      },
      {
        "id": "mg_p2_03_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi nhúng video bài giảng từ YouTube vào thẻ <iframe>, ta bắt buộc phải sử dụng đường link dạng '/embed/' thay cho đường link xem '/watch' trên thanh địa chỉ URL.",
        "answer": true,
        "explanation": "Đúng. YouTube chặn nhúng link xem watch thông thường qua chính sách X-Frame-Options; bắt buộc phải dùng định dạng mã nhúng embed."
      },
      {
        "id": "mg_p2_03_c",
        "label": "c",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thuộc tính 'controls' trong thẻ <video> có chức năng tự động phát video ngay khi người dùng vừa truy cập vào trang web.",
        "answer": false,
        "explanation": "Sai. 'controls' hiển thị thanh điều khiển (Play/Pause, âm lượng); còn tự động phát là thuộc tính 'autoplay'."
      },
      {
        "id": "mg_p2_03_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi thiết lập thuộc tính width='100%' cho thẻ <iframe>, khung hiển thị bản đồ sẽ tự động co giãn vừa vặn với độ rộng màn hình của mọi thiết bị (máy tính, điện thoại).",
        "answer": true,
        "explanation": "Đúng. Đặt đơn vị % giúp phần tử co giãn linh hoạt (responsive) theo kích thước phần tử cha chứa nó."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1
  },
  {
    "id": "mg_p2_16",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "title": "Câu 4: Về tổ chức cấu trúc tệp website và định dạng CSS",
    "context": "Một website trường THPT có cấu trúc thư mục chuẩn: thư mục gốc chứa index.html, thư mục con 'css/' chứa style.css, thư mục 'gioithieu/' chứa lichsu.html. Hãy đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_16_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Tệp bảng định dạng CSS ngoài có phần mở rộng chuẩn là .css và không chứa các thẻ HTML như <style> hay </style> bên trong.",
        "answer": true,
        "explanation": "Đúng. Tệp .css thuần túy chỉ chứa các quy tắc định dạng CSS, không được chứa thẻ HTML."
      },
      {
        "id": "mg_p2_16_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Bộ chọn dấu hoa thị (*) trong CSS là bộ chọn toàn cục (Universal Selector), áp dụng định dạng cho tất cả các phần tử trên trang web.",
        "answer": true,
        "explanation": "Đúng. Bộ chọn * tác động lên tất cả các phần tử HTML trong tài liệu."
      },
      {
        "id": "mg_p2_16_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Từ tệp 'gioithieu/lichsu.html', để liên kết đến tệp định dạng 'css/style.css' ở thư mục gốc, đường dẫn tương đối đúng là <link rel='stylesheet' href='../css/style.css'>.",
        "answer": true,
        "explanation": "Đúng. Cần '../' để lùi ra thư mục gốc rồi đi vào 'css/style.css'."
      },
      {
        "id": "mg_p2_16_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Quy tắc CSS h1, p {color: green;} và quy tắc h1 p {color: green;} có ý nghĩa và cách tác động hoàn toàn giống nhau.",
        "answer": false,
        "explanation": "Sai. 'h1, p' (có dấu phẩy) tác động lên cả thẻ h1 và thẻ p; còn 'h1 p' (không dấu phẩy) là bộ chọn hậu duệ chỉ tác động lên thẻ p nằm BÊN TRONG thẻ h1."
      }
    ]
  }
]
};

const COMPREHENSIVE_TEST_GRAD_6 = {
  id: "exam_mock_grad_6",
  code: "THI-THU-06",
  num: 6,
  title: "Đề thi thử Tốt nghiệp THPT Số 06",
  desc: "Tuyển chọn ngẫu nhiên 28 câu hỏi (24 câu Phần I + 4 câu Phần II) từ ngân hàng đề thi thử các Sở GD&ĐT.",
  sources: "Tuyển chọn từ hơn 40 Sở GD&ĐT trên toàn quốc",
  timeMinutes: 45,
  matrix: GRAD_MATRIX_STANDARD_28,
  part1: [
  {
    "id": "mg_p1_60",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Khai báo nào sau đây luôn được đặt ở dòng đầu tiên của tài liệu để thông báo phiên bản HTML5 cho trình duyệt?",
    "options": [
      "<DOCTYPE html5>",
      "<!DOCTYPE html>",
      "<html>",
      "<html version='5'>"
    ],
    "answer": 1,
    "explanation": "<!DOCTYPE html> là khai báo chuẩn phiên bản HTML5 đặt ở dòng đầu tiên."
  },
  {
    "id": "mg_p1_63",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để chèn một hình ảnh tĩnh vào trang web?",
    "options": [
      "<picture>",
      "<image>",
      "<img>",
      "<photo>"
    ],
    "answer": 2,
    "explanation": "Thẻ <img> (Image) là thẻ chuẩn trong HTML để chèn hình ảnh."
  },
  {
    "id": "mg_p1_66",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong HTML, thẻ nào sau đây được dùng để đánh dấu nổi bật văn bản bằng màu nền vàng nhạt giống bút dạ quang?",
    "options": [
      "<highlight>",
      "<mark>",
      "<b>",
      "<color>"
    ],
    "answer": 1,
    "explanation": "<mark> là thẻ ngữ nghĩa HTML5 dùng để làm nổi bật văn bản với màu nền mặc định là vàng."
  },
  {
    "id": "mg_p1_69",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Ngãi",
    "province": "Sở GD&ĐT Quảng Ngãi",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ <meta charset='UTF-8'> đặt trong phần <head> có tác dụng gì đối với trang web?",
    "options": [
      "Khai báo bảng mã ký tự Unicode để hiển thị chính xác tiếng Việt có dấu",
      "Quy định tốc độ tải trang web nhanh hơn",
      "Thiết lập độ phân giải màn hình hiển thị",
      "Tự động dịch trang web sang tiếng Anh"
    ],
    "answer": 0,
    "explanation": "Khai báo bảng mã ký tự UTF-8 cho phép hiển thị đầy đủ và chuẩn xác các ngôn ngữ có dấu như tiếng Việt."
  },
  {
    "id": "mg_p1_70",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Ngãi",
    "province": "Sở GD&ĐT Quảng Ngãi",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong biểu mẫu HTML được dùng để tạo nút bấm xóa trắng toàn bộ dữ liệu người dùng đã nhập về trạng thái ban đầu?",
    "options": [
      "<input type='reset'>",
      "<input type='delete'>",
      "<input type='clear'>",
      "<input type='cancel'>"
    ],
    "answer": 0,
    "explanation": "type='reset' đặt lại tất cả các trường nhập liệu trong form về giá trị mặc định ban đầu."
  },
  {
    "id": "mg_p1_73",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong tài liệu HTML, cặp thẻ nào sau đây chứa toàn bộ cấu trúc mã nguồn của trang web?",
    "options": [
      "<web> </web>",
      "<html> </html>",
      "<body> </body>",
      "<head> </head>"
    ],
    "answer": 1,
    "explanation": "Thẻ <html> là phần tử gốc (root element) bao bọc toàn bộ mã nguồn của tài liệu HTML."
  },
  {
    "id": "mg_p1_74",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị chỉ số dưới (như số 2 trong công thức hóa học H₂O)?",
    "options": [
      "<sup>",
      "<sub>",
      "<down>",
      "<small>"
    ],
    "answer": 1,
    "explanation": "Thẻ <sub> (Subscript) định dạng chỉ số dưới (H<sub>2</sub>O); thẻ <sup> (Superscript) định dạng số mũ chỉ số trên."
  },
  {
    "id": "mg_p1_77",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ <label for='id_input'> trong biểu mẫu HTML có tác dụng gì đối với trải nghiệm người dùng?",
    "options": [
      "Gắn nhãn văn bản với trường nhập liệu, giúp nhấp vào chữ vẫn kích hoạt được ô input",
      "Đổi màu chữ của ô nhập liệu sang màu xanh",
      "Bắt buộc người dùng phải nhập đúng định dạng số",
      "Xóa trắng dữ liệu đã nhập trong form"
    ],
    "answer": 0,
    "explanation": "Thuộc tính for của thẻ <label> liên kết với id của input giúp mở rộng vùng nhấp chuột cho người dùng."
  },
  {
    "id": "mg_p1_80",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Cặp thẻ nào sau đây được dùng để định nghĩa toàn bộ khối bảng dữ liệu trong HTML?",
    "options": [
      "<grid> </grid>",
      "<table> </table>",
      "<tab> </tab>",
      "<board> </board>"
    ],
    "answer": 1,
    "explanation": "Thẻ <table> dùng để khởi tạo một bảng dữ liệu trong HTML."
  },
  {
    "id": "mg_p1_81",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thuộc tính nào trong CSS được dùng để thiết lập khoảng cách lề bên ngoài (khoảng cách giữa các khối phần tử với nhau)?",
    "options": [
      "padding",
      "spacing",
      "margin",
      "border"
    ],
    "answer": 2,
    "explanation": "margin quy định khoảng cách lề bên ngoài đường viền của phần tử hộp."
  },
  {
    "id": "mg_p1_54",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để chèn một đoạn video kèm theo thanh điều khiển và ảnh bìa đại diện khi video chưa phát, ta sử dụng thuộc tính nào sau đây của thẻ <video>?",
    "options": [
      "cover",
      "poster",
      "preview",
      "thumbnail"
    ],
    "answer": 1,
    "explanation": "Thuộc tính poster quy định đường dẫn hình ảnh hiển thị làm ảnh bìa khi video đang tải hoặc chưa phát."
  },
  {
    "id": "mg_p1_58",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Sự khác biệt quan trọng giữa phương thức GET và POST trong thẻ <form> là gì?",
    "options": [
      "GET gửi dữ liệu hiển thị trên thanh URL; POST gửi dữ liệu ngầm trong phần thân HTTP request",
      "GET chỉ dùng cho hình ảnh; POST chỉ dùng cho văn bản",
      "GET bảo mật hơn phương thức POST khi gửi mật khẩu",
      "GET và POST hoàn toàn giống nhau, không có khác biệt"
    ],
    "answer": 0,
    "explanation": "GET đính dữ liệu vào thanh URL (query string); POST gói dữ liệu vào phần thân bản tin, bảo mật hơn và gửi được khối lượng dữ liệu lớn."
  },
  {
    "id": "mg_p1_61",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong bảng HTML, để thêm một dòng chú thích tiêu đề cho toàn bộ bảng, thẻ nào sau đây được đặt ngay sau thẻ mở <table>?",
    "options": [
      "<title>",
      "<caption>",
      "<header>",
      "<summary>"
    ],
    "answer": 1,
    "explanation": "Thẻ <caption> dùng để tạo tiêu đề mô tả ngắn gọn cho bảng dữ liệu."
  },
  {
    "id": "mg_p1_64",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi áp dụng định dạng cho cùng một phần tử, thứ tự ưu tiên áp dụng (từ cao nhất đến thấp nhất) của 3 loại CSS là:",
    "options": [
      "Inline CSS (Nội tuyến) > Internal CSS (Nội bộ) > External CSS (Ngoài)",
      "External CSS > Internal CSS > Inline CSS",
      "Internal CSS > External CSS > Inline CSS",
      "Cả 3 loại có độ ưu tiên hoàn toàn bằng nhau"
    ],
    "answer": 0,
    "explanation": "Inline CSS gắn trực tiếp ở thuộc tính style có mức độ ưu tiên ghi đè cao nhất, tiếp theo là Internal CSS và cuối cùng là External CSS."
  },
  {
    "id": "mg_p1_67",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <table> quy định độ dày đường viền hiển thị bao quanh bảng?",
    "options": [
      "border",
      "outline",
      "stroke",
      "width"
    ],
    "answer": 0,
    "explanation": "Thuộc tính border='1' quy định bảng hiển thị đường viền dày 1 pixel."
  },
  {
    "id": "mg_p1_71",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Phú Yên",
    "province": "Sở GD&ĐT Phú Yên",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong CSS, thuộc tính text-align nhận những giá trị căn lề hợp lệ nào sau đây?",
    "options": [
      "left, right, center, justify",
      "top, bottom, middle, center",
      "start, end, middle, inside",
      "bold, italic, normal, underline"
    ],
    "answer": 0,
    "explanation": "text-align hỗ trợ các giá trị căn lề văn bản: left (trái), right (phải), center (giữa) và justify (căn đều hai bên)."
  },
  {
    "id": "mg_p1_75",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi chèn âm thanh bằng thẻ <audio>, thuộc tính nào cho phép tệp nhạc bắt đầu phát ngay lập tức khi trang web được tải?",
    "options": [
      "play",
      "start",
      "autoplay",
      "controls"
    ],
    "answer": 2,
    "explanation": "Thuộc tính autoplay quy định tệp âm thanh tự động phát ngay khi nạp trang."
  },
  {
    "id": "mg_p1_55",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây thiết lập đường viền tròn hoàn toàn (hình tròn) cho một bức ảnh vuông có kích thước 100px x 100px?",
    "options": [
      "img {border-radius: 50%;}",
      "img {border-circle: true;}",
      "img {border-style: round;}",
      "img {border-corner: 100%;}"
    ],
    "answer": 0,
    "explanation": "border-radius: 50% bo tròn đều các góc tạo thành hình tròn hoàn hảo cho ảnh hình vuông."
  },
  {
    "id": "mg_p1_59",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi muốn áp dụng kiểu chữ màu xanh lam và gạch chân cho tất cả các thẻ liên kết <a> khi rê chuột vào (hover), cú pháp CSS nào là chính xác?",
    "options": [
      "a:hover {color: blue; text-decoration: underline;}",
      "a:active {color: blue; text-style: underline;}",
      "a.hover {color: blue; font-underline: true;}",
      "a#hover {text-color: blue; decoration: line;}"
    ],
    "answer": 0,
    "explanation": "Lớp giả :hover kết hợp với text-decoration: underline tạo hiệu ứng đổi màu và gạch chân khi rê chuột."
  },
  {
    "id": "mg_p1_62",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "topic": "Siêu liên kết",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Từ trang web 'sanpham/chitiet.html', để tạo liên kết quay trở về trang 'gioithieu.html' nằm trong thư mục gốc của website, đường dẫn tương đối đúng là:",
    "options": [
      "<a href='../gioithieu.html'>Giới thiệu</a>",
      "<a href='gioithieu.html'>Giới thiệu</a>",
      "<a href='./gioithieu.html'>Giới thiệu</a>",
      "<a href='sanpham/gioithieu.html'>Giới thiệu</a>"
    ],
    "answer": 0,
    "explanation": "Từ thư mục con 'sanpham', dùng '../' để lùi ra một cấp thư mục cha (thư mục gốc) rồi liên kết đến 'gioithieu.html'."
  },
  {
    "id": "mg_p1_65",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong form nhập mật khẩu, muốn đặt số ký tự tối thiểu là 8 ký tự để bảo mật, ta sử dụng thuộc tính nào sau đây của thẻ <input>?",
    "options": [
      "minlength='8'",
      "min='8'",
      "length='8'",
      "size='8'"
    ],
    "answer": 0,
    "explanation": "minlength quy định độ dài tối thiểu của chuỗi văn bản nhập vào ở các thẻ input dạng text, password."
  },
  {
    "id": "mg_p1_68",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi chèn bức ảnh 'banner.png', muốn giới hạn chiều rộng là 600px và chiều cao tự động co giãn theo tỷ lệ ảnh gốc, cú pháp nào đúng?",
    "options": [
      "<img src='banner.png' style='width: 600px; height: auto;'>",
      "<img src='banner.png' width='600px' height='fixed'>",
      "<img link='banner.png' size='600, auto'>",
      "<img url='banner.png' max-width='600'>"
    ],
    "answer": 0,
    "explanation": "Đặt width: 600px và height: auto giúp ảnh giữ nguyên tỷ lệ khung hình (aspect ratio) chuẩn mà không bị méo."
  },
  {
    "id": "mg_p1_72",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Phú Yên",
    "province": "Sở GD&ĐT Phú Yên",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho bảng HTML gồm 3 hàng, mỗi hàng có 4 ô <td>. Khi muốn gộp 2 ô ở hàng thứ nhất thành 1 ô, ta phải thêm colspan='2' vào một ô và đồng thời làm gì?",
    "options": [
      "Xóa bớt 1 ô <td> trong hàng thứ nhất đó",
      "Thêm 1 ô <td> nữa vào hàng thứ hai",
      "Xóa toàn bộ hàng thứ nhất",
      "Không cần thay đổi số lượng ô <td>"
    ],
    "answer": 0,
    "explanation": "Vì ô có colspan='2' chiếm độ rộng của 2 ô nên phải xóa bớt 1 ô <td> thừa trên hàng đó để bảng không bị tràn cấu trúc."
  },
  {
    "id": "mg_p1_76",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng thẻ <div> có độ rộng 300px, màu nền xám (#eee), đường viền nét liền màu đen 1px và lề trên 20px?",
    "options": [
      "div {width: 300px; background-color: #eee; border: 1px solid black; margin-top: 20px;}",
      "div {size: 300px; bg: #eee; border: 1px black; padding-top: 20px;}",
      "div {width: 300px; color: #eee; border-line: black 1px; top: 20px;}",
      "div {max-width: 300px; background: #eee; outline: 1px; margin: 20px;}"
    ],
    "answer": 0,
    "explanation": "Cú pháp CSS chuẩn kết hợp width, background-color, border: 1px solid black và margin-top: 20px."
  }
],
  part2: [
  {
    "id": "mg_p2_04",
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Bắc Ninh",
    "title": "Câu 4: Về thiết kế biểu mẫu (Form) thu thập thông tin",
    "context": "Đoàn trường thiết kế biểu mẫu trực tuyến để tiếp nhận đăng ký tham gia Câu lạc bộ STEM. Biểu mẫu gồm các trường: Họ và tên, Ngày sinh, Lớp học, Giới tính, Lĩnh vực quan tâm và Nút nộp phiếu. Dựa vào kiến thức về Form trong HTML, hãy xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_04_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Toàn bộ các trường dữ liệu và nút bấm gửi thông tin phải được đặt bên trong cặp thẻ <form> ... </form>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <form> là phần tử bao bọc toàn bộ thành phần của biểu mẫu thu thập dữ liệu."
      },
      {
        "id": "mg_p2_04_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Tại mục chọn Giới tính (Nam / Nữ) chỉ được phép chọn duy nhất 1 mục, ta phải thiết lập thuộc tính type='checkbox' cho các ô lựa chọn.",
        "answer": false,
        "explanation": "Sai. Chọn duy nhất 1 mục trong nhóm bắt buộc dùng type='radio' và có cùng thuộc tính name. Checkbox dùng để chọn nhiều mục."
      },
      {
        "id": "mg_p2_04_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để hỗ trợ học sinh chạm vào nhãn chữ 'Nam' hoặc 'Nữ' mà nút tròn radio tương ứng vẫn tự động được tích chọn, ta sử dụng thẻ <label for='id_input'> gắn với id của ô input đó.",
        "answer": true,
        "explanation": "Đúng. Thẻ <label for> liên kết với thuộc tính id của phần tử input giúp mở rộng vùng nhấp chuột thuận tiện."
      },
      {
        "id": "mg_p2_04_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi người dùng nhấn nút có khai báo <input type='reset' value='Nộp hồ sơ'>, toàn bộ thông tin đăng ký của học sinh sẽ được đóng gói và gửi về máy chủ.",
        "answer": false,
        "explanation": "Sai. type='reset' chỉ xóa trắng dữ liệu đã nhập về mặc định. Để gửi dữ liệu về máy chủ, bắt buộc phải dùng type='submit'."
      }
    ],
    "examId": "exam_mock_grad_1",
    "examNum": 1
  },
  {
    "id": "mg_p2_05",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Giang",
    "province": "Sở GD&ĐT Bắc Giang",
    "title": "Câu 1: Về việc nhúng video và âm thanh vào website câu lạc bộ",
    "context": "Nhóm học sinh xây dựng website cho CLB Âm nhạc trường học. Trang web có phát bài hát truyền thống bằng thẻ <audio> và video giới thiệu bằng thẻ <video>. Hãy xác định tính Đúng/Sai của các nhận định sau:",
    "items": [
      {
        "id": "mg_p2_05_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <audio> và <video> đều sử dụng thuộc tính src để cung cấp đường dẫn đến tệp đa phương tiện.",
        "answer": true,
        "explanation": "Đúng. Cả hai thẻ đa phương tiện đều dùng thuộc tính src để định vị tệp nguồn."
      },
      {
        "id": "mg_p2_05_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Nếu không có thuộc tính 'controls', trình duyệt vẫn hiển thị đầy đủ nút Phát/Tạm dừng và thanh âm lượng cho người xem tương tác.",
        "answer": false,
        "explanation": "Sai. Nếu thiếu 'controls', trình duyệt sẽ ẩn hoàn toàn thanh điều khiển giao diện."
      },
      {
        "id": "mg_p2_05_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính 'loop' cho phép tệp nhạc hoặc video tự động lặp lại liên tục sau khi phát hết.",
        "answer": true,
        "explanation": "Đúng. Thuộc tính loop có chức năng lặp vô hạn nội dung đa phương tiện."
      },
      {
        "id": "mg_p2_05_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để tuân thủ chính sách Autoplay Policy của các trình duyệt hiện đại (như Chrome, Edge), khi muốn video tự động chạy ngay khi tải trang, bắt buộc phải kết hợp cả hai thuộc tính autoplay và muted.",
        "answer": true,
        "explanation": "Đúng. Trình duyệt chỉ cho phép autoplay nếu video đã được tắt tiếng (muted) để tránh làm phiền người dùng."
      }
    ]
  },
  {
    "id": "mg_p2_06",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Thái Nguyên",
    "province": "Sở GD&ĐT Thái Nguyên",
    "title": "Câu 2: Về thiết kế biểu mẫu khảo sát ý kiến trực tuyến",
    "context": "Chi đoàn trường THPT tạo một form khảo sát chọn địa điểm dã ngoại với các trường thông tin: Họ tên, Lớp, Địa điểm đề xuất (chỉ chọn 1 trong 3 nơi), Góp ý thêm và Nút gửi. Xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_06_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Toàn bộ các ô nhập dữ liệu khảo sát và nút bấm gửi biểu mẫu bắt buộc phải nằm bên trong cặp thẻ <form> ... </form>.",
        "answer": true,
        "explanation": "Đúng. Cặp thẻ <form> bao bọc các thành phần nhập liệu của biểu mẫu."
      },
      {
        "id": "mg_p2_06_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để người dùng chỉ được phép chọn duy nhất 1 địa điểm trong 3 địa điểm đề xuất, ta sử dụng 3 thẻ <input type='radio'> có cùng giá trị của thuộc tính name.",
        "answer": true,
        "explanation": "Đúng. Các nút radio có cùng thuộc tính name sẽ tạo thành một nhóm chọn duy nhất 1 phương án."
      },
      {
        "id": "mg_p2_06_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để nhập đoạn ý kiến 'Góp ý thêm' có độ dài nhiều dòng, thẻ <input type='text'> là phần tử tối ưu nhất.",
        "answer": false,
        "explanation": "Sai. <input type='text'> chỉ nhập 1 dòng ngắn. Để nhập văn bản nhiều dòng cần dùng <textarea>."
      },
      {
        "id": "mg_p2_06_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi người dùng nhấn vào nút <button type='submit'>, dữ liệu trên form sẽ được gửi đến URL chỉ định ở thuộc tính action của thẻ <form> theo phương thức quy định ở method.",
        "answer": true,
        "explanation": "Đúng. Nút type='submit' kích hoạt việc đóng gói và chuyển dữ liệu form đến máy chủ chỉ định."
      }
    ]
  },
  {
    "id": "mg_p2_09",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thanh Hóa",
    "province": "Sở GD&ĐT Thanh Hóa",
    "title": "Câu 1: Về xây dựng website giới thiệu di sản văn hóa Lam Kinh",
    "context": "Nhóm học sinh xây dựng website 'Di sản Lam Kinh'. Website gồm trang chủ index.html, thư mục 'css/' chứa style.css, thư mục 'img/' chứa hình ảnh và thư mục 'video/' chứa clip giới thiệu. Xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_09_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Tệp hình ảnh và tệp video cần được đặt đúng thư mục và gọi bằng đường dẫn tương đối để trang web hiển thị ổn định khi chuyển thư mục.",
        "answer": true,
        "explanation": "Đúng. Đường dẫn tương đối giúp website hoạt động linh hoạt khi chuyển đổi máy tính."
      },
      {
        "id": "mg_p2_09_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để liên kết tệp style.css từ trang index.html, cú pháp đúng là <link rel='stylesheet' href='css/style.css'>.",
        "answer": true,
        "explanation": "Đúng. Tệp CSS nằm trong thư mục con 'css/' nên đường dẫn tương đối là 'css/style.css'."
      },
      {
        "id": "mg_p2_09_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính alt='Ảnh bia Vĩnh Lăng' trong thẻ <img> sẽ hiển thị nội dung video giới thiệu nếu người dùng không có kết nối internet.",
        "answer": false,
        "explanation": "Sai. alt là thuộc tính hiển thị văn bản thay thế khi hình ảnh bị lỗi, không liên quan đến video."
      },
      {
        "id": "mg_p2_09_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để tạo nút bấm 'Xem video' mở clip trong tab mới, cú pháp phù hợp là <a href='video/gioithieu.mp4' target='_blank'>Xem video</a>.",
        "answer": true,
        "explanation": "Đúng. target='_blank' mở tài nguyên đích trong tab hoặc cửa sổ mới."
      }
    ]
  }
]
};

const COMPREHENSIVE_TEST_GRAD_7 = {
  id: "exam_mock_grad_7",
  code: "THI-THU-07",
  num: 7,
  title: "Đề thi thử Tốt nghiệp THPT Số 07",
  desc: "Tuyển chọn ngẫu nhiên 28 câu hỏi (24 câu Phần I + 4 câu Phần II) từ ngân hàng đề thi thử các Sở GD&ĐT.",
  sources: "Tuyển chọn từ hơn 40 Sở GD&ĐT trên toàn quốc",
  timeMinutes: 45,
  matrix: GRAD_MATRIX_STANDARD_28,
  part1: [
  {
    "id": "mg_p1_73",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Trong tài liệu HTML, cặp thẻ nào sau đây chứa toàn bộ cấu trúc mã nguồn của trang web?",
    "options": [
      "<web> </web>",
      "<html> </html>",
      "<body> </body>",
      "<head> </head>"
    ],
    "answer": 1,
    "explanation": "Thẻ <html> là phần tử gốc (root element) bao bọc toàn bộ mã nguồn của tài liệu HTML."
  },
  {
    "id": "mg_p1_74",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị chỉ số dưới (như số 2 trong công thức hóa học H₂O)?",
    "options": [
      "<sup>",
      "<sub>",
      "<down>",
      "<small>"
    ],
    "answer": 1,
    "explanation": "Thẻ <sub> (Subscript) định dạng chỉ số dưới (H<sub>2</sub>O); thẻ <sup> (Superscript) định dạng số mũ chỉ số trên."
  },
  {
    "id": "mg_p1_77",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Biểu mẫu (Form)",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ <label for='id_input'> trong biểu mẫu HTML có tác dụng gì đối với trải nghiệm người dùng?",
    "options": [
      "Gắn nhãn văn bản với trường nhập liệu, giúp nhấp vào chữ vẫn kích hoạt được ô input",
      "Đổi màu chữ của ô nhập liệu sang màu xanh",
      "Bắt buộc người dùng phải nhập đúng định dạng số",
      "Xóa trắng dữ liệu đã nhập trong form"
    ],
    "answer": 0,
    "explanation": "Thuộc tính for của thẻ <label> liên kết với id của input giúp mở rộng vùng nhấp chuột cho người dùng."
  },
  {
    "id": "mg_p1_80",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Cặp thẻ nào sau đây được dùng để định nghĩa toàn bộ khối bảng dữ liệu trong HTML?",
    "options": [
      "<grid> </grid>",
      "<table> </table>",
      "<tab> </tab>",
      "<board> </board>"
    ],
    "answer": 1,
    "explanation": "Thẻ <table> dùng để khởi tạo một bảng dữ liệu trong HTML."
  },
  {
    "id": "mg_p1_81",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Định dạng CSS",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thuộc tính nào trong CSS được dùng để thiết lập khoảng cách lề bên ngoài (khoảng cách giữa các khối phần tử với nhau)?",
    "options": [
      "padding",
      "spacing",
      "margin",
      "border"
    ],
    "answer": 2,
    "explanation": "margin quy định khoảng cách lề bên ngoài đường viền của phần tử hộp."
  },
  {
    "id": "mg_p1_84",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Các thẻ như <img>, <br>, <hr>, <input> được xếp vào nhóm thẻ nào sau đây trong HTML?",
    "options": [
      "Thẻ đôi (phải có thẻ đóng)",
      "Thẻ đơn (thẻ rỗng / void elements)",
      "Thẻ khối văn bản",
      "Thẻ bảng"
    ],
    "answer": 1,
    "explanation": "Thẻ đơn (void elements) là các thẻ tự đóng, không có cặp thẻ đóng riêng biệt và không chứa phần tử con bên trong."
  },
  {
    "id": "mg_p1_87",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Vĩnh Long",
    "province": "Sở GD&ĐT Vĩnh Long",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị một đoạn văn bản (Paragraph)?",
    "options": [
      "<para>",
      "<text>",
      "<p>",
      "<pg>"
    ],
    "answer": 2,
    "explanation": "Thẻ <p> (Paragraph) dùng để định nghĩa một đoạn văn bản trong HTML."
  },
  {
    "id": "mg_p1_90",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị văn bản có đường gạch ngang ở giữa (gạch xóa văn bản cũ)?",
    "options": [
      "<s> (hoặc <del>)",
      "<u>",
      "<line>",
      "<strike-bold>"
    ],
    "answer": 0,
    "explanation": "Thẻ <s> hoặc <del> (Deleted text) dùng để hiển thị chữ có đường gạch ngang ở giữa."
  },
  {
    "id": "mg_p1_93",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được dùng để tạo một danh sách có thứ tự (được đánh số tự động 1, 2, 3...)?",
    "options": [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>"
    ],
    "answer": 1,
    "explanation": "<ol> (Ordered List) tạo danh sách có thứ tự đánh số tự động."
  },
  {
    "id": "mg_p1_94",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Để ghi chú một dòng thông tin trong mã nguồn HTML mà trình duyệt bỏ qua không hiển thị ra màn hình, cú pháp đúng là:",
    "options": [
      "<!-- Đây là ghi chú -->",
      "// Đây là ghi chú",
      "/* Đây là ghi chú */",
      "# Đây là ghi chú"
    ],
    "answer": 0,
    "explanation": "Cú pháp chú thích (Comment) trong HTML bắt đầu bằng <!-- và kết thúc bằng -->."
  },
  {
    "id": "mg_p1_64",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi áp dụng định dạng cho cùng một phần tử, thứ tự ưu tiên áp dụng (từ cao nhất đến thấp nhất) của 3 loại CSS là:",
    "options": [
      "Inline CSS (Nội tuyến) > Internal CSS (Nội bộ) > External CSS (Ngoài)",
      "External CSS > Internal CSS > Inline CSS",
      "Internal CSS > External CSS > Inline CSS",
      "Cả 3 loại có độ ưu tiên hoàn toàn bằng nhau"
    ],
    "answer": 0,
    "explanation": "Inline CSS gắn trực tiếp ở thuộc tính style có mức độ ưu tiên ghi đè cao nhất, tiếp theo là Internal CSS và cuối cùng là External CSS."
  },
  {
    "id": "mg_p1_67",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Thuộc tính nào của thẻ <table> quy định độ dày đường viền hiển thị bao quanh bảng?",
    "options": [
      "border",
      "outline",
      "stroke",
      "width"
    ],
    "answer": 0,
    "explanation": "Thuộc tính border='1' quy định bảng hiển thị đường viền dày 1 pixel."
  },
  {
    "id": "mg_p1_71",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Phú Yên",
    "province": "Sở GD&ĐT Phú Yên",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong CSS, thuộc tính text-align nhận những giá trị căn lề hợp lệ nào sau đây?",
    "options": [
      "left, right, center, justify",
      "top, bottom, middle, center",
      "start, end, middle, inside",
      "bold, italic, normal, underline"
    ],
    "answer": 0,
    "explanation": "text-align hỗ trợ các giá trị căn lề văn bản: left (trái), right (phải), center (giữa) và justify (căn đều hai bên)."
  },
  {
    "id": "mg_p1_75",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi chèn âm thanh bằng thẻ <audio>, thuộc tính nào cho phép tệp nhạc bắt đầu phát ngay lập tức khi trang web được tải?",
    "options": [
      "play",
      "start",
      "autoplay",
      "controls"
    ],
    "answer": 2,
    "explanation": "Thuộc tính autoplay quy định tệp âm thanh tự động phát ngay khi nạp trang."
  },
  {
    "id": "mg_p1_78",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để tạo liên kết khi người dùng nhấp vào sẽ tự động mở ứng dụng gửi thư điện tử đến hòm thư 'cskh@web.com', cú pháp href đúng là:",
    "options": [
      "href='email:cskh@web.com'",
      "href='mailto:cskh@web.com'",
      "href='sendto:cskh@web.com'",
      "href='mail:cskh@web.com'"
    ],
    "answer": 1,
    "explanation": "Giao thức chuẩn trong HTML là mailto:diachi@email.com dùng để kích hoạt ứng dụng email mặc định."
  },
  {
    "id": "mg_p1_82",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Phát biểu nào sau đây thể hiện đúng nhất về đường dẫn tuyệt đối (Absolute URL) trong HTML?",
    "options": [
      "Chỉ bao gồm tên tệp tin nằm trong cùng thư mục",
      "Bao gồm đầy đủ giao thức (https://), tên miền và đường dẫn chi tiết đến máy chủ chứa tài nguyên",
      "Bắt đầu bằng ký hiệu ../ để lùi ra thư mục cha",
      "Chỉ sử dụng được khi không có mạng internet"
    ],
    "answer": 1,
    "explanation": "Đường dẫn tuyệt đối chứa đầy đủ giao thức, tên miền và địa chỉ chính xác của tài nguyên trên Internet."
  },
  {
    "id": "mg_p1_85",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong thẻ <input>, sự khác nhau cơ bản giữa thuộc tính 'name' và thuộc tính 'id' là gì?",
    "options": [
      "name dùng để gửi dữ liệu về máy chủ (Server); id dùng để định danh duy nhất cho CSS và JavaScript",
      "name chỉ dùng cho CSS; id chỉ dùng cho máy chủ",
      "name và id hoàn toàn giống nhau, có thể thay thế lẫn nhau ở mọi nơi",
      "name bắt buộc là số; id bắt buộc là chữ cái"
    ],
    "answer": 0,
    "explanation": "name đóng vai trò là khóa định danh dữ liệu gửi trong HTTP Request; id là định danh duy nhất trên trang để CSS/JS truy xuất."
  },
  {
    "id": "mg_p1_65",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Bình Định",
    "province": "Sở GD&ĐT Bình Định",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong form nhập mật khẩu, muốn đặt số ký tự tối thiểu là 8 ký tự để bảo mật, ta sử dụng thuộc tính nào sau đây của thẻ <input>?",
    "options": [
      "minlength='8'",
      "min='8'",
      "length='8'",
      "size='8'"
    ],
    "answer": 0,
    "explanation": "minlength quy định độ dài tối thiểu của chuỗi văn bản nhập vào ở các thẻ input dạng text, password."
  },
  {
    "id": "mg_p1_68",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Gia Lai",
    "province": "Sở GD&ĐT Gia Lai",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi chèn bức ảnh 'banner.png', muốn giới hạn chiều rộng là 600px và chiều cao tự động co giãn theo tỷ lệ ảnh gốc, cú pháp nào đúng?",
    "options": [
      "<img src='banner.png' style='width: 600px; height: auto;'>",
      "<img src='banner.png' width='600px' height='fixed'>",
      "<img link='banner.png' size='600, auto'>",
      "<img url='banner.png' max-width='600'>"
    ],
    "answer": 0,
    "explanation": "Đặt width: 600px và height: auto giúp ảnh giữ nguyên tỷ lệ khung hình (aspect ratio) chuẩn mà không bị méo."
  },
  {
    "id": "mg_p1_72",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Phú Yên",
    "province": "Sở GD&ĐT Phú Yên",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho bảng HTML gồm 3 hàng, mỗi hàng có 4 ô <td>. Khi muốn gộp 2 ô ở hàng thứ nhất thành 1 ô, ta phải thêm colspan='2' vào một ô và đồng thời làm gì?",
    "options": [
      "Xóa bớt 1 ô <td> trong hàng thứ nhất đó",
      "Thêm 1 ô <td> nữa vào hàng thứ hai",
      "Xóa toàn bộ hàng thứ nhất",
      "Không cần thay đổi số lượng ô <td>"
    ],
    "answer": 0,
    "explanation": "Vì ô có colspan='2' chiếm độ rộng của 2 ô nên phải xóa bớt 1 ô <td> thừa trên hàng đó để bảng không bị tràn cấu trúc."
  },
  {
    "id": "mg_p1_76",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng thẻ <div> có độ rộng 300px, màu nền xám (#eee), đường viền nét liền màu đen 1px và lề trên 20px?",
    "options": [
      "div {width: 300px; background-color: #eee; border: 1px solid black; margin-top: 20px;}",
      "div {size: 300px; bg: #eee; border: 1px black; padding-top: 20px;}",
      "div {width: 300px; color: #eee; border-line: black 1px; top: 20px;}",
      "div {max-width: 300px; background: #eee; outline: 1px; margin: 20px;}"
    ],
    "answer": 0,
    "explanation": "Cú pháp CSS chuẩn kết hợp width, background-color, border: 1px solid black và margin-top: 20px."
  },
  {
    "id": "mg_p1_79",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho đoạn mã: <input type='text' name='username' value='admin' readonly>. Người dùng có thể làm gì với ô nhập này trên giao diện?",
    "options": [
      "Xem và sao chép được giá trị 'admin', nhưng không thể xóa hoặc gõ sửa nội dung",
      "Tự do xóa và nhập nội dung mới bất kỳ",
      "Không nhìn thấy ô nhập này vì bị ẩn hoàn toàn",
      "Bắt buộc phải nhấp chuột 2 lần mới sửa được"
    ],
    "answer": 0,
    "explanation": "Thuộc tính readonly (chỉ đọc) cho phép người xem nhìn thấy và bôi đen sao chép giá trị nhưng ngăn không cho sửa đổi."
  },
  {
    "id": "mg_p1_83",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi nhúng mã video YouTube vào trang web bằng thẻ <iframe>, nếu video có kích thước chuẩn 560px x 315px, để tắt đường viền khung của iframe, thuộc tính hoặc style CSS nào đúng?",
    "options": [
      "style='border: none;' hoặc frameborder='0'",
      "border='false'",
      "frame='hide'",
      "no-border='true'"
    ],
    "answer": 0,
    "explanation": "Đặt thuộc tính HTML frameborder='0' hoặc thuộc tính CSS style='border: none;' giúp ẩn đường viền khung của iframe."
  },
  {
    "id": "mg_p1_86",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho đoạn mã bảng sau: <tr><td colspan='3'>A</td></tr><tr><td>B</td><td>C</td><td>D</td></tr>. Ô 'A' ở hàng thứ nhất sẽ hiển thị như thế nào?",
    "options": [
      "Chiếm độ rộng trải dài ngang bằng cả 3 cột bên dưới (B, C, D)",
      "Chiếm chiều cao bằng 3 hàng",
      "Bị lỗi cú pháp không hiển thị được",
      "Hiển thị nhỏ bằng 1/3 ô thông thường"
    ],
    "answer": 0,
    "explanation": "colspan='3' làm cho ô A mở rộng trải dài chiếm toàn bộ độ rộng của 3 cột B, C, D bên dưới."
  }
],
  part2: [
  {
    "id": "mg_p2_07",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Đà Nẵng",
    "province": "Sở GD&ĐT Đà Nẵng",
    "title": "Câu 3: Về cấu trúc danh sách và bảng biểu trên trang web",
    "context": "Một học sinh lập trình bảng thời khóa biểu và danh sách đồ dùng học tập bằng HTML. Hãy đánh giá tính Đúng/Sai của các khẳng định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_07_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Trong HTML, thẻ <th> dùng để tạo ô tiêu đề của bảng, văn bản bên trong mặc định được in đậm và căn giữa.",
        "answer": true,
        "explanation": "Đúng. <th> (Table Header) tự động in đậm và căn giữa nội dung."
      },
      {
        "id": "mg_p2_07_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Mỗi mục con bên trong danh sách <ul> hoặc <ol> đều được biểu diễn bằng thẻ <li>.",
        "answer": true,
        "explanation": "Đúng. Thẻ <li> (List Item) biểu diễn từng phần tử mục con trong danh sách."
      },
      {
        "id": "mg_p2_07_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Thuộc tính colspan='2' ở thẻ <td> làm cho ô đó mở rộng chiếm chiều cao của 2 hàng liên tiếp.",
        "answer": false,
        "explanation": "Sai. colspan='2' mở rộng chiều rộng của 2 cột; mở rộng 2 hàng là rowspan='2'."
      },
      {
        "id": "mg_p2_07_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Có thể lồng một bảng nhỏ <table> vào bên trong một ô <td> của một bảng khác để tạo bố cục giao diện phức tạp.",
        "answer": true,
        "explanation": "Đúng. HTML hỗ trợ bảng lồng nhau (Nested Tables) bên trong ô dữ liệu <td>."
      }
    ]
  },
  {
    "id": "mg_p2_08",
    "examId": "exam_mock_grad_2",
    "examNum": 2,
    "source": "Sở GD&ĐT Bắc Ninh",
    "province": "Sở GD&ĐT Bắc Ninh",
    "title": "Câu 4: Về nhúng tài nguyên và định dạng giao diện bằng CSS",
    "context": "Khi xây dựng trang web giới thiệu trường THPT, nhóm bạn Lan viết mã HTML và CSS. Hãy xem xét tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_08_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> cho phép nhúng một trang web bên ngoài hoặc bản đồ vào một khung nhìn độc lập trong trang web hiện tại.",
        "answer": true,
        "explanation": "Đúng. <iframe> tạo khung nội tuyến để hiển thị nội dung tài nguyên bên ngoài."
      },
      {
        "id": "mg_p2_08_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "CSS nội bộ (Internal CSS) được đặt bên trong cặp thẻ <style> ... </style> nằm ở phần <body> của tài liệu.",
        "answer": false,
        "explanation": "Sai. CSS nội bộ chuẩn W3C được đặt trong thẻ <style> nằm ở phần <head> của tài liệu."
      },
      {
        "id": "mg_p2_08_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Bộ chọn lớp (.classname) có thể áp dụng đồng thời cho nhiều phần tử khác nhau trên cùng một trang web.",
        "answer": true,
        "explanation": "Đúng. Class được dùng để tái sử dụng kiểu dáng cho nhiều phần tử khác nhau."
      },
      {
        "id": "mg_p2_08_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi khai báo đường viền trong CSS với cú pháp border: 2px dashed red;, đường viền sẽ có độ dày 2px, nét đứt khúc và màu đỏ.",
        "answer": true,
        "explanation": "Đúng. Cú pháp shorthand border quy định độ dày 2px, kiểu dashed (nét đứt) và màu đỏ."
      }
    ]
  },
  {
    "id": "mg_p2_10",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Hà Tĩnh",
    "province": "Sở GD&ĐT Hà Tĩnh",
    "title": "Câu 2: Về thiết kế biểu mẫu đóng góp ý kiến bạn đọc",
    "context": "Trang tin của trường tạo form đóng góp bài viết gồm các ô: Tiêu đề bài viết, Tên tác giả, Email, Chuyên mục (chọn 1 trong 4 mục), Tệp đính kèm và Nút gửi bài. Hãy xác định tính Đúng/Sai của các phát biểu sau:",
    "items": [
      {
        "id": "mg_p2_10_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Ô nhập Email người dùng có thể sử dụng thẻ <input type='email'> để trình duyệt tự động kiểm tra định dạng email hợp lệ (có ký tự @).",
        "answer": true,
        "explanation": "Đúng. type='email' có tính năng tự động kiểm tra cú pháp địa chỉ email chuẩn."
      },
      {
        "id": "mg_p2_10_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để chọn chuyên mục trong danh sách 4 mục gọn gàng, thẻ <select> kết hợp với 4 thẻ <option> là giải pháp phù hợp.",
        "answer": true,
        "explanation": "Đúng. <select> và <option> tạo danh sách chọn dạng thả xuống giúp tiết kiệm không gian trang web."
      },
      {
        "id": "mg_p2_10_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Phương thức method='GET' là lựa chọn bắt buộc khi form có chứa tệp tin đính kèm dung lượng lớn.",
        "answer": false,
        "explanation": "Sai. Gửi tệp đính kèm bắt buộc dùng method='POST' và enctype='multipart/form-data'."
      },
      {
        "id": "mg_p2_10_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Nếu nút nộp form được khai báo là <input type='button' value='Gửi bài'> mà không có mã JavaScript xử lý thì khi bấm nút dữ liệu sẽ không tự động được gửi đi.",
        "answer": true,
        "explanation": "Đúng. type='button' là nút bấm thông thường, không có hành vi tự động nộp form như type='submit'."
      }
    ]
  },
  {
    "id": "mg_p2_13",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "title": "Câu 1: Về thiết kế menu điều hướng và bảng giá dịch vụ",
    "context": "Nhóm bạn Nam thiết kế website kinh doanh đặc sản miền Tây gồm thanh điều hướng (Menu) và bảng bảng giá. Em hãy xác định tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_13_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thanh điều hướng (navigation bar) của website thường được xây dựng dựa trên cấu trúc danh sách không có thứ tự <ul> kết hợp các thẻ <li> và <a>.",
        "answer": true,
        "explanation": "Đúng. Cấu trúc ngữ nghĩa chuẩn để tạo thanh menu trong HTML là <ul><li><a>."
      },
      {
        "id": "mg_p2_13_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <caption> nếu có trong bảng dữ liệu thì bắt buộc phải đặt ở vị trí sau cùng của bảng, ngay trước thẻ đóng </table>.",
        "answer": false,
        "explanation": "Sai. Thẻ <caption> phải được đặt ngay sau thẻ mở <table>, trước các hàng <tr>."
      },
      {
        "id": "mg_p2_13_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Để hiển thị tiêu đề bảng được in đậm và căn giữa tự động, học sinh sử dụng thẻ <th> thay cho thẻ <td> ở hàng đầu tiên.",
        "answer": true,
        "explanation": "Đúng. Thẻ <th> (Table Header) tự động định dạng chữ đậm và căn giữa ô."
      },
      {
        "id": "mg_p2_13_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi bảng giá có 4 cột, ô 'Tổng cộng thanh toán' ở hàng cuối cùng muốn chiếm độ rộng của 3 cột đầu tiên thì thẻ đó viết là <td colspan='3'>Tổng cộng</td>.",
        "answer": true,
        "explanation": "Đúng. colspan='3' gộp 3 ô liên tiếp theo chiều ngang (cột)."
      }
    ]
  }
]
};

const COMPREHENSIVE_TEST_GRAD_8 = {
  id: "exam_mock_grad_8",
  code: "THI-THU-08",
  num: 8,
  title: "Đề thi thử Tốt nghiệp THPT Số 08",
  desc: "Tuyển chọn ngẫu nhiên 28 câu hỏi (24 câu Phần I + 4 câu Phần II) từ ngân hàng đề thi thử các Sở GD&ĐT.",
  sources: "Tuyển chọn từ hơn 40 Sở GD&ĐT trên toàn quốc",
  timeMinutes: 45,
  matrix: GRAD_MATRIX_STANDARD_28,
  part1: [
  {
    "id": "mg_p1_84",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Các thẻ như <img>, <br>, <hr>, <input> được xếp vào nhóm thẻ nào sau đây trong HTML?",
    "options": [
      "Thẻ đôi (phải có thẻ đóng)",
      "Thẻ đơn (thẻ rỗng / void elements)",
      "Thẻ khối văn bản",
      "Thẻ bảng"
    ],
    "answer": 1,
    "explanation": "Thẻ đơn (void elements) là các thẻ tự đóng, không có cặp thẻ đóng riêng biệt và không chứa phần tử con bên trong."
  },
  {
    "id": "mg_p1_87",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Vĩnh Long",
    "province": "Sở GD&ĐT Vĩnh Long",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị một đoạn văn bản (Paragraph)?",
    "options": [
      "<para>",
      "<text>",
      "<p>",
      "<pg>"
    ],
    "answer": 2,
    "explanation": "Thẻ <p> (Paragraph) dùng để định nghĩa một đoạn văn bản trong HTML."
  },
  {
    "id": "mg_p1_90",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "topic": "Định dạng văn bản",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được sử dụng để hiển thị văn bản có đường gạch ngang ở giữa (gạch xóa văn bản cũ)?",
    "options": [
      "<s> (hoặc <del>)",
      "<u>",
      "<line>",
      "<strike-bold>"
    ],
    "answer": 0,
    "explanation": "Thẻ <s> hoặc <del> (Deleted text) dùng để hiển thị chữ có đường gạch ngang ở giữa."
  },
  {
    "id": "mg_p1_93",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Thẻ nào trong HTML được dùng để tạo một danh sách có thứ tự (được đánh số tự động 1, 2, 3...)?",
    "options": [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>"
    ],
    "answer": 1,
    "explanation": "<ol> (Ordered List) tạo danh sách có thứ tự đánh số tự động."
  },
  {
    "id": "mg_p1_94",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "levelText": "Nhận biết",
    "question": "Để ghi chú một dòng thông tin trong mã nguồn HTML mà trình duyệt bỏ qua không hiển thị ra màn hình, cú pháp đúng là:",
    "options": [
      "<!-- Đây là ghi chú -->",
      "// Đây là ghi chú",
      "/* Đây là ghi chú */",
      "# Đây là ghi chú"
    ],
    "answer": 0,
    "explanation": "Cú pháp chú thích (Comment) trong HTML bắt đầu bằng <!-- và kết thúc bằng -->."
  },
  {
    "id": "mg_p1_01",
    "source": "Đề Tham Khảo Bộ GD&ĐT",
    "province": "Bộ GD&ĐT",
    "topic": "Định dạng văn bản & Thẻ HTML",
    "level": "NB",
    "question": "Cặp thẻ HTML nào sau đây được sử dụng để nhấn mạnh văn bản quan trọng bằng cách hiển thị chữ in đậm?",
    "options": [
      "<important> </important>",
      "<strong> </strong>",
      "<mark> </mark>",
      "<em> </em>"
    ],
    "answer": 1,
    "explanation": "Trong chuẩn HTML5, thẻ <strong> được sử dụng để xác định văn bản có mức độ quan trọng cao và trình duyệt mặc định hiển thị in đậm.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_03",
    "source": "Đề Tham Khảo Bộ GD&ĐT",
    "province": "Bộ GD&ĐT",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Phần mềm nào sau đây thường được sử dụng phổ biến và thuận tiện nhất để lập trình, soạn thảo mã nguồn HTML?",
    "options": [
      "Microsoft Word",
      "Adobe Photoshop",
      "Visual Studio Code (hoặc Notepad++)",
      "Google Chrome"
    ],
    "answer": 2,
    "explanation": "Visual Studio Code, Notepad++, Sublime Text là các trình biên soạn mã nguồn (code editor) chuyên dụng cho lập trình web.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_05",
    "source": "Sở GD&ĐT Hà Nội",
    "province": "Hà Nội",
    "topic": "Định dạng CSS",
    "level": "NB",
    "question": "Trong CSS, thuộc tính nào sau đây được sử dụng để thiết lập màu sắc của chữ (văn bản)?",
    "options": [
      "font-color",
      "color",
      "text-color",
      "background-color"
    ],
    "answer": 1,
    "explanation": "Trong CSS, thuộc tính 'color' quy định màu chữ, còn 'background-color' quy định màu nền.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_07",
    "source": "Sở GD&ĐT Nam Định",
    "province": "Nam Định",
    "topic": "Đa phương tiện & Iframe",
    "level": "NB",
    "question": "Thuộc tính nào sau đây của thẻ <img> trong HTML xác định văn bản thay thế hiển thị khi hình ảnh không tải được?",
    "options": [
      "alt",
      "title",
      "text",
      "error"
    ],
    "answer": 0,
    "explanation": "alt (Alternative text) cung cấp văn bản thay thế khi hình ảnh bị lỗi hoặc cho người khiếm thị dùng trình đọc màn hình.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_10",
    "source": "Sở GD&ĐT Nghệ An",
    "province": "Nghệ An",
    "topic": "Cấu trúc HTML",
    "level": "NB",
    "question": "Trong tài liệu HTML, cặp thẻ nào sau đây được sử dụng để bao quanh toàn bộ nội dung chính của trang web mà người dùng nhìn thấy trên màn hình trình duyệt?",
    "options": [
      "<head> ... </head>",
      "<title> ... </title>",
      "<body> ... </body>",
      "<html> ... </html>"
    ],
    "answer": 2,
    "explanation": "Phần tử <body> chứa tất cả các phần tử giao diện hiển thị cho người dùng.",
    "examId": "exam_mock_grad_1",
    "examNum": 1,
    "levelText": "Nhận biết"
  },
  {
    "id": "mg_p1_75",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi chèn âm thanh bằng thẻ <audio>, thuộc tính nào cho phép tệp nhạc bắt đầu phát ngay lập tức khi trang web được tải?",
    "options": [
      "play",
      "start",
      "autoplay",
      "controls"
    ],
    "answer": 2,
    "explanation": "Thuộc tính autoplay quy định tệp âm thanh tự động phát ngay khi nạp trang."
  },
  {
    "id": "mg_p1_78",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để tạo liên kết khi người dùng nhấp vào sẽ tự động mở ứng dụng gửi thư điện tử đến hòm thư 'cskh@web.com', cú pháp href đúng là:",
    "options": [
      "href='email:cskh@web.com'",
      "href='mailto:cskh@web.com'",
      "href='sendto:cskh@web.com'",
      "href='mail:cskh@web.com'"
    ],
    "answer": 1,
    "explanation": "Giao thức chuẩn trong HTML là mailto:diachi@email.com dùng để kích hoạt ứng dụng email mặc định."
  },
  {
    "id": "mg_p1_82",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Phát biểu nào sau đây thể hiện đúng nhất về đường dẫn tuyệt đối (Absolute URL) trong HTML?",
    "options": [
      "Chỉ bao gồm tên tệp tin nằm trong cùng thư mục",
      "Bao gồm đầy đủ giao thức (https://), tên miền và đường dẫn chi tiết đến máy chủ chứa tài nguyên",
      "Bắt đầu bằng ký hiệu ../ để lùi ra thư mục cha",
      "Chỉ sử dụng được khi không có mạng internet"
    ],
    "answer": 1,
    "explanation": "Đường dẫn tuyệt đối chứa đầy đủ giao thức, tên miền và địa chỉ chính xác của tài nguyên trên Internet."
  },
  {
    "id": "mg_p1_85",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Biểu mẫu (Form)",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Trong thẻ <input>, sự khác nhau cơ bản giữa thuộc tính 'name' và thuộc tính 'id' là gì?",
    "options": [
      "name dùng để gửi dữ liệu về máy chủ (Server); id dùng để định danh duy nhất cho CSS và JavaScript",
      "name chỉ dùng cho CSS; id chỉ dùng cho máy chủ",
      "name và id hoàn toàn giống nhau, có thể thay thế lẫn nhau ở mọi nơi",
      "name bắt buộc là số; id bắt buộc là chữ cái"
    ],
    "answer": 0,
    "explanation": "name đóng vai trò là khóa định danh dữ liệu gửi trong HTTP Request; id là định danh duy nhất trên trang để CSS/JS truy xuất."
  },
  {
    "id": "mg_p1_88",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Vĩnh Long",
    "province": "Sở GD&ĐT Vĩnh Long",
    "topic": "Định dạng CSS",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Để bỏ dấu gạch chân mặc định của các thẻ liên kết <a> trên toàn bộ trang web, quy tắc CSS nào là đúng?",
    "options": [
      "a {text-decoration: none;}",
      "a {text-underline: false;}",
      "a {decoration: no-line;}",
      "a {font-style: clean;}"
    ],
    "answer": 0,
    "explanation": "text-decoration: none; là thuộc tính chuẩn để loại bỏ dấu gạch chân mặc định của thẻ liên kết."
  },
  {
    "id": "mg_p1_91",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "topic": "Đa phương tiện & Iframe",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi chèn tệp âm thanh bài giảng dài 45 phút vào trang web, thuộc tính nào sau đây của thẻ <audio> KHÔNG NÊN đặt để tránh gây khó chịu cho người nghe?",
    "options": [
      "controls",
      "autoplay",
      "src",
      "preload"
    ],
    "answer": 1,
    "explanation": "Không nên đặt autoplay cho tệp âm thanh dài vì có thể phát tiếng bất ngờ làm giật mình và tốn băng thông của người dùng."
  },
  {
    "id": "mg_p1_95",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Siêu liên kết",
    "level": "TH",
    "levelText": "Thông hiểu",
    "question": "Khi người dùng nhấn vào một bức ảnh có mã sau: <a href='https://moet.gov.vn'><img src='logo.png' alt='Bộ GD'></a>, trình duyệt sẽ thực hiện điều gì?",
    "options": [
      "Chuyển hướng người dùng đến trang web của Bộ Giáo dục & Đào tạo (https://moet.gov.vn)",
      "Chỉ hiển thị bức ảnh mà không có liên kết nào",
      "Tự động tải bức ảnh logo.png về máy tính",
      "Báo lỗi cú pháp HTML"
    ],
    "answer": 0,
    "explanation": "Thẻ <a> bọc quanh thẻ <img> biến hình ảnh thành một nút liên kết chuyển hướng đến URL chỉ định ở href."
  },
  {
    "id": "mg_p1_76",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT TP. Hồ Chí Minh",
    "province": "Sở GD&ĐT TP. Hồ Chí Minh",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng thẻ <div> có độ rộng 300px, màu nền xám (#eee), đường viền nét liền màu đen 1px và lề trên 20px?",
    "options": [
      "div {width: 300px; background-color: #eee; border: 1px solid black; margin-top: 20px;}",
      "div {size: 300px; bg: #eee; border: 1px black; padding-top: 20px;}",
      "div {width: 300px; color: #eee; border-line: black 1px; top: 20px;}",
      "div {max-width: 300px; background: #eee; outline: 1px; margin: 20px;}"
    ],
    "answer": 0,
    "explanation": "Cú pháp CSS chuẩn kết hợp width, background-color, border: 1px solid black và margin-top: 20px."
  },
  {
    "id": "mg_p1_79",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho đoạn mã: <input type='text' name='username' value='admin' readonly>. Người dùng có thể làm gì với ô nhập này trên giao diện?",
    "options": [
      "Xem và sao chép được giá trị 'admin', nhưng không thể xóa hoặc gõ sửa nội dung",
      "Tự do xóa và nhập nội dung mới bất kỳ",
      "Không nhìn thấy ô nhập này vì bị ẩn hoàn toàn",
      "Bắt buộc phải nhấp chuột 2 lần mới sửa được"
    ],
    "answer": 0,
    "explanation": "Thuộc tính readonly (chỉ đọc) cho phép người xem nhìn thấy và bôi đen sao chép giá trị nhưng ngăn không cho sửa đổi."
  },
  {
    "id": "mg_p1_83",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "topic": "Đa phương tiện & Iframe",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi nhúng mã video YouTube vào trang web bằng thẻ <iframe>, nếu video có kích thước chuẩn 560px x 315px, để tắt đường viền khung của iframe, thuộc tính hoặc style CSS nào đúng?",
    "options": [
      "style='border: none;' hoặc frameborder='0'",
      "border='false'",
      "frame='hide'",
      "no-border='true'"
    ],
    "answer": 0,
    "explanation": "Đặt thuộc tính HTML frameborder='0' hoặc thuộc tính CSS style='border: none;' giúp ẩn đường viền khung của iframe."
  },
  {
    "id": "mg_p1_86",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bình Thuận",
    "province": "Sở GD&ĐT Bình Thuận",
    "topic": "Danh sách & Bảng dữ liệu",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Cho đoạn mã bảng sau: <tr><td colspan='3'>A</td></tr><tr><td>B</td><td>C</td><td>D</td></tr>. Ô 'A' ở hàng thứ nhất sẽ hiển thị như thế nào?",
    "options": [
      "Chiếm độ rộng trải dài ngang bằng cả 3 cột bên dưới (B, C, D)",
      "Chiếm chiều cao bằng 3 hàng",
      "Bị lỗi cú pháp không hiển thị được",
      "Hiển thị nhỏ bằng 1/3 ô thông thường"
    ],
    "answer": 0,
    "explanation": "colspan='3' làm cho ô A mở rộng trải dài chiếm toàn bộ độ rộng của 3 cột B, C, D bên dưới."
  },
  {
    "id": "mg_p1_89",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Vĩnh Long",
    "province": "Sở GD&ĐT Vĩnh Long",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Khi muốn khi mở trang web, con trỏ soạn thảo tự động nhảy ngay vào ô 'Tên đăng nhập' mà người dùng không cần lấy chuột bấm vào, ta dùng thuộc tính nào?",
    "options": [
      "focus",
      "autofocus",
      "cursor='active'",
      "selected"
    ],
    "answer": 1,
    "explanation": "Thuộc tính autofocus là thuộc tính boolean trong HTML5 giúp tự động đặt tiêu điểm (focus) vào ô nhập khi trang tải xong."
  },
  {
    "id": "mg_p1_92",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT An Giang",
    "province": "Sở GD&ĐT An Giang",
    "topic": "Định dạng CSS",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Đoạn mã CSS nào sau đây định dạng chữ in hoa toàn bộ (UPPERCASE) cho tất cả các tiêu đề <h1>?",
    "options": [
      "h1 {text-transform: uppercase;}",
      "h1 {font-case: upper;}",
      "h1 {text-style: capital;}",
      "h1 {text-upper: true;}"
    ],
    "answer": 0,
    "explanation": "text-transform: uppercase; là thuộc tính CSS chuyển đổi toàn bộ ký tự văn bản thành chữ hoa."
  },
  {
    "id": "mg_p1_96",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Lâm Đồng",
    "province": "Sở GD&ĐT Lâm Đồng",
    "topic": "Biểu mẫu (Form)",
    "level": "VD",
    "levelText": "Vận dụng",
    "question": "Trong một form đặt vé tàu hỏa, muốn tạo một nhóm chọn loại vé (Vé ngồi mềm / Vé giường nằm) sao cho người dùng chọn mục này thì mục kia tự bỏ chọn, hai thẻ <input type='radio'> bắt buộc phải thỏa mãn điều kiện gì?",
    "options": [
      "Phải có cùng giá trị của thuộc tính name",
      "Phải có cùng giá trị của thuộc tính id",
      "Phải có cùng giá trị của thuộc tính value",
      "Phải đặt cạnh nhau trên cùng một dòng"
    ],
    "answer": 0,
    "explanation": "Các nút type='radio' muốn hoạt động theo nhóm loại trừ lẫn nhau (chỉ chọn 1) bắt buộc phải có chung thuộc tính name."
  }
],
  part2: [
  {
    "id": "mg_p2_11",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Thừa Thiên Huế",
    "province": "Sở GD&ĐT Thừa Thiên Huế",
    "title": "Câu 3: Về cấu trúc bảng điểm và định dạng CSS cho bảng",
    "context": "Một học sinh lập trình bảng kết quả rèn luyện học tập có các cột: STT, Họ và tên, Điểm Toán, Điểm Văn, Điểm Tin và Xếp loại. Đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_11_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Trong bảng HTML, mỗi ô dữ liệu thông thường ở các hàng nội dung được đặt bên trong thẻ <td> ... </td>.",
        "answer": true,
        "explanation": "Đúng. <td> (Table Data) định nghĩa các ô dữ liệu thông thường trong bảng."
      },
      {
        "id": "mg_p2_11_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <tr> chỉ có thể chứa các thẻ con là <th> hoặc <td>, không thể chứa trực tiếp đoạn văn bản thô.",
        "answer": true,
        "explanation": "Đúng. Hàng bảng <tr> chỉ hợp lệ khi chứa các ô <th> hoặc <td>."
      },
      {
        "id": "mg_p2_11_c",
        "label": "c",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để định dạng bảng có đường viền nét liền màu xám dày 1px và các ô dính liền nhau (không bị hở khe viền đôi), ta dùng CSS: table, td, th {border: 1px solid gray; border-collapse: collapse;}.",
        "answer": true,
        "explanation": "Đúng. border-collapse: collapse giúp gộp các đường viền kép của bảng thành viền đơn liền mạch."
      },
      {
        "id": "mg_p2_11_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Thuộc tính rowspan='2' nếu được đặt ở ô tiêu đề 'STT' của hàng thứ nhất thì ở hàng thứ hai bắt buộc phải giữ nguyên ô <td> của cột STT đó.",
        "answer": false,
        "explanation": "Sai. Vì ô ở hàng 1 đã gộp chiếm hàng 2, nên ở hàng 2 không được viết ô <td> của cột đó nữa."
      }
    ]
  },
  {
    "id": "mg_p2_12",
    "examId": "exam_mock_grad_3",
    "examNum": 3,
    "source": "Sở GD&ĐT Quảng Nam",
    "province": "Sở GD&ĐT Quảng Nam",
    "title": "Câu 4: Về quy tắc kế thừa và bộ chọn trong CSS",
    "context": "Khi tìm hiểu về cách CSS định dạng trang web, nhóm học sinh đưa ra các nhận định kỹ thuật sau:",
    "items": [
      {
        "id": "mg_p2_12_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Bộ chọn thẻ (Element Selector) như p, h1, body áp dụng kiểu dáng cho toàn bộ các phần tử cùng tên trên trang web.",
        "answer": true,
        "explanation": "Đúng. Bộ chọn phần tử tác động lên tất cả các phần tử mang thẻ đó."
      },
      {
        "id": "mg_p2_12_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Các thuộc tính định dạng chữ như color, font-family, font-size khi được khai báo ở phần tử cha <body> sẽ tự động được kế thừa bởi các phần tử con bên trong.",
        "answer": true,
        "explanation": "Đúng. Tính kế thừa (Inheritance) trong CSS tự động truyền các thuộc tính kiểu chữ từ phần tử cha xuống phần tử con."
      },
      {
        "id": "mg_p2_12_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Một phần tử HTML chỉ có thể thuộc về tối đa một lớp class duy nhất.",
        "answer": false,
        "explanation": "Sai. Một phần tử HTML có thể chứa nhiều lớp class cách nhau bởi dấu cách, ví dụ: class='btn btn-primary active'."
      },
      {
        "id": "mg_p2_12_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Khi một phần tử vừa chịu tác động của bộ chọn ID (#menu {color: blue;}) vừa chịu tác động của bộ chọn Class (.nav {color: red;}), chữ của phần tử đó sẽ có màu xanh (blue).",
        "answer": true,
        "explanation": "Đúng. Bộ chọn ID có độ đặc hiệu (Specificity) cao hơn bộ chọn Class nên quy tắc màu xanh của ID sẽ thắng."
      }
    ]
  },
  {
    "id": "mg_p2_14",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Cần Thơ",
    "province": "Sở GD&ĐT Cần Thơ",
    "title": "Câu 2: Về tích hợp đa phương tiện và nhúng bản đồ du lịch",
    "context": "Nhóm học sinh xây dựng trang web du lịch Chợ nổi Cái Răng có chèn hình ảnh đặc sản, video giới thiệu và bản đồ chỉ đường Google Maps. Đánh giá tính Đúng/Sai của các câu sau:",
    "items": [
      {
        "id": "mg_p2_14_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <img> là thẻ đơn không có thẻ đóng riêng biệt, thông tin vị trí ảnh được cung cấp ở thuộc tính src.",
        "answer": true,
        "explanation": "Đúng. <img> là thẻ đơn tự đóng và dùng thuộc tính src để định vị ảnh."
      },
      {
        "id": "mg_p2_14_b",
        "label": "b",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Thẻ <iframe> chỉ có thể nhúng được video của YouTube chứ không thể nhúng được bản đồ Google Maps hay trang web khác.",
        "answer": false,
        "explanation": "Sai. <iframe> nhúng được bất kỳ tài nguyên web nào hỗ trợ nhúng (bản đồ, tài liệu, video, trang web khác)."
      },
      {
        "id": "mg_p2_14_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính poster trong thẻ <video> có tác dụng hiển thị một bức ảnh tĩnh đại diện trước khi người dùng bấm phát video.",
        "answer": true,
        "explanation": "Đúng. Thuộc tính poster cung cấp hình ảnh bìa (thumbnail) đại diện cho video."
      },
      {
        "id": "mg_p2_14_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để khung bản đồ số <iframe> co giãn linh hoạt vừa khít với mọi kích thước màn hình điện thoại di động của du khách, ta nên thiết lập thuộc tính style='width: 100%; border: 0;'.",
        "answer": true,
        "explanation": "Đúng. Đơn vị tương đối 100% giúp khung hình tự động co giãn theo chiều rộng màn hình thiết bị."
      }
    ]
  },
  {
    "id": "mg_p2_15",
    "examId": "exam_mock_grad_4",
    "examNum": 4,
    "source": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "province": "Sở GD&ĐT Bà Rịa - Vũng Tàu",
    "title": "Câu 3: Về biểu mẫu đặt phòng khách sạn trực tuyến",
    "context": "Một website khách sạn tại Vũng Tàu thiết kế form đặt phòng gồm: Họ tên, Số điện thoại, Ngày nhận phòng, Loại phòng (Đơn/Đôi/VIP) và Nút xác nhận. Xem xét tính Đúng/Sai của các khẳng định sau:",
    "items": [
      {
        "id": "mg_p2_15_a",
        "label": "a",
        "level": "NB",
        "levelText": "Nhận biết",
        "text": "Để người dùng chọn ngày nhận phòng trên lịch số trực quan, HTML5 cung cấp thẻ <input type='date'>.",
        "answer": true,
        "explanation": "Đúng. type='date' cung cấp bảng chọn ngày tháng năm lịch số trực quan."
      },
      {
        "id": "mg_p2_15_b",
        "label": "b",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Thuộc tính required đặt ở ô nhập 'Số điện thoại' sẽ bắt buộc người dùng phải điền thông tin trước khi form được gửi đi.",
        "answer": true,
        "explanation": "Đúng. required ngăn không cho gửi form nếu trường dữ liệu đó đang bị bỏ trống."
      },
      {
        "id": "mg_p2_15_c",
        "label": "c",
        "level": "TH",
        "levelText": "Thông hiểu",
        "text": "Khi người dùng chọn Loại phòng bằng thẻ <select>, nếu không có thuộc tính multiple thì người dùng có thể chọn đồng thời cả 3 loại phòng cùng lúc.",
        "answer": false,
        "explanation": "Sai. <select> mặc định chỉ chọn duy nhất 1 mục; muốn chọn nhiều mục phải có thêm thuộc tính multiple."
      },
      {
        "id": "mg_p2_15_d",
        "label": "d",
        "level": "VD",
        "levelText": "Vận dụng",
        "text": "Để đảm bảo các thông tin đặt phòng nhạy cảm (như số điện thoại, thông tin cá nhân) không bị lộ trên thanh địa chỉ URL, thẻ <form> bắt buộc phải thiết lập thuộc tính method='POST'.",
        "answer": true,
        "explanation": "Đúng. Phương thức POST giấu kín dữ liệu trong phần thân gói tin, bảo mật thông tin cá nhân của khách hàng."
      }
    ]
  }
]
};

// Tương thích ngược
const COMPREHENSIVE_TEST_GRADUATION = COMPREHENSIVE_TEST_GRAD_1;

// Bộ từ điển truy xuất nhanh các bài kiểm tra tổng hợp định kỳ & thi thử tốt nghiệp (8 đề)
const COMPREHENSIVE_EXAMS = {
  "exam_789": COMPREHENSIVE_TEST_789,
  "exam_101112": COMPREHENSIVE_TEST_101112,
  "exam_mock_graduation": COMPREHENSIVE_TEST_GRAD_1,
  "exam_mock_grad_1": COMPREHENSIVE_TEST_GRAD_1,
  "exam_mock_grad_2": COMPREHENSIVE_TEST_GRAD_2,
  "exam_mock_grad_3": COMPREHENSIVE_TEST_GRAD_3,
  "exam_mock_grad_4": COMPREHENSIVE_TEST_GRAD_4,
  "exam_mock_grad_5": COMPREHENSIVE_TEST_GRAD_5,
  "exam_mock_grad_6": COMPREHENSIVE_TEST_GRAD_6,
  "exam_mock_grad_7": COMPREHENSIVE_TEST_GRAD_7,
  "exam_mock_grad_8": COMPREHENSIVE_TEST_GRAD_8
};


const INITIAL_STUDENTS = [
  {
    "username": "hs_12a1_01",
    "password": "123",
    "fullname": "Huỳnh Ngọc Chí An",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_02",
    "password": "123",
    "fullname": "Nguyễn Võ Duy An",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_03",
    "password": "123",
    "fullname": "Đoàn Việt Anh",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_04",
    "password": "123",
    "fullname": "Phạm Nguyễn Phương Anh",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_05",
    "password": "123",
    "fullname": "Võ Lê Lan Anh",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_06",
    "password": "123",
    "fullname": "Mai Như Đăng Duy",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_07",
    "password": "123",
    "fullname": "Nguyễn Hoài Duy",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_08",
    "password": "123",
    "fullname": "Mai Khánh Đông",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_09",
    "password": "123",
    "fullname": "Trần Đông",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_10",
    "password": "123",
    "fullname": "Lê Bảo Hân",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_11",
    "password": "123",
    "fullname": "Nguyễn Thị Ngọc Hân",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_12",
    "password": "123",
    "fullname": "Lã Thị Thanh Hoa",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_13",
    "password": "123",
    "fullname": "Trần Huy Hoàng",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_14",
    "password": "123",
    "fullname": "Nguyễn Minh Huy",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_15",
    "password": "123",
    "fullname": "Nguyễn Thị Ngọc Hương",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_16",
    "password": "123",
    "fullname": "Phùng Diễm Hương",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_17",
    "password": "123",
    "fullname": "Trần Thị Chúc Hương",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_18",
    "password": "123",
    "fullname": "Phan Gia Khang",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_19",
    "password": "123",
    "fullname": "Trần Thiện Khiêm",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_20",
    "password": "123",
    "fullname": "Đặng Đăng Khôi",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_21",
    "password": "123",
    "fullname": "Bùi Thái Khương",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_22",
    "password": "123",
    "fullname": "Dụng Phan Hoàng Long",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_23",
    "password": "123",
    "fullname": "Nguyễn Hoài Nam",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_24",
    "password": "123",
    "fullname": "Phạm Hoàng Nam",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_25",
    "password": "123",
    "fullname": "Phan Ngọc Kim Ngân",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_26",
    "password": "123",
    "fullname": "Nguyễn Thành Bá Nghiệp",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_27",
    "password": "123",
    "fullname": "Lê Hoàng Thanh Ngọc",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_28",
    "password": "123",
    "fullname": "Cù Thật Vĩ Nhân",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_29",
    "password": "123",
    "fullname": "Võ Hoàng Đoan Nhi",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_30",
    "password": "123",
    "fullname": "Biều Quốc Pháp",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_31",
    "password": "123",
    "fullname": "Huỳnh Trọng Phú",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_32",
    "password": "123",
    "fullname": "Nguyễn Thị Diễm Phượng",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_33",
    "password": "123",
    "fullname": "Phạm Trần Mạnh Quân",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_34",
    "password": "123",
    "fullname": "Hà Như Quỳnh",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_35",
    "password": "123",
    "fullname": "Nguyễn Thị Ngọc Thảo",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_36",
    "password": "123",
    "fullname": "Võ Thị Thanh Thảo",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_37",
    "password": "123",
    "fullname": "Ngô Hoàng Việt Thắng",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_38",
    "password": "123",
    "fullname": "Trần Lê Thanh Thiện",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_39",
    "password": "123",
    "fullname": "Nguyễn Toàn Thịnh",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_40",
    "password": "123",
    "fullname": "Trần Quốc Thịnh",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_41",
    "password": "123",
    "fullname": "Nguyễn Thị Anh Thư",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_42",
    "password": "123",
    "fullname": "Phan Thị Anh Thư",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_43",
    "password": "123",
    "fullname": "Thới Nguyên Thiên Thư",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_44",
    "password": "123",
    "fullname": "Đặng Thuỷ Tiên",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_45",
    "password": "123",
    "fullname": "Nguyễn Thị Bích Trang",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_46",
    "password": "123",
    "fullname": "Nguyễn Vũ Thanh Trúc",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a1_47",
    "password": "123",
    "fullname": "Biện Hoàng Uy",
    "className": "12A1",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_01",
    "password": "123",
    "fullname": "Võ Thạch Tuấn Anh",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_02",
    "password": "123",
    "fullname": "Nguyễn Hồng Ân",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_03",
    "password": "123",
    "fullname": "Thái Nguyên Bảo",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_04",
    "password": "123",
    "fullname": "Nguyễn Khánh Băng",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_05",
    "password": "123",
    "fullname": "Nguyễn Tiểu Băng",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_06",
    "password": "123",
    "fullname": "Châu Gia Bằng",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_07",
    "password": "123",
    "fullname": "Nguyễn Hồ Quỳnh Chi",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_08",
    "password": "123",
    "fullname": "Nguyễn Hoàng Anh Duy",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_09",
    "password": "123",
    "fullname": "Nguyễn Ngọc Trường Giang",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_10",
    "password": "123",
    "fullname": "Nguyễn Ngọc Hậu",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_11",
    "password": "123",
    "fullname": "Nguyễn Hoàng Minh Hiếu",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_12",
    "password": "123",
    "fullname": "Nguyễn Phan Gia Huy",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_13",
    "password": "123",
    "fullname": "Nguyễn Quốc Huy",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_14",
    "password": "123",
    "fullname": "Trần Võ Gia Huy",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_15",
    "password": "123",
    "fullname": "Sỳ Giao In",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_16",
    "password": "123",
    "fullname": "Lê Nguyên Khang",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_17",
    "password": "123",
    "fullname": "Nguyễn Bảo Khang",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_18",
    "password": "123",
    "fullname": "Nguyễn Nhật Quốc Khánh",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_19",
    "password": "123",
    "fullname": "Lê Hữu Kiệt",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_20",
    "password": "123",
    "fullname": "Nguyễn Anh Kiệt",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_21",
    "password": "123",
    "fullname": "Lê Bá Nam",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_22",
    "password": "123",
    "fullname": "Lê Ngọc Kim Ngân",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_23",
    "password": "123",
    "fullname": "Nguyễn Bảo Ngọc",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_24",
    "password": "123",
    "fullname": "Quách Thị Thái Nguyên",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_25",
    "password": "123",
    "fullname": "Trần Thị Uyển Nhi",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_26",
    "password": "123",
    "fullname": "Trương Gia Pháp",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_27",
    "password": "123",
    "fullname": "La Võ Quỳnh Phương",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_28",
    "password": "123",
    "fullname": "Nguyễn Bích Phương",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_29",
    "password": "123",
    "fullname": "Ngô Chan Pin",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_30",
    "password": "123",
    "fullname": "Vòng Cón Siêu",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_31",
    "password": "123",
    "fullname": "Lê Minh Thắng",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_32",
    "password": "123",
    "fullname": "Huỳnh Ngô Quốc Thiện",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_33",
    "password": "123",
    "fullname": "Trần Ngọc Thiện",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_34",
    "password": "123",
    "fullname": "Lê Quốc Thịnh",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_35",
    "password": "123",
    "fullname": "Dương Anh Thư",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_36",
    "password": "123",
    "fullname": "Lê Nguyễn Anh Thư",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_37",
    "password": "123",
    "fullname": "Minh Thư",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_38",
    "password": "123",
    "fullname": "Huỳnh Trang Ngọc Tiên",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_39",
    "password": "123",
    "fullname": "Lê Đức Tới",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_40",
    "password": "123",
    "fullname": "Phan Thị Minh Trang",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_41",
    "password": "123",
    "fullname": "Phạm Hoàng Hà Trâm",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_42",
    "password": "123",
    "fullname": "Nguyễn Quốc Xuân Tường",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_43",
    "password": "123",
    "fullname": "Tô Trần Minh Vy",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a2_44",
    "password": "123",
    "fullname": "Nguyễn Ngọc Thiên Ý",
    "className": "12A2",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_01",
    "password": "123",
    "fullname": "Lê Hoàng Kim An",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_02",
    "password": "123",
    "fullname": "Nguyễn Ngọc Hoài Ánh",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_03",
    "password": "123",
    "fullname": "Trần Khánh Băng",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_04",
    "password": "123",
    "fullname": "Nguyễn Bảo Châu",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_05",
    "password": "123",
    "fullname": "Lê Đặng Thanh Duy",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_06",
    "password": "123",
    "fullname": "Đinh Tiến Dưỡng",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_07",
    "password": "123",
    "fullname": "Nguyễn Tấn Đạt",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_08",
    "password": "123",
    "fullname": "Trần Gia Hân",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_09",
    "password": "123",
    "fullname": "Nguyễn Minh Hoàng",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_10",
    "password": "123",
    "fullname": "Bùi Phúc Hưng",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_11",
    "password": "123",
    "fullname": "Võ Minh Khang",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_12",
    "password": "123",
    "fullname": "Đỗ Nguyễn Gia Khánh",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_13",
    "password": "123",
    "fullname": "Cao Gia Kiệt",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_14",
    "password": "123",
    "fullname": "Đào Duy Anh Kiệt",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_15",
    "password": "123",
    "fullname": "Lìu Huỳnh Bảo Kim",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_16",
    "password": "123",
    "fullname": "Châu Bảo Linh",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_17",
    "password": "123",
    "fullname": "Trương Quỳnh My",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_18",
    "password": "123",
    "fullname": "Nguyễn Thị Kim Nguyên",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_19",
    "password": "123",
    "fullname": "Nguyễn Tiến Thiện Nhân",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_20",
    "password": "123",
    "fullname": "Phan Văn Nhật",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_21",
    "password": "123",
    "fullname": "Lê Uyên Nhi",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_22",
    "password": "123",
    "fullname": "Đỗ Gia Phong",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_23",
    "password": "123",
    "fullname": "Đỗ Gia Phú",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_24",
    "password": "123",
    "fullname": "Vòong Chi Phún",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_25",
    "password": "123",
    "fullname": "Huỳnh Nhã Phương",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_26",
    "password": "123",
    "fullname": "Phạm Văn Quang",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_27",
    "password": "123",
    "fullname": "Bùi Thành Tài",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_28",
    "password": "123",
    "fullname": "Lai Quốc Thái",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_29",
    "password": "123",
    "fullname": "Lê Đức Hải Thanh",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_30",
    "password": "123",
    "fullname": "Hồ Văn Trí Thiện",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_31",
    "password": "123",
    "fullname": "Võ Minh Thông",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_32",
    "password": "123",
    "fullname": "Nguyễn Thị Thu Thúy",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_33",
    "password": "123",
    "fullname": "Trần Ngọc Anh Thư",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_34",
    "password": "123",
    "fullname": "Trần Nguyễn Anh Thư",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_35",
    "password": "123",
    "fullname": "Trương Nguyễn Huyền Trang",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_36",
    "password": "123",
    "fullname": "Nguyễn Thị Mỹ Trâm",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_37",
    "password": "123",
    "fullname": "Nguyễn Bảo Trân",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_38",
    "password": "123",
    "fullname": "Nguyễn Huỳnh Bảo Trân",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_39",
    "password": "123",
    "fullname": "Lê Gia Uyển",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_40",
    "password": "123",
    "fullname": "Huỳnh Lê Thảo Vân",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_41",
    "password": "123",
    "fullname": "Hồ Sắm Vậy",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_42",
    "password": "123",
    "fullname": "Mai Thanh Vũ",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_43",
    "password": "123",
    "fullname": "Huỳnh Việt Vương",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_44",
    "password": "123",
    "fullname": "Lý Thảo Vy",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12a3_45",
    "password": "123",
    "fullname": "Nguyễn Thị Thảo Vy",
    "className": "12A3",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_01",
    "password": "123",
    "fullname": "Đỗ Võ Quỳnh Anh",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_02",
    "password": "123",
    "fullname": "Huỳnh Thị Ngọc Châu",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_03",
    "password": "123",
    "fullname": "Huỳnh Công Cường",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_04",
    "password": "123",
    "fullname": "Nguyễn Phan Thành Danh",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_05",
    "password": "123",
    "fullname": "Đặng Phan Kỳ Diệu",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_06",
    "password": "123",
    "fullname": "Hồ Huy Hải",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_07",
    "password": "123",
    "fullname": "Thới Hải",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_08",
    "password": "123",
    "fullname": "Lỷ Gia Hân",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_09",
    "password": "123",
    "fullname": "Nguyễn Chi Hiên",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_10",
    "password": "123",
    "fullname": "Đặng Ngọc Hiếu",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_11",
    "password": "123",
    "fullname": "Trần Quang Huy",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_12",
    "password": "123",
    "fullname": "Phan Minh Hưng",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_13",
    "password": "123",
    "fullname": "Vòng Nhục Inh",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_14",
    "password": "123",
    "fullname": "Nguyễn Anh Khôi",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_15",
    "password": "123",
    "fullname": "Nguyễn Thị Thu Lam",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_16",
    "password": "123",
    "fullname": "Nguyễn Nguyễn Hoàng Lâm",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_17",
    "password": "123",
    "fullname": "Hà Thị Trúc Linh",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_18",
    "password": "123",
    "fullname": "Trần Thị Bích Ly",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_19",
    "password": "123",
    "fullname": "Đặng Ngọc Xuân Mai",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_20",
    "password": "123",
    "fullname": "Trần Ngọc Thảo My",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_21",
    "password": "123",
    "fullname": "Nguyễn Phan Thành Nghiệp",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_22",
    "password": "123",
    "fullname": "Lô Trí Nguyên",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_23",
    "password": "123",
    "fullname": "Nguyễn Thành Nhẫn",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_24",
    "password": "123",
    "fullname": "Tô Thị Bích Nhi",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_25",
    "password": "123",
    "fullname": "Trần Tuệ Nhi",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_26",
    "password": "123",
    "fullname": "Phan Trọng Phúc",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_27",
    "password": "123",
    "fullname": "Sỳ Ỳ Phúc",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_28",
    "password": "123",
    "fullname": "Thới Nguyễn Đình Quân",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_29",
    "password": "123",
    "fullname": "Đặng Thị Bích Quyên",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_30",
    "password": "123",
    "fullname": "Trần Anh Thảo",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_31",
    "password": "123",
    "fullname": "Trương Diệu Thùy",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_32",
    "password": "123",
    "fullname": "Nguyễn Minh Thư",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_33",
    "password": "123",
    "fullname": "Nguyễn Thị Kim Thư",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_34",
    "password": "123",
    "fullname": "Mai Trường Tiến",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_35",
    "password": "123",
    "fullname": "Nguyễn Mai Công Tiến",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_36",
    "password": "123",
    "fullname": "Huỳnh Thành Tình",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_37",
    "password": "123",
    "fullname": "Nguyễn Đức Trọng",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_38",
    "password": "123",
    "fullname": "Phan Tuấn Tú",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_39",
    "password": "123",
    "fullname": "Võ Minh Tuân",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_40",
    "password": "123",
    "fullname": "Phan Hoài Trúc Uyên",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_41",
    "password": "123",
    "fullname": "Nguyễn Thị Yến Vi",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c4_42",
    "password": "123",
    "fullname": "Trương Dương Bích Viên",
    "className": "12C4",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_01",
    "password": "123",
    "fullname": "Võ Quốc Tuấn Anh",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_02",
    "password": "123",
    "fullname": "Dương Hồ Nguyên Bảo",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_03",
    "password": "123",
    "fullname": "Nguyễn Gia Bảo",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_04",
    "password": "123",
    "fullname": "Trần Thị Kim Chi",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_05",
    "password": "123",
    "fullname": "Trần Thị Ngọc Diệp",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_06",
    "password": "123",
    "fullname": "Võ Phạm Hiền Diệu",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_07",
    "password": "123",
    "fullname": "Nguyễn Thế Thành Đạt",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_08",
    "password": "123",
    "fullname": "Võ Văn Hạ",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_09",
    "password": "123",
    "fullname": "Nguyễn Đức Hào",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_10",
    "password": "123",
    "fullname": "Biện Hồ Thanh Hằng",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_11",
    "password": "123",
    "fullname": "Võ Thị Trúc Hương",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_12",
    "password": "123",
    "fullname": "Võ Ngọc Diễm Hường",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_13",
    "password": "123",
    "fullname": "Bùi Thanh Duy Khánh",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_14",
    "password": "123",
    "fullname": "Huỳnh Ngọc Khoa",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_15",
    "password": "123",
    "fullname": "Hứa Biện Chi Linh",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_16",
    "password": "123",
    "fullname": "Nguyễn Triệu Long",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_17",
    "password": "123",
    "fullname": "Huỳnh Thị Thảo Mi",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_18",
    "password": "123",
    "fullname": "Đỗ Hoài Bảo Nam",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_19",
    "password": "123",
    "fullname": "Phạm Thị Bích Ngân",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_20",
    "password": "123",
    "fullname": "Trần Gia Ngân",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_21",
    "password": "123",
    "fullname": "Phan Thiên Phú",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_22",
    "password": "123",
    "fullname": "Bùi Thị Kim Phượng",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_23",
    "password": "123",
    "fullname": "Trần Trung Quang",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_24",
    "password": "123",
    "fullname": "Võ Minh Su",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_25",
    "password": "123",
    "fullname": "Trần Duy Tấn",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_26",
    "password": "123",
    "fullname": "Võ Đại Dương Tấn",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_27",
    "password": "123",
    "fullname": "Vi Đức Thạch",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_28",
    "password": "123",
    "fullname": "Tô Thanh Thắng",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_29",
    "password": "123",
    "fullname": "Huỳnh Mai Giang Thùy",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_30",
    "password": "123",
    "fullname": "Nguyễn Văn Tiến",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_31",
    "password": "123",
    "fullname": "Đỗ Thị Hạnh Trang",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_32",
    "password": "123",
    "fullname": "Nguyễn Xuân Trúc",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_33",
    "password": "123",
    "fullname": "Nguyễn Thanh Trung",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_34",
    "password": "123",
    "fullname": "Trần Xuân Trương",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_35",
    "password": "123",
    "fullname": "Nguyễn Ngọc Cẩm Tú",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_36",
    "password": "123",
    "fullname": "Phạm Thái Tú",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_37",
    "password": "123",
    "fullname": "Trang Minh Tú",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_38",
    "password": "123",
    "fullname": "Diệp Trần Thúy Vân",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_39",
    "password": "123",
    "fullname": "Hong Thị Ngọc Vân",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_40",
    "password": "123",
    "fullname": "Tăng Nguyễn Nhi Viện",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_41",
    "password": "123",
    "fullname": "Hoàng Quốc Vương",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_42",
    "password": "123",
    "fullname": "Trần Thảo Vy",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c5_43",
    "password": "123",
    "fullname": "Đỗ Thị Như Ý",
    "className": "12C5",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_01",
    "password": "123",
    "fullname": "Nguyễn Hoàng Bảo",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_02",
    "password": "123",
    "fullname": "Lê Xuân Ngọc Châu",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_03",
    "password": "123",
    "fullname": "Nguyễn Ngọc Trúc Chi",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_04",
    "password": "123",
    "fullname": "Vòng Khánh Dẩu",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_05",
    "password": "123",
    "fullname": "Bùi Linh Đan",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_06",
    "password": "123",
    "fullname": "Đàm Tiến Đạt",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_07",
    "password": "123",
    "fullname": "Đào Danh Minh Đạt",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_08",
    "password": "123",
    "fullname": "Huỳnh Hồ Anh Hào",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_09",
    "password": "123",
    "fullname": "Trương Thị Diễm Hằng",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_10",
    "password": "123",
    "fullname": "Biện Thị Gia Hân",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_11",
    "password": "123",
    "fullname": "Chế Văn Hoàng",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_12",
    "password": "123",
    "fullname": "Lằm Cooc Hồng",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_13",
    "password": "123",
    "fullname": "Nguyễn Xuân Huy",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_14",
    "password": "123",
    "fullname": "Nguyễn Anh Kha",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_15",
    "password": "123",
    "fullname": "Dương Tuấn Khang",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_16",
    "password": "123",
    "fullname": "Ngô Tuấn Khang",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_17",
    "password": "123",
    "fullname": "Nguyễn Bảo Khang",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_18",
    "password": "123",
    "fullname": "Chướng Minh Khanh",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_19",
    "password": "123",
    "fullname": "Dương Sỹ Khanh",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_20",
    "password": "123",
    "fullname": "Phạm Bảo Khanh",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_21",
    "password": "123",
    "fullname": "Võ Tuấn Kiệt",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_22",
    "password": "123",
    "fullname": "Mai Thị Kim Linh",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_23",
    "password": "123",
    "fullname": "Nguyễn Bích Ly",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_24",
    "password": "123",
    "fullname": "Nguyễn Thị Phương Ly",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_25",
    "password": "123",
    "fullname": "Huỳnh Quốc Nam",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_26",
    "password": "123",
    "fullname": "La Đức Hoài Nam",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_27",
    "password": "123",
    "fullname": "Nguyễn Bích Ngân",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_28",
    "password": "123",
    "fullname": "Đoàn Nông Bảo Ngọc",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_29",
    "password": "123",
    "fullname": "Nguyễn Kim Bảo Ngọc",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_30",
    "password": "123",
    "fullname": "Nguyễn Thị Hồng Ngọc",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_31",
    "password": "123",
    "fullname": "Lai Tông Diễm Như",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_32",
    "password": "123",
    "fullname": "Nguyễn Huỳnh Gia Như",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_33",
    "password": "123",
    "fullname": "Trần Kiều Oanh",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_34",
    "password": "123",
    "fullname": "Lê Đặng Tuyết Pho",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_35",
    "password": "123",
    "fullname": "Vy Thị Bích Phương",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_36",
    "password": "123",
    "fullname": "Nguyễn Lê Phương Thảo",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_37",
    "password": "123",
    "fullname": "Nguyễn Thị Minh Thư",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_38",
    "password": "123",
    "fullname": "Chu Ngọc Trâm",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_39",
    "password": "123",
    "fullname": "Phạm Hoài Triết",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_40",
    "password": "123",
    "fullname": "Vy Thiên Trọng",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_41",
    "password": "123",
    "fullname": "Phùng Xuyến Kim Vân",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12c6_42",
    "password": "123",
    "fullname": "Me Hoàng Hải Yến",
    "className": "12C6",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_01",
    "password": "123",
    "fullname": "Lữ Quốc An",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_02",
    "password": "123",
    "fullname": "Đào Lê Ngọc Anh",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_03",
    "password": "123",
    "fullname": "Võ Huỳnh Thiên Ân",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_04",
    "password": "123",
    "fullname": "Nguyễn Thế Bảo",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_05",
    "password": "123",
    "fullname": "Huỳnh Đức Duy",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_06",
    "password": "123",
    "fullname": "Nguyễn Trương Trúc Duyên",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_07",
    "password": "123",
    "fullname": "Nguyễn Thanh Dương",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_08",
    "password": "123",
    "fullname": "Trần Lê Ngọc Hân",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_09",
    "password": "123",
    "fullname": "Trương Gia Hân",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_10",
    "password": "123",
    "fullname": "Trần Văn Hoà",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_11",
    "password": "123",
    "fullname": "Hứa Hoàng Khang",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_12",
    "password": "123",
    "fullname": "Trần Hữu Khang",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_13",
    "password": "123",
    "fullname": "Lê Trương Tường Lam",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_14",
    "password": "123",
    "fullname": "Nguyễn Thị Thanh Lâm",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_15",
    "password": "123",
    "fullname": "Nguyễn Công Lập",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_16",
    "password": "123",
    "fullname": "Nguyễn Công Lý",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_17",
    "password": "123",
    "fullname": "Trịnh Quế Mẫn",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_18",
    "password": "123",
    "fullname": "Nguyễn Nhật Minh",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_19",
    "password": "123",
    "fullname": "Phùng Nguyễn Thảo My",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_20",
    "password": "123",
    "fullname": "Nguyễn Thị Thúy Nga",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_21",
    "password": "123",
    "fullname": "Nguyễn Đỗ Thanh Ngân",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_22",
    "password": "123",
    "fullname": "Nguyễn Trần Thu Ngân",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_23",
    "password": "123",
    "fullname": "Nguyễn Hoàng Khánh Ngọc",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_24",
    "password": "123",
    "fullname": "Nguyễn Trần Thảo Ngọc",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_25",
    "password": "123",
    "fullname": "Nguyễn Phạm Minh Nhật",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_26",
    "password": "123",
    "fullname": "Biền Thị Huỳnh Như",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_27",
    "password": "123",
    "fullname": "Đoàn Thị Quỳnh Như",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_28",
    "password": "123",
    "fullname": "Mai Nguyễn Hoàng Phúc",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_29",
    "password": "123",
    "fullname": "Lê Thị Phụng",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_30",
    "password": "123",
    "fullname": "Nguyễn Gia Phước",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_31",
    "password": "123",
    "fullname": "Nguyễn Trượng Nam Phương",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_32",
    "password": "123",
    "fullname": "Nguyễn Lê Duy Quang",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_33",
    "password": "123",
    "fullname": "Nguyễn Thị Nhật Quy",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_34",
    "password": "123",
    "fullname": "Nguyễn Ngọc Lệ Quyên",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_35",
    "password": "123",
    "fullname": "Nguyễn Thị Trúc Quỳnh",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_36",
    "password": "123",
    "fullname": "Hong Tằng Sếnh",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_37",
    "password": "123",
    "fullname": "Nguyễn Thị Băng Tâm",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_38",
    "password": "123",
    "fullname": "Lương Thị Ngọc Thuý",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_39",
    "password": "123",
    "fullname": "Nguyễn Minh Thư",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_40",
    "password": "123",
    "fullname": "Nguyễn Thị Anh Thư",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_41",
    "password": "123",
    "fullname": "Đinh Xuân Uyên Trang",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_42",
    "password": "123",
    "fullname": "Mai Thị Ngọc Trâm",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_43",
    "password": "123",
    "fullname": "Nguyễn Ngọc Tuyết Trân",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_44",
    "password": "123",
    "fullname": "Nguyễn Minh Triết",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_45",
    "password": "123",
    "fullname": "Đỗ Lê Thanh Tú",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_46",
    "password": "123",
    "fullname": "Huỳnh Xuân Tý",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d7_47",
    "password": "123",
    "fullname": "Nguyễn Thị Thanh Vân",
    "className": "12D7",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_01",
    "password": "123",
    "fullname": "Lê Thị Mỹ Dung",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_02",
    "password": "123",
    "fullname": "Nguyễn Hữu Đạt",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_03",
    "password": "123",
    "fullname": "Phạm Đình Nguyễn Tiến Đạt",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_04",
    "password": "123",
    "fullname": "Nguyễn Thái Hào",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_05",
    "password": "123",
    "fullname": "Nguyễn Trọng Hiếu",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_06",
    "password": "123",
    "fullname": "Nguyễn Mạnh Huy",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_07",
    "password": "123",
    "fullname": "Nguyễn Phan Duy Kha",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_08",
    "password": "123",
    "fullname": "Nguyễn Nhật Tuấn Khang",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_09",
    "password": "123",
    "fullname": "Mai Chí Kiệt",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_10",
    "password": "123",
    "fullname": "Nguyễn Thành Luân",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_11",
    "password": "123",
    "fullname": "Trương Tuệ Mẫn",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_12",
    "password": "123",
    "fullname": "Ngô Nguyễn Hà Mi",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_13",
    "password": "123",
    "fullname": "Nguyễn Đặng Hồng My",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_14",
    "password": "123",
    "fullname": "Nguyễn Thị Trà My",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_15",
    "password": "123",
    "fullname": "Phạm Thảo My",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_16",
    "password": "123",
    "fullname": "Phan Văn Thị Nữ Hà My",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_17",
    "password": "123",
    "fullname": "Phan Văn Thị Nữ Hà Mỹ",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_18",
    "password": "123",
    "fullname": "Nguyễn Tuấn Nam",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_19",
    "password": "123",
    "fullname": "Ngô Đỗ Bảo Ngân",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_20",
    "password": "123",
    "fullname": "Phạm Thành Nghĩa",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_21",
    "password": "123",
    "fullname": "Lê Phạm Ánh Ngọc",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_22",
    "password": "123",
    "fullname": "Nguyễn Bích Ngọc",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_23",
    "password": "123",
    "fullname": "Đào Thị Yến Nhi",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_24",
    "password": "123",
    "fullname": "Dương Minh Quỳnh Như",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_25",
    "password": "123",
    "fullname": "Dắn Hình Phương Phương",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_26",
    "password": "123",
    "fullname": "Lê Anh Quân",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_27",
    "password": "123",
    "fullname": "Nguyễn Đặng Như Quỳnh",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_28",
    "password": "123",
    "fullname": "Nguyễn Đỗ Như Quỳnh",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_29",
    "password": "123",
    "fullname": "Nguyễn Ngọc Nhật Tân",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_30",
    "password": "123",
    "fullname": "Huỳnh Xuân Tấn",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_31",
    "password": "123",
    "fullname": "Phạm Nguyễn Kim Thảo",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_32",
    "password": "123",
    "fullname": "Đinh Việt Thắng",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_33",
    "password": "123",
    "fullname": "Nguyễn Thị Thanh Thủy",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_34",
    "password": "123",
    "fullname": "Đoàn Nguyễn Anh Thư",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_35",
    "password": "123",
    "fullname": "Huỳnh Nhật Nguyên Thư",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_36",
    "password": "123",
    "fullname": "Trần Chung Tín",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_37",
    "password": "123",
    "fullname": "Tăng Thị Trinh Trinh",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_38",
    "password": "123",
    "fullname": "Nguyễn Đức Trọng",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_39",
    "password": "123",
    "fullname": "Lương Ngọc Lan Uyên",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_40",
    "password": "123",
    "fullname": "Lê Thị Hoàng Vân",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_41",
    "password": "123",
    "fullname": "Ngô Anh Vũ",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_42",
    "password": "123",
    "fullname": "Lê Thị Hồng Vy",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_43",
    "password": "123",
    "fullname": "Phan Thị Tường Vy",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_44",
    "password": "123",
    "fullname": "Đinh Nguyễn Như Ý",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d8_45",
    "password": "123",
    "fullname": "Lê Thị Hồng Yến",
    "className": "12D8",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_01",
    "password": "123",
    "fullname": "Đào Thái Bảo",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_02",
    "password": "123",
    "fullname": "Nguyễn Trường Biên",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_03",
    "password": "123",
    "fullname": "Ngô Minh Hải",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_04",
    "password": "123",
    "fullname": "Tằng Bảo Hân",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_05",
    "password": "123",
    "fullname": "Nguyễn Trọng Hoàng",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_06",
    "password": "123",
    "fullname": "Đoàn Vĩnh Hưng",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_07",
    "password": "123",
    "fullname": "Trần Minh Khang",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_08",
    "password": "123",
    "fullname": "Dương Nhật Khanh",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_09",
    "password": "123",
    "fullname": "Nguyễn Quốc Khánh",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_10",
    "password": "123",
    "fullname": "Nông Ngọc Gia Khánh",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_11",
    "password": "123",
    "fullname": "Nguyễn Kim Khuê",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_12",
    "password": "123",
    "fullname": "Trần Ngô Phú Lạc",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_13",
    "password": "123",
    "fullname": "Nguyễn Thị Mỹ Lệ",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_14",
    "password": "123",
    "fullname": "Phạm Hoàng Linh",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_15",
    "password": "123",
    "fullname": "Dương Huỳnh Long",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_16",
    "password": "123",
    "fullname": "Lê Thái Long",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_17",
    "password": "123",
    "fullname": "Trần Thị Mỹ Lương",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_18",
    "password": "123",
    "fullname": "Nguyễn Thu Ngân",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_19",
    "password": "123",
    "fullname": "Phùng Thảo Ngân",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_20",
    "password": "123",
    "fullname": "Dương Thảo Nguyên",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_21",
    "password": "123",
    "fullname": "Nguyễn Vũ Nguyên",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_22",
    "password": "123",
    "fullname": "Lê Thị Minh Nguyệt",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_23",
    "password": "123",
    "fullname": "Phạm Thảo Nhi",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_24",
    "password": "123",
    "fullname": "Thái Hồng Tuyết Nhi",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_25",
    "password": "123",
    "fullname": "Võ Quỳnh Như",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_26",
    "password": "123",
    "fullname": "Nguyễn Ngọc Bảo Phương",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_27",
    "password": "123",
    "fullname": "Vỏ Thị Kim Phượng",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_28",
    "password": "123",
    "fullname": "Võ Tấn Tài",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_29",
    "password": "123",
    "fullname": "Nguyễn Duy Tân",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_30",
    "password": "123",
    "fullname": "Mã Quốc Thành",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_31",
    "password": "123",
    "fullname": "Thông Thị Thu Thủy",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_32",
    "password": "123",
    "fullname": "Hoàng Thị Minh Thư",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_33",
    "password": "123",
    "fullname": "Nguyễn Hoàng Anh Thư",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_34",
    "password": "123",
    "fullname": "Võ Nguyễn Minh Thư",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_35",
    "password": "123",
    "fullname": "Nguyễn Thị Kim Thương",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_36",
    "password": "123",
    "fullname": "Ngô Thị Anh Thy",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_37",
    "password": "123",
    "fullname": "Võ Thị Ngọc Trâm",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_38",
    "password": "123",
    "fullname": "Nguyễn Thị Huyền Trân",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_39",
    "password": "123",
    "fullname": "Nguyễn Thị Quế Trân",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_40",
    "password": "123",
    "fullname": "Trần Bảo Trân",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_41",
    "password": "123",
    "fullname": "Nguyễn Yến Trinh",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_42",
    "password": "123",
    "fullname": "Huỳnh Ngọc Tú",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_43",
    "password": "123",
    "fullname": "Lê Nguyễn Ánh Tuyết",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_44",
    "password": "123",
    "fullname": "Nguyễn Hoàng Bảo Uyên",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_45",
    "password": "123",
    "fullname": "Thái Quốc Việt",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d9_46",
    "password": "123",
    "fullname": "Nguyễn Ngọc Như Ý",
    "className": "12D9",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_01",
    "password": "123",
    "fullname": "Hong Lan Anh",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_02",
    "password": "123",
    "fullname": "Trần Đăng Anh",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_03",
    "password": "123",
    "fullname": "Dương Quốc Danh",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_04",
    "password": "123",
    "fullname": "Nguyễn Thị Mỹ Duyên",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_05",
    "password": "123",
    "fullname": "Huỳnh Viễn Dương",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_06",
    "password": "123",
    "fullname": "Lê Tấn Đạt",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_07",
    "password": "123",
    "fullname": "Lương Ngữ Quỳnh Giao",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_08",
    "password": "123",
    "fullname": "Vương Minh Hằng",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_09",
    "password": "123",
    "fullname": "Hồ Ngọc Hiền",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_10",
    "password": "123",
    "fullname": "Nguyễn Huy Hoàng",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_11",
    "password": "123",
    "fullname": "Nguyễn Lâm Anh Kha",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_12",
    "password": "123",
    "fullname": "Trần Thế Khải",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_13",
    "password": "123",
    "fullname": "Trần Vũ Khang",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_14",
    "password": "123",
    "fullname": "Phạm Kim Khánh",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_15",
    "password": "123",
    "fullname": "Cao Gia Kiệt",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_16",
    "password": "123",
    "fullname": "Đàm Anh Kiệt",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_17",
    "password": "123",
    "fullname": "Trần Đặng Tuấn Kiệt",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_18",
    "password": "123",
    "fullname": "Hong Lam Liên",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_19",
    "password": "123",
    "fullname": "Huỳnh Thị Bích Liên",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_20",
    "password": "123",
    "fullname": "Trần Phi Long",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_21",
    "password": "123",
    "fullname": "Dụng Khả Minh",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_22",
    "password": "123",
    "fullname": "Ừng Văn Nghĩa",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_23",
    "password": "123",
    "fullname": "Phạm Đặng Hoàng Nghiêm",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_24",
    "password": "123",
    "fullname": "Cao Lê Khánh Ngọc",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_25",
    "password": "123",
    "fullname": "Phan Minh Phú",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_26",
    "password": "123",
    "fullname": "Cao Anh Quân",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_27",
    "password": "123",
    "fullname": "Biền Thị Như Quỳnh",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_28",
    "password": "123",
    "fullname": "Huỳnh Thị Minh Thảo",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_29",
    "password": "123",
    "fullname": "Nguyễn Thị Thanh Thúy",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_30",
    "password": "123",
    "fullname": "Lê Đặng Quỳnh Thư",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_31",
    "password": "123",
    "fullname": "Nguyễn Minh Thư",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_32",
    "password": "123",
    "fullname": "Lê Ngọc Huyền Trang",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_33",
    "password": "123",
    "fullname": "Lý Ngọc Trang",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_34",
    "password": "123",
    "fullname": "Đặng Thị Yến Trâm",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_35",
    "password": "123",
    "fullname": "Trần Thị Thu Trúc",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_36",
    "password": "123",
    "fullname": "Huỳnh Thanh Trung",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_37",
    "password": "123",
    "fullname": "Bùi Hoàng Anh Tuấn",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_38",
    "password": "123",
    "fullname": "Ngô Tấn Anh Tuấn",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_39",
    "password": "123",
    "fullname": "Phùng Gia Tuyên",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_40",
    "password": "123",
    "fullname": "Nguyễn Ánh Tuyết",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_41",
    "password": "123",
    "fullname": "Phạm Thảo Vân",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_42",
    "password": "123",
    "fullname": "Đặng Hà Bảo Vy",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_43",
    "password": "123",
    "fullname": "Lê Thị Thảo Vy",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  },
  {
    "username": "hs_12d10_44",
    "password": "123",
    "fullname": "Phạm Lê Hạ Vy",
    "className": "12D10",
    "xp": 0,
    "badges": [
      "Tân binh HTML"
    ]
  }
];

// Tài khoản giáo viên mặc định
const TEACHER_ACCOUNT = {
  username: "giaovien",
  password: "Mk2026@",
  fullname: "Thầy/Cô Giáo Viên",
  role: "teacher"
};

// URL Google Sheet Webhook mặc định của hệ thống (đồng bộ tự động ngay cả khi copy sang máy tính khác)
const DEFAULT_GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyr20hnzBhLT6S8-c_mz6etaX4XTFGof_yktP5OG911PNu4b7lbkyubo1dk3Oqc_26N/exec";
