import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import { Button } from "react-bootstrap";
import { Auth, Hub } from "aws-amplify";

const initialFormState = {
  username: "",
  password: "",
  email: "",
  authCode: "",
  formType: "signUp",
};

const SignUp = () => {
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  async function setAuthListener() {
    
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          console.log("user signed in");
          break;
        case "signOut":
          console.log("user signed out");
          updateFormState({ ...formState, formType: "signUp" });
          break;
        default:
          break;
      }
    });
  }

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("user: ", user);
      updateUser(user);
      updateFormState({ ...formState, formType: "signedIn" });
    } catch (err) {}
  }

  function onChange(e) {
    e.persist();
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  }

  const { formType } = formState;

  async function signUp() {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attrubutes: { email } });
    updateFormState({ ...formState, formType: "confirmSignUp" });
  }
  
  async function confirmSignUp() {
    const { username, authCode } = formState;
    await Auth.confirmSignUp({ username, authCode });
    updateFormState({ ...formState, formType: "signIn" });
  }

  async function signIn() {
    const { username, password } = formState;
    await Auth.signIn({ username, password });
    updateFormState({ ...formState, formType: "signedIn" });
  }

  return (
    <div>
      <Header />
      <p>Sign UP - prvi puta</p>
      {formType === "signUp" && (
        <div>
          <input
            name="username"
            onChange={onChange}
            placeholder="Korisničko ime"
          />
          <input
            name="password"
            type="password"
            onChange={onChange}
            placeholder="Lozinka"
          />
          <input name="email" onChange={onChange} placeholder="email" />
          <Button onClick={signUp}>Sing Up</Button>
        </div>
      )}
      {formType === "confirmSignUp" && (
        <div>
          <input
            name="authCode"
            onChange={onChange}
            placeholder="Broj potvrde iz Email pretinca"
          />
          <Button onClick={confirmSignUp}>Potvrdi registraciju</Button>
        </div>
      )}
      {formType === "signIn" && (
        <div>
          <input
            name="username"
            onChange={onChange}
            placeholder="Korisničko ime"
          />
          <input
            name="password"
            type="password"
            onChange={onChange}
            placeholder="Lozinka"
          />
          <Button onClick={signIn}>Sing instance</Button>
        </div>
      )}
      {formType === "signedIn" && (
        <div>
          <h1>Dobar dan korisniče</h1>
          <Button onClick={() => Auth.signOut()}>ODJAVA</Button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SignUp;
