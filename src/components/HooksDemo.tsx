import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useMemo,
  useCallback,
  createContext,
} from "react";

const ThemeContext = createContext<"light" | "dark">("light");

type CounterState = { count: number };
type CounterAction = { type: "increment" | "decrement" };

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const HooksDemo = () => {
  const [text, setText] = useState<string>("");

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
  }, []);

  const expensiveCalculation = useMemo(() => {
    return text.length * 2;
  }, [text]);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className="hooks-demo">
      <h2>React Hooks Demo</h2>

      <section>
        <h3>useState & Props</h3>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>Text: {text}</p>
      </section>

      <section>
        <h3>useReducer</h3>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </section>

      <section>
        <h3>useRef</h3>
        <input ref={inputRef} type="text" />
        <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
      </section>

      <section>
        <h3>useContext</h3>
        <ThemeContext.Provider value="dark">
          <ThemedButton />
        </ThemeContext.Provider>
      </section>

      <section>
        <h3>useMemo</h3>
        <p>Calculated value: {expensiveCalculation}</p>
      </section>

      <section>
        <h3>useCallback</h3>
        <button onClick={handleClick}>Click me</button>
      </section>
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme === "dark" ? "#333" : "#fff" }}>
      Theme: {theme}
    </button>
  );
};

export default HooksDemo;
