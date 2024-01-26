import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import "./global.scss";
import Login from "./pages/LoginPage/Login";

ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
 document.getElementById('root')
);