import { useState } from "react";
import { api, message } from "../../lib/api";
import { useSearchParams } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";
export default function ResetPasswordPage() {
  const [params] = useSearchParams();
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (values.password !== values.confirm) {
      setError("Mật khẩu xác nhận chưa khớp.");
      return;
    }
    setBusy(true);
    try {
      await api.post("/auth/reset-password", {
        token: params.get("token"),
        password: values.password,
      });
      setSuccess("Đặt lại mật khẩu thành công. Vui lòng đăng nhập.");
    } catch (e) {
      setError(message(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <AuthLayout>
      <ResetPasswordForm
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
