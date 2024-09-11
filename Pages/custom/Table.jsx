/* eslint-disable react/jsx-key */
// import { useEffect } from "react";
import "./User.css";

const Table = () => {
  const tableData = [
    [
      "Checkbox",
      "ProgramId",
      "Program",
      "Description",
      "Therapist/Conductor",
      "Duration",
      "Price",
    ],
    [
      [
        <input type="checkbox" />,
        "DR001",
        "Drug Detox",
        "Initial detox program",
        "Dr. Alice Brown",
        "7 days",
        "$500",
      ],
      [
        <input type="checkbox" />,
        "DR002",
        "Inpatient Rehab",
        "Comprehensive drug rehab",
        "Dr. Bob Green",
        "30 days",
        "$2000",
      ],
      [
        <input type="checkbox" />,
        "DR003",
        "Outpatient Rehab",
        "Drug rehab with daily sessions",
        "Dr. Carol White",
        "60 days",
        "$1500",
      ],
      [
        <input type="checkbox" />,
        "CT001",
        "Couples Counseling",
        "Basic therapy for couples",
        "Therapist David Black",
        "1 hour/session",
        "$100/session",
      ],
      [
        <input type="checkbox" />,
        "CT002",
        "Intensive Couples Therapy",
        "Weekend therapy retreat",
        "Therapist Emma Blue",
        "3 days",
        "$800",
      ],
      [
        <input type="checkbox" />,
        "CT003",
        "Communication Workshop",
        "Improving communication skills",
        "Therapist Frank Yellow",
        "2 hours",
        "$150",
      ],
      [
        <input type="checkbox" />,
        "PT001",
        "Physical Therapy Initial Consultation",
        "Assessment and plan",
        "Dr. Grace Gray",
        "1 hour",
        "$120",
      ],
      [
        <input type="checkbox" />,
        "PT002",
        "Post-Surgery Rehab",
        "Rehabilitation after surgery",
        "Dr. Henry Orange",
        "4 weeks",
        "$1000",
      ],
      [
        <input type="checkbox" />,
        "PT003",
        "Sports Injury Therapy",
        "Therapy for sports injuries",
        "Dr. Irene Red",
        "6 weeks",
        "$1200",
      ],
      [
        <input type="checkbox" />,
        "PT004",
        "Chronic Pain Management",
        "Therapy for chronic pain",
        "Dr. Jack Purple",
        "8 weeks",
        "$1600",
      ],
    ],
  ];
  // useEffect(() => {
  //   for (let array in tableData[1]) {
  //     if (array.length !== tableData[0].length) {
  //       throw new Error(
  //         "The data structure provided of two array are no to equal length"
  //       );
  //     }
  //   }
  // });
  return (
    <div
      className="table"
      style={{
        display: "flex",
        height: "400px",
      }}
    >
      <table className="table">
        <thead className="thead">
          <tr>
            {tableData[0].map((string, key) => {
              return <td key={key}>{string}</td>;
            })}
          </tr>
        </thead>
        <tbody className="tbody" style={{ overflow: "hidden scroll" }}>
          {tableData[1].map((array, key) => {
            return (
              <tr key={key}>
                {array.map((data, key) => {
                  return <td key={key}>{data}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
