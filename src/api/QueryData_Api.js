const QueryDataAPI = async (query) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/llm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: query }),
    });

    if (!response.ok) {
      throw new Error("LLM API request failed");
    }

    const result = await response.json();

    return {
      summary: result?.summary || "No summary provided.",
      response_type: result?.response_type || "text",
      columns: result?.columns || [],
      data: result?.data || [],
      chart: result?.chart || null,
    };
  } catch (err) {
    console.error("QueryDataAPI error:", err);
    return {
      summary: "Error fetching data.",
      response_type: "text",
      columns: [],
      data: [],
      chart: null,
    };
  }
};

export { QueryDataAPI };
