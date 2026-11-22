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
          <a className="btn outline" href="#features">
            Khám phá trò chơi
          </a>
        </div>
        <small>15 câu hỏi • 4 quyền trợ giúp • 3 mốc quan trọng</small>
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
