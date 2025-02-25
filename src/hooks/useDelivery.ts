import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Delivery } from "../types";

export const useDelivery = (): {
  delivery: Delivery;
  setDelivery: Dispatch<SetStateAction<Delivery>>;
} => {
  const [delivery, setDelivery] = useState<Delivery>(() => {
    const storedDelivery = sessionStorage.getItem("delivery");
    return storedDelivery
      ? (JSON.parse(storedDelivery) as Delivery)
      : { name: "collect", cost: 0 };
  });

  useEffect(() => {
    sessionStorage.setItem("delivery", JSON.stringify(delivery));
  }, [delivery]);

  return { delivery, setDelivery };
};
