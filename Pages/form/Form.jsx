import React from "react";
import Navbar from "../universal/Navbar";
import "./Form.css";
import { Outlet } from "react-router-dom";

function Form() {
  return (
    <>
      <Navbar ul={true} />
      <main className="log_main">
        <Outlet />
      </main>
    </>
  );
}
export default Form;
//   <div>
//     {/* <div className="decoration_wrapper">
//   <div className="decoration"></div>
//   <p>Or</p>
// </div> */}
//   </div>;
