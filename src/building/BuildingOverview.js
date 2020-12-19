import React from "react";
import { Button, Table, ProgressBar } from "react-bootstrap";
const BuildingOverview = (props) => {
  return (
    <div>
      <h1>Pregled zgrade {props.building.buildingName}</h1>
      <p>Adresa: {props.building.buildingAddress}</p>
      <p>Predstavnik: {props.building.manager.name}</p>
      <p>Kontakt: {props.building.manager.phone}</p>
      <div className="status tablica">
        <h5>Status</h5>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th> </th>
            <th>Ukupno</th>
            <th>Preostalo</th>
            <th>icon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stanara</td>
            <td>49</td>
            <td>50</td>
            <td>NEW</td>
          </tr>
          <tr>
          <td>Poruke</td>
            <td>52</td>
            <td>50</td>
            <td>NEW</td>
          </tr>
          <tr>
          <td>Dokumenti</td>
            <td>2</td>
            <td>50</td>
            <td>NEW</td>
          </tr>
  
        </tbody>
      </Table>
      </div>
      <div className="news tablica">
        <h5>Novosti</h5>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategorija</th>
            <th>Opis</th>
            <th>Datum</th>
            <th>icon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Projekt</td>
            <td>Ideja za novi projekat</td>
            <td>2020-10-10 10:10</td>
            <td>NEW</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Komentar</td>
            <td>Novi komentar korisnika "RM"</td>
            <td>2020-10-10 10:10</td>
            <td>SEEN</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Anketa</td>
            <td>Anketa odabira izvođača završena<ProgressBar  now={100} /></td>
            <td>2020-10-10 10:10</td>
            <td>GOTO</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anketa</td>
            <td>U tijeku <ProgressBar animated now={65} /></td>
            <td>2020-10-10 10:10</td>
            <td>GOTO</td>
          </tr>
          
          <tr>
            <td>5</td>
            <td>Projekt</td>
            <td>Uređenje stubišta <ProgressBar animated now={25} /></td>
            <td>2020-10-10 10:10</td>
            <td>NEW</td>
          </tr>
        </tbody>
      </Table>
      
    </div>
  );
};

export default BuildingOverview;
