import Page404 from "./Page404";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import CurrentUserContext from "../contexts/current-user-context";
import { fetchHandler } from "../utils";
import Additives from "../components/Additives";
import NutriScoreGrade from "../components/NutriScoreGrade";
import NovaScore from "../components/NovaScore";
import MissingImgItem from "../components/MissingImgItem";

export default function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [curProduct, setCurProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [option, setOption] = useState([]);
  const [additiveInfo, setAdditiveInfo] = useState([]);
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleButtonClick = async () => {
    if (selectedValue === "") return null;
    console.log("Button clicked for:", selectedValue);
    const newItem = {
      id: curProduct.id,
      product_name: curProduct.product_name
        ? curProduct.product_name
        : curProduct.quantity + curProduct.brands_tags[0],
      ecoscore_grade: curProduct.ecoscore_grade
        ? curProduct.ecoscore_grade
        : null,
      ingredients_text: curProduct.ingredients_text
        ? curProduct.ingredients_text
        : null,
      additives_original_tags: curProduct.additives_original_tags
        ? curProduct.additives_original_tags
        : null,
      image_front_thumb_url: curProduct.image_front_thumb_url
        ? curProduct.image_front_thumb_url
        : null,
      stores: curProduct.stores ? curProduct.stores : null,
      nutriscore_grade: curProduct.nutriscore_grade,
      nova_group: Number(curProduct.nove_group),
    };
    try {
      await fetchHandler(`/api/grocerylist/${selectedValue}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
    } catch (err) {
      console.log(err);
      return null;
    }

    // Perform any desired action based on the selected value
  };

  // console.log(currentUser.id)
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const product = await products.find(
        (product) => Number(product._id) === Number(id)
      );

      const extractProperties = {
        product_name: product.product_name,
        quantity: product.quantity,
        ecoscore_grade: product.ecoscore_grade,
        ingredients_text: product.ingredients_text,
        additives_original_tags: product.additives_original_tags,
        image_front_thumb_url: product.image_url,
        stores: product.stores,
        nutriscore_grade: product.nutriscore_grade,
        nova_group: product.nova_group,
        id: product.id,
        brands_tags: product.brands_tags,
      };
      setCurProduct(extractProperties);
      setAdditiveInfo(extractProperties.additives_original_tags);
      setLoading(false);
    };
    const userAmountGroceryList = async () => {
      try {
        const res = await fetchHandler(`/api/grocerylist/${currentUser.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = res[0];
        console.log(data);
        setOption(data);
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    userAmountGroceryList();
    getProduct();
    // console.log(additiveInfo)
  }, []);
  console.log(option);
  console.log(curProduct);
  console.log(additiveInfo);
  // console.log(results);
  // console.log(option);
  // console.log(repeat);
  // doFetch();
  console.log(additiveInfo);
  // const curProduct = getProduct();

  // console.log(results);
  // console.log(additiveInfo);
  // console.log(img);

  // console.log("Name", name);
  // console.log("Eco", ecoscore);
  // console.log("Ingredient", ingredient);
  // console.log("additives", additives);
  // console.log("GATTTT", additives);

  if (loading) return <h1>Loading...</h1>;

  if (!curProduct) return <Page404 />;

  // console.log(product);
  // console.log( typeof product.product_name)
  //   console.log(product.brands_tags[0]);
  // console.log("Name:", name);
  // console.log("EcoScore", ecoscore);
  // console.log("Ingredients:", ingredient);
  // console.log("Additives:", additives);
  // console.log("Img:", img);
  // console.log("Store:", store);
  // console.log("Nutri", nutri);
  // console.log("Nova", nova);
  // console.log("Id", ID);
  // //   console.log(product);
  // console.log("Quantity:", product.quantity);

  // return <></>;
  return (
    <>
      <h1>Items Page</h1>
      <div className="ui segment">
        <div className="ui two column centered grid">
          <div className="row">
            <div className="four wide column">
              <MissingImgItem img={curProduct.image_front_thumb_url} />
            </div>
            <div className="four wide column">
              {curProduct.product_name ? (
                <h2>{`${curProduct.product_name}-${curProduct.quantity}`}</h2>
              ) : (
                <h2>{`${curProduct.brands_tags[0]}-${curProduct.quantity}`}</h2>
              )}
              <p>
                <strong>Stores: </strong>
                {curProduct.stores}
              </p>

              <p>
                <strong>Ingredints: </strong>
                {curProduct.ingredients_text}
              </p>
              {/* TRY TO ADD WHERE IF NO ADDITIVES DO SHOW ATTRIBUTE */}
              {curProduct.additives_original_tags.length !== 0 && (
                <>
                  <p>
                    <strong>Additives: </strong>
                    {curProduct.additives_original_tags.join(" ").toUpperCase()}
                  </p>
                  {additiveInfo.map((itemData, i) => (
                    <Additives key={i} item={itemData} />
                  ))}
                </>
              )}

              <br />
              <div className="row">
                <NutriScoreGrade props={curProduct.nutriscore_grade} />
                <NovaScore props={curProduct.nova_group} />
              </div>
              {/* Wrap this button component in a Link */}
              <button
                className="ui button fluid"
                onClick={() => navigate(`/users/search`)}
              >
                Go Back
              </button>
              <div>
                <select
                  value={selectedValue}
                  onChange={handleDropdownChange}
                  required
                >
                  <option value="">Select an option</option>
                  {option.map((opt, index) => (
                    <option key={index} value={opt.grocery_list_id}>
                      {opt.grocery_list_id}
                    </option>
                  ))}
                </select>
                <button onClick={handleButtonClick}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
