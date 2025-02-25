import { createContext, ReactNode } from "react";
import { ShopContextType } from "../types";
import {
  useCart,
  useCartQuantities,
  useDelivery,
  useFetchProducts,
  useSelectedServices,
} from "../hooks";

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

interface ShopProviderProps {
  children: ReactNode;
}

export function ShopProvider({ children }: ShopProviderProps): JSX.Element {
  const contextValue = {
    ...useFetchProducts(),
    ...useCart(),
    ...useCartQuantities(),
    ...useDelivery(),
    ...useSelectedServices(),
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
