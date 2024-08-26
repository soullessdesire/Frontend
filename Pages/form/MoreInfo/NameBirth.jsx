import { useEffect, useState, useRef } from "react";
import { useOutletContext, useLocation, useNavigate } from "react-router-dom";

import Button from "../../universal/Button";

const NameBirth = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, handleFormDataChange, handleChange } = useOutletContext();
  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  useEffect(() => {
    const someData = location.state ? { ...location.state } : null;
    if (!someData) {
      navigate("/form/main");
      return;
    }

    Object.keys(someData).forEach((key) => {
      console.log(key, someData[key]);
      handleFormDataChange(key, someData[key]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function checkInputs() {
    const allFilled = ref.current.every((input) => input.value.trim() !== "");
    console.log(allFilled);
    setIsDisabled(!allFilled);
  }

  const handleKeyDown = (event) => {
    if (event.target.getAttribute("id") === "dateOfBirth") return;
    const after = event.target.parentNode.querySelector(".after").style;

    after.color = "var(--secondary-color)";
    after.fontSize = "12px";
    after.fontWeight = "400";
    after.top = "28%";
    after.left = ".1%";
  };
  return (
    <>
      <h3
        style={{
          width: "100%",
        }}
      >
        {/* Name & Birth */}
      </h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <label htmlFor="firstName">
          <div className="input_wrapper">
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={(event) => {
                checkInputs();
                handleChange(event);
              }}
              onKeyDown={handleKeyDown}
              value={formData.firstName}
              style={{
                width: "150px",
                paddingLeft: "7%",
                marginRight: "3rem",
                marginLeft: "0",
              }}
              ref={addToRefs}
            />
            <div className="after">
              <p
                style={{
                  backgroundColor: "var(--meta-color)",
                }}
              >
                First
              </p>
            </div>
          </div>
        </label>
        <label htmlFor="lastName">
          <div className="input_wrapper">
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={(event) => {
                checkInputs();
                handleChange(event);
              }}
              onKeyDown={handleKeyDown}
              value={formData.lastName}
              style={{
                width: "150px",
                paddingLeft: "7%",
              }}
              ref={addToRefs}
            />
            <div className="after">
              <p
                style={{
                  backgroundColor: "var(--meta-color)",
                }}
              >
                Last
              </p>
            </div>
          </div>
        </label>
      </div>
      <label htmlFor="dateOfBirth">
        <div className="input_wrapper">
          <input
            style={{
              width: "347.5px",
              margin: 0,
            }}
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
            onKeyDown={handleKeyDown}
            value={formData.dateOfBirth}
            ref={addToRefs}
          />
        </div>
      </label>
      <Button
        style={{
          width: "90px",
          height: "40px",
          borderRadius: "4px",
          background: "#3da33d",
          color: "white",
          border: "none",
          backgroundColor: `${
            isDisabled ? "var(--disabled-color)" : "var(--primary-color)"
          }`,
        }}
        to={"/form/moreinfo/gender&status"}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
};

export default NameBirth;
