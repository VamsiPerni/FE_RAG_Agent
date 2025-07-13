const TableView = ({ columns = [], rows = [] }) => {
  if (!Array.isArray(columns) || !Array.isArray(rows)) {
    return <p className="text-red-500 text-center">Invalid table data</p>;
  }

  return (
    <div className="overflow-x-auto mt-0">
      <table className="w-full border text-left">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="border px-4 py-2 bg-gray-100 text-sm font-medium"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border px-4 py-2 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { TableView };
