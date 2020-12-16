import React from "react";
import Amplify from "aws-amplify";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import LandingCarousel from "./LandingCarousel";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const TenantMain = () => {
  return (
    <div>
      <Header />
      <Landing />
      <LandingCarousel />
      <Footer />
    </div>
  );
};

export default TenantMain;
