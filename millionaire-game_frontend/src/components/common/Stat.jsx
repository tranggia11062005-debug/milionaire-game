export default function Stat({ label, value, detail }) {
  return (
    <div className="stat panel">
      <span>{label}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </div>
  );
}
