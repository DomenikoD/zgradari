import React from "react";
import { Button } from "react-bootstrap";

const Comment = (props) => {
  const comment = {
    name: "DomenikoD",
    contetn: "Ovaj projekt je dobra stvar",
    date: "2020-02-10 11:51:59",
  };
  return (
    <div >
      <p>{comment.name}:  "{comment.contetn}" {comment.date}</p>
      <p></p>
    </div>
  );
};

export default Comment;
