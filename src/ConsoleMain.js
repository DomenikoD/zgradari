import React, { useEffect, useState } from "react";
import Header from "./Header";
import ConsoleBuildingSelectionDropDown from "./ConsoleBuildingSelectionDropDown";
import ConsoleSideBar from "./ConsoleSideBar";
import {
Button
  
} from "react-bootstrap";


const ConsoleMain = () => {

  return (
    <div>
      <Header />
      <ConsoleBuildingSelectionDropDown />
      <ConsoleSideBar />
      
    </div>
  );
};

export default ConsoleMain;
