import { useShop } from "../../../hooks";

export function AdditionalService({ className }) {
  const { selectedServices, setSelectedServices } = useShop();

  const handleChange = (e) => {
    setSelectedServices((prev) => ({
      ...prev,
      [e.target.name]: { ...prev[e.target.name], selected: e.target.checked },
    }));
  };

  const isChecked = (name) => {
    return selectedServices[name].selected;
  };

  return (
    <div className={className}>
      <span className="block mb-5 font-medium text-2xl">
        Additional Service
      </span>
      <div className="gap-4 grid grid-cols-1">
        <div className="items-center grid grid-cols-[6fr_1fr_1fr] bg-white shadow-md p-4 rounded-xl">
          <div className="grid grid-cols-1">
            <p className="font-bold">Care+ Package</p>
            <p className="font-medium text-gray-400 text-sm">
              One year of additional care
            </p>
          </div>
          <p className="font-bold">$10</p>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="care_package"
              onChange={handleChange}
              checked={isChecked("care_package")}
              className="peer hidden"
            />
            <span className="peer-checked:bg-blue-200 bg-stone-200 rounded-full w-8 h-4"></span>
            <span className="peer-checked:bg-blue-500 bg-white -ml-7 rounded-full w-3 h-3 transition peer-checked:translate-x-3 transform"></span>
          </label>
        </div>

        <div className="items-center grid grid-cols-[6fr_1fr_1fr] bg-white shadow-md p-4 rounded-xl">
          <div className="grid grid-cols-1">
            <p className="font-bold">Environment friendly</p>
            <p className="font-medium text-gray-400 text-sm">
              Add some tip for earth care
            </p>
          </div>
          <p className="font-bold">$2</p>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="environment_friendly"
              onChange={handleChange}
              checked={isChecked("environment_friendly")}
              className="peer hidden"
            />
            <span className="peer-checked:bg-blue-200 bg-stone-200 rounded-full w-8 h-4"></span>
            <span className="peer-checked:bg-blue-500 bg-white -ml-7 rounded-full w-3 h-3 transition peer-checked:translate-x-3 transform"></span>
          </label>
        </div>

        <div className="items-center grid grid-cols-[6fr_1fr_1fr] bg-white shadow-md p-4 rounded-xl">
          <div className="grid grid-cols-1">
            <p className="font-bold">Golden Guard</p>
            <p className="font-medium text-gray-400 text-sm">
              30 days more for return
            </p>
          </div>
          <p className="font-bold">$5</p>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="golden_guard"
              onChange={handleChange}
              checked={isChecked("golden_guard")}
              className="peer hidden"
            />
            <span className="peer-checked:bg-blue-200 bg-stone-200 rounded-full w-8 h-4"></span>
            <span className="peer-checked:bg-blue-500 bg-white -ml-7 rounded-full w-3 h-3 transition peer-checked:translate-x-3 transform"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
