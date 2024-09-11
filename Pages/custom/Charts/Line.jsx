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
  plugins,
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

const LineChart = () => {
  // Data and configuration for the line chart
  const points = [65, 59, 80, 81, 56, 55, 40];
  const stepSize = 20;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: points,
        fill: true,
        backgroundColor: "rgba(61, 163, 61, 0.2)",
        borderColor: "#3da33d",
        tension: 0.3,
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          stepSize,
        },
        min: Math.max(0, Math.min(...points) - stepSize),
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
