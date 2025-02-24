import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useShop } from "../../../hooks";
import { ProductsLoader } from "./ProductsLoader";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function ProductDetails() {
  const { id } = useParams();
  const { products, loading, error, cart, setCart } = useShop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <ProductsLoader />;
  if (error) {
    return (
      <div className="font-semibold text-red-500 text-xl text-center">
        {error}
      </div>
    );
  }

  const product = products?.find((product) => product.id == id);
  if (!product)
    return (
      <div className="font-semibold text-gray-500 text-xl text-center">
        Product not found
      </div>
    );

  const handleAdd = () => {
    if (!cart.some((item) => item.id == product.id)) {
      setCart((prev) => [...prev, product]);
      toast.success("Added to cart");
    } else {
      toast.error("Already in the cart");
    }
  };

  return (
    <section className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] bg-white shadow-md mx-auto xl:p-7 rounded-3xl w-[95%] xl:w-8/12 max-w-[1268px] min-h-[604px]">
      <img
        src={product.image}
        alt={product.title}
        className="m-auto p-11 max-h-[506px] object-contain"
      />
      <div className="flex flex-col justify-between p-11">
        <div className="flex flex-col items-center">
          <h1 className="mx-auto font-bold text-lg tracking-wide">
            {product.title}
          </h1>
          <p className="bg-slate-100 mt-2 px-3 border-2 border-slate-200 rounded-3xl font-medium text-slate-600 text-sm">
            category: {product.category}
          </p>
        </div>

        <div className="mt-10 mb-auto">
          <p className="mb-2 font-bold text-zinc-600">Description</p>
          <p className="text-stone-500 text-sm xl:text-base">
            {product.description}
          </p>
        </div>

        <div className="items-center gap-y-10 grid grid-cols-1 xl:grid-cols-2 mt-10">
          <span className="font-medium text-slate-500 text-xl xl:text-left text-center italic">
            Price: <b className="text-black">${product.price.toFixed(2)}</b>
          </span>
          <button
            onClick={handleAdd}
            className="bg-green-600 hover:bg-green-500 px-10 py-3 rounded-2xl h-auto font-bold text-white text-lg"
          >
            <FaCartPlus className="inline mr-1 mb-1" /> Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}
