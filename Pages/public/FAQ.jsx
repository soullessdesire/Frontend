import React from "react";
import Wave from "../../assets/Wave";
import Navbar from "../universal/Navbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FAQ = () => {
  const handleClick = (event) => {
    event.target.querySelector("p").style.display = "flex";
  };
  return (
    <>
      <section className="FAQs" style={{ fontFamily: "Josefin Sans" }}>
        <Wave
          color={"white"}
          viewBox={"0 0 450 120"}
          height={"180px"}
          className="curve"
          backgroundColor={"transparent"}
        />
        <div>
          <h1>FAQ?</h1>
        </div>
        <ul>
          <li
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={handleClick}
          >
            <a href="">Who are therapists ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
          <li
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={handleClick}
          >
            <a href="">How long does a registration last ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
          <li
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={handleClick}
          >
            <a href="">Any more methods to communicate with therapist ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
          <li
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={handleClick}
          >
            <a href="">How can I sign up ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
          <li
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={handleClick}
          >
            <a href="">How much does it cost ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default FAQ;
