import React, { useState,useEffect } from "react";

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
    </div>
  );
};

export default HooksDemo;

