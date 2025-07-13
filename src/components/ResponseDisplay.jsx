import { ChartView } from "./ChartView";
import { TableView } from "./TableView";

const ResponseDisplay = (props) => {
  const { data, loading } = props;

  if (loading) {
    return <p className="text-center text-gray-400">Loading response.......</p>;
  }

  if (!data) {
    return <p className="text-center text-gray-500">No data to display yet.</p>;
  }

  return (
    <div className="bg-slate-900 py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📄 Summary</h3>
        <p className="text-gray-700 mb-6">
          {data.summary || "No summary provided."}
        </p>

        {data.response_type === "table" && (
          <TableView columns={data.columns} rows={data.data} />
        )}

        {data.chart && (
          <div className="mt-6">
            <ChartView chart={data.chart} />
          </div>
        )}
      </div>
    </div>
  );
};

export { ResponseDisplay };
