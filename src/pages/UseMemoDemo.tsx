import React, { useState, useMemo } from "react";

function expensiveFunction(number: number) {
  console.log("Bat dau");
  const start = new Date();

  // doi 3s
  while (new Date().getTime() - start.getTime() < 3000);

  console.log("Ket thuc", new Date().getTime() - start.getTime(), "ms");

  return number * number;
}

function App() {
  const [count, setCount] = useState(0);

  //khong useMemo
  // const  number = expensiveFunction(10);
  // co useMemo
  const number = useMemo(() => expensiveFunction(10), []);

  return (
    <>
    <a 
          href="/" 
          style={{
            color: '#0066cc',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: "20px"
          }}
        >
          ← Quay lại
        </a>
      <div style={{ padding: "20px" }}>
        <h1>Demo useMemo trong React</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>

        <p>Number: {number}</p>
      </div>
    </>
  );
}

export default App;
