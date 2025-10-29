import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Test.css";

export const Test = () => {
  const [jokes, setJokes] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;
  const getJokes = async () => {
    const res = await axios.get(`${API_URL}/jokes`);
    setJokes(res.data);
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        😂 Dad Jokes Collection
      </h1>

      <div className="w-full max-w-3xl space-y-6">
        {jokes.map(({ jokeId, title, joke }) => (
          <div
            key={jokeId}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{joke}</p>
          </div>
        ))}
      </div>

      <button
        onClick={getJokes}
        className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
      >
        🔁 Refresh Jokes
      </button>
    </div>
  );
};
