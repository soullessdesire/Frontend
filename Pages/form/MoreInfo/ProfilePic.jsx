import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const ProfilePic = () => {
  const { formData, handleFormDataChange } = useOutletContext();
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    handleFormDataChange(name, files[0]);
  };
  return (
    <>
      <label htmlFor="profilePicture">
        <div className="input_wrapper">
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            onChange={handleFileChange}
            value={formData.ProfilePic}
            style={{
              marginRight: "8rem",
              marginLeft: ".6rem",
            }}
          />
        </div>
      </label>
      <Button
        to={"/form/moreinfo/servicesapp"}
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

export default ProfilePic;
