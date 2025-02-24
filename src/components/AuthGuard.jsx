import { Navigate } from "react-router-dom";

export function AuthGuard({ children }) {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/" /> : children;
}
