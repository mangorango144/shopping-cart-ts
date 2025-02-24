import toast from "react-hot-toast";
import { useUser } from "../hooks";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { capitalize } from "../lib";

export function UserStatus() {
  const { userData, setUserData } = useUser();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUserData(null);
    toast.success("Logged out");
  };

  return (
    <>
      {userData ? (
        <div className="flex items-center">
          <span className="sm:mr-3">{capitalize(userData.name.firstname)}</span>
          <button
            onClick={handleLogOut}
            className="bg-indigo-200 hover:bg-indigo-300 ml-2 px-2 py-1 rounded-md text-[8px] text-indigo-600 sm:text-sm"
          >
            Log out{" "}
            <IoIosLogOut className="inline text-xs sm:text-xl -translate-y-[1px]" />
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded-md text-white text-xs sm:text-sm"
        >
          Log in
        </Link>
      )}
    </>
  );
}
