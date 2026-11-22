export default function GuideOverview() {
  const cards = [
    {
      title: "15 câu hỏi",
      text: "Mỗi câu có 4 phương án và một đáp án đúng. Độ khó tăng dần qua từng chặng.",
    },
    {
      title: "4 quyền trợ giúp",
      text: "Mỗi quyền được dùng một lần trong một phiên. Cân nhắc thời điểm để nhận thêm gợi ý.",
    },
    {
      title: "Bảo toàn thành quả",
      text: "Dừng để giữ số tiền hiện tại. Nếu trả lời sai hoặc hết giờ, nhận mốc an toàn đã vượt qua.",
    },
  ];
  return (
    <section className="public-grid three" aria-label="Tổng quan luật chơi">
      {cards.map((card, index) => (
        <article className="panel public-card" key={card.title}>
          <span className="number-tag">0{index + 1}</span>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </article>
      ))}
    </section>
  );
}
