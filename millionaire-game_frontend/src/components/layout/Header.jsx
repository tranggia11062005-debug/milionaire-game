import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav aria-label="Điều hướng chính">
        <NavLink to="/" end>
          Trang chủ
        </NavLink>
        <NavLink to="/guide">Hướng dẫn</NavLink>
        <NavLink to="/news">Tin tức</NavLink>
        <button
          className="nav-pending"
          type="button"
          disabled
          title="Bảng xếp hạng sắp ra mắt"
        >
          Bảng xếp hạng
        </button>
        <button
          className="btn outline small"
          type="button"
          disabled
          title="Đăng nhập sắp ra mắt"
        >
          Đăng nhập
        </button>
        <button
          className="btn small"
          type="button"
          disabled
          title="Đăng ký sắp ra mắt"
        >
          Đăng ký
        </button>
      </nav>
    </header>
  );
}
