import HeroSection from "../../components/heroSection/HeroSection";
import HomePageBookCard from "../../components/homePageBookCard/HomePageBookCard";
import Layout from "../../components/layout/Layout";
import Year from "../../components/year/Year";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Year />
      <HomePageBookCard />
    </Layout>
  );
};

export default HomePage;
