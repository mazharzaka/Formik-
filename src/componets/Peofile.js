import React from "react";
import {useSelector} from "react-redux";

import Log from "./Login";

export default function Peofie() {
  const user = useSelector((state) => state.user.value);
  const change = useSelector((state) => state.color.value);
  return (
    <div>
      <Log />
      <h1 style={{color: change}}>Profile {change}</h1>
      <p>Name: {user.fname}</p>
      <p>Age:{user.Lname}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}
