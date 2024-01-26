import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import "./global.scss";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";

ReactDOM.render(
  <React.StrictMode>
    <Register/>
  </React.StrictMode>,
 document.getElementById('root')
);