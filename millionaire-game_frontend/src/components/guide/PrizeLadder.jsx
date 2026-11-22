import { prizes, formatMoney } from "../../data/gameGuide.js";
export default function PrizeLadder() {
  return (
    <section className="panel public-card" aria-labelledby="prize-title">
      <h2 id="prize-title">15 mốc tiền thưởng</h2>
      <p>Hai mốc an toàn ở câu 5 và câu 10. Câu 15 là đích chiến thắng.</p>
      <ol className="prize-ladder">
        {prizes.map((money, index) => (
          <li
            className={[5, 10, 15].includes(index + 1) ? "milestone" : ""}
            key={money}
          >
            <span>Câu {index + 1}</span>
            <strong>{formatMoney(money)}</strong>
            {[5, 10].includes(index + 1) && <small>Mốc an toàn</small>}
            {index === 14 && <small>Chiến thắng</small>}
          </li>
        ))}
      </ol>
    </section>
  );
}
