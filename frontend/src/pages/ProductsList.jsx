import { useContext, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard";

export default function ProductsList() {
  const { products, setPage, page } = useContext(ProductContext);
  console.log(products);
  const handlerNextPage = () => setPage(page + 1);
  const handlerPreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      <div className="ui centered cards">
        {products.map((product) => {
          return <ProductCard key={product._id} item={product} />;
        })}
      </div>
      <button onClick={handlerNextPage}>Next</button>
      <button onClick={handlerPreviousPage}>Previous</button>
    </>
  );
}
