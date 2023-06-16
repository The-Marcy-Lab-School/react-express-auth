import SusuCard from "../components/susu-card"
import { useState, useEffect } from "react";
// { filter.map(robot => { return <BotCard key={robot.id} bot={robot}/>}) }
function Susu() {
  const [susuList, setSusuList] = useState([]);
 
  useEffect(()=>{
    const handleFetch = async () => {
      try {
          // const r = await fetch(`api/me`);
          // const data = await r.json();
          // console.log(data)
          const suRes = await fetch(`/api/susus/${data.id}`);
          const suData = await suRes.json();
          setSusuList(suData)
      } catch (err) {
          console.error(err);
          return null;
      }
    }
    handleFetch()

    },[])
    console.log(susuList)

    return(     
    <div>
      { filter.map(robot => { return <SusuCard key={robot.id} bot={robot}/>}) }
      <SusuCard></SusuCard>
    </div>
    )
}
export default Susu;