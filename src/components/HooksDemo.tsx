import React, { useState,useEffect, useMemo } from "react";

// Component con hiển thị giá trị bộ đếm
function CounterDisplay({ count }) {
  return <h2>Giá trị hiện tại: {count}</h2>;
}

// Component chính
function CounterApp() {
  const [count, setCount] = useState(0); // Khởi tạo state với giá trị ban đầu là 0

  const handleIncrease = () => {
    setCount(count + 1); // Cập nhật state khi nhấn nút
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Truyền state (count) vào component con */}
      <CounterDisplay count={count} />
      <button onClick={handleIncrease} style={{ fontSize: "16px", padding: "10px" }}>
        Tăng
      </button>
    </div>
  );
}
function EffectDemo() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function để xóa interval khi component bị unmount
    return () => clearInterval(interval);
  }, []); // useEffect chỉ chạy một lần khi component được render lần đầu

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Đồng hồ hiện tại:</h2>
      <p>{time}</p>
    </div>
  );
}
// Component cho useMemo
function MemoDemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // Tính toán số gấp đôi chỉ khi `number` thay đổi
  const doubledNumber = useMemo(() => {
    console.log("Tính toán lại số gấp đôi...");
    return number * 2;
  }, [number]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>useMemo Demo</h3>
      <label>
        Nhập số:{" "}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10) || 0)}
          style={{ padding: "5px" }}
        />
      </label>
      <h4>Số gấp đôi: {doubledNumber}</h4>
      <button onClick={() => setCount(count + 1)} style={{ marginTop: "10px", padding: "10px" }}>
        Tăng Count: {count}
      </button>
    </div>
  );
}

const HooksDemo = () => {
  return (
    <div className="hooks-demo">
      <h2>React Hooks Demo</h2>

      <section>
        <h3>1. useState & Props</h3>
        <CounterApp />
      </section>

      <section>
        <h3>2. useEffect</h3>
        <EffectDemo />
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
        <MemoDemo />
      </section>
      <section>
        <h3>7. useCallback</h3>
      </section>
    </div>
  );
};

export default HooksDemo;

