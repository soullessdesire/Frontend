import "./User.css";
import Donut from "./Charts/Donut";
import Line from "./Charts/Line";
import Bar from "./Charts/Bar";
import Pie from "./Charts/Pie";

const Progress = () => {
  return (
    <div
      style={{
        display: "flex",
        flexGrow: "1",
        overflowY: "scroll",
        flexDirection: "column",
        height: "calc(100vh - 90px)",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "600px",
            height: "400px",
            margin: "3rem 0 0 2.5rem",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
          }}
        >
          <Line />
        </div>
        <div
          style={{
            width: "300px",
            height: "400px",
            margin: "3rem 3rem 0 auto",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="the_three pie">
          <Pie />
        </div>
        <div className="the_three donut">
          <Donut />
        </div>
        <div className="the_three bar">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default Progress;
