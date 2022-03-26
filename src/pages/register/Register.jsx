import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  //states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(false);

  //submit user details
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(false);
      const res = await axios.post(
        "https://my-blog-app-back.herokuapp.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      res.data.user && window.location.replace("/login");
      // console.log(res.data);
    } catch (error) {
      setError(true);
      console.log("Error is:", error);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register </span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          register
        </button>
        {err && (
          <span
            style={{
              textAlign: "center",
              color: "#afd",
              fontWeight: "bold",
              fontSize: "20px",
              padding: "7px",
            }}
          >
            Something went wrong
          </span>
        )}
      </form>
      <button className="LoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}

export default Register;