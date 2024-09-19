import { useState } from "react";
import Modal from "../../../utils/Modal";
import Table from "./Table";
import Button from "../../universal/Button";
// "52:8E:7A:B8:FE:E2";

const Programs = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        padding: "1rem",
        flexGrow: "1",
      }}
    >
      <h2
        style={{
          fontWeight: "500",
          fontSize: "32px",
          fontFamily: "Inria Sans",
        }}
      >
        Programs
      </h2>
      <br />
      <p>
        This is were you will find your registered programs and a list for
        applying for any new programs
      </p>
      <br />
      <h4
        style={{
          fontWeight: "500",
          fontSize: "24px",
          fontFamily: "Inria Sans",
        }}
      >
        Registered Programs
      </h4>
      <br />
      <table
        style={{
          background: "#3da33d",
          color: "white",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>ProgramID</th>
            <th>Program</th>
            <th>Description</th>
            <th>Therapist/Conductor</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
      </table>
      <br />
      <h4
        style={{
          fontWeight: "500",
          fontSize: "24px",
          fontFamily: "Inria Sans",
        }}
      >
        Completed Programs
      </h4>
      <br />
      <table
        style={{
          background: "#3da33d",
          color: "white",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>ProgramID</th>
            <th>Program</th>
            <th>Description</th>
            <th>Therapist/Conductor</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
      </table>
      <br />
      <div className="program-list">
        <Modal
          show={show}
          closeModal={() => setShow((prev) => !prev)}
          window={true}
        >
          <Table
            style={{
              background: "#3da33d",
              color: "white",
            }}
          />
        </Modal>

        <Button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          style={{
            cursor: "pointer",
            background: "#3da33d",
            color: "white",
            padding: "8px 12px",
            border: "none",
            marginRight: "1rem",
            borderRadius: "2px",
          }}
        >
          Register New Programs
        </Button>
      </div>
    </div>
  );
};

export default Programs;
