// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Gists } from "../pages/gists/gists";
import { CreateGistForm } from "../pages/createGistForm/createGistFrom";
import { ROUTES } from "../constants/routes";
import { UserProfile } from "../pages/userProfile/userProfile";
import { ProtectedRoute } from "./protectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<Navigate to={ROUTES.GISTS} replace />}
      />
      <Route path={ROUTES.GISTS} element={<Gists />} />
      <Route
        path={ROUTES.CREATE_GIST}
        element={
          <ProtectedRoute>
            <CreateGistForm />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.USER_PROFILE}
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
