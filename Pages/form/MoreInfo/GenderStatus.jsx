import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const GenderStatus = () => {
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
      <label htmlFor="Gender">
        <div className="input_wrapper">
          <input
            type="text"
            name="Gender"
            id="Gender"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.Gender}
            style={{
              marginRight: "3rem",
            }}
          />
          <div className="after">Gender</div>
        </div>
      </label>
      <label htmlFor="Sexuality">
        <div className="input_wrapper">
          <input
            type="text"
            name="Sexuality"
            id="Sexuality"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.Sexuality}
            style={{
              marginRight: "3rem",
            }}
          />
          <div className="after">Sexuality</div>
        </div>
      </label>
      <label htmlFor="Status">
        <div className="input_wrapper">
          <input
            type="text"
            name="Status"
            id="Status"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={formData.Status}
            style={{
              marginRight: "8rem",
              marginLeft: ".6rem",
            }}
          />
          <div className="after">Status</div>
        </div>
      </label>
      <Button
        to={"/form/moreinfo/religion&tribe"}
        hC={true}
        text={"Next"}
        bg={"#3da33d"}
        color={"white"}
        p={".75rem 3rem"}
        margin={"2%"}
      />
    </>
  );
};

export default GenderStatus;
