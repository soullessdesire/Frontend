import { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const GenderStatus = () => {
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
  }, [isDisabled]);
  const { formData, handleFormDataChange } = useOutletContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange(name, value);
  };
  const handleKeyDown = (event) => {
    const after = event.target.parentNode.querySelector(".after").style;

    after.color = "var(--primary-color)";
    after.fontSize = "12px";
    after.fontWeight = "400";
    after.top = "30%";
  };
  return (
    <>
      <label htmlFor="Gender">
        <div className="input_wrapper">
          <input
            type="text"
            name="Gender"
            id="Gender"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.Gender}
            ref={addToRefs}
          />
          <div className="after">Gender</div>
        </div>
      </label>

      <label htmlFor="Sexuality">
        <div className="input_wrapper">
          <input
            type="text"
            name="Sexuality"
            id="Sexuality"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.Sexuality}
            ref={addToRefs}
          />
          <div className="after">Sexuality</div>
        </div>
      </label>
      <label htmlFor="Status">
        <div className="input_wrapper">
          <input
            type="text"
            name="Status"
            id="Status"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.Status}
            ref={addToRefs}
          />
          <div className="after">Status</div>
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
        to={"/form/moreinfo/kin"}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
};

export default GenderStatus;
