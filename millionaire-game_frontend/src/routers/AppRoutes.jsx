import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/public/HomePage.jsx";
import GuidePage from "../pages/public/GuidePage.jsx";
import NewsPage from "../pages/public/NewsPage.jsx";
import ArticlePage from "../pages/public/ArticlePage.jsx";
import NotFoundPage from "../pages/public/NotFoundPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<ArticlePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
