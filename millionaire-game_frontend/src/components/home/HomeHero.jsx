import { Link } from "react-router-dom";
export default function HomeHero() {
  return (
    <section className="hero">
      <div>
        <span className="eyebrow">SẴN SÀNG NGỒI VÀO GHẾ NÓNG?</span>
        <h1>
          15 câu hỏi.
          <br />
          Một giấc mơ triệu phú.
        </h1>
        <p>
          Thử thách kiến thức, chinh phục từng cột mốc
          <br />
          và tiến đến phần thưởng 250 triệu đồng.
        </p>
        <div className="actions">
          <button
            className="btn"
            type="button"
            disabled
            title="Chế độ chơi sắp ra mắt"
          >
            CHƠI NGAY
          </button>
          <Link className="btn outline" to="/guide">
            Tìm hiểu luật chơi
          </Link>
        </div>
        <small>15 câu hỏi • 4 quyền trợ giúp • 3 mốc quan trọng</small>
        <p className="coming-soon">
          Chế độ chơi sắp ra mắt. Khám phá luật chơi để sẵn sàng nhé!
        </p>
      </div>
      <div className="panel hero-award">
        <div className="hero-seal">
          <small>AI LÀ</small>TRIỆU
          <br />
          PHÚ
        </div>
        <strong>250.000.000 đ</strong>
        <small>PHẦN THƯỞNG CAO NHẤT</small>
      </div>
    </section>
  );
}
