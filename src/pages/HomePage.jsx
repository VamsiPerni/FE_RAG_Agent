import { useState } from "react";
import { ChartView } from "../components/ChartView";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { QueryInput } from "../components/QueryInput";
import { ResponseDisplay } from "../components/ResponseDisplay";
import { TableView } from "../components/TableView";
import { QueryDataAPI } from "../api/QueryData_Api";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleQuerySubmit = async (query) => {
    setLoading(true);
    const data = await QueryDataAPI(query);
    setResponseData(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <QueryInput onQuerySubmit={handleQuerySubmit} />
      <ResponseDisplay data={responseData} loading={loading} />
      <ChartView />
      <TableView />
      <Footer />
    </div>
  );
};

export { HomePage };
