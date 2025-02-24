import { useEffect, useState } from "react";

export const useSelectedServices = () => {
  const [selectedServices, setSelectedServices] = useState(() => {
    const storedSelectedServices = sessionStorage.getItem("selectedServices");
    return storedSelectedServices
      ? JSON.parse(storedSelectedServices)
      : {
          care_package: { cost: 10, selected: false },
          environment_friendly: { cost: 2, selected: false },
          golden_guard: { cost: 5, selected: false },
        };
  });

  useEffect(() => {
    sessionStorage.setItem(
      "selectedServices",
      JSON.stringify(selectedServices)
    );
  }, [selectedServices]);

  return { selectedServices, setSelectedServices };
};
