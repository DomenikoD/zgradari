import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Header from "../home/Header";
import Footer from "../home/Footer";

const About = () => {
  return (
    <div>
      <Header />

      <Jumbotron>
        <h1>O nama</h1>
        <p>
          Trenutno "one man startup" - kojem je cilj izraditi aplikaciju za
          podizanje svjesnosit i brige za svoje suvlasništvo.
        </p>
        <p>
          Aplikacija je pohranjena na Amazonovim Web servisima (AWS), te je od
          strane "AWS Activate - Founders" inicijative odobren
          dvogodišnji budžet od ukupno 1350$. U nastavku razvoja biti će izrađena i
          mobilna aplikacija.
        </p>
        <p>
          Ideje otovreno prihvaćamo za diskusiju i implementaciju, a specijalna
          rješenja izrađujemo na zahtjev.
        </p>
        <p>
          Isprobajte korisnička sučelja i uvjerite se u besplatne prednosti.
        </p>
        <p>
          <Button href="upravitelj" variant="link">
            Sučelje predstavnika stanara
          </Button>
          <Button href="vlasnik" variant="link">
            Sučelje stanara/suvlasnika
          </Button>
        </p>
        <p>
          <Button href="onama" variant="link">
            O nama
          </Button>
          <Button href="https://github.com/DomenikoD/zgradari" variant="link">
            Izvorni kod GitHub
          </Button>
        </p>
      </Jumbotron>
      <Footer />
    </div>
  );
};

export default About;
