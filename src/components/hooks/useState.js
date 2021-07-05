import React, { useState } from 'react';

export default function UseState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const decriment = () => {
    return setCount(count - 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-blue">
        + +
      </button>&nbsp;&nbsp;
      <button onClick={decriment} className="btn btn-blue">
        - -
      </button>
    </div>
  );
}