import React from "react";
import ReactDOM from "react-dom/client";
import count from "./feathers/count";
import Form from "./feathers/form";
import data from "./feathers/User";
import App from "./App";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {Conut: count, Data: data, form: Form},
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
