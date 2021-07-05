import React, { useState } from 'react'

export default function ReactQuery() {

  const [count, setCount] = useState(0)

  const CountContext = React.createContext()

  function increment() {
    return setCount(c => c + 1)
  }
  function decrement() {
    return setCount(c => c - 1)
  }

  return (
    <div>
      <h1>React Query</h1>
      <p>Count is: {count}</p>
      <button className="btn btn-blue mr-3" onClick={increment}>Add +</button>
      <button className="btn btn-blue" onClick={decrement}>Minus -</button>




    </div>
  )
}
