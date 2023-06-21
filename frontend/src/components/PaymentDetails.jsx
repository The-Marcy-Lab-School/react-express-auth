import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadSusuDetails } from "../adapters/susu-adapter";
import SusuMembers from "./Members";



export default function detailsLink() {
  const {id} = useParams()
    const [errorText, setErrorText] = useState(null);
    const [data, setData] = useState([])
  useEffect(()=>{
    const loadDetails = async () =>{
      const [details, error] = await loadSusuDetails(id);
      // console.log(details, 1)
      if(error) return setErrorText(true);
      setData(details)
      
    }
    loadDetails();
  },[id])
  console.log(data)
  
    return (
      <>
      <ul>
        {
          data.map((user) => <li key={user.user_id}> <SusuMembers users ={user} /> </li>)
        }
      </ul>
        <h1>{data.length > 0 ? data[0].name : ''}</h1>

        <h1>{data.length > 0 ? data[0].next_payment: ''}</h1>
        <h1>{data.length > 0 ? data[0].payment_amount : ''}</h1>
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
