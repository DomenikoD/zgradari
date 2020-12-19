import React from "react";
import { Button, Table, ProgressBar } from "react-bootstrap";
const TenantOverview = (props) => {
  return (
    <div>
      <h1>Pregled stanara zgrade {props.building.buildingName}</h1>
      <p>Adresa: {props.building.buildingAddress}</p>
      <div className="news tablica">
        <h5>Dodaj stanara</h5>
        <p>Ime i Prezime FORMA</p>
        <p>FORMA</p>
        <p>FORMA</p>
      </div>
      <div className="status tablica">
        <h5>Pregled stanara OD DO FILTRIRANJE</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ime i prezime</th>
              <th>Adresa</th>
              <th>Kontakt</th>
              <th>Vlasništvo</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Domeniko Divjak</td>
              <td>Gizz 11, Zagreb</td>
              <td>+385958842187 dom.div@gmail.com</td>
              <td>Stan 3, parking 3</td>
              <th>x</th>

            </tr>
            <tr>
              <td>Ivo Ivić</td>
              <td>Ul. Bla Blavica 11</td>
              <td>+123546798 ivvv.ivvv@gmail.com</td>
              <td>Stan 1, parking 1</td>
              <th>x</th>

            </tr>
            <tr>
              <td>Domeniko Divjak</td>
              <td>Gizz 11</td>
              <td>+385958842187 dom.div@gmail.com</td>
              <td>Stan 3, parking 3</td>
              <th>O</th>

            </tr>
            <tr>
              <td>Domeniko Divjak</td>
              <td>Gizz 11</td>
              <td>+385958842187 dom.div@gmail.com</td>
              <td>Stan 3, parking 3</td>
              <th>x</th>

            </tr>

  

          </tbody>
        </Table>
      </div>

    </div>
  );
};

export default TenantOverview;
