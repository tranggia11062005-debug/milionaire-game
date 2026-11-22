import { useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
import PageHeading from "../../components/common/PageHeading.jsx";
import EmptyState from "../../components/common/EmptyState.jsx";
import ArticleCard from "../../components/news/ArticleCard.jsx";
import NewsFilters from "../../components/news/NewsFilters.jsx";
import NewsPagination from "../../components/news/NewsPagination.jsx";
import { filterArticles } from "../../data/articles.js";
const PAGE_SIZE = 3;
export default function NewsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [page, setPage] = useState(1);
  const results = filterArticles(query, category);
  const totalPages = Math.ceil(results.length / PAGE_SIZE);
  function changeQuery(value) {
    setQuery(value);
    setPage(1);
  }
  function changeCategory(value) {
    setCategory(value);
    setPage(1);
  }
  function reset() {
    setQuery("");
    setCategory("Tất cả");
    setPage(1);
  }
  return (
    <Layout>
      <div className="public-page">
        <PageHeading
          eyebrow="GÓC KIẾN THỨC"
          title="Mỗi ngày, thêm một điều thú vị."
          description="Tìm hiểu luật chơi, tích lũy kinh nghiệm và nuôi dưỡng sự tò mò."
        />
        <NewsFilters
          query={query}
          category={category}
          onQueryChange={changeQuery}
          onCategoryChange={changeCategory}
        />
        <p className="result-count" role="status" aria-live="polite">
          {results.length} bài viết
          {category !== "Tất cả" ? " · " + category : ""}
        </p>
        {results.length ? (
          <div className="public-grid three">
            {results
              .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
              .map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
          </div>
        ) : (
          <EmptyState title="Chưa tìm thấy bài viết phù hợp" onReset={reset}>
            Thử từ khóa ngắn hơn hoặc chọn chủ đề khác.
          </EmptyState>
        )}
        <NewsPagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </Layout>
  );
}
