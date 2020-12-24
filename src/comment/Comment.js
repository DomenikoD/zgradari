import React from "react";
import { Button } from "react-bootstrap";

const Comment = (props) => {
  const comment = {
    name: "DomenikoD",
    content: "Ovaj projekt je dobra stvar",
    date: "2020-02-10 11:51:59",
  };
  return (
    <div key={props.key} >
      <p>KOJE PISO : "{props.comment.content}" </p>
      <p></p>
    </div>
  );
};

export default Comment;
