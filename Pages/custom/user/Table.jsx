import { useQuery } from "@tanstack/react-query";
import React from "react";
import { createErrorNotification } from "../../universal/createErrorNotification";
import "./User.css";
import Loading from "../../../assets/Loading";
import capitalize from "../../../utils/capitalize";

const fetchProgrammes = async () => {
  const response = await fetch("https://localhost:3000/api/programmes", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Table = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["programmes"],
    queryFn: fetchProgrammes,
  });

  // Use useEffect to handle error notifications
  React.useEffect(() => {
    if (error) {
      createErrorNotification(
        "There has been a problem in programme fetching, please refresh the page"
      );
    }
  }, [error]);

  const columnData = [
    "Checkbox",
    "ProgrammeId",
    "Conductor",
    "Programme",
    "Time Span",
    "Session Duration",
    "Price",
  ];

  return (
    <div
      className="table"
      style={{
        display: "flex",
        height: "400px",
      }}
    >
      <table className="table" style={{ height: "200px" }}>
        <thead className="thead">
          <tr>
            {columnData.map((string, key) => (
              <th key={key}>{string}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="tbody"
          style={{ overflow: "hidden", maxHeight: "200px" }}
        >
          {isLoading ? (
            <tr>
              <td colSpan={columnData.length}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Loading />
                </div>
              </td>
            </tr>
          ) : (
            data?.programme?.map((object, key) => {
              if (key > 10) {
                return null;
              }
              return (
                <tr key={key}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{object._id}</td>
                  <td>{object.conductor}</td>
                  <td>{capitalize(object.programme)}</td>
                  <td>{object.time_span}</td>
                  <td>{object.session_duration}</td>
                  <td>{object.price}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
