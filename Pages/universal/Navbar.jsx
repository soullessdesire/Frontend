import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar({ Login, ul }) {
  return (
    <>
      <nav className="h_nav">
        <Link
          to={"/home"}
          style={{
            color: "white",
          }}
        >
          <span>
            Serene<span>.</span>
          </span>
        </Link>
        {ul && (
          <ul>
            <li>
              <a href="http://localhost:5173/home">Home</a>
            </li>
            <li>
              <a href="http://localhost:5173/about">About</a>
            </li>
            <li>
              <a href="http://localhost:5173/services">Services</a>
            </li>
            <li>
              <a href="http://localhost:5173/faq">FAQ</a>
            </li>
            <li>
              {Login && (
                <Button
                  text={"Register"}
                  to={"http://localhost:5173/form/main"}
                  color={"#3da33d"}
                />
              )}
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
