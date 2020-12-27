import React, { useEffect, useState } from "react";
import Header from "../home/Header";
import ConsoleBuildingSelectionDropDown from "../console/ConsoleBuildingSelectionDropDown";
import ConsoleSideBar from "../console//ConsoleSideBar";

const ManagerMain = () => {
  const userInfo ={
    name: "Domeniko Divjak",
    isAdmin: true
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
