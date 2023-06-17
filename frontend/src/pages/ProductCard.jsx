import { useNavigate } from "react-router-dom"

export default function ProductCard({item}){
    const navigate = useNavigate();
    return (
        <>
            <div className="ui card" onClick={() =>{
                navigate(`/product/${item._id}`)
            }}>
                <div className="imageCard">
                    <img alt = "oh no!" src={item.image_front_thumb_url}/>
                </div>
                <div className="content">
                    <div className="header">
                    {`${item.product_name}-${item.quantity}`}
                    </div>
                    <div className="meta">
                        <span>
                            <i className="icon-nutri-score"/>
                            {item.nutriscore_grade}
                        </span>

                        <span>
                            <i className="icon-nova-score"/>
                            {item.nova_groups}
                        </span>
                    </div>
                </div>
            </div>        
        </>
    )
}