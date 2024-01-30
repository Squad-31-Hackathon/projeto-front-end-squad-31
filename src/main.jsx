import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./global.scss";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import App from "./App";
import { MeusProjetos } from "./pages/MeusProjetos";
import { Descobrir } from "./pages/Descobrir";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
