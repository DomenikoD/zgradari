import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";
import { API, graphqlOperation } from "aws-amplify";
import { createTenant } from "../graphql/mutations";
import { listTenants } from "../graphql/queries";

const initialTenantState = {
  name: "ime i prezime",
  email: "@email",
  phoneNumber: "+385xxxxxxxx",
  aboutMe: "",
  ownership: "opis vlasništva",
};

const TenantOverview = (props) => {
  const [formState, setFormState] = useState(initialTenantState);
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    fetchTenants();
  });
  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTenants() {
    try {
      const tenantsData = await API.graphql(graphqlOperation(listTenants));
      const tenants = tenantsData.data.listTenants.items;
      setTenants(tenants);
    } catch (err) {
      console.log("error fetchTenants: ", err);
    }
  }

  async function addTenant() {
    try {
      if (
        !formState.name ||
        !formState.email ||
        !formState.phoneNumber ||
        !formState.aboutMe ||
        !formState.ownership
      )
        return;
      const tenant = { ...formState };
      tenant.buildingID = "82eb6b6a-241a-4f6c-bdad-67be5df1e89f";
      setTenants([...tenants, tenant]);
      setFormState(initialTenantState);

      await API.graphql(graphqlOperation(createTenant, { input: tenant }));
    } catch (err) {
      console.log("error addTenant: ", err);
    }
  }
  return (
    <div>
      <Header building={props.building} manager={props.building} />

      <div style={styles.container}>
        <h2>Dodaj stanara u {props.building.buildingAddress}</h2>
        <input
          onChange={(event) => setInput("name", event.target.value)}
          style={styles.input}
          value={formState.name}
          placeholder="Ime i prezime"
        />
        <input
          onChange={(event) => setInput("email", event.target.value)}
          style={styles.input}
          value={formState.email}
          placeholder="Email"
        />
        <input
          onChange={(event) => setInput("phoneNumber", event.target.value)}
          style={styles.input}
          value={formState.phoneNumber}
          placeholder="Kontakt broj"
        />
        <input
          onChange={(event) => setInput("ownership", event.target.value)}
          style={styles.input}
          value={formState.ownership}
          placeholder="Vlasništvo"
        />
        <input
          onChange={(event) => setInput("aboutMe", event.target.value)}
          style={styles.input}
          value={formState.aboutMe}
          placeholder="O meni"
        />
        <button style={styles.button} onClick={addTenant}>
          Dodaj stanara
        </button>
      </div>

      <div className="table">
        <h5>Pregled stanara OD DO FILTRIRANJE todo's</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ime i prezime</th>
              <th>Email</th>
              <th>Kontakt broj</th>
              <th>Vlasništvo</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {tenants.map((tenant, index) => (
              <tr key={tenant.id ? tenant.id : index} style={styles.manager}>
                <th>{tenant.name}</th>
                <th>{tenant.email}</th>
                <th>{tenant.phoneNumber}</th>
                <th>{tenant.aboutMe}</th>
                <th>{tenant.ownership}</th>
                <th>X/0</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  manager: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  managerName: { fontSize: 20, fontWeight: "bold" },
  managerInfo: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};
export default TenantOverview;
