import React from "react";
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import Button from "../universal/Button";

const Contacts = () => {
  return (
    <>
      <div className="img cont_img"></div>
      <div>
        <h1>Contact Us</h1>
        <h3>Visition Hours</h3>
        <p>Monday - Friday</p>
        <p>9.00am - 5.00pm</p>
        <div className="contacts">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div>
        <p></p>
        <form action="">
          <div className="input_wrapper6">
            <input type="text" name="" id="" />
            <div className="after"></div>
          </div>
          <div className="input_wrapper6">
            <input type="email" name="" id="" />
            <div className="after"></div>
          </div>
          <textarea name="" id=""></textarea>
          <input type="submit" value="" />
          <Button />
        </form>
      </div>
    </>
  );
};

export default Contacts;
