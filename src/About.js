import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Header />

      <Jumbotron>
        <h1>O nama</h1>
        <p>
          Ovom web-aplikacijom povećava se interakcija svih suvlasnika zgrade,
          te na taj način osvještava briga za zajedničko vlasništvo, na način da
          se ono obnavlja, uređuje, predlažu ideje i vode glasovanja. Korisnici
          aplikacije su predstavnik stanara i stanari vlasnici. U daljnjem
          razvoju i ostali dionici provedenih i izglasanih projekta.
        </p>        
        <p>
          U nastavku razvoja biti će izrađena i mobilna aplikacija.
        </p>      
        <p>
          Ideje otovreno prihvaćamo za diskusiju i implementaciju, a specijalna rješenja izrađujemo na zahtjev.
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
      <Footer />
    </div>
  );
};

export default About;
