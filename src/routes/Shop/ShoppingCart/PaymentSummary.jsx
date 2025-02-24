import { useMemo, useRef, useState } from "react";
import { useShop, useUser } from "../../../hooks";

export function PaymentSummary({ className }) {
  const { cart, cartQuantities, delivery, selectedServices } = useShop();
  const { userData } = useUser();
  const [discount, setDiscount] = useState(false);
  const inputRef = useRef();

  const orderSummary = useMemo(() => {
    return cart.reduce(
      (total, currItem) =>
        total + currItem.price * (cartQuantities[currItem.id] || 1),
      0
    );
  }, [cart, cartQuantities]);

  const additionalService = Object.values(selectedServices)
    .filter((service) => service.selected)
    .reduce((total, service) => total + service.cost, 0);

  const totalAmmount = orderSummary + additionalService + delivery.cost;

  const handleApplyDiscount = () => {
    inputRef.current.value.toUpperCase() === "50%"
      ? setDiscount(true)
      : setDiscount(false);
  };

  return (
    <div className={className}>
      <span className="block mb-5 font-medium text-2xl">Payment Summary</span>
      <div className="gap-y-6 grid grid-cols-[2fr_1fr] bg-white shadow-md p-3 sm:p-7 rounded-xl">
        <span className="col-span-2 bg-zinc-200 p-2 rounded-md font-semibold text-gray-600 text-center uppercase">
          {userData
            ? `${userData.name.firstname}'s account`
            : "unregistered account"}
        </span>

        <p className="font-medium text-gray-400 text-left">Transaction code</p>
        <p className="font-semibold text-gray-600 text-right">VC11566S</p>

        <input
          type="text"
          placeholder="coupon code (try 50%)"
          name="coupon"
          ref={inputRef}
          onKeyDown={(e) => e.key === "Enter" && handleApplyDiscount()}
          className="p-2 border-2 rounded-md font-medium uppercase"
        />
        <button
          onClick={handleApplyDiscount}
          className="bg-sky-100 hover:bg-sky-200 ml-3 rounded-md font-medium text-sky-500"
        >
          Apply
        </button>

        <hr className="col-span-2 border-t-2 border-dashed" />

        <p className="font-medium text-gray-400 text-left">Order Summary</p>
        <p className="font-semibold text-right">${orderSummary.toFixed(2)}</p>

        <p className="font-medium text-gray-400 text-left">
          Additional Service
        </p>
        <p className="font-semibold text-sky-500 text-right">
          {additionalService ? `$${additionalService}` : "None"}
        </p>

        <p className="font-medium text-gray-400 text-left">Delivery</p>
        <p className="font-semibold text-right">
          {delivery.cost === 0 ? "Free" : `$${delivery.cost.toFixed(2)}`}
        </p>

        <p className="font-medium text-gray-400 text-left">Total Amount</p>
        <p
          className={`${discount ? "line-through opacity-40" : ""}  text-right font-semibold`}
        >
          ${totalAmmount.toFixed(2)}
        </p>

        {discount && (
          <>
            <p className="font-medium text-gray-400 text-left">With Discount</p>
            <p className="font-bold text-red-600 text-right">
              ${(totalAmmount * 0.5).toFixed(2)}
            </p>
          </>
        )}

        <hr className="col-span-2 border-t-2 border-dashed" />

        <span className="col-span-2 bg-red-100 p-2 rounded-md font-semibold text-gray-600 text-sm text-center uppercase rounde-md">
          sale expiring in:{" "}
          <span className="font-bold text-red-500 text-xs sm:text-base">
            21 hours, 31 minutes
          </span>
        </span>
      </div>
    </div>
  );
}
