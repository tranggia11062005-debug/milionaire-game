import { Link } from "react-router-dom";
import AuthField from "./AuthField";
import AuthFormFrame from "./AuthFormFrame";
export default function ResetPasswordForm({
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
      title="Đặt lại mật khẩu"
      subtitle="Tạo mật khẩu mới để bảo vệ tài khoản."
      submitLabel="Lưu mật khẩu"
      error={error}
      success={success}
      busy={busy}
      onSubmit={onSubmit}
      footer={<Link to="/login">Quay lại đăng nhập</Link>}
    >
      <AuthField
        name="password"
        label="Mật khẩu mới"
        type="password"
        minLength={8}
        maxLength={72}
        autoComplete="new-password"
        {...fields}
      />
      <AuthField
        name="confirm"
        label="Xác nhận mật khẩu"
        type="password"
        minLength={8}
        maxLength={72}
        {...fields}
      />
    </AuthFormFrame>
  );
}
