import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [fact, setFact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://catfact.ninja/facts");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setFact(data.data[0].fact);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); // runs only once on mount

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Cat Fact</h1>
      {fact ? <p>{fact}</p> : <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
};

export default FetchApi;
