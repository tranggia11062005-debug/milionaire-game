import { useState } from "react";
import { message } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import AuthLayout from "../../components/layout/AuthLayout";
import LoginForm from "../../components/auth/LoginForm";
export default function LoginPage() {
  const { login } = useAuth();
  const go = useNavigate();
  const [values, setValues] = useState({ remember: false });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setBusy(true);
    try {
      const u = await login(values);
      go(u.role === "ADMIN" ? "/admin" : "/lobby");
    } catch (e) {
      setError(message(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <AuthLayout>
      <LoginForm
        values={values}
        setValues={setValues}
        error={error}
        success={success}
        busy={busy}
        onSubmit={submit}
      />
    </AuthLayout>
  );
}
