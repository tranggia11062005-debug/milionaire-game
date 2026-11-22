export default function NewsPagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <nav className="pagination" aria-label="Phân trang bài viết">
      <button
        className="btn outline small"
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Trước
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (number) => (
          <button
            className={"btn small " + (number === page ? "" : "outline")}
            type="button"
            key={number}
            aria-current={number === page ? "page" : undefined}
            aria-label={"Trang " + number}
            onClick={() => onChange(number)}
          >
            {number}
          </button>
        ),
      )}
      <button
        className="btn outline small"
        type="button"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Sau
      </button>
    </nav>
  );
}
