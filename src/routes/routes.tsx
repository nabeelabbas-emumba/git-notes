// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Gists } from "../pages/gists/gists";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gists" replace />} />
      <Route path="/gists" element={<Gists />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
