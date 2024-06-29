import React from "react";

function Secure({ color }) {
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
          navigate("/form/moreinfo/name&birth");
        }
      })
      .catch((error) => {
        console.error(error);
        console.error("Error submitting form:", error.response.data.message);
      });
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 98 98"
      fill="none"
    >
      <path
        d="M28.8569 73.4999V41.0579H69.1431M39.3613 73.4999H69.1431V51.9604"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.2939 54.3206L47.7362 62.7629L58.7061 51.795M40.4659 32.8443C40.4659 30.6312 41.345 28.5088 42.9098 26.944C44.4747 25.3791 46.5971 24.5 48.8102 24.5C51.0232 24.5 53.1456 25.3791 54.7105 26.944C56.2753 28.5088 57.1544 30.6312 57.1544 32.8443V41.0579M40.4699 32.6708V41.0579"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M61.8379 90.9889C51.6792 94.1021 40.7364 93.4279 31.0367 89.0912C21.337 84.7545 13.5378 77.0491 9.08393 67.4027C4.63005 57.7562 3.82337 46.8224 6.81331 36.6267C9.80325 26.431 16.3872 17.6646 25.3454 11.9513C34.3036 6.23797 45.029 3.9651 55.5346 5.5537C66.0402 7.1423 75.614 12.4847 82.4825 20.5912C89.3509 28.6977 93.0485 39.0189 92.8902 49.6428C92.732 60.2667 88.7286 70.4731 81.6217 78.3714"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Secure;
