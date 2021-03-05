import React from "react";
import { Card } from "react-bootstrap";

const Post = (props) => {
  return (
    <div>
      <Card border="success">
        <Card.Body>
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>{props.post.content}</Card.Text>
          <footer className="blockquote-footer">
            Autor {props.post.creator}
            <cite title="Source Title"> date {props.post.dateCreated} </cite>
          </footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
