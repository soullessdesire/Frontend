import "./User.css";
import { lazy, Suspense } from "react";
const Donut = lazy(() => import("./Charts/Donut"));
const Line = lazy(() => import("./Charts/Line"));
const Bar = lazy(() => import("./Charts/Bar"));
const Pie = lazy(() => import("./Charts/Pie"));
import { TrendingUp } from "lucide-react";
import Loading from "../../assets/Loading";
const appointments = [
  {
    image: "https://localhost:3000/public/images/Kombat.jpg",
    conductor: "Dr. Sarah Kombat",
    timeTaken: "45 minutes",
    gmial: "sarah.johnson@example.com",
  },
  {
    image: "https://localhost:3000/public/images/Jennifer.jpg",
    conductor: "Dr. Jennifer Lee",
    timeTaken: "30 minutes",
    gmial: "michael.lee@example.com",
  },
  {
    image: "https://localhost:3000/public/images/muhammad.jpg",
    conductor: "Dr. Emily Muhammad",
    timeTaken: "60 minutes",
    gmial: "emily.davis@example.com",
  },
  {
    image: "https://localhost:3000/public/images/sunderland.jpg",
    conductor: "Dr. James Sunderland",
    timeTaken: "20 minutes",
    gmial: "james.miller@example.com",
  },
];

const Progress = () => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <div
        style={{
          display: "flex",
          flexGrow: "1",
          overflowY: "scroll",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            gap: "2rem",
            paddingInline: "2rem",
            marginTop: "1rem",
          }}
        >
          <div className="the_three pie padding">
            <div>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                }}
              >
                Pie Chart
              </h1>
              <p
                style={{
                  color: "#888",
                  fontSize: "12px",
                }}
              >
                This is the all time hours spent in the programs you have taken
              </p>
            </div>
            <Pie />
          </div>
          <div className="the_three pie padding">
            <div>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                }}
              >
                Pie Chart
              </h1>
              <p
                style={{
                  color: "#888",
                  fontSize: "12px",
                }}
              >
                This is the all money spent on the programs you have taken
              </p>
            </div>
            <Donut />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "400px",
            }}
          >
            <div className="bar the_three padding">
              <div>
                <h1
                  style={{
                    fontSize: "18px",
                    fontWeight: 300,
                  }}
                >
                  Bar Chart
                </h1>
                <p
                  style={{
                    color: "#888",
                    fontSize: "12px",
                  }}
                >
                  This is the amount of money paid for services
                </p>
              </div>
              <div
                style={{
                  width: "270px",
                }}
              ></div>
              <Bar />
            </div>
            <div className="bar the_three padding">
              <div>
                <h1
                  style={{
                    fontSize: "18px",
                    fontWeight: 300,
                  }}
                >
                  Bar Chart
                </h1>

                <p
                  style={{
                    color: "#888",
                    fontSize: "12px",
                  }}
                >
                  This is the amount of money spent on services
                </p>
              </div>
              <div
                style={{
                  width: "270px",
                }}
              >
                <Bar />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "700px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "650px",
              height: "400px",
              margin: "2rem 0 0 2rem",
              boxShadow:
                "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px, rgba(0, 0, 0, 0.15) -1.95px -1.95px 2.6px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: ".5rem",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                }}
              >
                Line Chart
              </h1>
              <p
                style={{
                  color: "#888",
                  fontSize: "12px",
                }}
              >
                This is the all time hours spent in the programs you have taken
              </p>
            </div>
            <div
              style={{
                height: "350px",
              }}
            >
              <Line />
              <div>
                Trending up by 5.2% this month <TrendingUp strokeWidth={4} />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "420px",
              height: "400px",
              margin: "2rem 1rem 0 auto",
              padding: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px, rgba(0, 0, 0, 0.15) -1.95px -1.95px 2.6px",
              borderRadius: "12px",
            }}
          >
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 300,
              }}
            >
              Recent Appointments
            </h1>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 300,
                color: "#888",
              }}
            >
              These are the appointments you attended and completed recently
            </p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              {appointments.map((appointment, key) => {
                return (
                  <li
                    key={key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={appointment.image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginInline: "16px",
                        width: "188px",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: 400,
                        }}
                      >
                        {appointment.conductor}
                      </h4>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#888",
                          fontWeight: 300,
                        }}
                      >
                        {appointment.gmial}
                      </p>
                    </div>
                    <div>{appointment.timeTaken}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Progress;
