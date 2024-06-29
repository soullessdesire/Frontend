import React from "react";
import Navbar from "../universal/Navbar";
import { Camera } from "@mui/icons-material";
import Vector1 from "../../assets/Vector1";
import FAQ from "./FAQ";
import Decoration from "../../assets/Decoration";
import Wave from "../../assets/Wave";
import Button from "../universal/Button";
import Footer from "../universal/Footer";

function Home() {
  return (
    <>
      <Navbar Login={true} ul={true} />
      <main className="main">
        <section className="h__section">
          <div className="deco"></div>
          <div className="content">
            <h1>Discover Healing & Hope</h1>
            <h4>Your Journey to Recovery Starts Here </h4>
            <p>
              Welcome to Serene. Our dedicated team is here to guide you towards
              recovery, providing compassionate care every step of the way. With
              personalized treatment plans, we're committed to helping you
              regain control and rediscover hope. Take the first step towards a
              brighter future today.
            </p>
            <Button text={"Register"} to={"register"} />
          </div>
        </section>
        <section className="opener_section">
          <div className="first_half">
            <h1>
              Kenya's number <span>1</span> rehab
            </h1>
          </div>
          <div className="second_half">
            <div>
              <h1>300,000</h1>
              <br />
              <p>
                These numbers hold countless stories of trust and joy. Each
                satisfied customer embodies a special connection, a life
                touched.
              </p>
            </div>
            <div>
              <h1>200</h1>
              <br />
              <p>
                This is the number of our professional therapists and other
                service providers tht help us to give you a more comfortable
                experience with life
              </p>
            </div>
          </div>
        </section>
        <section className="nd_section">
          <Wave color={"white"} />
          <div className="tp_h">
            <div className="right">
              <Vector1 />
              <Camera />
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
            <div className="wrong">
              <h1>Interact with our highly skilled personnel</h1>
              <p>
                Discover the compassionate expertise of our dedicated team at
                Rehab Site. Our skilled professionals offer unwavering support,
                guiding you through every step of your journey towards healing
                and recovery. Trust in their experience and commitment to your
                well-being
              </p>
            </div>
          </div>
          <div className="btm_h">
            <div className="lt">
              <h1>Together Towards Recovery</h1>
              <p>
                At Serene, we believe in the power of togetherness on the
                journey to recovery. Join us as we walk hand in hand, supporting
                each other every step of the way. Together, we can conquer
                addiction and embrace a brighter, healthier future. You
              </p>
            </div>
            <div className="rt">
              <Decoration />
              <div className="four"></div>
              <div className="five"></div>
              <div className="six"></div>
            </div>
          </div>
        </section>
        <Wave color={"#d9d9d9"} />
        <section className="rd_section">
          <div className="pic1"></div>
          <div className="text1">
            <div className="title1">
              <span>F</span>
              <h1>AMILY</h1>
            </div>
            <p>
              Family members grappling with addiction need support. Addiction
              strains family bonds, creating emotional distress. Targeted family
              assistance provides education, empathy, and healing, fostering
              resilience crucial for recovery and preserving healthy
              relationships
            </p>
            <Button
              text={"Learn more"}
              marginTop="4rem"
              to={"learnmore"}
              paddingLeft=".3rem"
              bg={"#3da33d"}
            />
          </div>
          <div className="text2">
            <div className="title2">
              <span>F</span>
              <h1>RIENDS</h1>
            </div>
            <p>
              Friends affected by addiction need support. Addiction strains
              friendships, causing emotional turmoil. Friend-focused assistance
              offers education, understanding, and healing, fostering resilience
              crucial for recovery and maintaining healthy relationships
            </p>
            <Button
              text={"Learn more"}
              marginTop="4rem"
              paddingLeft=".3rem"
              bg={"#3da33d"}
              to={"learnmore"}
            />
          </div>
          <div className="pic2"></div>
        </section>
        <FAQ />
        <Wave color={"#3da33d"} />
        <Footer />
      </main>
    </>
  );
}

export default Home;
