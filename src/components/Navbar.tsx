import { Link } from "react-router-dom";
import { UserStatus } from "./UserStatus";
import { CartStatus } from "./CartStatus";

export function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-start items-center bg-white shadow-md mx-auto lg:mt-4 px-4 sm:px-14 lg:px-7 lg:rounded-full w-full lg:w-[95%] xl:w-8/12 max-w-[1268px] h-[56px] font-medium text-black text-xs sm:text-base">
      <Link to="/">Home</Link>
      <Link to="shop/products" className="ml-5">
        Products
      </Link>

      <CartStatus />

      <div className="mr-2 sm:mr-6 ml-1 sm:ml-2 border-1 border-l h-7"></div>

      <UserStatus />
    </nav>
  );
}
