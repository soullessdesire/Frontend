import { useEffect, useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const Address = () => {
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
  const handleKeyDown = (event) => {
    const after = event.target.parentNode.querySelector(".after").style;

    after.color = "var(--primary-color)";
    after.fontSize = "12px";
    after.fontWeight = "400";
    after.top = "30%";
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange(name, value);
  };
  return (
    <>
      <label htmlFor="address">
        <div className="input_wrapper">
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.address}
            ref={addToRefs}
          />
          <div className="after">Address</div>
        </div>
      </label>
      <label htmlFor="phoneNumber">
        <div className="input_wrapper">
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.phoneNumber}
            ref={addToRefs}
          />
          <div className="after">
            <p
              style={{
                backgroundColor: "var(--meta-color)",
              }}
            >
              Confrim Password
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
            isDisabled ? "var(--disabled-color)" : "var(--primary-color)"
          }`,
        }}
        to={"/form/moreinfo/ProfilePic"}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
};

export default Address;
