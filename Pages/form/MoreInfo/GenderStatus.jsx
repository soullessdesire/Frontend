import { useState, useRef } from "react";
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

  const { formData, handleChange } = useOutletContext();
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
      <label htmlFor="Gender">
        <div className="input_wrapper">
          <input
            type="text"
            name="Gender"
            id="Gender"
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
            onKeyDown={handleKeyDown}
            value={formData.Gender}
            ref={addToRefs}
          />
          <div className="after">
            <p
              style={{
                backgroundColor: "var(--meta-color)",
              }}
            >
              Gender
            </p>
          </div>
        </div>
      </label>

      <label htmlFor="Sexuality">
        <div className="input_wrapper">
          <input
            type="text"
            name="Sexuality"
            id="Sexuality"
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
            onKeyDown={handleKeyDown}
            value={formData.Sexuality}
            ref={addToRefs}
          />
          <div className="after">
            <p
              style={{
                backgroundColor: "var(--meta-color)",
              }}
            >
              Sexuality
            </p>
          </div>
        </div>
      </label>
      <label htmlFor="Status">
        <div className="input_wrapper">
          <input
            type="text"
            name="Status"
            id="Status"
            onChange={(event) => {
              checkInputs();
              handleChange(event);
            }}
            onKeyDown={handleKeyDown}
            value={formData.Status}
            ref={addToRefs}
          />
          <div className="after">
            <p
              style={{
                backgroundColor: "var(--meta-color)",
              }}
            >
              Status
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
        to={"/form/moreinfo/kin"}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
};

export default GenderStatus;
