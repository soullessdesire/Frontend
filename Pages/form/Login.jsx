import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../universal/Button";
import Facebook from "../../assets/104498_facebook_icon.svg";
import Google from "../../assets/9034975_logo_google_icon.svg";
import axios from "axios";
function Login(opacity) {
  let [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/login", userDetails)
      .then((response) => {
        console.log("Form submitted successfully: ", response.data);
        localStorage.setItem("token", response.data.token);
        if (localStorage.getItem("token")) {
          navigate(`/patient/${userDetails.username}/profile `);
        }
      })
      .catch((err) => {
        console.error("Error submittimg data: ", err.response.data.message);
        setError(err.response.data.message);
      });
  };
  const handleKeyDown = (event) => {
    if (event) {
      console.log(event.target.parentNode);
      event.target.parentNode.querySelector(".after").style.display = "none";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setUserDetails((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        opacity: opacity || 1,
      }}
    >
      <h1>Sign in to Serene.</h1>
      <div
        className="links"
        style={{
          width: "35%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button
          bR={"50%"}
          imgurl={Facebook}
          bg={"rgba(0,0,0,0)"}
          b={"#3da33d 1.5px solid"}
          p={"5px"}
        />
        <Button
          bR={"50%"}
          imgurl={Google}
          bg={"rgba(0,0,0,0)"}
          b={"#3da33d 1.5px solid"}
          p={"5px"}
          to={"http://localhost:3000/auth/google"}
        />
      </div>
      <p>or use your email for registration</p>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label htmlFor="username"></label>
        <div className="input_wrapper">
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={userDetails.username}
            onKeyDown={handleKeyDown}
          />
          <div className="after">Username</div>
        </div>
        <label htmlFor="password"></label>
        <div className="input_wrapper">
          <input
            type="password"
            name="password"
            id="pwd"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={userDetails.password}
          />
          <div className="after">Password</div>
        </div>
        <br />
        <Button
          text={"Forgot your password ?"}
          bg={"rgba(0,0,0,0)"}
          color={"#3da33d"}
        />
        <br />
        <Button
          type="submit"
          text={"Submit"}
          width={"90px"}
          height={"40px"}
          bR={"20px"}
          bg={"#3da33d"}
        ></Button>
      </form>
    </div>
  );
}

export default Login;
