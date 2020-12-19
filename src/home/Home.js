import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import LandingCarousel from "./LandingCarousel";



const Home = () => {
  return (
    <div>
      <Header />
      <Landing />
      <LandingCarousel />
      <Footer />
    </div>
  );
};

export default Home;
