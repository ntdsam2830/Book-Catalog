import HeroSection from "../../components/heroSection/HeroSection";
import HomePageBookCard from "../../components/homePageBookCard/HomePageBookCard";
import Layout from "../../components/layout/Layout";
// import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import Year from "../../components/year/Year";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Year />
      <HomePageBookCard />
      <Track />
      {/* <Testimonial/> */}
    </Layout>
  );
};

export default HomePage;
