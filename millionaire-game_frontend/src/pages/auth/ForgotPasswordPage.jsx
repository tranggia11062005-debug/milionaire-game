import { useState } from "react";
import { api, message } from "../../lib/api";
import AuthLayout from "../../components/layout/AuthLayout";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
export default function ForgotPasswordPage() {
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setBusy(true);
    try {
      const r = await api.post("/auth/forgot-password", {
        email: values.email,
      });
      setSuccess(r.data.message);
    } catch (e) {
      setError(message(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <AuthLayout>
      <ForgotPasswordForm
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
