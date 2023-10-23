import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase, reset} from "../feathers/count";
function Count() {
  const num = useSelector((state) => state.Conut.value);
  const theam = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p style={{textAlign: "center", color: theam}}>{num}</p>
      <button onClick={() => dispatch(increase())}>increm</button>
      <button onClick={() => dispatch(decrease())}>decremit</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Count;
