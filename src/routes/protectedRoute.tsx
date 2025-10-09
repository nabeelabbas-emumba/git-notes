import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { ROUTES } from "../constants/routes";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to={ROUTES.GISTS} replace />;
  }

  return <>{children}</>;
};
