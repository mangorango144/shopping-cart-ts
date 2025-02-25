import { Dispatch, SetStateAction } from "react";
import { Product } from "./Product";
import { CartQuantities } from "./CartQuantities";
import { Delivery } from "./Delivery";
import { SelectedServices } from "./SelectedServices";

export interface ShopContextType {
  products: Product[] | null;
  loading: boolean;
  error: string | null;
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  cartQuantities: CartQuantities;
  setCartQuantities: Dispatch<CartQuantities>;
  delivery: Delivery;
  setDelivery: Dispatch<SetStateAction<Delivery>>;
  selectedServices: SelectedServices;
  setSelectedServices: Dispatch<SetStateAction<SelectedServices>>;
}
