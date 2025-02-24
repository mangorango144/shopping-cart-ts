import { Outlet } from "react-router-dom";

export function Shop() {
  return (
    <section className="m-auto">
      <h1 className="bg-clip-text bg-gradient-to-b from-pink-500 to-pink-800 my-10 pb-2 font-bold text-2xl text-center text-transparent sm:text-5xl">
        Welcome to the shop!
      </h1>
      <Outlet />
    </section>
  );
}
