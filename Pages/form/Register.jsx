import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OtherLogins from "../universal/OtherLogins";
import axios from "axios";
import { createErrorNotification } from "../universal/createErrorNotification";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setIsDisabled(!Object.values(formData).every((value) => value !== ""));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:3000/api/users/username/${formData.username}`)
      .then((response) => {
        const data = response.data;
        if (data.length) {
          createErrorNotification("This username is already taken");
          throw new Error("Username is taken");
        } else {
          navigate("/form/moreinfo/name&birth", { state: formData });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleKeyDown = (event) => {
    const after = event.target.parentNode.querySelector(".after").style;

    after.color = "var(--secondary-color)";
    after.fontSize = "12px";
    after.fontWeight = "400";
    after.top = "28%";
    after.left = ".2%";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <h2>Create account</h2>
      <OtherLogins />
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
            <div className="after">
              <p
                style={{
                  backgroundColor: "var(--meta-color)",
                }}
              >
                Email
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginBottom: "20px",
          }}
        >
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
        </div>
        <button
          type="submit"
          style={{
            width: "90px",
            height: "40px",
            borderRadius: "20px",
            background: "#3da33d",
            color: "white",
            border: "none",
            backgroundColor: `${
              isDisabled ? "var(--disabled-color)" : "var(--primary-color)"
            }`,
          }}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
