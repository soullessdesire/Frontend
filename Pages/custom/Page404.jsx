import React from "react";
import Button from "../universal/Button";

function Page404() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#3da33d", fontSize: "100px", fontWeight: "800" }}>
        OOPs!
      </h1>
      <h3>404. Page Not Found</h3>
      <Button
        to={"http://localhost:5173/home"}
        text={"Home"}
        width={"90px"}
        height={"40px"}
        bR={"30px"}
        bg={"#3da33d"}
        marginTop={"30px"}
      />
    </div>
  );
}

export default Page404;
