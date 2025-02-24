import { useContext } from "react";
import { ShopContext } from "../context";

export const useShop = () => useContext(ShopContext);
