import React, { useState, useEffect } from "react";
import axios from "axios";
const initialState = { seenIndexes: [], values: {}, index: "" };
const Fib = () => {
  const [fibState, setFibState] = useState(initialState);

  const renderEntries = () => {
    const entry = [];
    for (let key in fibState.values) {
      entry.push(
        <div key={key}>
          For index {key}, I calculated {fibState.values[key]}
        </div>
      );
      return entry;
    }
  };
  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    return values.data;
  };

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    return seenIndexes.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const values = await fetchValues();
      const indexes = await fetchIndexes();
      setFibState({ ...fibState, seenIndexes: indexes, values: values });
    };
    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/values", { index: fibState.index });
    setFibState({ ...fibState, index: "" });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Enter your index:</label>
        <input
          onChange={(e) => {
            setFibState({ ...fibState, index: e.target.value });
          }}
        />
        <button>Submit</button>
      </form>
      <h3> Indexes I have seen</h3>
      {fibState.seenIndexes.map(({ number }) => number).join(", ")}
      <h3>Calculated values</h3>
      {renderEntries()}
    </div>
  );
};

export default Fib;
