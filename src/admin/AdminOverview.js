import React from "react";
import { Button } from "react-bootstrap";
import awsbilling from "../billing/awsbilling.PNG";

const AdminOverview = () => {
  return (
    <div>
      <h1>Pregled korištenja AWS-a</h1>
      <h1>Pregled korištenja Zgradara</h1>
      <h5>Poruke za dodavanje i pozivanje predstavnika stanara</h5>
      <h5>Prvo dodavanje iz katastra vlasnika za predstavnika</h5>
      <h5>Poruke za support</h5>
      <h5>Administriranje baze predstavnika i zgrada</h5>
      <h5>Generiranje reporta prema CTO</h5>
      <h5>Specijalne funkcije aplikacije</h5>
      <img className="d-block w-20" src={awsbilling}/>

    </div>
  );
};

export default AdminOverview;
