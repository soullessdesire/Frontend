import { Camera } from "@mui/icons-material";
import { lazy } from "react";
const Vector1 = lazy(() => import("../../assets/Vector1"));
const FAQ = lazy(() => import("./FAQ"));
const Decoration = lazy(() => import("../../assets/Decoration"));
const Wave = lazy(() => import("../../assets/Wave"));
const Footer = lazy(() => import("../universal/Footer"));

function Home() {
  return (
    <>
      <main className="main">
        <section className="h__section">
          <div className="deco"></div>
          <div className="content">
            <h1
              style={{
                fontFamily: "Baskervville SC",
                fontWeight: 400,
                color: "white",
              }}
            >
              Discover Healing & Hope
            </h1>
            <h4 style={{ fontFamily: "Arsenal SC", color: "white" }}>
              Your Journey to Recovery Starts Here{" "}
            </h4>
            <p
              style={{
                fontFamily: "Inria Sans",
                fontSize: "24ox",
                color: "white",
              }}
            >
              Welcome to Serene. Our dedicated team is here to guide you towards
              recovery, providing compassionate care every step of the way. With
              personalized treatment plans, we&apos;re committed to helping you
              regain control and rediscover hope. Take the first step towards a
              brighter future today.
            </p>
          </div>
        </section>
        <section className="opener_section">
          <div className="first_half">
            <h1>
              Kenya&apos;s number <span>1</span> rehab
            </h1>
          </div>
          <div className="second_half">
            <div>
              <h1 style={{ fontFamily: "Philosopher" }}>300,000</h1>
              <br />
              <p style={{ fontFamily: "Inria Sans", fontSize: "24ox" }}>
                These numbers hold countless stories of trust and joy. Each
                satisfied customer embodies a special connection, a life
                touched.
              </p>
            </div>
            <div>
              <h1 style={{ fontFamily: "Philosopher" }}>200</h1>
              <br />
              <p style={{ fontFamily: "Inria Sans", fontSize: "24ox" }}>
                This is the number of our professional therapists and other
                service providers tht help us to give you a more comfortable
                experience with life
              </p>
            </div>
          </div>
        </section>
        <section
          className="nd_section"
          style={{
            backgroundColor: "#d9d9d9",
          }}
        >
          <Wave color={"white"} />
          <div className="tp_h">
            <div className="right">
              <Vector1
                width={"100%"}
                height={"100%"}
                style={{ position: "absoluite", bottom: "-50%", right: "-50%" }}
              />
              <Camera />
              <div className="one"></div>
            </div>
            <div className="wrong">
              <h1 style={{ fontFamily: "Philosopher" }}>
                Interact with our highly skilled personnel
              </h1>
              <p style={{ fontFamily: "Inria Sans", fontSize: "18px" }}>
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
              <h1 style={{ fontFamily: "Philosopher" }}>
                Together Towards Recovery
              </h1>
              <p style={{ fontFamily: "Inria Sans", fontSize: "18px" }}>
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
        <section className="rd_section">
          <Wave color={"#d9d9d9"} />
          <div>
            <div className="text1">
              <div className="title1">
                <span>F</span>
                <h1 style={{ fontFamily: "Philosopher" }}>AMILY</h1>
              </div>
              <p style={{ fontFamily: "Inria Sans", fontSize: "18px" }}>
                Family members grappling with addiction need support. Addiction
                strains family bonds, creating emotional distress. Targeted
                family assistance provides education, empathy, and healing,
                fostering resilience crucial for recovery and preserving healthy
                relationships
              </p>
            </div>
            <div className="text2">
              <div className="title2">
                <span>F</span>
                <h1 style={{ fontFamily: "Philosopher" }}>RIENDS</h1>
              </div>
              <p style={{ fontFamily: "Inria Sans", fontSize: "18px" }}>
                Friends affected by addiction need support. Addiction strains
                friendships, causing emotional turmoil. Friend-focused
                assistance offers education, understanding, and healing,
                fostering resilience crucial for recovery and maintaining
                healthy relationships
              </p>
            </div>
          </div>
          <div>
            <div className="pic2"></div>
          </div>
        </section>
        <FAQ />
        <Wave color={"#3da33d"} />
        <Footer />
      </main>
    </>
  );
}

export default Home;
