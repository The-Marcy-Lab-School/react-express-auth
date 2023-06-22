import { useState, useEffect } from "react";
import ProductContext from "./ProductContext";

function ProductContextProvider({ children }) {
  const [products, setProduct] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  // console.log(products.length)

  useEffect(() => {
    async function fetchApi() {
      try {
        const res = await fetch(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page=${page}&page_size=6&json=true`
        );
        const data = await res.json();
        console.log("Data from 2 items from api:", data.products);
        // console.log(req)
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
  }, [query, page]);

  const value = {
    products,
    query,
    page,
    setQuery,
    setProduct,
    setPage,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductContextProvider;
