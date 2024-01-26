import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import "./global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
 document.getElementById('root')
);