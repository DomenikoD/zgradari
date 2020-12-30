import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CommentsList from "../comment/CommentsList";
import { API, graphqlOperation } from "aws-amplify";
import { createProject } from "../graphql/mutations";
import { projectsByBuilding, commentsByProject } from "../graphql/queries";
import Header from "./Header";
import CommentAdd from "../comment/CommentAdd";

const initialProjectState = { name: "", cost: "0.00", rating: "" };
const selectedProjectData = { projectID: "", name: "" };

const ProjectOverview = (props) => {
  const [formState, setFormState] = useState(initialProjectState);
  const [projects, setProjects] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedProject, setSelectedProject] = useState(selectedProjectData);

  useEffect(() => {
    fetchProjects();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchProjects() {
    try {
      /* 82eb6b6a-241a-4f6c-bdad-67be5df1e89f props.building.buildingID */
      console.log(
        "GET PROJECTS projectsByBuilding buildingID: ",
        props.building.buildingID
      );
      const projectsData = await API.graphql(
        graphqlOperation(projectsByBuilding, {
          buildingID: props.building.buildingID,
        })
      );
      const projects = projectsData.data.projectsByBuilding.items;
      setProjects(projects);
    } catch (err) {
      console.log("error fetchProjects: ", err);
    }
  }
  async function fetchCommentsByProjectId(project) {
    try {
      const commentsData = await API.graphql(
        graphqlOperation(commentsByProject, { projectID: project.id })
      );
      console.log("commentsData: ", commentsData);
      const comments = commentsData.data.commentsByProject.items;
      setComments(comments);
    } catch (err) {
      console.log("error fetchProjects: ", err);
    } finally {
      setSelectedProject({ projectID: project.id, name:project.name });
    }
  }

  async function addProject() {
    try {
      if (!formState.name || !formState.cost || !formState.rating) return;
      console.log("SET PROJECT");

      const project = { ...formState };
      project.buildingID = props.building.buildingID;
      setProjects([...projects, project]);
      setFormState(initialProjectState);

      await API.graphql(graphqlOperation(createProject, { input: project }));
    } catch (err) {
      console.log("error addProject: ", err);
    }
  }

  return (
    <div>
      {console.log("RENDER ProjectOverview")}
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
        <h5>Lista projekata</h5>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Naziv projekta</th>
              <th>Cijena</th>
              <th>Ocjena</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project, index) => (
              <tr
                onClick={() => {
                  fetchCommentsByProjectId(project);
                }}
                key={project.id ? project.id : index}
                style={styles.manager}
              >
                <th>{project.name}</th>
                <th>{project.cost}</th>
                <th>{project.rating}</th>
                <th>X/0</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <p></p>

      <h5>Pregled projekta: Uređenje stubišta</h5>
      <p></p>

      <h5>Komentari</h5>

      <CommentsList comments={comments} />
      <CommentAdd
        project={selectedProject}
        building={props.building}
        userInfo={props.userInfo}
      />

      {console.log("RENDER ProjectOverview FIN")}
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
