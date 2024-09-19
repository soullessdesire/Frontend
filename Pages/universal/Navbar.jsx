import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../../assets/Logo";

function Navbar({ login, ul, scroll, user, img }) {
  const [color, setColor] = useState(true);
  const location = useLocation();
  const linksRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };
  const NavBarHandler = () => {
    const path = location.pathname.split("/");
    linksRef.current.forEach((el) => {
      if (
        el.textContent.toLowerCase() ===
        location.pathname.split("/").pop().toLowerCase()
      ) {
        el.classList.add("active");
        el.classList.remove("hover");
      } else {
        el.classList.remove("active");
        el.classList.add("hover");
      }
    });
    if (path[2] === "form") {
      const el = document.querySelector(".f_nav");
      el.style.position = "static";
    }
    if (path.length === 4 && path[2] === "patient") {
      setColor(false);
      const el = document.querySelector(".f_nav");
      el.style.position = "static";
    }
  };
  useEffect(() => {
    NavBarHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  const LINK_STYLES = {
    color: scroll ? "#fff" : "#3da33d",
    margin: "1rem",
  };
  const Ul_STYLES = {
    display: "flex",
    justifyContent: "center",
    width: "fit-content",
    gap: "3rem",
  };
  const navItems = [
    {
      link: "home",
      item: "Home",
    },
    {
      link: "services",
      item: "Services",
    },
    {
      link: "about",
      item: "About",
    },
  ];
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "https://localhost:5173/form/main";
  };
  return (
    <>
      <nav
        className="f_nav"
        style={{
          border: "none",
          position: user ? "static" : "fixed",
          backgroundColor: scroll ? (color ? "#3da33d" : "#fff") : "#fff",
          zIndex: "10",
        }}
      >
        <div className="nav_nd">
          <Link
            to={"/home"}
            style={{
              color: scroll ? (color ? "#3da33d" : "#fff") : "#3da33d",
              fontSize: "xx-large",
              display: "flex",
            }}
          >
            <span>
              <Logo
                style={{
                  width: "50px",
                }}
                color={scroll ? (color ? "#3da33d" : "#fff") : "#3da33d"}
              />
            </span>
            <p style={{ fontFamily: "Caramel", fontSize: "50px" }}>Serene</p>
          </Link>
        </div>
        {ul && (
          <ul style={Ul_STYLES} onClick={NavBarHandler}>
            {navItems.map((navitem, key) => {
              return (
                <li key={key}>
                  <Link
                    to={navitem.link}
                    key={key}
                    ref={addToRefs}
                    style={LINK_STYLES}
                  >
                    {navitem.item}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {login && (
          <ul
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "fit-content",
            }}
          >
            <li>
              <Link
                to={"/form/main"}
                className="reg"
                style={{
                  marginInline: "2rem",
                  color: `${scroll ? "#fff" : "#3da33d"}`,
                  border: `${scroll ? "#fff" : "#3da33d"} 0.5px solid`,
                }}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to={"/form/main"}
                className="lgn"
                style={{
                  margin: "1rem",
                  color: `${scroll ? "#3da33d" : "var(--meta-color)"}`,
                }}
              >
                Login
              </Link>
            </li>
          </ul>
        )}
        {user && (
          <ul
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "fit-content",
              marginRight: "20px",
              gap: "2rem",
            }}
          >
            <li>
              <div>
                <img
                  src={img}
                  alt="user img"
                  style={{
                    width: "48px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </li>
            <li>
              <button
                type="button"
                className="reg"
                style={{
                  border: "1px solid #3da33d",
                  background: "transparent",
                  color: "#3da33d",
                }}
                onClick={handleLogout}
              >
                Log out
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
Navbar.propTypes = {
  login: PropTypes.bool,
  ul: PropTypes.bool,
  scroll: PropTypes.bool,
  user: PropTypes.bool,
  img: PropTypes.string,
};

export default Navbar;
