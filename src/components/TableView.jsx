const TableView = ({ columns = [], rows = [] }) => {
  const headers = columns.map((col) =>
    typeof col === "string" ? col : col.header || ""
  );

  const processedRows = rows.map((row) => {
    if (Array.isArray(row)) return row;

    if (typeof row === "object" && row !== null) {
      const values = Object.values(row);
      return values.length === headers.length ? values : headers.map(() => "");
    }

    return [row];
  });

  return (
    <div className="overflow-x-auto mt-0">
      <table className="w-full border text-left">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="border px-4 py-2 bg-gray-100 text-sm font-medium"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {processedRows.map((row, rowIndex) => (
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
