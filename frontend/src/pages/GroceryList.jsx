export default function GroceryList({ grocery }) {
  return (
    <>
      <div
        className="ui card"
        onClick={() => {
          navigate(`/product/${grocery._id}`);
        }}
      >
        <h4>{grocery.created_at.slice(0, 10)}</h4>
        <div className="imageCard">
          <img alt="oh no!" src={grocery.image_front_thumb_url} />
        </div>
        <div className="content">
          {!grocery.product_name.includes("undefined") ?  (
            <div className="header">{`${grocery.product_name}`}</div>
          ) : (
            <div className="header">{(grocery.product_name).replace("undefined", "")}</div>
          )}
          <div className="meta">
            <span>
              <i className="icon-nutri-score" />
              {grocery.nutriscore_grade}
            </span>

            <span>
              <i className="icon-nova-score" />
              {grocery.nova_groups}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
