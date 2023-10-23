import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
function Save() {
  // const [Token, setToken] = useState(false);
  const form = useSelector((e) => e.Form);
  useEffect(() => {
    // setToken(form);
    console.log(form.Auth);
  }, []);
  let auth = {token: form.Auth};
  return auth.token ? <Outlet /> : <Navigate to="/Form" />;
}

export default Save;
