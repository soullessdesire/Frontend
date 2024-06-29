import React, { useRef, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Button from "../universal/Button";

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
            <h1 style={{ padding: "10px" }}>Hello, Friend</h1>
            <p style={{ padding: "10px" }}>
              Enter your personal detalis to start a journey with us
            </p>
            <Button
              width={"90px"}
              height={"40px"}
              text={"Sign Up"}
              onClick={handleClick}
              color={"white"}
              bg={"rgba(0, 0, 0, 0)"}
              b={"white 1.5px solid"}
              bR={"20px"}
              p={"15px"}
            />
          </>
        ) : (
          <>
            <h1 style={{ padding: "10px" }}>Welcome, Back</h1>
            <p style={{ padding: "10px" }}>
              To keep connected with us please log in with your personal
              infromation
            </p>
            <Button
              width={"90px"}
              height={"40px"}
              text={"Sign In"}
              onClick={handleClick}
              color={"white"}
              bg={"rgba(0, 0, 0, 0)"}
              b={"white 1.5px solid"}
              bR={"20px"}
              p={"15px"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MainForm;
