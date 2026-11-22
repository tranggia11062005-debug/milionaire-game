import { questions } from "../../data/gameGuide.js";
export default function GuideFaq() {
  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title">Những điều cần nhớ</h2>
      <div className="faq-list">
        {questions.map((item) => (
          <details className="panel" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
