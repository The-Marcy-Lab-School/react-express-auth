import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

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

      <div className="buttonNextPrev">
        <button className="previousButton" onClick={handlerPreviousPage}>
          Previous
        </button>
        <button className="nextButton" onClick={handlerNextPage}>
          Next
        </button>
      </div>
    </>
  );
}
