import { Link } from "react-router-dom";
import AuthField from "./AuthField";
import AuthFormFrame from "./AuthFormFrame";
export default function RegisterForm({
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
      title="Tạo tài khoản"
      subtitle="Một bước để bắt đầu chinh phục kiến thức."
      submitLabel="Đăng ký"
      error={error}
      success={success}
      busy={busy}
      onSubmit={onSubmit}
      footer={<Link to="/login">Quay lại đăng nhập</Link>}
    >
      <AuthField
        name="fullName"
        label="Họ và tên"
        type="text"
        maxLength={100}
        {...fields}
      />
      <AuthField
        name="username"
        label="Tên đăng nhập"
        type="text"
        pattern="[A-Za-z0-9_]{3,50}"
        title="3–50 ký tự gồm chữ, số và dấu gạch dưới"
        {...fields}
      />
      <AuthField name="email" label="Email" type="email" {...fields} />
      <AuthField
        name="password"
        label="Mật khẩu"
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
