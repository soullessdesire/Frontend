import Button from "../universal/Button";

function Page404() {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <br />
      <h1 style={{ color: "#3da33d", fontSize: "100px", fontWeight: "800" }}>
        OOPs!
      </h1>
      <br />
      <h3>404. Page Not Found</h3>
      <br />
      <Button
        to={"../home"}
        style={{
          width: "90px",
          height: "40px",
          borderRadius: "4px",
          background: "#3da33d",
          border: "none",
          color: "#fff",
        }}
      >
        <p>Home</p>
      </Button>
    </div>
  );
}

export default Page404;
