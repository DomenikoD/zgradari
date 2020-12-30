import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "../graphql/mutations";

const initialCommentState = { content: "" };

const CommentAdd = (props) => {
  const [formState, setFormState] = useState(initialCommentState);
  const [comments, setComments] = useState([]);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }
  async function addCommentToProject() {
    try {
      if (!formState.content) return;
      console.log("SET COMMENT");

      const comment = { ...formState };
      comment.buildingID = props.building.buildingID;
      comment.projectID = props.project.projectID;
      comment.tenantID = props.userInfo.tenantID;
      setComments([...comments, comment]);
      setFormState(initialCommentState);

      await API.graphql(graphqlOperation(createComment, { input: comment }));
    } catch (err) {
      console.log("error addComment: ", err);
    }
  }

  return (
    <div>
      <div style={styles.container}>
        <input
          onChange={(event) => setInput("content", event.target.value)}
          style={styles.input}
          value={formState.name}
          placeholder="Vaš komentar"
        />
        {props.project.name === undefined || props.project.name.length === 0 ? (
          <button disabled>
            Odaberite projekt za komentiranje {props.project.name}
          </button>
        ) : (
          <button style={styles.button} onClick={addCommentToProject}>
            Komentiraj {props.project.name}
          </button>
        )}
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
export default CommentAdd;
