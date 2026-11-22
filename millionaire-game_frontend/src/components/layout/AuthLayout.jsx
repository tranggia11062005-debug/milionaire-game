import Layout from "./Layout";
import AuthIntro from "../auth/AuthIntro";
export default function AuthLayout({ children }) {
  return (
    <Layout>
      <section className="auth-grid">
        <AuthIntro />
        {children}
      </section>
    </Layout>
  );
}
