import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Landing = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Dobro došli na Zgradare!</h1>
        <p>
          Web-aplikacijom se povećava interakcija svih suvlasnika zgrade, osvjestite brigu za
          zajedničko vlasništvo. Potaknite obnave, uređenja, predložite ideje,
          vodite ankete, glasovanja i projekte.
        </p>{" "}
        <p>
          Korisnici aplikacije su predstavnik stanara i stanari suvlasnici. 
        </p>
        <p>Isprobajte korisnička sučelja i uvjerite se u besplatne mogućnosti.</p>
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
            Izvorni kod
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Landing;
