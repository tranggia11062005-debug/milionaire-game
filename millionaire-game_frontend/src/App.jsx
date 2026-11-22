import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers/AppRoutes.jsx";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
