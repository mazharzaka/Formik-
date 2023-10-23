import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Color/1">color</Link>
      <Link to="/Counter">Counter</Link>
      {/* <Link to="/Save">Save</Link> */}
    </div>
  );
}

export default Nav;
