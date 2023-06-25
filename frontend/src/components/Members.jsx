import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getPatchOptions } from '../utils';

export default function SusuMembers({ user, owner }) {
    // return <li >{users.username} {users.make_payments = true ? '[]' : '[X]]'}</li>;
    const [isChecked, setChecked] = useState(user.make_payments === 'true' ? true : false);
    
    console.log(isChecked, user)

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
   },[isChecked])

    return (
     <FormControlLabel  control={<Checkbox className="susu-member" onClick={() => setChecked(!isChecked)}/>} label={`${user.username}`} disabled={owner} checked={isChecked}/>
  )}

  