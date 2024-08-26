import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../universal/Button";

const ProfilePic = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { setFile } = useOutletContext();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setIsDisabled(false);
  };
  return (
    <>
      <label htmlFor="profilePic">
        <div className="input_wrapper">
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            onChange={handleChange}
            style={{
              marginRight: "8rem",
              marginLeft: ".6rem",
            }}
          />
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
            isDisabled ? "var(--disabled-color)" : "var(--primary-color)"
          }`,
        }}
        to={"/form/moreinfo/servicesapp"}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
};

export default ProfilePic;
