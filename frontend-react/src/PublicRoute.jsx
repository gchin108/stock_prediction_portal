import { useAuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
};
