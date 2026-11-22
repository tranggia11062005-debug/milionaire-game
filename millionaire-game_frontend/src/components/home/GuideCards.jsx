export default function GuideCards() {
  return (
    <div className="grid three">
      {[
        [
          "01",
          "15 câu hỏi",
          "Mỗi câu có 2–4 lựa chọn và một đáp án đúng. Độ khó tăng sau mỗi nhóm 5 câu.",
        ],
        [
          "02",
          "4 quyền trợ giúp",
          "50:50, hỏi khán giả, gọi người thân và hỏi chuyên gia; mỗi quyền dùng một lần.",
        ],
        [
          "03",
          "Bảo toàn thành quả",
          "Dừng để giữ tiền hiện tại. Trả lời sai hoặc hết giờ nhận mốc an toàn đã đạt.",
        ],
      ].map(([n, t, d]) => (
        <article className="panel" key={n}>
          <span className="eyebrow">{n}</span>
          <h2>{t}</h2>
          <p>{d}</p>
        </article>
      ))}
    </div>
  );
}
