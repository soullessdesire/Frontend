// non-lazy imports
import { useEffect, useState, lazy } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "axios";

// preferred not to be lazy imports imports
import Navbar from "../../universal/Navbar";

// component imports
const Unauth = lazy(() => import("./Unauth"));

//css imports
import "./User.css";

// lucide-react lazy imports
const UserPen = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.UserPen }))
);
const SquareMenu = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.SquareMenu }))
);
const ArrowUpNarrowWide = lazy(() =>
  import("lucide-react").then((module) => ({
    default: module.ArrowUpNarrowWide,
  }))
);
const MessageCircleMore = lazy(() =>
  import("lucide-react").then((module) => ({
    default: module.MessageCircleMore,
  }))
);

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
    localStorage.setItem("token", token);
  } else {
    token = localStorage.getItem("token");
  }
  useEffect(() => {
    if (token) {
      axios
        .post("https://localhost:3000/api/auth", { token })
        .then((response) => {
          setIsAuthenticated(response.data.level);
          console.log(response.data);
          setUserData(() => ({ ...response.data.userData }));
        })
        .catch((e) => {
          console.log(e);
          navigate("/form/main", { replace: true });
          window.location.reload();
        });
    } else if (location.pathname !== "/register") {
      navigate("/form/main", { replace: true });
      window.location.reload();
    }
  }, [navigate, location.pathname, token, isAuthenticated]);
  const menu = [
    {
      link: "profile",
      item: "Profile",
      icons: <UserPen strokeWidth={1} color="#3da33d" size={32} />,
    },
    {
      link: "progress",
      item: "Progress",
      icons: <ArrowUpNarrowWide strokeWidth={1} color="#3da33d" size={32} />,
    },
    {
      link: "programs",
      item: "Programs",
      icons: <SquareMenu strokeWidth={1} color="#3da33d" size={32} />,
    },
    {
      link: "chats",
      item: "Chats",
      icons: <MessageCircleMore strokeWidth={1} color="#3da33d" size={32} />,
    },
  ];

  const LINK_STYLES = {
    padding: "0.5rem",
    width: "100%",
    color: "#3da33d",
    display: "flex",
    justifyContet: "center",
    alignItems: "center",
    gap: ".5rem",
    fontWeight: 300,
  };
  useEffect(() => {}, [location.pathname]);
  return (
    <>
      {isAuthenticated === 1 ? (
        <>
          <Navbar
            user={true}
            img={
              userData.Image && userData.Image.path.replace("frontend", "..")
            }
          />
          <main
            style={{
              display: "flex",
              width: "100%",
              height: "calc(100vh - 85px)",
            }}
          >
            <div
              className="expand"
              style={{
                flexShrink: 0,
              }}
              onMouseEnter={() => setShow(() => true)}
              onMouseLeave={() => setShow(() => false)}
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
