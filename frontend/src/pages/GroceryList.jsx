import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHandler } from "../utils";
import ProductInGroceryList from "../components/ProductInGroceryList";

export default function GroceryList() {
  const { id } = useParams();
  const [itemList, setItemList] = useState([]);
  console.log(id);

  useEffect(() => {
    const groceryList = async () => {
      try {
        const res = await fetchHandler(`/api/grocerylist/${id}/items`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res);
        const data = res[0];
        console.log(data);
        setItemList(data);
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    groceryList();
  }, [id]);

  console.log(typeof itemList);
  console.log(itemList);
  return (
    <>
      <h1>GroceryList</h1>
      <div className="ui centered cards">
        {itemList.map((product, i) => {
          return (<ProductInGroceryList
            key={i}
            props={{
              id: product.id,
              image_front_thumb_url: product.image_front_thumb_url,
              product_name: product.product_name,
              nutriscore_grade: product.nutriscore_grade,
              nova_groups: product.nova_groups,
            }}
          />);
        })}
      </div>
    </>
  );
}
