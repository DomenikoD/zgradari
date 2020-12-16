import React from "react";
import Amplify from "aws-amplify";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const ManagerMain = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
};

export default ManagerMain;
