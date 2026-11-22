import axios from "axios";
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 15000,
});
export function savedToken() {
  return sessionStorage.getItem("token") || localStorage.getItem("token");
}
api.interceptors.request.use((config) => {
  const token = savedToken();
  if (token) config.headers.Authorization = "Bearer " + token;
  return config;
});
export function message(error) {
  return (
    error.response?.data?.message ||
    "Không thể kết nối máy chủ. Vui lòng thử lại."
  );
}
export const money = (value) =>
  new Intl.NumberFormat("vi-VN").format(value || 0) + " đ";
export const date = (value) =>
  value ? new Date(value).toLocaleString("vi-VN") : "—";
