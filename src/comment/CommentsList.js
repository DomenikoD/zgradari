import React from "react";
import { Button } from "react-bootstrap";
import Comment from "./Comment";

const CommentsList = (props) => {
  return (
    <div>
      {console.log("CommentsList: props.comments", props.comments)}
      {props.comments !== undefined &&
        props.comments.map((comment, index) => (
          <p key={comment.id ? comment.id : index}>{comment.content}</p>
        ))}
      {props.comments === undefined || props.comments.length === 0 && <p>Nema komentara</p>}
    </div>
  );
};

export default CommentsList;
