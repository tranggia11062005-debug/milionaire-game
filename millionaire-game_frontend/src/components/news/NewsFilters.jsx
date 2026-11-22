import { categories } from "../../data/articles.js";
export default function NewsFilters({
  query,
  category,
  onQueryChange,
  onCategoryChange,
}) {
  return (
    <section className="news-filters" aria-label="Tìm và lọc bài viết">
      <label className="search-field" htmlFor="article-search">
        <span>Tìm bài viết</span>
        <input
          id="article-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Nhập chủ đề hoặc từ khóa…"
        />
      </label>
      <div className="filter-buttons" role="group" aria-label="Chủ đề">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={"btn small " + (category === item ? "" : "outline")}
            aria-pressed={category === item}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
