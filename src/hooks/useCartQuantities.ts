import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartQuantities } from "../types";

export const useCartQuantities = (): {
  cartQuantities: CartQuantities;
  setCartQuantities: Dispatch<SetStateAction<CartQuantities>>;
} => {
  const [cartQuantities, setCartQuantities] = useState<CartQuantities>(() => {
    const storedQuantities = sessionStorage.getItem("cartQuantities");
    return storedQuantities
      ? (JSON.parse(storedQuantities) as CartQuantities)
      : {};
  });

  useEffect(() => {
    sessionStorage.setItem("cartQuantities", JSON.stringify(cartQuantities));
  }, [cartQuantities]);

  return { cartQuantities, setCartQuantities };
};
