import { createContext } from "react";
import {
  useCart,
  useCartQuantities,
  useDelivery,
  useFetchProducts,
  useSelectedServices,
} from "../hooks";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const { products, loading, error } = useFetchProducts();
  const { cart, setCart } = useCart();
  const { cartQuantities, setCartQuantities } = useCartQuantities();
  const { delivery, setDelivery } = useDelivery();
  const { selectedServices, setSelectedServices } = useSelectedServices();

  const values = {
    products,
    loading,
    error,
    cart,
    setCart,
    cartQuantities,
    setCartQuantities,
    delivery,
    setDelivery,
    selectedServices,
    setSelectedServices,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
}
