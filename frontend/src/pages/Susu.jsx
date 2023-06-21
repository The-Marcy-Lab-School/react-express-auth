import { useState, useEffect, useContext } from 'react';
import CurrentSusuContext from '../contexts/susu-context';
import SusuCard from '../components/SusuCard';
import '../styles/susus-page.css';


export default function Susu() {
  const { currentSusulist, setCurrentSusulist } = useContext(CurrentSusuContext);

  // useEffect(()=>{
  //   const handleFetch = async () => {
  //     try {
  //         const r = await fetch(`api/me`);
  //         const data = await r.json();
  //         const suRes = await fetch(`/api/susus/${data.id}`);
  //         const suData = await suRes.json();
  //         setCurrentSusulist(suData)
  //     } catch (err) {
  //         console.log(err);
  //         return null;
  //     }
  //   }
  //   handleFetch()
  //   },[])

  console.log(currentSusulist);
  
  return (
    <>
      {currentSusulist.map((susu) => (
        // console.log(susu)
        <SusuCard className="susu-card" key={susu.id} susu={susu} />
      ))}
    </>
  );
}
