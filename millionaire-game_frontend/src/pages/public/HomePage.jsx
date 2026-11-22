import Layout from "../../components/layout/Layout.jsx";
import HomeHero from "../../components/home/HomeHero.jsx";
import HomeFeatures from "../../components/home/HomeFeatures.jsx";

export default function HomePage() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
    </Layout>
  );
}
