// import { useContext, useEffect, useState } from 'react';
// import { useNavigte, useParams } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import CurrentUserContext from '../contexts/current-user-context';
// import { getUser } from '../adapters/user-adapter';
// import { logUserOut } from '../adapters/auth-adapter';
import DoctorCard from "../components/DoctorCard";

import { useEffect, useState } from "react";
import { getAllPages } from "../adapters/page-adapter";
import { NavLink, Link, useParams } from 'react-router-dom';

 export default function DoctorsList(){
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getAllPages().then(setPages)
  }, [])
  console.log(pages)
      return (
        <>
         <h4>
          <NavLink to="/create-post">Cant Find a Doctor? Add One Here</NavLink>
          </h4>
        <div className="ui centered cards" >
            {pages.map(page => { return <DoctorCard key={page.id} page={page}/>})}
        </div>
        </>
      )      
    
}

