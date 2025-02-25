import { useEffect, useState } from "react";
import { Product } from "../types";

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
          setError((err as Error).message);
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
