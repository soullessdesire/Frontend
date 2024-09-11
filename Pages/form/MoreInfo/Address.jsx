import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const Address = () => {
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

    after.color = "#3da33d";
    after.fontSize = "12px";
    after.fontWeight = "400";
    after.top = "30%";
  };
  return (
    <>
      <label htmlFor="address">
        <div className="input_wrapper">
          <input
            type="text"
            name="address"
            id="address"
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
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
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
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
            isDisabled ? "var(--disabled-color)" : "#3da33d"
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
