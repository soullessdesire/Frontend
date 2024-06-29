import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const Address = () => {
  const { formData, handleFormDataChange } = useOutletContext();

  const handleKeyDown = (event) => {
    if (event) {
      console.log(event.target.parentNode);
      event.target.parentNode.querySelector(".after").style.display = "none";
    }
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
            style={{
              marginRight: "3rem",
            }}
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
            style={{
              marginRight: "8rem",
              marginLeft: ".6rem",
            }}
          />
          <div className="after">phoneNumber</div>
        </div>
      </label>
      <Button
        to={"/form/moreinfo/kin"}
        hC={true}
        text={"Next"}
        bg={"#3da33d"}
        color={"white"}
        p={".75rem 3rem"}
        margin={"2.5% 2.5% 2.5% 1.5%"}
      />
    </>
  );
};

export default Address;
