import React from "react";
import { Button } from "react-bootstrap";
import Comment from "./Comment";

const CommentsList = (props) => {
  return (
    <div>
      {console.log(props.comments)}
    </div>
  );
};

export default CommentsList;
