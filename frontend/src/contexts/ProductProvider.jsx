import { useState, useEffect } from "react";
import ProductContext from "./ProductContext";

function ProductContextProvider({ children }) {
  const [products, setProduct] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchApi() {
      try {
        const res = await fetch(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=6&json=true`
        );
        const data = await res.json();
        console.log("Data from 2 items from api:", data.products);
        setProduct((p) => {
          p = data.products;
          console.log("yoo", p);
        });
        setProduct(data.products);
        console.log(products);
      } catch (err) {
        console.log(err);
        return null;
      }
    }
    fetchApi();
  }, [query]);

  const value = {
    products,
    query,
    setQuery,
    setProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductContextProvider;
