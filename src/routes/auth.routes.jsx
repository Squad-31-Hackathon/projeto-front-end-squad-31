import { Routes, Route } from "react-router-dom";

import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";

export function AuthRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}
