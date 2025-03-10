import { Link } from "react-router-dom";

export function Home(): JSX.Element {
  return (
    <section className="space-x-6 pt-10 font-bold text-center animate-slideUpFadeIn">
      <p className="bg-neutral-400 bg-clip-text bg-gradient-to-b from-neutral-950 mb-10 pb-3 text-transparent text-3xl sm:text-5xl 2xl:text-7xl">
        Project: Shopping Cart
        <br />
        from The Odin Project
      </p>

      <Link
        to="shop/products"
        className="inline-block bg-sky-400 hover:bg-sky-500 shadow-lg my-4 px-8 py-5 rounded-full text-white text-xl"
      >
        Browse shop
      </Link>

      <a
        href="https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="inline-block bg-transparent hover:bg-slate-100 shadow-lg px-4 py-2 border-2 border-slate-400 rounded-full text-neutral-600">
          Assignment reference
        </button>
      </a>
    </section>
  );
}
