import { useContext, useEffect, useState } from 'react';
// import { useNavigte, useParams } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import { getUser } from '../adapters/user-adapter';
import { logUserOut } from '../adapters/auth-adapter';
import DoctorCard from "../components/DoctorCard";
import { doctors } from '../doctorsAndReview';
import { reviews } from '../doctorsAndReview';


 export default function DoctorsList(){
  console.log(reviews)
  const { pageId, id } = useParams();
      return (
        <>
         <h4>
          <NavLink to="/create-post">Cant Find a Doctor? Add One Here</NavLink>
          </h4>
        <div className="ui centered cards" >
            {doctors.map(doctor => { return <DoctorCard key={doctor.id} doctor={doctor} reviews={reviews}/>})}
        </div>
        </>
      )      
    
}

