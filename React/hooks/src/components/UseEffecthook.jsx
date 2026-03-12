import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    //first
    setDouble(count * 2);
    return ()=>{
    //second
    }
  }, [count]); 

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Double: {double}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;