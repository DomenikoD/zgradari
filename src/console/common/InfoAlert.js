import React, { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";

const InfoAlert = (props) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Alert show={show} variant="info">
        <Alert.Heading>{props.info.alertHeading}</Alert.Heading>
        <p>{props.info.alertContent}</p>
        <hr />{" "}
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Zatvori
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Uputa</Button>}
    </div>
  );
};

export default InfoAlert;
