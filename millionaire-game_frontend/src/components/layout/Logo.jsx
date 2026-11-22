import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link className="brand" to="/">
      <span className="seal">
        <small>AI LÀ</small>
        <strong>
          TRIỆU
          <br />
          PHÚ
        </strong>
      </span>
      <span>AI LÀ TRIỆU PHÚ</span>
    </Link>
  );
}
