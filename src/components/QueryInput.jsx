import { useState } from "react";

const QueryInput = (props) => {
  const { onQuerySubmit } = props;
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onQuerySubmit(query);
    }
  };

  return (
    <div className="bg-slate-900 py-10 px-4 min-h-[40vh] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Ask a Question about your portfolio
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Eample Question :- "What are the top five portfolios of our wealth
          members?"
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            name="query"
            placeholder="Enter you question here"
            className="flex-1 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            required
          />
          <button className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { QueryInput };
