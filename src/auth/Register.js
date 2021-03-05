import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const initialState = {
    username: "",
    email:"",
    password: "",
    confirmPassword: "",
    errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
    }
}

const Register = () => {

    const [state, updateState] = useState(initialState);

    function clearErrorState() {
        updateState({...state,   errors: {
            cognito: null,
            blankfield: false,
            passwordmatch: false
        }});
    }

  return (
    <div>
      <p>Login</p>
    </div>
  );
};

export default Register;
