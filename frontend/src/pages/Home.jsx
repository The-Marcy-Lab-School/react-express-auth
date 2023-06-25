import React from 'react'
import DoctorCard from "../components/DoctorCard";
import { useEffect, useState, useContext } from "react";
import { getAllPages } from "../adapters/page-adapter";
import { getAllReviews } from "../adapters/review-adapter";
import { NavLink } from 'react-router-dom';
import DoctorContext from '../contexts/DoctorContext'
import CurrentUserContext from '../contexts/current-user-context';



export default function DoctorsList() {

  const [reviews, setReviews] = useState([]);
  const [allPages, setAllPages] = useState([]);

  const { currentUser } = useContext(CurrentUserContext);
  const { doctors, filteredObject, setFilteredObject } = useContext(DoctorContext)
  const [searchValue, setSearchValue] = useState('');


  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
    const filtered = doctors.filter((doc) => {
      const { facility_doctor, specialty } = doc;
      return facility_doctor.toLowerCase().includes(searchValue.toLowerCase()) || specialty.toLowerCase().includes(searchValue.toLowerCase())

    })
    setFilteredObject(filtered)
  }

  useEffect(() => {

    getAllReviews()
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.log(error));
    getAllPages()
      .then((data) => setAllPages(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>

      <div className="navbar-start" style={{ flexGrow: 1, justifyContent: 'center' }}>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="Doctor/Facility/Specialty..."
              value={searchValue}
              onChange={handleSearchValue}
            />



          </p>

        </div>
      </div>

      <h4>
        <NavLink to="/create-post">Can't Find a Doctor? Add One Here</NavLink>
      </h4>
      <div className="ui centered cards">
        {filteredObject.length > 0 ? (
          filteredObject.map((doc) => (
            <DoctorCard key={doc.id} page={doc} reviews={reviews} />
          ))
        ) : (
          allPages.map((page) => (
            <DoctorCard key={page.id} page={page} reviews={reviews} />
          ))
        )}
      </div>

    </>
  );
}
