import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const Age = () => {
  const { formData, handleFormDataChange } = useOutletContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange(name, value);
  };
  const handleKeyDown = (event) => {
    if (event) {
      console.log(event.target.parentNode);
      event.target.parentNode.querySelector(".after").style.display = "none";
    }
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
            style={{ marginRight: "10rem" }}
          />
          <div className="after">age</div>
        </div>
      </label>
      <Button
        to={"/form/moreinfo/address"}
        hC={true}
        text={"Next"}
        bg={"#3da33d"}
        color={"white"}
        p={".75rem 3rem"}
        margin={"2.5%"}
      />
    </>
  );
};

export default Age;
