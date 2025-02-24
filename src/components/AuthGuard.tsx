import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps): ReactNode {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/" /> : children;
}
