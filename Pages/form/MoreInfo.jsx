import { useCallback, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/Logo";

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
    Religion: "",
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    handleFormDataChange(name, value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const Data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "servicesNeeded") {
        Data.append(key, formData[key]);
      }
    });
    Object.keys(formData.servicesNeeded).forEach((key) => {
      Data.append(`servicesNeeded[${key}]`, formData.servicesNeeded[key]);
    });

    Data.append("profilePic", file);
    axios
      .post("https://localhost:3000/api/users/username", Data, {
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
  const handleFormDataChange = useCallback(
    (name, value) => {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="wrapper" style={{}}>
      <div
        className="nusu"
        style={{
          background: "#3da33d",
        }}
      >
        <div>
          <Link
            to={"/home"}
            style={{
              color: "#3da33d",
              fontSize: "xx-large",
              display: "flex",
            }}
          >
            <span style={{ width: "50px" }}>
              <Logo color={"white"} />
            </span>
            <p
              style={{
                fontFamily: "Caramel",
                fontSize: "50px",
                color: "var(--meta-color)",
              }}
            >
              Serene
            </p>
          </Link>
        </div>
        <h2
          style={{
            color: "white",
          }}
        >
          Rehab Services Form
        </h2>
        <p></p>
      </div>
      <div className="nusu">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            height: "250px",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Outlet
            context={{
              formData,
              handleFormDataChange,
              file,
              setFile,
              handleChange,
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default MoreInfo;
