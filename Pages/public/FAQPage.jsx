import React from "react";
import Navbar from "../universal/Navbar";
import FAQ from "./FAQ";
import Footer from "../universal/Footer";

const FAQPage = () => {
  return (
    <>
      <Navbar ul={true} Login={true} />
      <br />
      <br />
      <br />
      <FAQ />
      <Footer />
    </>
  );
};

export default FAQPage;
