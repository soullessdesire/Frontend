import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const Kin = () => {
  const { formData, handleChange } = useOutletContext();
  const [isDisabled, setIsDisabled] = useState(true);
  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  function checkInputs() {
    const allFilled = ref.current.every((input) => input.value.trim() !== "");
    console.log(allFilled);
    setIsDisabled(!allFilled);
  }
  const handleKeyDown = (event) => {
    const after = event.target.parentNode.querySelector(".after").style;

    after.color = "var(--secondary-color)";
    after.fontSize = "12px";
    after.fontWeight = "400";
    after.top = "28%";
    after.left = ".1%";
  };
  return (
    <>
      <label htmlFor="closestKinName">
        <div className="input_wrapper">
          <input
            type="text"
            name="closestKinName"
            id="closestKinName"
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
            onKeyDown={handleKeyDown}
            value={formData.closestKinName}
            ref={addToRefs}
          />
          <div className="after">
            <p
              style={{
                backgroundColor: "var(--meta-color)",
              }}
            >
              Closest Kin Name
            </p>
          </div>
        </div>
      </label>
      <label htmlFor="closestKinPhoneNumber">
        <div className="input_wrapper">
          <input
            type="tel"
            name="closestKinPhoneNumber"
            id="closestKinPhoneNumber"
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
            onKeyDown={handleKeyDown}
            value={formData.closestKinPhoneNumber}
            ref={addToRefs}
          />
          <div className="after">
            <p
              style={{
                backgroundColor: "var(--meta-color)",
              }}
            >
              Closest Kin No
            </p>
          </div>
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
            isDisabled ? "var(--disabled-color)" : "#3da33d"
          }`,
        }}
        to={"/form/moreinfo/religion&tribe"}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
};

export default Kin;
