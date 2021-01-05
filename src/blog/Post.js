import React from "react";
import { Button } from "react-bootstrap";

const Post = (props) => {
  return (
    <div>
      {console.log("Post: ", props)}
      <h5>{props.post.title}</h5>
      <p>{props.post.content}</p>
      <p>
        {props.post.dateCreated}, {props.post.creator}
      </p>
    </div>
  );
};

export default Post;
