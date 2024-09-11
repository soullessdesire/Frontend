import { lazy } from "react";
const FAQ = lazy(() => import("./FAQ"));
const Footer = lazy(() => import("../universal/Footer"));

const FAQPage = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <FAQ />
      <Footer />
    </>
  );
};

export default FAQPage;
