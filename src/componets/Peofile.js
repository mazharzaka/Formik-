import React from "react";
import {useSelector} from "react-redux";
import Login from "./Login";

export default function Peofile() {
  const user = useSelector((state) => state.user.value);
  const change = useSelector((state) => state.color.value);
  return (
    <div>
      <Login />
      <h1 style={{color: change}}>Profile {change}</h1>
      <p>Name: {user.fname}</p>
      <p>Age:{user.Lname}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}
