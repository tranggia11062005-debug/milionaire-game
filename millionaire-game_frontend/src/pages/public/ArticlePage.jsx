import { Link, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout.jsx";
import ArticleBody from "../../components/news/ArticleBody.jsx";
import ArticleCard from "../../components/news/ArticleCard.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { articles, getArticle } from "../../data/articles.js";
export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <NotFoundPage />;
  const related = articles
    .filter((item) => item.slug !== slug)
    .sort(
      (a, b) =>
        Number(b.category === article.category) -
        Number(a.category === article.category),
    )
    .slice(0, 2);
  return (
    <Layout>
      <div className="public-page">
        <nav className="breadcrumbs" aria-label="Đường dẫn">
          <Link to="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <Link to="/news">Tin tức</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.category}</span>
        </nav>
        <article className="panel article-detail">
          <header>
            <div className="article-meta">
              <span>{article.category}</span>
              <span>{article.minutes} phút đọc</span>
            </div>
            <h1>{article.title}</h1>
            <p className="article-intro">{article.summary}</p>
          </header>
          <ArticleBody article={article} />
          <Link className="btn outline" to="/news">
            ← Tất cả bài viết
          </Link>
        </article>
        <section aria-labelledby="related-title">
          <h2 id="related-title">Có thể bạn quan tâm</h2>
          <div className="public-grid two">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
