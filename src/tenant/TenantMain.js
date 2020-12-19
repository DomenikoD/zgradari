import React from "react";
import Header from "../home/Header";
import ConsoleSideBar from "../console/ConsoleSideBar";

const TenantMain = () => {
  const userInfo ={
    name: "Ivo Ivić",
    isAdmin: false
  }
  return (
    <div>
      <Header />
      <ConsoleSideBar userInfo={userInfo} />
      
    </div>
  );
};

export default TenantMain;
