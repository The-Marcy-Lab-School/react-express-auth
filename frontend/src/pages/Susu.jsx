import { useState, useEffect, useContext } from 'react';
import CurrentSusuContext from '../contexts/susu-context';
import SusuCard from '../components/SusuCard';
import '../styles/susus-page.css';


export default function Susu() {
  const { currentSusulist, setCurrentSusulist } = useContext(CurrentSusuContext);

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
