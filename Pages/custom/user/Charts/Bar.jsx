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
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: true,
        },
      },
    },
  };
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
        backgroundColor: "#3da33d",
        borderColor: "#00000000",
        borderRadius: "8px",
        borderWidth: 1,
      },
    ],
  };
  return <Bar options={options} data={data}></Bar>;
};
export default BarGraph;
