import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";

function Login() {
  
  let userRef = useRef();
  let passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);
  // console.log("data", isFetching);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://my-blog-app-back.herokuapp.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.others });
      userRef = "";
      passwordRef = "";
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(isFetching);

  return (
    <div className="login">
      <span className="loginTitle">Login </span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your email..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="RegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h3
          style={{ color: "#e72b70", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Use This Credentials for test Purpose
        </h3>
        <div
          style={{
            color: "#332a2a",
            fontWeight: "bold",
            borderTop: "1px solid white",
          }}
        >
          <p>
            <b>Email</b> : test123
          </p>
          <p>
            {" "}
            <b>Password</b> : test123
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;