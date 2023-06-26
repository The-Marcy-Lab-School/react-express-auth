import { useNavigate } from "react-router-dom";
import NovaScore from "./NovaScore";
import NutriScoreGrade from "./NutriScoreGrade"

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="ui card"
        onClick={() => {
          navigate(`/product/${item._id}`);
        }}
      >
        <div className="imageCard">
          <img alt="oh no!" src={item.image_front_thumb_url} />
        </div>
        <div className="content">
          {item.product_name ? (
            <div className="header">{`${item.product_name}-${item.quantity}`}</div>
          ) : (
            <div className="header">{`${item.brands_tags[0]}-${item.quantity}`}</div>
          )}
          <div className="meta">
            <span>
              <NutriScoreGrade props={item.nutriscore_grade}/>
            </span>

            <span>
              <i className="icon-nova-score" />
                <NovaScore props={item.nova_group}/>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
