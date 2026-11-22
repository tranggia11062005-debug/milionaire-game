import Button from "../common/Button";
import Notice from "../common/Notice";
export default function AuthFormFrame({
  title,
  subtitle,
  error,
  success,
  busy,
  submitLabel,
  onSubmit,
  footer,
  children,
}) {
  return (
    <form className="panel auth-form" onSubmit={onSubmit}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Notice>{error}</Notice>
      <Notice type="success">{success}</Notice>
      {children}
      <Button disabled={busy}>{busy ? "Đang xử lý…" : submitLabel}</Button>
      <p className="text-center">{footer}</p>
    </form>
  );
}
