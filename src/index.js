import React from "react";
import ReactDOM from "react-dom/client";
import count from "./feathers/count";
import Form from "./feathers/form";
import Color from "./feathers/theam";
import data from "./feathers/User";
import App from "./App";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {Conut: count, user: data, form: Form, color: Color},
});
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
