import { useState, useEffect, useContext } from 'react';
// import CurrentSusuContext from '../contexts/susu-context';
import CurrentUserContext from '../contexts/current-user-context';
import SusuCard from '../components/SusuCard';
import '../styles/susus-page.css';
import '../Card.css';


export default function Susu() {
  // const { currentSusulist, setCurrentSusulist } = useContext(CurrentSusuContext);
  const [ currentSusulist, setCurrentSusulist ] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(()=>{
    const handleFetch = async () => {
      try {
        console.log(currentUser)
        const id = currentUser.id;
        const suRes = await fetch(`/api/susus/${id}`);
        const suData = await suRes.json();
        setCurrentSusulist(suData)
      } catch (err) {
          console.log(err);
          return null;
      }
    }
    handleFetch()
    },[currentUser])

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
    <div className="susupage-container">
      {currentSusulist.map((susu) => (
        // console.log(susu)
        <SusuCard className="susu-card" key={susu.id} susu={susu} />
      ))}
    </div>
  );
}
