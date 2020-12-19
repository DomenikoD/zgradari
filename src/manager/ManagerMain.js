import React, { useEffect, useState } from "react";
import Header from "../home/Header";
import ConsoleBuildingSelectionDropDown from "../console/ConsoleBuildingSelectionDropDown";
import ConsoleSideBar from "../console//ConsoleSideBar";
import {
Button
  
} from "react-bootstrap";


const ManagerMain = () => {
  const userInfo ={
    name: "Domeniko Divjak",
    isAdmin: true
  }
  return (
    <div>
      <Header />
      <ConsoleBuildingSelectionDropDown />
      <ConsoleSideBar userInfo={userInfo} />
      
    </div>
  );
};

export default ManagerMain;
