import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Product } from "../types";

export const useCart = (): {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
} => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? (JSON.parse(storedCart) as Product[]) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { cart, setCart };
};
