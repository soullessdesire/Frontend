import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineGraph = () => {
  const options = {};
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Steps",
        data: [2000, 3000, 4000, 3500, 4500, 2500, 5000],
        borderColor: "rgb(0,0,0,0.2)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineGraph;
