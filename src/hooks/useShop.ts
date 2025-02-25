import { useContext } from "react";
import { ShopContext } from "../context";
import { ShopContextType } from "../types";

export const useShop = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
