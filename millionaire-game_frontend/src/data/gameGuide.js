export const prizes = [
  200000, 500000, 1000000, 2000000, 3000000, 6000000, 10000000, 14000000,
  22000000, 30000000, 40000000, 60000000, 85000000, 150000000, 250000000,
];
export const lifelines = [
  {
    name: "50:50",
    description:
      "Loại bỏ hai phương án sai, giữ lại đáp án đúng và một phương án khác.",
  },
  {
    name: "Hỏi ý kiến khán giả",
    description:
      "Tham khảo tỷ lệ bình chọn cho từng phương án. Gợi ý không thay thế quyết định của bạn.",
  },
  {
    name: "Gọi điện cho người thân",
    description:
      "Nhận một lời gợi ý từ người trợ giúp trước khi chốt phương án.",
  },
  {
    name: "Hỏi nhà thông thái",
    description: "Tham khảo ý kiến chuyên gia khi gặp câu hỏi khó.",
  },
];
export const questions = [
  {
    question: "Tôi cần vượt qua bao nhiêu câu hỏi?",
    answer:
      "Một phiên chơi gồm 15 câu hỏi, mỗi câu có 4 phương án và một đáp án đúng. Độ khó tăng dần qua các chặng.",
  },
  {
    question: "Các mốc an toàn nằm ở đâu?",
    answer:
      "Câu 5 và câu 10 là mốc an toàn. Khi trả lời sai hoặc hết giờ, bạn nhận số tiền của mốc an toàn gần nhất đã vượt qua; chưa vượt câu 5 thì số tiền là 0 đồng. Câu 15 là đích chiến thắng.",
  },
  {
    question: "Tôi có thể dừng cuộc chơi không?",
    answer:
      "Bạn có thể chủ động dừng khi phiên còn đang diễn ra để giữ số tiền hiện tại. Hãy cân nhắc trước khi chốt đáp án.",
  },
  {
    question: "Tôi được dùng trợ giúp mấy lần?",
    answer:
      "Mỗi quyền trợ giúp được dùng một lần trong mỗi phiên, khi câu hỏi đang chờ trả lời. Có thể dùng nhiều quyền khác nhau cho cùng một câu hỏi.",
  },
  {
    question: "Hết thời gian thì điều gì xảy ra?",
    answer:
      "Nếu hết thời gian trước khi chốt, phiên chơi kết thúc và số tiền được tính theo mốc an toàn đã đạt. Luôn theo dõi đồng hồ khi cân nhắc phương án.",
  },
];
export const formatMoney = (value) =>
  new Intl.NumberFormat("vi-VN").format(value) + " đ";
