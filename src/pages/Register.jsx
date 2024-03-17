import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setFirstName, setLastName, setEmail, setRole }) {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
    setEmail(emailRef.current.value);

    navigate("/home", { replace: true });
  };

  const handleCheckBox = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <h1> Register Account </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p> First Name: </p> <input type="text" ref={firstNameRef} />
        <p> Last Name: </p> <input type="text" ref={lastNameRef} />
        <p> Email: </p> <input type="email" ref={emailRef} />
        <p> Password: </p> <input type="password" />
        <p>Role: </p>
        <input
          type="radio"
          name="role"
          id="member"
          value="member"
          onChange={(e) => handleCheckBox(e)}
        />
        <label htmlFor="member"> Member </label> <br></br>
        <input
          type="radio"
          name="role"
          id="coach"
          value="coach"
          onChange={(e) => handleCheckBox(e)}
        />
        <label htmlFor="coach"> Coach </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Register;
