import Page404 from "./Page404";
import { useNavigate, useParams } from "react-router-dom";
import { useContext , useState} from "react";
import ProductContext from "../contexts/ProductContext";

export default function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const product = products.find(
    (product) => parseInt(product._id) === parseInt(id)
  );
  const [name, setName] = useState('');

  if (!product) return <Page404 />;
  const handlerAddButton = () =>{
    const nameHandler = () => setName(`${product.product_name}-${product.quantity}`);
    const newItem = {
        name,
        
    }
  }

  console.log(product);
  console.log(product.quantity)
//   console.log(typeof product.product_name); string
//   console.log(product.ecoscore_grade);   not-applicable  string
//   console.log(product.ingredients_text); string
//   console.log(typeof product.additives_original_tags.join(" ")); string
//   console.log(typeof product.image_front_thumb_url); string
//   console.log(typeof product.stores); string
//   console.log(typeof product.nutriscore_grade) string
//   console.log(typeof product.nova_group); number
//   console.log(Number(product._id)); number


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
              <h2>{`${product.product_name}-${product.quantity}`}</h2>
              <p>
                <strong>Stores: </strong>
                {product.stores}
              </p>

              <p>
                <strong>Ingredints: </strong>
                {product.ingredients_text}
              </p>
              {/* TRY TO ADD WHERE IF NO ADDITIVES DO SHOW ATTRIBUTE */}
              {
              product.additives_original_tags.length !== 0 && <p>
                <strong>Additives: </strong>
                {product.additives_original_tags.join(" ").toUpperCase()}
              </p>
              }
             
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
              <button className="ui button fluid">Add</button>
              <button className="ui button fluid">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
