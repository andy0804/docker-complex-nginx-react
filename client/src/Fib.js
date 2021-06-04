import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
const initialState = { seenIndexes: [], values: {}, index: "" };
const Fib = () => {
  const [fibState, setFibState] = useState(initialState);

  const renderValues = () => {
    const entries = [];
    for (let key in fibState.values) {
      entries.push(
        <div key={key}>
          For index {key}, I calculated {fibState.values[key]}
        </div>
      );
    }
    return entries;
  };
  const fetchValues = useCallback(
    () => async () => {
      const values = await axios.get("/api/values/current");
      setFibState({ ...fibState, values: values.data });
    },
    [fibState]
  );

  const fetchIndexes = useCallback(
    () => async () => {
      const seenIndexes = await axios.get("/api/values/all");
      setFibState({ ...fibState, seenIndexes: seenIndexes.data });
    },
    [fibState]
  );

  const renderIndexesIhaveSeen = () => {
    return fibState.seenIndexes.map(({ number }) => number).join(", ");
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetchValues();
      await fetchIndexes();
    };
    fetchData();
  }, [fetchIndexes, fetchValues]);

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
      {renderIndexesIhaveSeen()}
      <h3>Calculated values</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
