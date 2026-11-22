import assert from "node:assert/strict";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "../src/routers/AppRoutes.jsx";
import { articles, filterArticles, getArticle } from "../src/data/articles.js";
import { prizes } from "../src/data/gameGuide.js";
const cases = [
  ["/", "Một giấc mơ triệu phú"],
  ["/guide", "15 mốc tiền thưởng"],
  ["/news", "Tìm bài viết"],
  ["/news/" + articles[0].slug, articles[0].title],
  ["/news/khong-ton-tai", "Không tìm thấy trang"],
  ["/khong-ton-tai", "Không tìm thấy trang"],
];
for (const [route, content] of cases) {
  const html = renderToString(
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>,
  );
  assert.ok(html.includes(content), route);
  assert.ok(html.includes('href="/guide"'));
  assert.ok(html.includes('href="/news"'));
}
assert.equal(new Set(articles.map((a) => a.slug)).size, articles.length);
for (const article of articles) {
  assert.equal(getArticle(article.slug), article);
  assert.ok(article.sections.length > 0);
}
assert.ok(
  filterArticles("tro giup").some(
    (a) => a.slug === "su-dung-bon-quyen-tro-giup",
  ),
);
assert.ok(
  filterArticles("ĐỌC KỸ").some((a) => a.slug === "doc-ky-de-truoc-khi-chot"),
);
assert.equal(filterArticles("khong-co-tu-khoa-nay").length, 0);
assert.ok(
  filterArticles("", "Kinh nghiệm").every((a) => a.category === "Kinh nghiệm"),
);
assert.equal(prizes.length, 15);
assert.equal(prizes[4], 3000000);
assert.equal(prizes[9], 30000000);
assert.equal(prizes[14], 250000000);
console.log(
  "PASS: 6 public routes, article data/search/categories and 15 prize levels.",
);
