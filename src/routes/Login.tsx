import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks";
import { capitalize } from "../lib";
import { User } from "../types";
import { MdEmail } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

export function Login(): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { setUserData } = useUser();

  const togglePassword = (): void => {
    if (inputRef.current) {
      inputRef.current.type =
        inputRef.current.type === "password" ? "text" : "password";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    // prettier-ignore
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const res = await fetch("https://fakestoreapi.com/users");
      const users: User[] = await res.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUserData(user);
        toast.success(`Welcome, ${capitalize(user.name.firstname)}!`);
        navigate("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err) {
      toast.error("Error connecting to server");
      console.log(err);
    }
  };

  return (
    <div className="bg-white shadow-md mx-auto mt-16 p-10 rounded-xl w-[95%] sm:w-[400px]">
      <p className="font-bold text-2xl text-center">Sign in with email</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center mt-10"
      >
        <div className="relative w-full h-fit">
          <input
            type="text"
            name="email"
            defaultValue="john@gmail.com"
            placeholder="Email"
            className="bg-slate-100 p-2 pl-10 rounded-xl w-full placeholder:text-slate-400"
          />
          <MdEmail className="top-1/2 left-3 absolute text-slate-400 text-xl -translate-y-1/2" />
        </div>

        <div className="relative mt-3">
          <input
            ref={inputRef}
            type="password"
            name="password"
            defaultValue="m38rmF$"
            placeholder="Password"
            className="bg-slate-100 p-2 pl-10 rounded-xl w-full placeholder:text-slate-400"
          />
          <IoMdUnlock className="top-1/2 left-3 absolute text-slate-400 text-xl -translate-y-1/2" />
          <FaEyeSlash
            onClick={togglePassword}
            className="top-1/2 right-3 absolute text-slate-400 hover:text-cyan-500 text-xl -translate-y-1/2 cursor-pointer"
          />
        </div>

        <button className="bg-gradient-to-b from-slate-600 to-black hover:to-slate-600 mt-10 p-2 rounded-xl font-bold text-white">
          Sign in
        </button>
      </form>
    </div>
  );
}
