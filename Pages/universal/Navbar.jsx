import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../../assets/Logo";

function Navbar({ login, ul }) {
  const location = useLocation();
  const linksRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };
  const handleClick = () => {
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
  };
  const LINK_STYLES = {
    color: "#3da33d",
    margin: "1rem",
  };
  useEffect(() => {
    handleClick();
    document.body.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        const el = document.querySelector(".f_nav");
        el.style.background = "var(--meta-color)";
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  return (
    <>
      <nav
        className="f_nav"
        style={{
          border: "none",
          position: "fixed",
          backgroundColor: "white",
          zIndex: "10",
        }}
      >
        <div className="nav_nd">
          <Link
            to={"/home"}
            style={{
              color: "#3da33d",
              fontSize: "xx-large",
              display: "flex",
            }}
          >
            <span>
              <Logo
                style={{
                  width: "50px",
                }}
              />
            </span>
            <p style={{ fontFamily: "Caramel", fontSize: "50px" }}>Serene</p>
          </Link>
        </div>
        {ul && (
          <ul style={Ul_STYLES}>
            {navItems.map((navitem, key) => {
              return (
                <li key={key}>
                  <Link
                    to={navitem.link}
                    key={key}
                    ref={addToRefs}
                    style={LINK_STYLES}
                    onClick={handleClick}
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
                style={{ marginInline: "2rem" }}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to={"/form/main"}
                className="lgn"
                style={{ margin: "1rem" }}
              >
                Login
              </Link>
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
};

export default Navbar;
