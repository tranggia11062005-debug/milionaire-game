export default function EmptyState({ title, children, onReset }) {
  return (
    <div className="panel empty-state" role="status">
      <h2>{title}</h2>
      <p>{children}</p>
      {onReset && (
        <button className="btn outline" type="button" onClick={onReset}>
          Xóa bộ lọc
        </button>
      )}
    </div>
  );
}
