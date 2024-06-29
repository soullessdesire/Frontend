import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarGraph = () => {
  const options = {};
  const data = {
    labels: [
      "Rent",
      "Groceries",
      "Utilities",
      "Entertainment",
      "Transportation",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [1200, 200, 340, 180, 100],
        backgroundColor: "rgba(255,99,132,.2)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarGraph;
