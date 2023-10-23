import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../feathers/User";
import {Out} from "../feathers/form";
export default function Log() {
  const dispatch = useDispatch();
  const value = useSelector((e) => e.form.value);
  return (
    <div>
      <button onClick={() => dispatch(login(value))}>Login</button>
      <button onClick={() => dispatch(Out())}>Loout</button>
    </div>
  );
}
