import { useContext } from "react";

import HeroSection from "../../components/heroSection/HeroSection";
import HomePageBookCard from "../../components/homePageBookCard/HomePageBookCard";
import Layout from "../../components/layout/Layout";
// import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import Year from "../../components/year/Year";
import myContext from "../../context/myContext";

const HomePage = () => {
  const context = useContext(myContext);
  const name = context;
  return (
    <Layout>
      <HeroSection />
      <Year />
      <HomePageBookCard />
      <Track />
      {/* <Testimonial/> */}
      {name}
    </Layout>
  );
};

export default HomePage;
