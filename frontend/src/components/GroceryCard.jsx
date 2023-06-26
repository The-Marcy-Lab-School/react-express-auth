import { useNavigate, useParams } from "react-router-dom";
import { fetchHandler } from "../utils";
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
export default function GroceryCard({ grocery }) {
  const dateTime = new Date(grocery.created_at);
  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();
  const navigate = useNavigate();
  const { id } = useParams();
  const { setRemoveButton } = useContext(ProductContext)

  const handleRemoveGroceryList = async() => {
    setRemoveButton(true);
    try {
      const res = await fetchHandler(
        `/api/grocerylist/${grocery.grocery_list_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  console.log(grocery);

  // console.log(user.id);
  return (
    <>
      <div className="ui card">
        <div
          className="ui card"
          onClick={() => {
            navigate(`/users/${id}/grocerylist/${grocery.grocery_list_id}`);
          }}
        >
          <div className="header">
            <h3>{grocery.list_name}</h3>
          </div>
          <div className="content">
            <h4>
              {formattedDate}
              {formattedTime}
            </h4>
          </div>
          <div className="imageCard">
            <img alt="oh no!" src={grocery.image_front_thumb_url} />
          </div>
          <div className="content">
            {/* {!grocery.product_name.includes("undefined") ?  (
            <div className="header">{`${grocery.product_name}`}</div>
            ) : (
              <div className="header">{(grocery.product_name).replace("undefined", "")}</div>
            )} */}
            <div className="meta">
              <span>
                <i className="icon-nutri-score" />
                {grocery.nutri_score}
              </span>

              <span>
                <i className="icon-nova-score" />
                {grocery.nova_rate}
              </span>
            </div>
          </div>
        </div>
        <button className="ui button fluid" onClick={handleRemoveGroceryList}>
          Remove
        </button>
      </div>
    </>
  );
}
