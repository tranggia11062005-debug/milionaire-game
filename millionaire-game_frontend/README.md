# Ai là triệu phú — Các trang công khai

Chạy độc lập, không cần backend. Yêu cầu Node.js 22.12+ hoặc 24 LTS, có npm.

Trong thư mục này chạy npm ci rồi npm run dev.

Đường dẫn: / (trang chủ), /guide (hướng dẫn), /news (bài viết), /news/:slug (chi tiết). Đường dẫn không tồn tại có trang 404.

Header, footer, logo và nội dung trang được tách thành các component. Dữ liệu biên soạn sẵn nằm ở src/data. Đăng nhập, đăng ký, bảng xếp hạng và chế độ chơi chưa bật.

Kiểm tra bằng npm run lint, npm run build, npm run test:public. Kiểm thử public kiểm tra render đường dẫn và logic dữ liệu, không thay thế kiểm tra thao tác trình duyệt.

Khi triển khai hosting cần cấu hình fallback về index.html cho BrowserRouter. Xem ../GIAI-DOAN-02.md để biết danh sách phần việc và cách tích hợp tiếp.
