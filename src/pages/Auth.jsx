import React from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  return (
    <>
      <h1> Recreation App</h1>
      <button onClick={() => navigate("register")}> Register</button>
      <button onClick={() => navigate("login")}>Login: </button>
    </>
  );
}

export default Auth;
