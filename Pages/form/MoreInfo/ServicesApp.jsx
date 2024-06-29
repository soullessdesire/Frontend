import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const ServicesApp = () => {
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
  const handleHover = (e) => {
    e.target.style.backgroundColor = "#3da33d";
  };
  const handleLeave = (e) => {
    e.target.style.backgroundColor = "#074302";
  };
  return (
    <>
      <div style={{ marginBottom: "10px", width: "100%" }}>
        <label>Services Needed:</label>
        <div style={{ marginLeft: "10px" }}>
          <label
            className="custom-checkbox-container"
            style={{
              backgroundColor: " #074302",
              color: "white",
              padding: "1rem 3rem",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "270px",
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
              }}
              name="drugRehab"
              checked={formData.servicesNeeded.drugRehab}
              onChange={handleChange}
            />
            <p>Drug Rehab</p>
            <span className="custom-checkbox"></span>
          </label>
          <br />
          <label
            className="custom-checkbox-container"
            style={{
              backgroundColor: " #074302",
              color: "white",
              padding: "1rem 3rem",
              display: "flex",
              justifyContent: "flex-start",
              width: "270px",
              alignItems: "center",
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
              }}
              name="coupleTherapy"
              checked={formData.servicesNeeded.coupleTherapy}
              onChange={handleChange}
            />
            Couple Therapy
            <span className="custom-checkbox"></span>
          </label>
          <br />
          <label
            className="custom-checkbox-container"
            style={{
              backgroundColor: " #074302",
              color: "white",
              padding: "1rem 3rem",
              display: "flex",
              justifyContent: "flex-start",
              width: "270px",
              alignItems: "center",
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
              }}
              name="physicalTherapy"
              checked={formData.servicesNeeded.physicalTherapy}
              onChange={handleChange}
            />
            Physical Therapy
            <span className="custom-checkbox"></span>
          </label>
        </div>
      </div>
      <Button
        text={"Submit"}
        type={"submit"}
        bg={" #3da33d"}
        color={"white"}
        p={".75rem 3rem"}
        margin={"1.5%"}
      />
    </>
  );
};

export default ServicesApp;
