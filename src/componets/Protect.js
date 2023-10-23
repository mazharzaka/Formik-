import React from "react";
import {Navigate, Outlet} from "react-router-dom";

function Protect(props) {
  console.log(props.name.Auth);
  return true ? <Outlet /> : <Navigate to="/Form" />;
}

export default Protect;
