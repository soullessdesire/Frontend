import React from "react";
import Button from "../../universal/Button";
import { useOutletContext } from "react-router-dom";

const Religion = () => {
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
      <label htmlFor="Religion">
        <div className="input_wrapper">
          <input
            type="text"
            name="Religion"
            id="Religion"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.Religion}
            style={{ marginRight: "3rem" }}
          />
          <div className="after">Religion</div>
        </div>
      </label>
      <label htmlFor="Tribe">
        <div className="input_wrapper">
          <input
            type="text"
            name="Tribe"
            id="Tribe"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.Tribe}
            style={{
              marginRight: "8rem",
              marginLeft: ".6rem",
            }}
          />
          <div className="after">Tribe</div>
        </div>
      </label>
      <Button
        to={"/form/moreinfo/profilepic"}
        hC={true}
        text={"Next"}
        bg={"#3da33d"}
        color={"white"}
        p={".75rem 3rem"}
        margin={"1.5%"}
      />
    </>
  );
};

export default Religion;
