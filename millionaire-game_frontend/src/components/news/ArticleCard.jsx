import { Link } from "react-router-dom";
export default function ArticleCard({ article }) {
  return (
    <article className="panel article-card">
      <div className="article-cover" aria-hidden="true">
        <span>AI LÀ TRIỆU PHÚ</span>
        <strong>{article.category}</strong>
        <div className="cover-orbit" />
      </div>
      <div className="article-card-body">
        <div className="article-meta">
          <span>{article.category}</span>
          <span>{article.minutes} phút đọc</span>
        </div>
        <h2>
          <Link to={"/news/" + article.slug}>{article.title}</Link>
        </h2>
        <p>{article.summary}</p>
        <Link
          className="article-read"
          to={"/news/" + article.slug}
          aria-label={"Đọc bài: " + article.title}
        >
          Đọc bài viết <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
