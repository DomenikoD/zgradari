import React from "react";
import { Button } from "react-bootstrap";

const SettingsOverview = () => {
  return (
    <div>
      {console.log("RENDER SettingsOverview")}

      <h1>Postavke</h1>

      <h5>Dodaj zgradu</h5>
      <h5>Prenesi status predstavnika stanara na stanara</h5>
      <h5>Učitaj PDF kataskarskog izvadka</h5>
      <h5>Dodaj/Obriši stanare</h5>
      <h5>Dodaj/Obriši projekt</h5>
      <h5>Dodaj/Obriši anketu</h5>
      <h5>Dodaj/Obriši komentar</h5>
    </div>
  );
};

export default SettingsOverview;
