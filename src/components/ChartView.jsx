import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartView = ({ chart }) => {
  const isValidChart =
    chart &&
    Array.isArray(chart.labels) &&
    Array.isArray(chart.values) &&
    chart.labels.length === chart.values.length &&
    chart.labels.length > 0;

  if (!isValidChart) {
    return null;
  }
  const data = {
    labels: chart.labels,
    datasets: [
      {
        label: "Value",
        data: chart.values,
        backgroundColor: ["#6366F1", "#818CF8", "#A5B4FC", "#C084FC"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: chart.type === "pie",
      },
    },
    scales:
      chart.type === "bar"
        ? {
            y: {
              beginAtZero: true,
            },
          }
        : {},
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">
        📊 {chart.type === "bar" ? "Bar Chart" : "Pie Chart"}
      </h3>

      {chart.type === "bar" ? (
        <Bar data={data} options={options} />
      ) : (
        <Pie data={data} options={options} />
      )}
    </div>
  );
};

export { ChartView };
