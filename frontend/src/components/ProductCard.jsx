import { useNavigate } from "react-router-dom";
import NovaScore from "./NovaScore";
import NutriScoreGrade from "./NutriScoreGrade"
import MissingImgItem from "./MissingImgItem";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <div id="product-search-cards"
        className="ui card"
        onClick={() => {
          navigate(`/product/${item._id}`);
        }}
      >
        <div className="imageCard">
          <MissingImgItem img={item.image_small_url}/>
          {/*item.image_front_thumb_url */}
        </div>
        <div id="product-search-cards-content" className="content">
          {item.product_name ? (
            <div className="header">{`${item.product_name}-${item.quantity}`}</div>
          ) : (
            <div className="header">{`${item.brands_tags[0]}-${item.quantity}`}</div>
          )}
          <div id="card-info-section" className="meta">
              <NutriScoreGrade props={item.nutriscore_grade}/>
            
              <i className="icon-nova-score" />
                <NovaScore props={item.nova_group}/>
          </div>
        </div>
      </div>
    </>
  );
}
