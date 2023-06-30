import React from "react";
import DoctorCard from "../components/DoctorCard";
import { useEffect, useState, useContext } from "react";
import { getAllPages } from "../adapters/page-adapter";
import { getAllReviews } from "../adapters/review-adapter";
import { NavLink } from "react-router-dom";
import DoctorContext from "../contexts/DoctorContext";
import CurrentUserContext from "../contexts/current-user-context";
import { getAllUsers } from "../adapters/user-adapter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function DoctorsList() {
  const [reviews, setReviews] = useState([]);
  const [allPages, setAllPages] = useState([]);
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  const { doctors, filteredObject, setFilteredObject } =
    useContext(DoctorContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    const filtered = doctors.filter((doc) => {
      const { facility_doctor, specialty } = doc;
      return (
        facility_doctor.toLowerCase().includes(searchValue.toLowerCase()) ||
        specialty.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredObject(filtered);
  };

  useEffect(() => {
    getAllReviews()
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.log(error));
    getAllPages()
      .then((data) => setAllPages(data))
      .catch((error) => console.log(error));

    getAllUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));

  }, []);

  return (
    <>
      <main id="homeMain">
        <div>
          <div>
            <p>
              <input
                style={{ fontSize: "15px", width: "410px", textAlign:"center",borderColor:"#001A49" }}
                className="input"
                type="text"
                placeholder="Search for Doctor/Facility/Specialty...🔍"
                value={searchValue}
                onChange={handleSearchValue}
              />
            </p>
          </div>
        </div>
        <h4>
          <NavLink to="/create-post" className="doctorLink">Can't Find a Doctor or Facility? Add One Here</NavLink>
        </h4>
        <div className="test">
          {filteredObject.length > 0
            ? filteredObject.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  page={doc}
                  reviews={reviews}
                  users={users}
                />
              ))
            : allPages.map((page) => (
                <DoctorCard
                  key={page.id}
                  page={page}
                  reviews={reviews}
                  users={users}
                />
              ))}
        </div>
      </main>
    </>
  );
}