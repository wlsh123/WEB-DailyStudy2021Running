import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./store";
import "./static/css/common.less";

ReactDOM.render(
  <Provider>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
