import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Unauth from "./Unauth";
import { UserCircle, ArrowUpNarrowWide, SquareMenu } from "lucide-react";
import { Outlet } from "react-router-dom";

import "./User.css";

const User = () => {
  const [userData, setUserData] = useState({});
  const [show, setShow] = useState(false);
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
          console.log(response.data);
          setUserData(() => ({ ...response.data.userData }));
        })
        .catch((e) => {
          console.log(e);
          navigate("/form/main");
        });
    } else if (location.pathname !== "/register") {
      navigate("/form/main");
    }
  }, [navigate, location.pathname, token, isAuthenticated]);
  const menu = [
    {
      link: "profile",
      item: "Profile",
      icons: <UserCircle strokeWidth={1.5} color="#3da33d" size={32} />,
    },
    {
      link: "progress",
      item: "Progress",
      icons: <ArrowUpNarrowWide strokeWidth={1.5} color="#3da33d" size={32} />,
    },
    {
      link: "programs",
      item: "Programs",
      icons: <SquareMenu strokeWidth={1.5} color="#3da33d" size={32} />,
    },
  ];
  const LINK_STYLES = {
    padding: "0.5rem 1rem",
    width: "100%",
    color: "var(--primary-color)",
    display: "flex",
    justifyContet: "center",
    alignItems: "center",
    gap: ".5rem",
  };

  return (
    <>
      {isAuthenticated === 1 ? (
        <>
          <main style={{ display: "flex", width: "100%" }}>
            <div
              className="expand"
              style={{
                flexShrink: 0,
              }}
              onMouseEnter={() => setShow((prev) => !prev)}
              onMouseLeave={() => setShow((prev) => !prev)}
            >
              <div>
                {menu.map((menuItem, key) => {
                  return (
                    <Link to={menuItem.link} key={key} style={LINK_STYLES}>
                      {menuItem.icons}
                      {show && menuItem.item}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Outlet context={{ userData }} />
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
