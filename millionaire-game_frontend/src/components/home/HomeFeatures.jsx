import Stat from "../common/Stat.jsx";
export default function HomeFeatures() {
  return (
    <section
      id="features"
      className="stats four"
      aria-label="Điểm nổi bật của trò chơi"
    >
      <Stat
        label="Kho kiến thức"
        value="Đa lĩnh vực"
        detail="Khoa học, lịch sử, văn hóa và hơn thế nữa"
      />
      <Stat
        label="Trợ giúp"
        value="4 cơ hội"
        detail="50:50, khán giả, người thân, chuyên gia"
      />
      <Stat
        label="Chinh phục"
        value="15 cấp độ"
        detail="Thử thách tăng dần qua từng câu hỏi"
      />
      <Stat
        label="Cộng đồng"
        value="Bảng xếp hạng"
        detail="So tài với người chơi trên toàn quốc"
      />
    </section>
  );
}
