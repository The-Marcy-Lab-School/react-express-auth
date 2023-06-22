export default function ProductInGroceryList({props}) {
    console.log(props)
  return (
    <>
      <div
        className="ui card"
        onClick={() => {
          navigate(`/product/${props.id}`);
        }}
      >
        <div className="imageCard">
          <img alt="oh no!" src={props.image_front_thumb_url} />
        </div>
        <div className="content">
          <div className="header">{`${props.product_name}`}</div>
          <div className="meta">
            <span>
              <i className="icon-nutri-score" />
              {props.nutriscore_grade}
            </span>

            <span>
              <i className="icon-nova-score" />
              {props.nova_groups}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
