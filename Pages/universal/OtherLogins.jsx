import Button from "./Button";
import Facebook from "../../assets/104498_facebook_icon.svg";
import Google from "../../assets/9034975_logo_google_icon.svg";

const OtherLogins = () => {
  return (
    <div
      className="links"
      style={{
        width: "35%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Button
        style={{
          borderRadius: "50%",
          background: "transparent",
          border: "#3da33d 1.5px solid",
          padding: "5px",
          height: "70px",
          width: "70px",
        }}
      >
        <img src={Facebook} alt="" />
      </Button>
      <Button
        style={{
          borderRadius: "50%",
          background: "transparent",
          border: "#3da33d 1.5px solid",
          padding: "5px",
          height: "70px",
          width: "70px",
        }}
      >
        <a href="http://localhost:5173/auth/google">
          <img src={Google} alt="" />
        </a>
      </Button>
    </div>
  );
};

export default OtherLogins;
