import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadSusuDetails } from "../adapters/susu-adapter";
export default function detailsLink() {
    const [errorText, setErrorText] = useState(null);
    const [data, setData] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    const loadDetails = async () =>{
      const [details, error] = await loadSusuDetails(id);
      console.log(details)
      if(error) return setErrorText(true);
      setData(details)
    }
    loadDetails();
  },[id])
  // console.log(data)
    return (
      <>
        <h1>{data.name}</h1>

        <h1>{data.next_payment}</h1>
        <h1>{data.payment_amount}</h1>
      </>
        // <div className = "payment-details">
        //   <label>
        //     <span className = "name">Amanda</span>
        //     <input type="checkbox" />
        //   </label>
        //   <label>
        //     <span className = "name">Ashley</span>
        //     <input type="checkbox" />
        //   </label>
        //   <label>
        //     <span className = "name">Casterly</span>
        //     <input type="checkbox" />
        //   </label>
        //   <label>
        //     <span className = "name">Luis</span>
        //     <input type="checkbox" />
        //   </label>
        // </div>
      );
}
