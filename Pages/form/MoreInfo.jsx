import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { getMyVariable } from "./Register";
let someData = getMyVariable();

const MoreInfo = () => {
  const [formData, setFormData] = useState({
    ...someData,
    firstName: "",
    lastName: "",
    address: "",
    Gender: "",
    Sexuality: "",
    Status: "",
    age: "",
    dateOfBirth: "",
    profilePicture: null,
    phoneNumber: "",
    closestKinName: "",
    closestKinPhoneNumber: "",
    servicesNeeded: {
      drugRehab: false,
      coupleTherapy: false,
      physicalTherapy: false,
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/users/username", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        return response.data;
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate(`/patient/${formData.username}/profile`);
        }
      })
      .catch((error) => {
        console.error(error);
        console.error("Error submitting form:", error.response.data.message);
      });
  };
  const handleFormDataChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      servicesNeeded: {
        ...prevFormData.servicesNeeded,
        [name]: value,
      },
    }));
  };

  return (
    <div className="wrapper">
      <div className="nusu">
        <span>
          Serene.
          <br />
        </span>
        <h2>Rehab Services Form</h2>
        <p></p>
      </div>
      <div className="nusu">
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Outlet context={{ formData, handleFormDataChange }} />
        </form>
      </div>
    </div>
  );
};

export default MoreInfo;
