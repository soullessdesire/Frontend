import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Unauth from "./Unauth";
import Navbar from "../universal/Navbar";
import programs from "../../assets/1654348_app_items_list_presentation_programs_icon.svg";
import profile from "../../assets/7853767_kashifarif_user_profile_person_account_icon.svg";
import progress from "../../assets/9027475_line_chart_icon.svg";
import { Outlet } from "react-router-dom";

import "./User.css";

import Button from "../universal/Button";

const User = () => {
  const ref3 = useRef();

  const [hover, setHover] = useState(false);
  const { username } = useParams();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let token;
  if (queryParams.has("token")) {
    token = queryParams.get("token");
  } else {
    token = localStorage.getItem("token");
  }
  useEffect(() => {
    if (token) {
      axios
        .post("http://localhost:3000/auth", { token })
        .then((response) => {
          setIsAuthenticated(response.data.level);
          console.log(response, isAuthenticated);
        })
        .catch((e) => {
          console.log(e);
          navigate("/form");
        });
    } else if (location.pathname !== "/register") {
      navigate("/form");
    }
    // axios.get('http')
  }, [navigate, location.pathname]);
  const handleClick = (event) => {
    event.target.style.width = "10%";
  };
  // document.addEventListener("scroll", function () {
  //   const scrollY = window.scrollY;
  //   const initialTop = 90;
  //   const newTop = Math.max(0, initialTop - scrollY);
  //   ref3.current.style.top = newTop + "px";
  // });
  const handleMouseLeave = (event) => {
    if (event) {
      setHover((prev) => !prev);
    }
  };
  const handleMouseEnter = (event) => {
    if (event) {
      setHover((prev) => !prev);
    }
  };
  return (
    <>
      {isAuthenticated === 1 ? (
        <>
          <Navbar />
          <main style={{ display: "flex", width: "100%" }}>
            <div
              className="expand"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                flexShrink: 0,
              }}
            >
              <Button
                text={hover ? "Profile" : ""}
                imgurl={profile}
                imgh={`35px`}
                imgw={`35px`}
                to={`profile`}
                margin={`3rem 0 1rem 0`}
                color={"#3da33d"}
                className="text"
                bg={"transparent"}
                width={hover ? "100px" : ""}
                jC={"flex-start"}
                m={"0 .5rem 0 0"}
                hC={true}
              />
              <Button
                text={hover ? `Progress` : ""}
                imgurl={progress}
                imgh={`35px`}
                imgw={`35px`}
                to={`progress`}
                margin={`0 0 1rem 0`}
                color={"#3da33d"}
                className="text"
                bg={"transparent"}
                width={hover ? "100px" : ""}
                jC={"flex-start"}
                m={"0 .5rem 0 0"}
                hC={true}
              />
              <Button
                text={hover ? "Programs" : ""}
                imgurl={programs}
                imgh={`35px`}
                imgw={`35px`}
                to={`programs`}
                margin={`0 0 1rem 0`}
                color={"#3da33d"}
                className="text"
                jC={"flex-start"}
                bg={"transparent"}
                width={hover ? "100px" : ""}
                m={"0 .5rem 0 0"}
                hC={true}
              />
            </div>
            <Outlet />
          </main>
        </>
      ) : (
        <Unauth />
      )}
    </>
  );
};

export default User;
//TODO: remember to   View a summary of image vulnerabilities and recommendations → docker scout quickview
