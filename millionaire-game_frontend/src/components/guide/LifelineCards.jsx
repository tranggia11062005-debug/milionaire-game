import { lifelines } from "../../data/gameGuide.js";
export default function LifelineCards() {
  return (
    <section aria-labelledby="lifelines-title">
      <h2 id="lifelines-title">Bốn quyền trợ giúp</h2>
      <div className="public-grid two">
        {lifelines.map((item) => (
          <article className="panel public-card" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
