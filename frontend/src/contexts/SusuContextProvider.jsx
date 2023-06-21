import { useState, useEffect } from 'react';
import CurrentSusuContext from './susu-context';

export default function CurrentSusuContextProvider({ children }) {
  const [currentSusulist, setCurrentSusulist] = useState([]);
  const context = {currentSusulist, setCurrentSusulist };
  useEffect(()=>{
    const handleFetch = async () => {
      try {
          const r = await fetch(`api/me`);
          const data = await r.json();
          console.log(data, 1)
          const suRes = await fetch(`/api/susus/${data.id}`);
          const suData = await suRes.json();
          console.log(suData)
          setCurrentSusulist(suData)
      } catch (err) {
          console.log(err);
          return null;
      }
    }
    handleFetch()
    },[])
// console.log(context.CurrentSusulist)
  return (
    <CurrentSusuContext.Provider value={ context }>
      {children}
    </CurrentSusuContext.Provider>
  );
}