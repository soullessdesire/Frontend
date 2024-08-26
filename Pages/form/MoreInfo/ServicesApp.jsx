import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const ServicesApp = () => {
  const { formData, handleFormDataChange } = useOutletContext();
  const [isDisabled, setIsDisabled] = useState(true);
  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  useEffect(() => {
    const refCurrentCopy = [...ref.current];
    const checkInputs = () => {
      const allFilled = refCurrentCopy.every(
        (input) => input.value.trim() !== ""
      );
      setIsDisabled(!allFilled);
    };
    checkInputs();
    refCurrentCopy.forEach((input) =>
      input.addEventListener("input", checkInputs)
    );
    return () => {
      refCurrentCopy.forEach((input) =>
        input.removeEventListener("input", checkInputs)
      );
    };
  }, [isDisabled, formData]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    handleFormDataChange(name, checked);
  };
  const handleHover = (e) => {
    e.target.style.backgroundColor = "#3da33d";
  };
  const handleLeave = (e) => {
    e.target.style.backgroundColor = "#074302";
  };
  return (
    <>
      <div
        style={{
          marginBottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <label
          style={{
            fontSize: "18px",
            color: "var(--primary-color)",
          }}
        >
          Services Needed
        </label>
        <div>
          <label
            className="custom-checkbox-container"
            style={{
              backgroundColor: "#074302",
              color: "white",
              padding: ".75rem 2rem",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "270px",
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
              }}
              name="drugRehab"
              checked={formData.servicesNeeded.drugRehab}
              onChange={handleChange}
              ref={addToRefs}
            />
            Drug Rehab
            <span className="custom-checkbox"></span>
          </label>
          <br />
          <label
            className="custom-checkbox-container"
            style={{
              backgroundColor: " #074302",
              color: "white",
              padding: ".75rem 2rem",
              display: "flex",
              justifyContent: "flex-start",
              width: "270px",
              alignItems: "center",
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
              }}
              name="coupleTherapy"
              checked={formData.servicesNeeded.coupleTherapy}
              onChange={handleChange}
              ref={addToRefs}
            />
            Couple Therapy
            <span className="custom-checkbox"></span>
          </label>
          <br />
          <label
            className="custom-checkbox-container"
            style={{
              backgroundColor: " #074302",
              color: "white",
              padding: ".75rem 2rem",
              display: "flex",
              justifyContent: "flex-start",
              width: "270px",
              alignItems: "center",
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
              }}
              name="physicalTherapy"
              checked={formData.servicesNeeded.physicalTherapy}
              onChange={handleChange}
              ref={addToRefs}
            />
            Physical Therapy
            <span className="custom-checkbox"></span>
          </label>
        </div>
      </div>
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
        type={"submit"}
        disabled={isDisabled}
      >
        Submit
      </Button>
    </>
  );
};

export default ServicesApp;
