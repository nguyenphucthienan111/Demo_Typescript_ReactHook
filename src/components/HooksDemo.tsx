import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

const HooksDemo = () => {
  return (
    <div className="hooks-demo">
      <h2>React Hooks Demo</h2>

      <section>
        <h3>1. useState & Props</h3>
      </section>

      <section>
        <h3>2. useEffect</h3>
      </section>

      <section>
        <h3>3. useContext</h3>
      </section>

      <section>
        <h3>4. useReducer</h3>
      </section>

      <section>
        <h3>5. useRef</h3>
      </section>

      <section>
        <h3>6. useMemo</h3>
        <Link to="/usememo-demo">Preview</Link>
        <pre style={{ backgroundColor: "black" }}>
          {`function expensiveFunction(number: number) {
  console.log("Bat dau");
  const start = new Date();
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
}
export default App;
`}
        </pre>
      </section>
    </div>
  );
};

export default HooksDemo;
