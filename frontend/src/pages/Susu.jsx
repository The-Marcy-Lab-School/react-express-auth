import SusuCard from "../components/SusuCard"
import { useState, useEffect, useContext } from "react";
import CurrentSusuContextProvider from "../contexts/SusuContextProvider";
// { filter.map(robot => { return <BotCard key={robot.id} bot={robot}/>}) }
function Susu() {
  const { currentSusulist } = useContext(CurrentSusuContextProvider);

  console.log(currentSusulist);

  return (
    <>
      {currentSusulist.map((susu) => (
        // console.log(susu)
        <SusuCard key={susu.id} susu={susu} />
      ))}
    </>
  );
}
export default Susu;