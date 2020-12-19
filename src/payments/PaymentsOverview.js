import React from "react";
import { Button, Table, ProgressBar } from "react-bootstrap";
const PaymentsOverview = (props) => {
  return (
    <div>
      <h1>Pregled plačanja zgrade {props.building.buildingName}</h1>
      <p>Adresa: {props.building.buildingAddress}</p>
      <p>Predstavnik: {props.building.manager.name}</p>
      <p>Kontakt: {props.building.manager.phone}</p>
      <p>Broj računa: HR123412341234</p>
      <p>Stanje računa na dan 2020-12-12: 120.213,00 kn</p>

      <div className="status tablica">
        <h5>Pregled plačanja OD DO FILTRIRANJE</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Naziv troška</th>
              <th>Tvrtka</th>
              <th>Kločina</th>
              <th>Jedinična cijena</th>
              <th>Ukupno</th>
              <th>Datum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adaptacija stubišta</td>
              <td>VM interijeri</td>
              <td>1</td>
              <td>10.000,00</td>
              <td>10.000,00</td>
              <td>2020-12-12</td>
            </tr>
            <tr>
              <td>Adaptacija stubišta</td>
              <td>VM interijeri</td>
              <td>1</td>
              <td>10.000,00</td>
              <td>10.000,00</td>
              <td>2020-12-12</td>
            </tr>
            <tr>
              <td>Adaptacija stubišta</td>
              <td>VM interijeri</td>
              <td>1</td>
              <td>10.000,00</td>
              <td>10.000,00</td>
              <td>2020-12-12</td>
            </tr>
            <tr>
              <td>Adaptacija stubišta</td>
              <td>VM interijeri</td>
              <td>1</td>
              <td>10.000,00</td>
              <td>10.000,00</td>
              <td>2020-12-12</td>
            </tr>

          </tbody>
        </Table>
      </div>
      <div className="news tablica">
        <h5>Ukupno plačanje</h5>
        <p>99.110kn </p>
      </div>
    </div>
  );
};

export default PaymentsOverview;
