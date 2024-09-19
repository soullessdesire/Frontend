import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieGraph = () => {
  const data = {
    labels: ["Facebook", "Instagram", "Twitter", "Youtube", "Linkedin"],
    datasets: [
      {
        label: "Time Spent",
        data: [120, 60, 30, 90, 45],
        backgroundColor: ["red", "green", "blue", "yellow", "grey"],
        hoverOffset: 4,
      },
    ],
  };
  const options = {};
  return <Pie data={data} options={options} />;
};

export default PieGraph;
