import React, { useState, useEffect } from "react";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center text-blue-500">Loading data...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">📡 API Data</h2>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 p-2 w-full rounded-md mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition duration-200"
          >
            <h3 className="font-bold text-blue-700 mb-2">
              {item.title.slice(0, 30)}...
            </h3>
            <p className="text-gray-600">{item.body.slice(0, 80)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiData;