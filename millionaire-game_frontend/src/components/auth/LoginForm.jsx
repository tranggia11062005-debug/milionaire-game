import { Link } from "react-router-dom";
import AuthField from "./AuthField";
import AuthFormFrame from "./AuthFormFrame";
export default function LoginForm({
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
      title="Chào mừng trở lại"
      subtitle="Đăng nhập để bắt đầu hành trình triệu phú."
      submitLabel="Đăng nhập"
      error={error}
      success={success}
      busy={busy}
      onSubmit={onSubmit}
      footer={
        <>
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </>
      }
    >
      <AuthField name="login" label="Tên đăng nhập hoặc email" {...fields} />
      <AuthField
        name="password"
        label="Mật khẩu"
        type="password"
        maxLength={72}
        autoComplete="current-password"
        {...fields}
      />
      <div className="between">
        <label className="check">
          <input
            type="checkbox"
            checked={values.remember}
            onChange={(e) =>
              setValues({ ...values, remember: e.target.checked })
            }
          />
          Ghi nhớ đăng nhập
        </label>
        <Link to="/forgot-password">Quên mật khẩu?</Link>
      </div>
    </AuthFormFrame>
  );
}
