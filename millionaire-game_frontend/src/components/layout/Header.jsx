import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Header() {
  const { user, logout } = useAuth();
  const go = useNavigate();
  return (
    <header className="header">
      <Logo />
      <nav aria-label="Điều hướng chính">
        <NavLink to="/" end>
          Trang chủ
        </NavLink>
        <NavLink to="/guide">Hướng dẫn</NavLink>
        <NavLink to="/rankings">Bảng xếp hạng</NavLink>
        {user ? (
          <>
            <NavLink to="/history">Lịch sử</NavLink>
            <NavLink to="/profile">{user.fullName}</NavLink>
            {user.role === "ADMIN" && <NavLink to="/admin">Quản trị</NavLink>}
            <button
              className="btn outline small"
              onClick={async () => {
                await logout();
                go("/");
              }}
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link className="btn outline small" to="/login">
              Đăng nhập
            </Link>
            <Link className="btn small" to="/register">
              Đăng ký
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
