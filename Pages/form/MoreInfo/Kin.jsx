import { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const Kin = () => {
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
      <label htmlFor="closestKinName">
        <div className="input_wrapper">
          <input
            type="text"
            name="closestKinName"
            id="closestKinName"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.closestKinName}
            ref={addToRefs}
          />
          <div className="after">Closest Kin Name</div>
        </div>
      </label>
      <label htmlFor="closestKinPhoneNumber">
        <div className="input_wrapper">
          <input
            type="tel"
            name="closestKinPhoneNumber"
            id="closestKinPhoneNumber"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.closestKinPhoneNumber}
            ref={addToRefs}
          />
          <div className="after">Closest Kin Phone Number</div>
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
        to={"/form/moreinfo/religion&tribe"}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
};

export default Kin;
