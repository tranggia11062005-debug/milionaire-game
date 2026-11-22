import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers/AppRoutes.jsx";
import "./App.css";
import "./styles/public-pages.css";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
