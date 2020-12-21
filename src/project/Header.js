import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>Projekti zgrade {props.building.buildingName}</h1>
      <p>Adresa: {props.building.buildingAddress}</p>
      <p>Predstavnik: {props.building.manager.name}</p>
      <p>Kontakt: {props.building.manager.phone}</p>
    </div>
  );
};

export default Header;
