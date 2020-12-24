import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "../comment/CommentsList";
import  { API, graphqlOperation } from "aws-amplify";
import { createProject } from "../graphql/mutations";
import { listProjects } from "../graphql/queries";
import Header from "./Header";

const initialProjectState = { name: "", cost: "0.00", rating: "" };

const ProjectOverview = (props) => {
  const [formState, setFormState] = useState(initialProjectState);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  });
  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchProjects() {
    try {
      const projectsData = await API.graphql(graphqlOperation(listProjects));
      const projects = projectsData.data.listProjects.items;
      setProjects(projects);
    } catch (err) {
      console.log("error fetchProjects: ", err);
    }
  }
  async function fetchCommentsByProjectId(ID) {
    try {
      console.log("error not implemented: ");
    } catch (err) {
      console.log("error fetchProjects: ", err);
    }
  }

  async function addProject() {
    try {
      if (!formState.name || !formState.cost || !formState.rating) return;
      const project = { ...formState };
      project.buildingID = "82eb6b6a-241a-4f6c-bdad-67be5df1e89f";
      setProjects([...projects, project]);
      setFormState(initialProjectState);

      await API.graphql(graphqlOperation(createProject, { input: project }));
    } catch (err) {
      console.log("error addProject: ", err);
    }
  }

  function alertClicked() {}

  return (
    <div>
      <Header building={props.building} manager={props.building} />

      <div style={styles.container}>
        <h2>Dodaj projekt</h2>
        <input
          onChange={(event) => setInput("name", event.target.value)}
          style={styles.input}
          value={formState.name}
          placeholder="Naziv"
        />
        <input
          onChange={(event) => setInput("cost", event.target.value)}
          style={styles.input}
          value={formState.cost}
          placeholder="Cijena"
        />
        <input
          onChange={(event) => setInput("rating", event.target.value)}
          style={styles.input}
          value={formState.rating}
          placeholder="Ocijena"
        />
        <button style={styles.button} onClick={addProject}>
          Dodaj projekt
        </button>
      </div>

      <div className="projects list">
        <ListGroup className="flex-column" defaultActiveKey="#link1">
          {/* map po nazivima projekata, bolje dodati u zasebnu komponentu, i onKlik handler. */}
          <h3>Lista projekata</h3>
          {projects.map((project, index) => (
            <div key={project.id ? project.id : index} style={styles.manager}>
              <ListGroup.Item action>{project.name}</ListGroup.Item>
              <p style={styles.managerInfo}>Cijena: {project.cost} Ocjena: {project.rating}/10</p>
            </div>
          ))}
        </ListGroup>
      </div>
      <p></p>

      <h5>Pregled projekta: Uređenje stubišta</h5>
      <p></p>
      <h5>Komentari</h5>
      <CommentsList />
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

export default ProjectOverview;
