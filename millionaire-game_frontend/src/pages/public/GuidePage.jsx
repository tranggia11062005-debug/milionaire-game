import Layout from "../../components/layout/Layout.jsx";
import PageHeading from "../../components/common/PageHeading.jsx";
import GuideOverview from "../../components/guide/GuideOverview.jsx";
import LifelineCards from "../../components/guide/LifelineCards.jsx";
import PrizeLadder from "../../components/guide/PrizeLadder.jsx";
import GuideFaq from "../../components/guide/GuideFaq.jsx";
import { Link } from "react-router-dom";
export default function GuidePage() {
  return (
    <Layout>
      <div className="public-page">
        <PageHeading
          eyebrow="HƯỚNG DẪN TRÒ CHƠI"
          title="Bạn đã sẵn sàng trở thành triệu phú?"
          description="Nắm luật chơi trước khi bước vào ghế nóng."
        />
        <GuideOverview />
        <div className="guide-columns">
          <div className="guide-main">
            <LifelineCards />
            <GuideFaq />
            <Link className="btn outline" to="/news">
              Khám phá góc kiến thức
            </Link>
          </div>
          <PrizeLadder />
        </div>
      </div>
    </Layout>
  );
}
