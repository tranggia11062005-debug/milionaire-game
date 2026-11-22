import { useEffect, useState } from "react";
import { api, savedToken } from "../lib/api";
import { AuthContext } from "./auth";
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(() => Boolean(savedToken()));
  useEffect(() => {
    if (!savedToken()) return;
    api
      .get("/auth/me")
      .then((r) => setUser(r.data))
      .catch(() => {
        sessionStorage.removeItem("token");
        localStorage.removeItem("token");
      })
      .finally(() => setLoading(false));
  }, []);
  async function login(values) {
    const { data } = await api.post("/auth/login", values);
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    (values.remember ? localStorage : sessionStorage).setItem(
      "token",
      data.accessToken,
    );
    setUser(data.user);
    return data.user;
  }
  async function logout() {
    try {
      await api.post("/auth/logout");
    } finally {
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
      setUser(null);
    }
  }
  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
