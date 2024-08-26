import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import chat from "../../assets/392521_bubble_chat_comment_message_talk_icon.svg";
import contacts from "../../assets/510857_account_contacts_group_people_users_icon.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useOutletContext, useParams } from "react-router-dom";
import Button from "../universal/Button";

const UserProfile = () => {
  const { userData } = useOutletContext();
  function capitalize(str) {
    return str.replace(/^./, (char) => char.toUpperCase());
  }

  const work = false;
  const workPlace = "Nairobi";
  const { username } = useParams();
  return (
    <div
      style={{
        display: "flex",
        flexGrow: "1",
        height: "fit-content",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "86vw",
          marginLeft: ".1rem",
          overflow: "hidden scroll",
          height: "calc(100vh - 90px)",
          flexGrow: "1",
        }}
      >
        <div
          style={{
            width: "28%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="profile">
            {userData.Image.path ? (
              <img
                src={userData.Image.path
                  .concat("..\\")
                  .replace(/\\{2,2}/g, "/")
                  .replace("frontend/", "")}
                width={"85%"}
                style={{
                  aspectRatio: "4/3",
                }}
              />
            ) : (
              <AccountCircleIcon sx={{ color: "#3da33d", fontSize: 80 }} />
            )}
          </div>
          <div className="border_top work por" style={{ height: "360px" }}>
            <p>Work</p>
            <br />
            <br />
            <div>
              {work ? (
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h3>{workPlace}</h3>{" "}
                  <span
                    className="bgCc"
                    style={{
                      width: "fit-content",
                      padding: ".5rem",
                      textAlign: "center",
                      marginRight: "1rem",
                    }}
                  >
                    Primary
                  </span>
                  <p></p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    height: "fit-content",
                    width: "170px",
                  }}
                >
                  <h3>Spotify New York</h3> {"  "}{" "}
                  <span
                    className="bgCc"
                    style={{
                      width: "4rem",
                      textAlign: "center",
                      marginLeft: "1rem",
                      height: "fit-content",
                    }}
                  >
                    Primary
                  </span>
                  <p></p>
                </div>
              )}
            </div>
            <br />
            <br />
            <br />
            <div
              className="por"
              style={{
                borderTop: "1px #d9d9d9 solid",
              }}
            >
              <p
                className="poa"
                style={{
                  top: "-10%",
                  background: "white",
                  color: "#888888",
                }}
              >
                Services Provided
              </p>
              <br />
              <br />
              <ul>
                <li>Branding</li>
                <li>UI/UX</li>
                <li>Web-design</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "60%",
            borderLeft: "1px #d9d9d9 solid",
            marginLeft: "1rem",
            height: "fit-content",
            paddingLeft: "1rem",
            paddingTop: "1.5rem",
          }}
        >
          <div className="info">
            <div>
              <h1>
                {capitalize(username)}{" "}
                <LocationOnIcon sx={{ color: "#818181" }} />
              </h1>
              <p style={{ color: "#818181" }}>location</p>
              <p>{"work"}</p>
            </div>
            <div style={{ display: "flex" }}>
              <Button
                style={{
                  color: "#3da33d",
                  width: "8rem",
                  marginRight: "1rem",
                  marginBlock: "1rem",
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  gap: ".2rem",
                }}
              >
                <img src={chat} alt="" width={"30px"} />
                Send message
              </Button>
              <Button
                style={{
                  background: "#b9f9b3",
                  color: "#3da33d",
                  width: "8rem",
                  marginInline: "1rem",
                  marginBlock: "1rem",
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  gap: ".2rem",
                }}
              >
                <img src={contacts} alt="" width={"30px"} />
                Send Email
              </Button>
            </div>
            <br />
            <div className="contact_info border_top por">
              <p
                className="poa"
                style={{
                  top: "-5%",
                  left: 0,
                  background: "white",
                  color: "#888888",
                  paddingRight: "4px",
                }}
              >
                Contact information
              </p>
              <br />
              <br />
              <p>
                Phone{":   "}
                <span className="bgCc">{"01114673"}</span>
              </p>
              <br />
              <br />
              <p>
                Address{":   "}
                <span className="bgCc">{"2029-00700"}</span>
              </p>
              <br />
              <br />
              <p>
                Email{":   "}
                <span className="bgCc">{"fuckyou@gmail.com"}</span>
              </p>
              <br />
              <br />
            </div>
            <br />
            <div className="personal_info border_top por">
              <p
                style={{
                  background: "white",
                  color: "#888888",
                  top: "-10%",
                  left: 0,
                  padding: "4px",
                }}
                className="poa"
              >
                Personal Info
              </p>
              <br />
              <br />
              <p>
                birthDay {":   "}
                <span className="bgCc">{"20-10-2000"}</span>
              </p>
              <br />
              <br />
              <p>
                Gender{":   "}
                <span className="bgCc">{"Male"}</span>
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
