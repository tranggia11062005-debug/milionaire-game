import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";
import Loading from "../components/common/Loading";
export default function ProtectedRoute({ children, admin = false }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <Loading />;
  if (!user)
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  if (admin && user.role !== "ADMIN") return <Navigate to="/" replace />;
  return children;
}
