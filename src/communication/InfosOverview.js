import React from "react";
import { Button } from "react-bootstrap";

const InfosOverview = (props) => {
  return (
    <div>
      {console.log("RENDER InfosOverview")}

      <h5>
        slanje notifikacija, whatsapp (integracija infobip lol), mailova
        (dvosmjerno, integracija sa mail klijentima){" "}
      </h5>
      <h5 hidden={props.userInfo.isAdmin}>
        odabir stanara i informiranje o novim anketama, prijektima i drugim
        obavijestima
      </h5>
      <h5>nemogućnost selektivnog slanja informacija radi lobiranja večinom</h5>
    </div>
  );
};

export default InfosOverview;
