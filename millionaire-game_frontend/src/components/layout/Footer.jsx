import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <b>AI LÀ TRIỆU PHÚ</b>
      <span>Trải nghiệm kiến thức mỗi ngày</span>
      <nav aria-label="Liên kết cuối trang">
        <Link to="/guide">Luật chơi và trợ giúp</Link>
        <Link to="/news">Góc kiến thức</Link>
      </nav>
    </footer>
  );
}
