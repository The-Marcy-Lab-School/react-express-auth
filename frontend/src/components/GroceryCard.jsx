export default function GroceryCard({ grocery }) {
    const dateTime = new Date(grocery.created_at);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();

  return (
    <>
      <div
        className="ui card"
        // onClick={() => {
        //   navigate(`/product/${grocery._id}`);
        // }}
      >
        <div className="row">
            <h4>{formattedDate}{formattedTime}</h4>
        </div>
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
              {grocery.nova_group}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
