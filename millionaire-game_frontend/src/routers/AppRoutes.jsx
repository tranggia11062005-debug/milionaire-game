import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/public/HomePage.jsx";
import GuidePage from "../pages/public/GuidePage.jsx";
import NewsPage from "../pages/public/NewsPage.jsx";
import ArticlePage from "../pages/public/ArticlePage.jsx";
import NotFoundPage from "../pages/public/NotFoundPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage.jsx";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage.jsx";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<ArticlePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
