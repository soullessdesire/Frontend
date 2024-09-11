import React from "react";
import PropTypes from "prop-types";
import Button from "../universal/Button";
const ForgotPassEmail = ({ closeModal }) => {
  const [email, setEmail] = React.useState("");
  const [isDisable, setIsDisabled] = React.useState(true);
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  React.useEffect(() => {
    if (email) {
      setIsDisabled(true);
    }
  }, [email]);
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
  const handleSubmit = () => {};
  return (
    <>
      <div
        style={{
          background: "var(--meta-color)",
          width: "400px",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <h2>Email</h2>
        <br />
        <p
          style={{
            fontSize: "12px",
            color: "#666",
          }}
        >
          Enter your email to be sent an email response with a link to a url
          that will allow you to change your password
        </p>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <div className="input_wrapper">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              onKeyDown={handleKeyDown}
            />
            <div className="after">
              <p
                style={{
                  backgroundColor: "var(--meta-color)",
                }}
              >
                Email
              </p>
            </div>
          </div>
          <Button
            hC={true}
            style={{
              background: "#3da33d",
              color: "white",
              padding: "8px 12px",
              border: "none",
              marginRight: "1rem",
              borderRadius: "2px",
            }}
            disabled={isDisable}
            type={"submit"}
          >
            <p>Submit</p>
          </Button>
          <button
            type="button"
            style={{
              background: "red",
              color: "white",
              padding: "8px 12px",
              border: "none",
              borderRadius: "2px",
            }}
            onClick={closeModal}
          >
            Close
          </button>
        </form>
      </div>
    </>
  );
};
ForgotPassEmail.propTypes = {
  closeModal: PropTypes.func,
};

export default ForgotPassEmail;
