import React from "react";
import { Button, Table, ProgressBar } from "react-bootstrap";
const FinanceOverview = (props) => {
  return (
    <div>
            {console.log("RENDER FinanceOverview")}

      <h1>Pregled pričuve zgrade {props.building.buildingName}</h1>
      <p>Adresa: {props.building.buildingAddress}</p>
      <p>Predstavnik: {props.building.manager.name}</p>
      <p>Kontakt: {props.building.manager.phone}</p>
      <p>Broj računa: HR123412341234</p>
      <p>Stanje računa na dan 2020-12-12: 120.213,00 kn</p>

      <div className="status tablica">
        <h5>Pregled uplata OD DO STANAR FILTRIRANJE</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Stanar</th>
              <th>Ukupno [kn]</th>
              <th>Dug [kn]</th>
              <th>Datum uplate </th>
              <th>icon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Domeniko Divjak</td>
              <td>10.000,00</td>
              <td>0</td>
              <td>2020-12-12</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Domeniko Divjak</td>
              <td>10.000,00</td>
              <td>0</td>
              <td>2020-12-12</td> 
              <td>O</td>
            </tr>
            <tr>
              <td>Domeniko Divjak</td>
              <td>10.000,00</td>
              <td>0</td>
              <td>2020-12-12</td> 
              <td>O</td>
            </tr>
            <tr>
              <td>Domeniko Divjak</td>
              <td>10.000,00</td>
              <td>110</td>
              <td>2019-12-11</td>
              <td>DUG</td>
            </tr>
            <tr>
              <td>Domeniko Divjak</td>
              <td>10.000,00</td>
              <td>0</td>
              <td>2020-12-12</td>
            </tr>
            <tr>
              <td>Domeniko Divjak</td>
              <td>10.000,00</td>
              <td>0</td>
              <td>NEW</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="news tablica">
      <h5>Stanje</h5>
      <p>Preplata od 110kn </p>
      </div>
    </div>
  );
};

export default FinanceOverview;
