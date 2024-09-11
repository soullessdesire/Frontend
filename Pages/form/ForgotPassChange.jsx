import { useEffect, useState } from "react";
import Button from "../universal/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";

const ForgotPassChange = () => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const handleSubmit = () => {};
  useEffect(() => {
    if (passwords.newPassword === passwords.confirmPassword) {
      setIsDisabled(false);
    }
  }, [passwords]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };
  const handleKeyDown = (event) => {
    const afterStyle = event.target.parentNode.querySelector(".after").style;

    afterStyle.color = "#3da33d";
    afterStyle.fontSize = "12px";
    afterStyle.fontWeight = "400";
    afterStyle.top = "30%";
    afterStyle.background = "var(--meta-color)";
    const afterElement = event.target.parentNode.querySelector(".after");
    afterElement.addEventListener("blur", () => {
      console.log("blur");
      afterStyle.background = "var(--meta-color)";
      afterStyle.color = "var(--secondary-color)";
    });
  };
  return (
    <div className="wrapper">
      <div className="nusu">
        <div>
          <Link
            to={"/home"}
            style={{
              color: "#3da33d",
              fontSize: "xx-large",
              display: "flex",
            }}
          >
            <span style={{ width: "50px" }}>
              <Logo></Logo>
            </span>
            <p style={{ fontFamily: "Caramel", fontSize: "50px" }}>Serene</p>
          </Link>
        </div>
        <h2>Forgot Password</h2>
        <p></p>
      </div>
      <div className="nusu">
        <form onSubmit={handleSubmit}>
          <label htmlFor="new_password"></label>
          <div className="input_wrapper">
            <input
              type="password"
              id="new_password"
              name="new_password"
              value={passwords.newPassword}
              onChange={handleChange}
              required
              onKeyDown={handleKeyDown}
            />
            <div className="after">New Password</div>
          </div>
          <label htmlFor="confirm_password"></label>
          <div className="input_wrapper">
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={passwords.confirmPassword}
              onChange={handleChange}
              required
              onKeyDown={handleKeyDown}
            />
            <div className="after">Confrim Password</div>
          </div>
          <Button
            type={"submit"}
            style={{
              color: "var(--meta-color)",
              background: "#3da33d",
              padding: ".75rem 3rem",
              border: "none",
              margin: "3%",
            }}
            disabled={isDisabled}
          >
            <p>Submit</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassChange;
