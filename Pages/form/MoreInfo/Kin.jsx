import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const Kin = () => {
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
      <label htmlFor="closestKinName">
        <div className="input_wrapper">
          <input
            type="text"
            name="closestKinName"
            id="closestKinName"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.closestKinName}
            style={{
              marginRight: "3rem",
            }}
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
            style={{
              marginRight: "9rem",
              marginLeft: ".6rem",
            }}
          />
          <div className="after">Closest Kin Phone Number</div>
        </div>
      </label>
      <Button
        to={"/form/moreinfo/gender&status"}
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

export default Kin;
