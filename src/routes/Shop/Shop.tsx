import { Outlet } from "react-router-dom";

export function Shop(): JSX.Element {
  return (
    <section className="m-auto">
      <h1 className="bg-clip-text bg-gradient-to-b from-pink-500 to-pink-800 my-10 pb-2 font-bold text-transparent text-2xl sm:text-5xl text-center">
        Welcome to the shop!
      </h1>
      <Outlet />
    </section>
  );
}
