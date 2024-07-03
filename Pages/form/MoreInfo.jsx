import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const MoreInfo = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    Gender: "",
    Sexuality: "",
    Status: "",
    age: "",
    Religion: "",
    Tribe: "",
    dateOfBirth: "",
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
    const Data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "servicesNeeded") {
        Data.append(key, formData[key]);
      }
    });
    Object.keys(formData.servicesNeeded).forEach((key) => {
      Data.append(`servicesNeeded[${key}]`, formData.servicesNeeded[key]);
    });

    // Append the file
    Data.append("profilePic", file);
    console.log(Data.entries());
    const log = (data) => {
      for (let [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
      }
    };
    log(Data);
    axios
      .post("http://localhost:3000/api/users/username", Data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
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
        navigate("/form/main");
        console.error("Error submitting form:", error.response.data.message);
      });
  };
  const handleFormDataChange = (name, value) => {
    if (typeof value === "object") {
      console.log(value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        servicesNeeded: { ...prevFormData.servicesNeeded },
        [name]: { ...value },
      }));
      return;
    }
    if (Object.keys(formData).includes(name)) {
      // console.log(
      //   name,
      //   Object.keys(formData).includes(name),
      //   Object.keys(formData)
      // );
      setFormData((prevFormData) => ({
        ...prevFormData,
        servicesNeeded: {
          ...prevFormData.servicesNeeded,
        },
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        servicesNeeded: {
          ...prevFormData.servicesNeeded,
          [name]: value,
        },
      }));
    }
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
          encType="multipart/form-data"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Outlet context={{ formData, handleFormDataChange, file, setFile }} />
        </form>
      </div>
    </div>
  );
};

export default MoreInfo;
