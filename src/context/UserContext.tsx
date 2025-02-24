import { createContext, ReactNode, useState } from "react";
import { User } from "../types";

interface UserContextType {
  userData: User | null;
  setUserData: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [userData, setUserData] = useState<User | null>(() => {
    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
