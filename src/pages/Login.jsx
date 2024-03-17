import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setFirstName, setLastName, setEmail, setRole, userInfo }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let found = false;

    for (var user of userInfo) {
      if (
        user.email == emailRef.current.value &&
        user.password == passwordRef.current.value
      ) {
        found = true;
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setRole(user.role);
        if (user.role === "treasurer") {
          navigate("/treasurer", { replace: true });
        } else {
          navigate("/home", { replace: true });
        }
        break;
      }
    }

    if (!found) {
      console.log("INVALID");
    }
  };

  return (
    <>
      <h1> Login Account </h1>
      <form onSubmit={handleLogin}>
        <p> Email: </p> <input type="email" ref={emailRef} />
        <p> Password: </p> <input type="password" ref={passwordRef} />
        <br></br>
        <button type="submit"> Login </button>
      </form>
    </>
  );
}

export default Login;
