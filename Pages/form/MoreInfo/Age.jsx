import { useRef, useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const Age = () => {
  const [isDisable, setIsDisabled] = useState(true);
  const ref = useRef([]);
  useEffect(() => {
    setIsDisabled(ref.current.value === "");
  }, [ref.current.value]);
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
      <label htmlFor="age">
        <div className="input_wrapper">
          <input
            type="number"
            name="age"
            id="age"
            max={100}
            min={0}
            onChange={handleChange}
            value={formData.age}
            onKeyDown={handleKeyDown}
            ref={ref}
          />
          <div className="after">age</div>
        </div>
      </label>
      <Button
        to={"/form/moreinfo/religion&tribe"}
        hC={true}
        style={{
          background: "#3da33d",
          color: "white",
          padding: ".75rem 3rem",
          margin: "3%",
        }}
        disabled={isDisable}
      >
        <p>Next</p>
      </Button>
    </>
  );
};

export default Age;
