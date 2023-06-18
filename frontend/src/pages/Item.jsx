import Page404 from "./Page404";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import { fetchHandler } from "../utils";

export default function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const product = products.find(
    (product) => parseInt(product._id) === parseInt(id)
  );

  const [name, setName] = useState(null);
  const [ecoscore, setEco] = useState(null);
  const [ingredient, setIngredients] = useState(null);
  const [additives, setAdditives] = useState(null);
  const [img, setImg] = useState(null);
  const [store, setStores] = useState(null);
  const [nutri, setNutri] = useState(null);
  const [nova, setNova] = useState(null);
  const [ID, setId] = useState(null);

  useEffect(() => {
    const setAll = async () => {
      product.product_name !== undefined
        ? await setName(`${product.product_name}-${product.quantity}`)
        : await setName(`${product.brands_tags[0]}-${product.quantity}`)
      product.ecoscore_grade !== "not-applicable"
        ? await setEco(product.ecoscore_grade)
        : null

      await setIngredients(product.ingredients_text);

      product.additives_original_tags.length !== 0
        ? await setAdditives(product.additives_original_tags)
        : null;

      await setImg(product.image_front_thumb_url);
      await setStores(product.stores);
      await setNutri(product.nutriscore_grade);
      await setNova(product.nova_group);
      await setId(product._id);
    };
    setAll();
  }, []);

  if (!product) return <Page404 />;
  const handlerAddButton = async () => {
    console.log(name);
    const newItem = {
      id: ID,
      product_name: name,
      ecoscore_grade: ecoscore,
      ingredients_text: ingredient,
      additives_original_tags: additives,
      image_front_thumb_url: img,
      stores: store,
      nutriscore_grade: nutri,
      nova_group: nova,
    };
    await fetchHandler(`/api/itemslist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    console.log(name);
  };
  const handlerRemoveButton = async () => {
    await fetchHandler(`/api/itemslist/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  console.log(product);
  console.log( typeof product.product_name)
    console.log(product.brands_tags[0]);
  console.log("Name:", name);
  console.log("EcoScore", ecoscore);
  console.log("Ingredients:", ingredient);
  console.log("Additives:", additives);
  console.log("Img:", img);
  console.log("Store:", store);
  console.log("Nutri", nutri);
  console.log("Nova", nova);
  console.log("Id", ID);
  //   console.log(product);
  console.log("Quantity:", product.quantity);

  return (
    <>
      <h1>Items Page</h1>
      <div className="ui segment">
        <div className="ui two column centered grid">
          <div className="row">
            <div className="four wide column">
              <img
                alt="oh no!"
                className="ui medium image"
                src={product.image_front_thumb_url}
              />
            </div>
            <div className="four wide column">
              {product.product_name ? (
                <h2>{`${product.product_name}-${product.quantity}`}</h2>
              ) : (
                <h2>{`${product.brands_tags[0]}-${product.quantity}`}</h2>
              )}
              <p>
                <strong>Stores: </strong>
                {product.stores}
              </p>

              <p>
                <strong>Ingredints: </strong>
                {product.ingredients_text}
              </p>
              {/* TRY TO ADD WHERE IF NO ADDITIVES DO SHOW ATTRIBUTE */}
              {product.additives_original_tags.length !== 0 && (
                <p>
                  <strong>Additives: </strong>
                  {product.additives_original_tags.join(" ").toUpperCase()}
                </p>
              )}

              <br />
              <div className="row">
                <div className="ui segment">
                  <div className="ui three column centered grid">
                    <div className="row">
                      <div className="column">
                        <strong>Nutri-Score: {product.nutriscore_grade}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui segment">
                  <div className="ui three column centered grid">
                    <div className="row">
                      <div className="column">
                        <strong>Nova Group: {product.nova_group}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Wrap this button component in a Link */}
              <button
                className="ui button fluid"
                onClick={() => navigate(`/users/search`)}
              >
                Go Back
              </button>
              <button className="ui button fluid" onClick={handlerAddButton}>
                Add
              </button>
              <button className="ui button fluid" onClick={handlerRemoveButton}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
