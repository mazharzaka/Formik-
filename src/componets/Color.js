import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Change} from "../feathers/theam";
import {useParams} from "react-router-dom";

function Colorc() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const {id} = useParams();
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(Change(color))}>Color {id}</button>
    </div>
  );
}

export default Colorc;
