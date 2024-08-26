import { useState, useRef } from "react";
import Button from "../../universal/Button";
import { useOutletContext } from "react-router-dom";
import Select from "../../universal/Select";

const Religion = () => {
  const { formData, handleChange } = useOutletContext();
  const [isDisabled, setIsDisabled] = useState(true);
  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  const checkInputs = () => {
    const allFilled = ref.current.every((input) => input.value.trim() !== "");
    setIsDisabled(!allFilled);
  };
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
      <label htmlFor="Religion">
        <div className="input_wrapper">
          <input
            type="text"
            name="Religion"
            id="Religion"
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
            onKeyDown={handleKeyDown}
            value={formData.Religion}
            ref={addToRefs}
          />
          <div className="after">
            <p>Religion</p>
          </div>
        </div>
      </label>
      <label htmlFor="Tribe">
        <div className="input_wrapper select">
          <Select />
          <div className="after">Select an Option</div>
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
        to={"/form/moreinfo/address"}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
};

export default Religion;
