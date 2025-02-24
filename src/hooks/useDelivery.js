import { useEffect, useState } from "react";

export const useDelivery = () => {
  const [delivery, setDelivery] = useState(() => {
    const storedDelivery = sessionStorage.getItem("delivery");
    return storedDelivery
      ? JSON.parse(storedDelivery)
      : { name: "collect", cost: 0 };
  });

  useEffect(() => {
    sessionStorage.setItem("delivery", JSON.stringify(delivery));
  }, [delivery]);

  return { delivery, setDelivery };
};
