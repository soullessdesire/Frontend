import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../universal/Button";
import Facebook from "../../assets/104498_facebook_icon.svg";
import Google from "../../assets/9034975_logo_google_icon.svg";

let someData;

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  someData = { ...formData };
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/form/moreinfo/name&birth");
  };
  const handleKeyDown = (event) => {
    if (event) {
      console.log(event.target.parentNode);
      event.target.parentNode.querySelector(".after").style.display = "none";
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <h2>Create account</h2>
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
      <p>or use email for registration</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <label htmlFor="username"></label>
          <div className="input_wrapper">
            <input
              type="text"
              id="name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              onKeyDown={handleKeyDown}
            />
            <div className="after">Username</div>
          </div>
        </div>
        <div>
          <label htmlFor="email"></label>
          <div className="input_wrapper">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              onKeyDown={handleKeyDown}
            />
            <div className="after">Email</div>
          </div>
        </div>
        <div>
          <label htmlFor="password"></label>
          <div className="input_wrapper">
            <input
              type="password"
              name="password"
              id="pwd"
              value={formData.password}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <div className="after">Password</div>
          </div>
        </div>
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
export const getMyVariable = () => someData;
export default Signup;
