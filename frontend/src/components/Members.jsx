import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getPatchOptions } from '../utils';

export default function SusuMembers({ user, owner, payments, setPayments }) {
    const [isChecked, setChecked] = useState(user.make_payments === 'true' ? true : false);
    
    useEffect(()=>{
      const { user_id, susu_id} = user;
      let options = getPatchOptions({user_id, susu_id, make_payments:isChecked});
      const handleFetch = async () => {
        try {
          const r = await fetch(`/api/susucheck`, options);
          const data = await r.json();
          console.log(data)
        } catch (err) {
          console.log(err);
          return null;
        }
      }
      handleFetch();
      setPayments((prevState) => {
        return {...prevState, [user.username]: isChecked}
      });
   },[isChecked])

    return (
     <FormControlLabel  control={<Checkbox className="susu-member" onClick={() => setChecked(!isChecked)}/>} label={`${user.username}`} disabled={owner} checked={isChecked}/>
  )}

  