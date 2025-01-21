import {
  useState,
  useEffect,
  useMemo,
  useReducer,
  useCallback,
  useRef,
} from "react";
import React from "react";
import { UpdateUser, UserProfile } from "./context/Context";

interface CounterDisplayProps {
  count: number;
}

// Component con hiển thị giá trị bộ đếm
function CounterDisplay({ count }: CounterDisplayProps) {
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
      <button
        onClick={handleIncrease}
        style={{ fontSize: "16px", padding: "10px" }}
      >
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
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginTop: "10px", padding: "10px" }}
      >
        Tăng Count: {count}
      </button>
    </div>
  );
}

// Demo useReducer
interface State {
  members: string[];
}

interface Action {
  type: "SET_MEMBERS" | "ADD_MEMBER" | "DELETE_MEMBER";
  payload: string | string[];
}

const initialState: State = {
  members: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_MEMBERS":
      return { ...state, members: action.payload as string[] };
    case "ADD_MEMBER":
      return {
        ...state,
        members: [...state.members, action.payload as string],
      };
    case "DELETE_MEMBER":
      return {
        ...state,
        members: state.members.filter((member) => member !== action.payload),
      };
    default:
      throw new Error("Invalid action!");
  }
};

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newMemberName, setNewMemberName] = useState("");
  const { members } = state;

  const handleAddMember = () => {
    if (newMemberName.trim() && !members.includes(newMemberName)) {
      dispatch({ type: "ADD_MEMBER", payload: newMemberName });
      setNewMemberName("");
    }
  };

  const handleDeleteMember = (name: string) => {
    dispatch({ type: "DELETE_MEMBER", payload: name });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
          placeholder="Enter member name"
          style={{
            padding: "10px",
            marginRight: "20px",
          }}
        />
        <button onClick={handleAddMember}>Add Member</button>
      </div>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member}
            <button
              style={{ marginLeft: "15px" }}
              onClick={() => handleDeleteMember(member)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ChildComponentProps {
  onClick: () => void;
}

const ChildComponent = React.memo(({ onClick }: ChildComponentProps) => {
  console.log("ChildComponent được render lại");
  return (
    <>
      <button onClick={onClick}>Click me</button>
    </>
  );
});
//useRef
function DemoUseRef() {
  const [count, setCount] = useState(60);
  const timeId = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    if (timeId.current !== null) {
      clearInterval(timeId.current);
    }
    timeId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    if (timeId.current !== null) {
      clearInterval(timeId.current);
      timeId.current = null;
    }
  };

  return (
    <div className="count-clock">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  //   const handleClick = () => {
  //   setCount(count + 1);
  // };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  console.log("Parent Component được render lại");

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <p>Count: {count}</p>
        <div>------------------------------------------</div>
        <ChildComponent onClick={handleClick} />
        <div>------------------------------------------</div>
      </div>

      <div>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Nhập text để test re-render"
        />
        <p>Text: {text}</p>
      </div>
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
        <UserProfile />
        <UpdateUser />
      </section>

      <section>
        <h3>4. useReducer</h3>
        <ReducerDemo />
      </section>

      <section>
        <h3>5. useRef</h3>
        <DemoUseRef />
      </section>
      <section>
        <h3>6. useMemo</h3>
        <MemoDemo />
      </section>
      <section>
        <h3>7. useCallback</h3>
        <UseCallbackDemo />
      </section>
    </div>
  );
};

export default HooksDemo;
