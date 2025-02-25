import { useContext } from "react";
import { UserContext } from "../context";
import { UserContextType } from "../types";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
