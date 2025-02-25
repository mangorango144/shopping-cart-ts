import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SelectedServices } from "../types";

const DEFAULT_SELECTION: SelectedServices = {
  care_package: { cost: 10, selected: false },
  environment_friendly: { cost: 2, selected: false },
  golden_guard: { cost: 5, selected: false },
};

export const useSelectedServices = (): {
  selectedServices: SelectedServices;
  setSelectedServices: Dispatch<SetStateAction<SelectedServices>>;
} => {
  const [selectedServices, setSelectedServices] = useState<SelectedServices>(
    () => {
      const storedSelectedServices = sessionStorage.getItem("selectedServices");
      return storedSelectedServices
        ? (JSON.parse(storedSelectedServices) as SelectedServices)
        : DEFAULT_SELECTION;
    }
  );

  useEffect(() => {
    sessionStorage.setItem(
      "selectedServices",
      JSON.stringify(selectedServices)
    );
  }, [selectedServices]);

  return { selectedServices, setSelectedServices };
};
