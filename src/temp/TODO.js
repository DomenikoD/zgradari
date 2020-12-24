/* src/App.js */
import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import { Button, Jumbotron } from "react-bootstrap";

const TODO = () => {
  return (
    <div>
      <Header />
      <div>
        <Jumbotron>
          <h1>Prijave u tijeku!</h1>
          <p>Javite se na email: domeniko.divjak@gmail.com </p>
          <p>Zauvijek besplatno. </p>
          <p></p>
          <p></p>
          <p></p>
          <p>Isprobajte korisnička sučelja i uvjerite se u prednosti.</p>
          <p>
            <Button href="upravitelj" variant="link">
              Sučelje predstavnika stanara
            </Button>
            <Button href="vlasnik" variant="link">
              Sučelje stanara/suvlasnika
            </Button>
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p>
            <Button href="onama" variant="link">
              O nama
            </Button>
          </p>
        </Jumbotron>
      </div>
      <Footer />
    </div>
  );
};

export default TODO;
