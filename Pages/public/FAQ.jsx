import { lazy } from "react";
const Wave = lazy(() => import("../../assets/Wave"));
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Faq = () => {
  const handleClick = (event) => {
    event.target.querySelector("p").style.display = "flex";
  };
  return (
    <>
      <section
        className="FAQs"
        style={{
          fontFamily: "Josefin Sans",
          backgroundColor: "#3da33d",
          color: "white",
          marginTop: "4rem",
        }}
      >
        <Wave
          color={"white"}
          viewBox={"0 0 450 120"}
          height={"180px"}
          className="curve"
          backgroundColor={"transparent"}
        />
        <div>
          <h1
            style={{
              color: "ActiveBorder",
            }}
          >
            FAQ?
          </h1>
        </div>
        <ul>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px white solid",
            }}
            onClick={handleClick}
          >
            <a href="">Who are therapists ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px white solid",
            }}
            onClick={handleClick}
          >
            <a href="">How long does a registration last ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px white solid",
            }}
            onClick={handleClick}
          >
            <a href="">Any more methods to communicate with therapist ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px white solid",
            }}
            onClick={handleClick}
          >
            <a href="">How can I sign up ?</a>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
            <p style={{ display: "none" }}></p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px white solid",
            }}
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

export default Faq;
