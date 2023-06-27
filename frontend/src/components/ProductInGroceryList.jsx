import NovaScore from "../components/NovaScore";
import NutriScoreGrade from "./NutriScoreGrade";
import { useNavigate } from "react-router-dom";

export default function ProductInGroceryList({ props }) {
  const navigate = useNavigate();
  console.log(props);
  return (
    <>
      <div className="ui card">
        <div className="imageCard">
          <img alt="oh no!" src={props.image_front_thumb_url} />
        </div>
        <div className="content">
          <div className="header">{`${props.product_name}`}</div>
          <div className="meta">
            <span>
              {/* <i className="icon-nutri-score" />
              {props.nutriscore_grade} */}
              <NutriScoreGrade props={props.nutriscore_grade} />
            </span>

            <span>
              {/* <i className="icon-nova-score" />
              {props.nova_groups} */}
              <NovaScore props={props.nova_groups} />
            </span>
          </div>
        </div>
        <button
          className="ui button fluid"
          onClick={() => {
            navigate(`/product/${props.item_id}`);
          }}
        >
          View
        </button>
        <button className="ui button fluid">Remove</button>
      </div>
    </>
  );
}
