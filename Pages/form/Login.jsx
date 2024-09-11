import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../universal/Button";
import ForgotPassEmail from "./ForgotPassEmail";
import Modal from "../../utils/Modal";
import OtherLogins from "../universal/OtherLogins";

import axios from "axios";
import { createErrorNotification } from "../universal/createErrorNotification";
function Login(opacity) {
  let [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost:3000/api/login", userDetails)
      .then((response) => {
        console.log("Form submitted successfully: ", response.data);
        localStorage.setItem("token", response.data.token);
        if (localStorage.getItem("token")) {
          navigate(`/patient/${userDetails.username}/profile `);
        }
      })
      .catch((err) => {
        console.log(err);
        createErrorNotification(err.response.data.message);
      });
  };
  useEffect(() => {
    setIsDisabled(!Object.values(userDetails).every((value) => value !== ""));
  }, [userDetails]);
  const handleKeyDown = (event) => {
    const after = event.target.parentNode.querySelector(".after").style;

    after.color = "var(--secondary-color)";
    after.fontSize = "12px";
    after.fontWeight = "400";
    after.top = "28%";
    after.left = ".2%";
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
      <h1>Sign in</h1>
      <OtherLogins />
      <p>or use your email for registration</p>
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
          <div className="after">
            <p
              style={{
                backgroundColor: "var(--meta-color)",
              }}
            >
              Username
            </p>
          </div>
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
          <div className="after">
            <p
              style={{
                backgroundColor: "var(--meta-color)",
              }}
            >
              Password
            </p>
          </div>
        </div>
        <br />
        <button
          style={{
            color: "#3da33d",
            border: "none",
            backgroundColor: "transparent",
            marginBottom: "1rem",
          }}
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.body.style.overflow = "hidden";
            setShow(true);
          }}
        >
          Forgot Password ?
        </button>
        <Modal show={show} window={false}>
          <ForgotPassEmail
            closeModal={() => {
              setShow(false);
              document.body.style.overflow = "auto";
            }}
          />
        </Modal>
        <Button
          type="submit"
          style={{
            width: "90px",
            height: "40px",
            borderRadius: "20px",
            background: "#3da33d",
            color: "white",
            border: "none",
            backgroundColor: `${
              isDisabled ? "var(--disabled-color)" : "#3da33d"
            }`,
          }}
          disabled={isDisabled}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
