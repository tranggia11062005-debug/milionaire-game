import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout.jsx";
export default function NotFoundPage() {
  return (
    <Layout>
      <section className="panel empty-state not-found">
        <span className="eyebrow">404</span>
        <h1>Không tìm thấy trang</h1>
        <p>Đường dẫn có thể đã thay đổi hoặc nội dung chưa có ở đây.</p>
        <div className="actions">
          <Link className="btn" to="/">
            Về trang chủ
          </Link>
          <Link className="btn outline" to="/news">
            Xem bài viết
          </Link>
        </div>
      </section>
    </Layout>
  );
}
