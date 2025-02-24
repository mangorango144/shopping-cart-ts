import { Link } from "react-router-dom";
import { useShop } from "../hooks";
import { BsCart4 } from "react-icons/bs";

export function CartStatus() {
  const { cart } = useShop();

  return (
    <>
      <Link
        to="shop/shopping-cart"
        className="flex items-center hover:bg-lime-200 ml-auto px-1 sm:px-4 py-1 rounded-2xl transition duration-500"
      >
        <BsCart4 className="mr-2 w-auto h-6" />
        <span className="flex flex-col sm:min-w-10 text-xs">
          My Cart
          <span className="text-slate-400">{cart.length} Items</span>
        </span>
      </Link>
    </>
  );
}
