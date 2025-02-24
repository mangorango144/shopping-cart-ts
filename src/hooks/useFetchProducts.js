import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setTimeout(async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/products");
          if (!res.ok) {
            throw new Error(`HTTP error: Status ${res.status}`);
          }
          const json = await res.json();
          setProducts(json);
          setError(null);
        } catch (err) {
          setError(err.message);
          setProducts(null);
        } finally {
          setLoading(false);
        }
      }, 500);
    };

    getProducts();
  }, []);

  return { products, loading, error };
};
