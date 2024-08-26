import { useRef, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";

const MainForm = () => {
  const ref = useRef();
  const ref2 = useRef();

  const [form, setForm] = useState(true);
  const handleClick = () => {
    const form = ref2.current;
    const side = ref.current;
    if (form && side) {
      if (form.style.left === "40%") {
        form.style.left = "0%";
        side.style.left = "60%";
        setTimeout(() => {
          setForm(true);
        }, 100);
      } else {
        form.style.left = "40%";
        side.style.left = "0%";
        setTimeout(() => {
          setForm(false);
        }, 100);
      }
    }
  };
  return (
    <div className="wrapper">
      <div className="form" ref={ref2}>
        {form ? <Login /> : <Register />}
      </div>
      <div className="side" ref={ref}>
        {form ? (
          <>
            <div className="side_div">
              <Link
                to={"/home"}
                style={{
                  color: "white",
                  fontSize: "xx-large",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    width: "50px",
                  }}
                >
                  <Logo
                    color={"white"}
                    style={{
                      width: "50px",
                    }}
                  />
                </span>
                <p style={{ fontFamily: "Caramel", fontSize: "50px" }}>
                  Serene
                </p>
              </Link>
            </div>
            <h1
              style={{
                padding: "10px",
                marginBottom: ".1rem",
                fontFamily: "Inria Sans",
              }}
            >
              Hello, Friend
            </h1>
            <p
              style={{
                padding: "10px",
                fontSize: "16px",
                fontFamily: "Inria Sans",
              }}
            >
              Enter your personal detalis to start a journey with us
            </p>
            <br />
            <div
              onClick={() => handleClick()}
              style={{
                width: "100px",
                height: "40px",
                color: "white",
                bacground: "transparent",
                border: "white 1.5px solid",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </div>
          </>
        ) : (
          <>
            <div className="side_div">
              <Link
                to={"/home"}
                style={{
                  color: "white",
                  fontSize: "xx-large",
                  display: "flex",
                }}
              >
                <span style={{ width: "50px" }}>
                  <Logo color={"white"} />
                </span>
                <p style={{ fontFamily: "Caramel", fontSize: "50px" }}>
                  Serene
                </p>
              </Link>
            </div>
            <h1 style={{ padding: "10px", fontFamily: "Inria Sans" }}>
              Welcome, Back
            </h1>
            <p
              style={{
                padding: "10px",
                fontSize: "16px",
                fontFamily: "Inria Sans",
              }}
            >
              To keep connected with us please log in with your personal
              infromation
            </p>
            <br />
            <div
              onClick={() => handleClick()}
              style={{
                width: "100px",
                height: "40px",
                color: "white",
                bacground: "transparent",
                border: "white 1.5px solid",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Sign In
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainForm;
