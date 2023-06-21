import Page404 from "./Page404";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import { fetchHandler } from "../utils";
import Additives from "../components/Additives";

export default function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const [curProduct, setCurProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const results = [];

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
        image_front_thumb_url: product.image_front_thumb_url,
        stores: product.stores,
        nutriscore_grade: product.nutriscore_grade,
        nove_group: product.nova_group,
        id: product.id,
        brands_tags: product.brands_tags,
      };
      setCurProduct(extractProperties);
      setLoading(false);
    };
    getProduct();
  }, []);

  console.log(curProduct);
  console.log(results);
  // const doFetch = async () => {
  //   for (const additive of products.additives_original_tags) {
  //     try {
  //       // if (!additive) return;
  //       const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${additive.replace(
  //         "en:",
  //         ""
  //       )}`;
  //       console.log(additive);
  //       console.log(url);
  //       const res = await fetch(url);
  //       console.log(res);
  //       const data = await res.json();
  //       const snippet = data.query.search[0].snippet.replace(
  //         /<[^>]+>|[^\w\s]/gi,
  //         ""
  //       );
  //       const title = data.query.search[0].title;
  //       console.log("GAYYYYYY", snippet, title);
  //       results.push({ title, snippet });
  //       console.log("hello", results);
  //     } catch (err) {
  //       console.log(err);
  //       return null;
  //     }
  //   }
  //   setAdditiveInfo(results);
  // };
  // const curProduct = getProduct();

  // const [additiveInfo, setAdditiveInfo] = useState(null);
  // const results = [];

  // console.log({product})
  // useEffect(() => {
  //   // const doFetch = async() => {

  //   //   for (const additive of additives) {
  //   //     try {
  //   //       if (!additive) return;
  //   //       const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${additive.replace(
  //   //         "en:",
  //   //       ""
  //   //       )}`;
  //   //       console.log(additive);
  //   //       console.log(url);
  //   //       const res = await fetch(url);
  //   //       console.log(res)
  //   //       const data = await res.json();
  //   //       const snippet = data.query.search[0].snippet.replace(/<[^>]+>|[^\w\s]/gi,'');
  //   //       const title = data.query.search[0].title;
  //   //       console.log("GAYYYYYY",snippet, title)
  //   //       results.push({title, snippet});
  //   //       console.log('hello', results)
  //   //     } catch (err) {
  //   //       console.log(err);
  //   //       return null;
  //   //     }
  //   //   }
  //   //   setAdditiveInfo(results);
  //   // };
  //   // doFetch();
  // }, []);
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
  const handlerAddButton = async () => {
    console.log(name);

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
    await fetchHandler(`/api/itemslist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
  };
  const handlerRemoveButton = async () => {
    await fetchHandler(`/api/itemslist/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
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
              <img
                alt="oh no!"
                className="ui medium image"
                src={curProduct.image_front_thumb_url}
              />
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
                  {/* {additiveInfo.map((itemData) => (
                    <Additives key={additiveInfo.title} item={itemData}/>
                  ))} */}
                </>
              )}

              <br />
              <div className="row">
                <div className="ui segment">
                  <div className="ui three column centered grid">
                    <div className="row">
                      <div className="column">
                        <strong>
                          Nutri-Score: {curProduct.nutriscore_grade}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui segment">
                  <div className="ui three column centered grid">
                    <div className="row">
                      <div className="column">
                        <strong>Nova Group: {curProduct.nova_group}</strong>
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
