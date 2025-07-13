const MockDataAPI = () => {
  return {
    response_type: "table",
    summary: "Here’s the breakup of portfolio values per relationship manager.",
    columns: ["RM Name", "Portfolio Value"],
    data: [
      ["Sneha Rao", "₹5.7 Cr"],
      ["Anita Sharma", "₹4.2 Cr"],
      ["Ravi Verma", "₹3.8 Cr"],
    ],
    chart: {
      type: "bar",
      labels: ["Sneha Rao", "Anita Sharma", "Ravi Verma"],
      values: [5.7, 4.2, 3.8],
    },
  };
};

export { MockDataAPI };
