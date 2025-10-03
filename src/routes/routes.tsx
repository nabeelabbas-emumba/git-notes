// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Gists } from "../pages/gists/gists";
import { CreateGistForm } from "../pages/createGistForm/createGistFrom";
import { ROUTES } from "../constants/routes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<Navigate to={ROUTES.GISTS} replace />}
      />
      <Route path={ROUTES.GISTS} element={<Gists />} />
      <Route path={ROUTES.CREATE_GIST} element={<CreateGistForm />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
