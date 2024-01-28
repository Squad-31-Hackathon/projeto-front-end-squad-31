import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import "./global.scss";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import App from "./App";
import { MeusProjetos } from "./pages/MeusProjetos";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
 document.getElementById('root')
);