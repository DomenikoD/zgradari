/* src/App.js */
import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import Landing from "../home/Landing";
import LandingCarousel from "../home/LandingCarousel";
import { Button, Jumbotron } from "react-bootstrap";

const TODO = () => {
  return (
    <div>
      <Header />
      <div>
        <Jumbotron>
          <h1>Prijave u tijeku!</h1>
          <p>Javite se na email: domeniko.divjak@gmail.com </p>
          <p>Prvih 50 zgrada - zauvijek besplatno. </p>
          <p>Drugih 50 zgrada - 1 kn / stan / mjesečno. </p>
          <p>Trećih 100 zgrada - 1.5 kn / stan / mjesečno. </p>
          <p></p>
          <p></p>
          <p></p>
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
