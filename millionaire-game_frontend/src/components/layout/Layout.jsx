import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
export default function Layout({ children }) {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        Đến nội dung chính
      </a>
      <Header />
      <main id="main-content" className="container" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
