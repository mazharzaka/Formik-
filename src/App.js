import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Navbar from "./componets/Nav";
import Formick from "./componets/Form";
import Saveit from "./componets/Save";
import Colorc from "./componets/Color";
import Count from "./componets/Counter";
import Peofie from "./componets/Peofile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Saveit />}>
          <Route path="/color/:id" element={<Colorc />} />
          <Route path="/Counter" element={<Count />} />
          <Route path="/" element={<Peofie />} />
        </Route>
        <Route path="/Form" element={<Formick />} />
      </Routes>
    </>
  );
}

export default App;
