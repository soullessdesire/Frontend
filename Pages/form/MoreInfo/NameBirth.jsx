import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const NameBirth = () => {
  const { formData, handleFormDataChange } = useOutletContext();
  const handleChange = (e) => {
    const { name, type, checked, files, value } = e.target;
    if (type === "checkbox") {
      handleFormDataChange(name, checked);
    } else if (type === "file") {
      handleFormDataChange(name, files[0]);
    } else {
      handleFormDataChange(name, value);
    }
  };
  const handleKeyDown = (event) => {
    if (event) {
      console.log(event.target.parentNode);
      event.target.parentNode.querySelector(".after").style.display = "none";
    }
  };
  return (
    <>
      <h3
        style={{
          width: "100%",
        }}
      >
        {/* Name & Birth */}
      </h3>
      <label htmlFor="firstName">
        <div className="input_wrapper">
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.firstName}
            style={{
              marginRight: "3rem",
              width: "150px",
            }}
          />
          <div className="after">First</div>
        </div>
      </label>

      <label htmlFor="lastName">
        <div className="input_wrapper">
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.lastName}
            style={{
              width: "150px",
            }}
          />
          <div className="after">Last</div>
        </div>
      </label>
      <br />
      <br />

      <label htmlFor="dateOfBirth">
        <div className="input_wrapper1">
          <input
            style={{
              width: "347.5px",
              margin: "1.5%",
              marginRight: "5rem",
            }}
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.dateOfBirth}
          />
        </div>
      </label>
      <Button
        to={"/form/moreinfo/age"}
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

export default NameBirth;
