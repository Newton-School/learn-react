import React, { useState, useEffect } from "react";

const Home = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // Renders everytime
  useEffect(() => {
    console.log("Renders everytime");

    return () => {
      console.log("component will unmount");
    };
  });

  // Renders once. Equivalent to componentDidMount
  useEffect(() => {
    console.log("Renders once");
  }, []);

  // Render only when counter1 changes
  useEffect(() => {
    console.log("Render only when counter1 changes");
  }, [counter1]);

  return (
    <div>
      <div>
        <p>Counter1: {counter1}</p>

        <button type="button" onClick={() => setCounter1(counter1 + 1)}>
          Update Counter
        </button>
      </div>

      <br />

      <div>
        <p>Counter2: {counter2}</p>

        <button type="button" onClick={() => setCounter2(counter2 + 1)}>
          Update Counter
        </button>
      </div>
    </div>
  );
};

export default Home;
