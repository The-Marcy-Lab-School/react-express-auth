import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard"

export default function ProductsList(){
    const { products } = useContext(ProductContext);
    console.log(products)

    return (
        <div className="ui centered cards">
            { products.map(product => { return <ProductCard key={product._id} item={product}/>}) }
        </div>
    )
} 