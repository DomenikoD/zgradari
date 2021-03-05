import React, { useState, useEffect } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Auth, Hub } from "aws-amplify";
const Landing = () => {

  const initialFormState = {
    username: "",
    password: "",
    email: "",
    authCode: "",
    formType: "signUp",
  };

  const [user, updateUser] = useState(null);
  const [username, updateUserName] = useState("");

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  async function setAuthListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          console.log("userr signed in: ", user);
          break;
        case "signOut":
          console.log("user signed out");
          break;
        default:
          break;
      }
    });
  }
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const {username} =user;
      updateUserName(username)
      console.log("user IN: ", user);
      console.log("username IN: ", username);
      updateUser(user);
    } catch (err) {}
  }

  return (
    <div>
      <Jumbotron>
        <h1>Dobro došli {username} na Zgradare!</h1>
        <p>
          Web-aplikacijom se povećava interakcija svih suvlasnika zgrade,
          osvjestite brigu za zajedničko vlasništvo. Potaknite obnave, uređenja,
          predložite ideje, vodite ankete, glasovanja i projekte.
        </p>{" "}
        <p>Korisnici aplikacije su predstavnik stanara i stanari suvlasnici.</p>
        <p>
          Isprobajte korisnička sučelja i uvjerite se u besplatne mogućnosti.
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
            Izvorni kod
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Landing;
