import { Link } from "react-router-dom";
import AuthField from "./AuthField";
import AuthFormFrame from "./AuthFormFrame";
export default function ForgotPasswordForm({
  values,
  setValues,
  error,
  success,
  busy,
  onSubmit,
}) {
  const fields = { values, setValues };
  return (
    <AuthFormFrame
      title="Quên mật khẩu?"
      subtitle="Nhập email đã đăng ký để nhận liên kết khôi phục."
      submitLabel="Gửi liên kết"
      error={error}
      success={success}
      busy={busy}
      onSubmit={onSubmit}
      footer={<Link to="/login">Quay lại đăng nhập</Link>}
    >
      <AuthField name="email" label="Email" type="email" {...fields} />
    </AuthFormFrame>
  );
}
