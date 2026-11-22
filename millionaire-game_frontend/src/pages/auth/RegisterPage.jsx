// import { useState } from "react";
// import { api, message } from "../../lib/api";
// import AuthLayout from "../../components/layout/AuthLayout";
// import RegisterForm from "../../components/auth/RegisterForm";
// export default function RegisterPage() {
//   const [values, setValues] = useState({});
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [busy, setBusy] = useState(false);
//   async function submit(e) {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     if (values.password !== values.confirm) {
//       setError("Mật khẩu xác nhận chưa khớp.");
//       return;
//     }
//     setBusy(true);
//     try {
//       await api.post("/auth/register", values);
//       setSuccess("Đăng ký thành công. Bạn có thể đăng nhập ngay.");
//     } catch (e) {
//       setError(message(e));
//     } finally {
//       setBusy(false);
//     }
//   }
//   return (
//     <AuthLayout>
//       <RegisterForm
//         values={values}
//         setValues={setValues}
//         error={error}
//         success={success}
//         busy={busy}
//         onSubmit={submit}
//       />
//     </AuthLayout>
//   );
// }
