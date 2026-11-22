# Giai đoạn 02 — Các trang công khai

Nhánh: feat/public-pages. Chỉ sửa code trên máy; chưa commit hoặc push.

## Phần hoàn thiện

- Trang chủ: giữ giao diện xanh sân khấu, khôi phục file ảnh nền còn thiếu trên bản vừa pull; nút tìm hiểu luật chơi mở /guide.
- /guide: luật chơi, 4 trợ giúp, 15 mốc thưởng và câu hỏi thường gặp có thể đóng/mở.
- /news: 6 bài viết biên soạn sẵn, tìm kiếm có/không dấu, lọc chủ đề, phân trang và trạng thái không có kết quả.
- /news/:slug: nội dung bài viết, bài liên quan, đường dẫn quay lại.
- Trang 404 cho URL hoặc bài viết không tồn tại.
- Header/footer điều hướng thống nhất, đánh dấu trang đang mở; đổi trang cuộn lên đầu.

Nội dung bài viết là dữ liệu tĩnh ở src/data/articles.js, không phải nội dung được tải trực tiếp từ server. Bảng xếp hạng, tài khoản và chế độ chơi vẫn chưa bật. Các file tài khoản/API có sẵn trên main được giữ nguyên và không tham gia luồng trang công khai.

## Cấu trúc

- src/pages/public/: ghép các trang.
- src/components/guide/: từng phần trang Hướng dẫn.
- src/components/news/: thẻ bài viết, bộ lọc, nội dung và phân trang.
- src/components/common/: tiêu đề, trạng thái rỗng và cuộn đầu trang.
- src/data/: dữ liệu nội dung tĩnh và luật chơi.
- src/styles/public-pages.css: kiểu giao diện các trang mới.
- src/routers/AppRoutes.jsx: giữ đúng thư mục routers từ commit GitHub mới nhất.

## Chạy và kiểm tra

Trong millionaire-game_frontend: npm ci, npm run dev. Không cần chạy backend.
Kiểm tra bằng npm run lint, npm run build, npm run test:public.
Test public kiểm tra render 6 đường dẫn, nội dung bài viết, tìm kiếm/lọc và mốc thưởng; không thay thế kiểm tra thao tác thực tế trên trình duyệt.

Thử thủ công: đi từ Trang chủ → Hướng dẫn → Tin tức; mở/đóng FAQ; tìm từ khóa không dấu; lọc chủ đề; sang trang bài viết tiếp; mở chi tiết và bài liên quan; mở URL sai để xem 404.

Đưa lên hosting cần cấu hình fallback URL về index.html cho BrowserRouter. Việc triển khai và push chưa được thực hiện.
