import Footer from "../universal/Footer";

function About() {
  return (
    <>
      <br />
      <main className="a_main">
        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "fit-content",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "5rem",
                fontFamily: "Arsenal SC",
              }}
            >
              About Us
            </h1>
          </div>
          <div className="margin_b" style={{ display: "flex" }}>
            <div className="about_divs">
              <h1
                style={{
                  alignSelf: "flex-start",
                  marginBottom: "2rem",
                  fontFamily: "Arsenal SC",
                }}
              >
                Our Vision
              </h1>
              <p style={{ fontFamily: "Inria Sans", fontSize: "18px" }}>
                Our vision is to become the leading rehabilitation center, known
                for transforming lives through innovative, comprehensive, and
                compassionate care. We aim to empower individuals to achieve
                their highest potential in physical health, mental well-being,
                and lasting sobriety, setting a benchmark for excellence in
                rehabilitation services worldwide.
              </p>
            </div>
            <div className="vis_img about_divs img margin-left"></div>
          </div>
          <br />
          <br />
          <br />
          <div style={{ display: "flex" }} className="margin_b">
            <div className="app_img about_divs img"></div>
            <div className="about_divs margin-left">
              <h1 className="margin_b" style={{ fontFamily: "Arsenal SC" }}>
                Our Approach
              </h1>
              <p style={{ fontFamily: "Inria Sans", fontSize: "18px" }}>
                Our process begins with a comprehensive assessment to understand
                each patient’s unique needs, followed by developing
                individualized treatment plans. We integrate physical therapy,
                drug rehabilitation, and therapy services in a supportive
                environment. Progress is regularly monitored and treatment plans
                are adjusted as needed to ensure optimal, lasting outcomes.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
            className="margin_b"
          >
            <div className="about_divs">
              <h1 className="margin_b" style={{ fontFamily: "Arsenal SC" }}>
                Our Process
              </h1>
              <p style={{ fontFamily: "Inria Sans", fontSize: "18px" }}>
                Our process begins with a comprehensive assessment to understand
                each patient’s unique needs, followed by developing
                individualized treatment plans. We integrate physical therapy,
                drug rehabilitation, and therapy services in a supportive
                environment. Progress is regularly monitored and treatment plans
                are adjusted as needed to ensure optimal, lasting outcomes.
              </p>
            </div>
            <div className="pros_img about_divs img margin-left"></div>
          </div>
        </div>
      </main>
      <Footer bg={"#3da33d"} color={"white"} />
    </>
  );
}

export default About;
