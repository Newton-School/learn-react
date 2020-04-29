import React, { useState, useEffect } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {});

  return (
    <div>
      <p>Counter: {counter}</p>

      <button type="button" onClick={() => setCounter(counter + 1)}>
        Update Counter
      </button>
    </div>
  );
};

export default Home;
