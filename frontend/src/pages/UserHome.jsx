import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import ProductsList from "./ProductsList"

export default function UserHomePage() {
    const { setQuery } = useContext(ProductContext);
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        setQuery(e.target[0].value);
    }

    return <>
      <h1>User Home Page</h1>
      <p>Put something interesting here!</p>

      <form onSubmit={handleSubmit}>
      <h1>Search Form</h1>
        <input type="text"  placeholder="Enter your food"/>
        <button type="submit">Search</button>
      </form>
      <ProductsList/>
    </>;
  }