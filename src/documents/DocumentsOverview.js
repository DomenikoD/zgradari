import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";
import { API, graphqlOperation } from "aws-amplify";
import { createTenant } from "../graphql/mutations";
import { listTenants } from "../graphql/queries";

const DocumentsOverview = (props) => {
  return (
    <div>
      <Header building={props.building} manager={props.building} />

      <div className="table">
        <h5>Dokumenti OD DO FILTRIRANJE todo's</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Naziv dokumenta</th>
              <th>Opis</th>
              <th>Datum dijeljenja</th>
              <th>Vidljivo stanarima</th>
              <th>Preuzmi</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>ZK uložak</th>
              <th>ZK uložak ove zgrade</th>
              <th>2020-12-11</th>
              <th>DA</th>
              <th>download now</th>
              <th>X/0</th>
            </tr>
            <tr>
              <th>Zabilježba suda Z-142341-12343</th>
              <th>Odbaćena pritužba stanara zbog upisa nerazvrstanih cesata</th>
              <th>2020-12-11</th>
              <th>DA</th>
              <th>download now</th>
              <th>X/0</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DocumentsOverview;
