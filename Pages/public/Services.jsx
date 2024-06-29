import React from "react";
import Navbar from "../universal/Navbar";
import Footer from "../universal/Footer";
import Wave from "../../assets/Wave";
import "./public.css";
import Button from "../universal/Button";

const Services = () => {
  return (
    <>
      <Navbar ul={true} Login={true} />
      <br />
      <br />
      <br />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "fit-content",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "5rem" }}>Services</h1>
      </div>
      <div
        style={{
          backgroundColor: "#3da33d",
          height: "1200px",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <Wave viewBox={" 0 0 450 120"} color={"white"} />
        <div className="ser_divs margin_b" style={{ marginInline: "3rem" }}>
          <div
            className="phy_img img"
            style={{
              width: "50%",
            }}
          ></div>
          <div style={{ width: "50%", marginInline: "1rem" }}>
            <h1 className="margin_b">Physical Rehab</h1>
            <p style={{ fontSize: "small" }} className="margin_b">
              Regain strength and independence with our physical rehabilitation
              programs. Expert therapists use cutting-edge techniques to reduce
              pain, improve mobility, and rebuild confidence. Whether recovering
              from surgery, injury, or managing a chronic condition, we offer
              personalized care. Experience the path to recovery and reclaim
              your life today!
            </p>
          </div>
        </div>
        <div className="ser_divs" style={{ marginInline: "3rem" }}>
          <div
            style={{
              width: "50%",
              marginInline: "1rem",
            }}
          >
            <h1 className="margin_b">Drug Rehab</h1>
            <p className="margin_b" style={{ fontSize: "small" }}>
              Break free from addiction with our drug rehabilitation services.
              Our compassionate team provides detox, counseling, and therapy
              tailored to your needs. Overcome substance abuse in a supportive
              environment. Start your journey to a healthier, happier life with
              our expert care. Find your path to recovery now!
            </p>
          </div>
          <div className="dru_img img" style={{ width: "50%" }}></div>
        </div>
        <div className="ser_divs" style={{ marginInline: "3rem" }}>
          <div
            style={{
              width: "50%",
              marginInline: "1rem",
            }}
          >
            <h1 className="margin_b">Therapy</h1>
            <p className="margin_b" style={{ fontSize: "small" }}>
              Transform your life with our therapy services. Experienced
              therapists offer personalized treatment for anxiety, depression,
              trauma, and more. Through individual, group, or family sessions,
              we help develop coping strategies, improve relationships, and
              enhance well-being. Take the first step towards a brighter future
              with our effective therapy. Discover healing today!
            </p>
          </div>
          <div className="the_img img" style={{ width: "50%" }}></div>
        </div>
      </div>
      <Wave color={"#3da33d"} />
      <Footer />
    </>
  );
};

export default Services;
