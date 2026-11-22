export default function PageHeading({ eyebrow, title, description }) {
  return (
    <header className="public-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}
