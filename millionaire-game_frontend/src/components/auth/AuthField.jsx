import Field from "../common/Field";
export default function AuthField({
  name,
  values,
  setValues,
  type = "text",
  ...props
}) {
  return (
    <Field
      type={type}
      value={values[name] || ""}
      onChange={(e) => setValues({ ...values, [name]: e.target.value })}
      required
      {...props}
    />
  );
}
