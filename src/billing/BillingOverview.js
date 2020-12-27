import React from "react";
import { Button } from "react-bootstrap";
import billingGui from "./zgradarinaplata.PNG";
const BillingOverview = (prop) => {
  return (
    <div>
      {console.log("RENDER BillingOverview")}

      <h1>Naplata web-aplikacije</h1>
      <h1>Trenutni status</h1>
      <h5>
        Korištenje (prikaz po mjesecima) / Uplate (dodaj karticu i povijest){" "}
      </h5>
      <h5>Povećaj broj korisnika</h5>
      <h5>Povećaj broj zgrada</h5>
      <h5>Povećaj broj komentara</h5>
      <h5>Povećaj memoriju arhive dokumenata</h5>
      <h5>Povećaj/Dodaj/Obriši</h5>
      <img src={billingGui}></img>
    </div>
  );
};

export default BillingOverview;
