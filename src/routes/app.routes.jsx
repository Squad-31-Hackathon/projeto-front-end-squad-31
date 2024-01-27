import { BrowserRouter, Route } from "react-router-dom";

import { MeusProjetos } from "../pages/MeusProjetos";
import { Descobrir } from "../pages/Descobrir";
import { Routes } from ".";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MeusProjetos />} />
      <Route path="/descobrir" element={<Descobrir />} />
    </Routes>
  );
}
