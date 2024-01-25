import { Route, Routes } from "react-router-dom";

import { MeusProjetos } from "../pages/MeusProjetos";
import { Descobrir } from "../pages/Descobrir";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MeusProjetos />} />
      <Route path="/descobrir" element={<Descobrir />} />
    </Routes>
  );
}
