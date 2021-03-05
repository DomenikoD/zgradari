import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";

const SecurityOverview = (props) => {
  return (
    <div>
      {console.log("RENDER DocumentsOverview")}

      <Header building={props.building} manager={props.building} />

      <div className="table">
        <h5>Kamere i kontrola pristupa</h5>
      </div>
    </div>
  );
};

export default SecurityOverview;
