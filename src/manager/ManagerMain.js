import React, { useEffect, useState } from "react";
import Header from "../home/Header";
import ConsoleBuildingSelectionDropDown from "../console/ConsoleBuildingSelectionDropDown";
import ConsoleSideBar from "../console//ConsoleSideBar";

const ManagerMain = () => {
  const userInfo ={
    name: "Domeniko Divjak",
    isAdmin: true,
    tenantID: "715ec9f9-5b72-4dd6-9f9d-434167738977"
  }
  return (
    <div>
          {console.log('RENDER ManagerMain')}

      <Header />
      <ConsoleBuildingSelectionDropDown />
      <ConsoleSideBar userInfo={userInfo} />
      {console.log('RENDER ManagerMain FIN')}

    </div>
  );
};

export default ManagerMain;
