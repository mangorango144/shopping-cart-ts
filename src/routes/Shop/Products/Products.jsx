import { useShop } from "../../../hooks";
import { ProductCard } from "./ProductCard";
import { ProductsLoader } from "./ProductsLoader";

export function Products() {
  const { products, loading, error } = useShop();

  return (
    <>
      {loading && <ProductsLoader />}
      {error && (
        <div className="flex justify-center my-auto font-semibold text-red-500 text-xl">
          {error}
        </div>
      )}
      {products && (
        <section className="gap-x-12 gap-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-auto w-[95%] xl:w-8/12 max-w-[1268px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  );
}
