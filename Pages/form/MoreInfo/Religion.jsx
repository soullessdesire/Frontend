import { useState, useEffect, useRef } from "react";
import Button from "../../universal/Button";
import { useOutletContext } from "react-router-dom";
import Select from "../../universal/Select";

const Religion = () => {
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
  }, [formData, isDisabled]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange(name, value);
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
            onChange={handleChange}
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
