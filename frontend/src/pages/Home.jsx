import DoctorCard from "../components/DoctorCard";
import { useEffect, useState, useContext } from "react";
import { getAllPages } from "../adapters/page-adapter";
import { getAllReviews } from "../adapters/review-adapter";
import { NavLink } from 'react-router-dom';

export default function DoctorsList() {
 
  const [reviews, setReviews] = useState([]);
  const [allPages, setAllPages] = useState([]);

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
      <h4>
        <NavLink to="/create-post">Can't Find a Doctor? Add One Here</NavLink>
      </h4>
      <div className="ui centered cards">
        {allPages.map((page) => (
          <DoctorCard key={page.id} page={page} reviews={reviews} />
        ))}
      </div>
    </>
  );
}
