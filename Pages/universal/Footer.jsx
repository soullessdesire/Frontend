import React from "react";
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import Secure from "../../assets/Secure";

const Footer = ({ color, bg }) => {
  return (
    <footer
      style={{
        color: color || "#3da33d",
        backgroundColor: bg || "white",
      }}
    >
      <div className="muskerters">
        <div className="first">
          <ul>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                Employee Login
              </a>
            </li>
          </ul>
        </div>
        <div className="third">
          <ul>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                <Twitter style={{ fontSize: "50px" }} />
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                <Facebook style={{ fontSize: "50px" }} />
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                <LinkedIn style={{ fontSize: "50px" }} />
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  backgroundColor: bg || "white",
                  color: color || "#3da33d",
                }}
              >
                <Instagram style={{ fontSize: "50px" }} />
              </a>
            </li>
          </ul>
          <div className="security">
            <Secure color={color} />
            <div>
              <p>
                256-bit <span>SSL</span>
              </p>
              <span>SECURE</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bottom"
        style={{ color: color || "#3da33d", backgroundColor: bg || "white" }}
      >
        <em>
          These Terms and Conditions govern your use of this website; by using
          this website, you accept these terms and conditions in full. If you
          disagree with these terms and conditions or any part of these terms
          and conditions, you must not use this website.
        </em>
      </div>
    </footer>
  );
};

export default Footer;
