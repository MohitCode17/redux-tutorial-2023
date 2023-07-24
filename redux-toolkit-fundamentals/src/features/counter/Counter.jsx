import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

// useSelection: will be used to access redux store's state
// useDispatch: dispatch the action

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {/* Example01 Counter Example */}
      <h1>{count}</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => dispatch(increment())} >Increase</button>
        <button onClick={() => dispatch(decrement())} >Decrease</button>
      </div>
    </>
  );
};

export default Counter;