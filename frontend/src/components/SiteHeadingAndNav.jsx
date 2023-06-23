import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import DoctorContext from '../contexts/DoctorContext'

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const { doctors, filteredObject, setFilteredObject } = useContext (DoctorContext)
  const [searchValue, setSearchvValue] = useState('');

console.log(doctors)
console.log()


  const handleSearchValue = (e) => {
    setSearchvValue(e.target.value)
    const filtered = doctors.filter((doc) => {
      const { facility_doctor } = doc;
      console.log(facility_doctor)
      return facility_doctor.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredObject(filtered)
  }
  console.log(searchValue)
  console.log(filteredObject)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue)
    setSearchvValue('')
  }

  return (
    <header>
      <a id="logo" href="/">
        Care Companion
      </a>
      {currentUser && (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <input
      onSubmit={handleSubmit}
      type="text"
      placeholder="Search a Doctor/Facility..."
      value={searchValue}
      onChange={handleSearchValue}
    />
    <button>Search</button>
    <img
      src="magnifying_glass.png" // Replace with the path to your magnifying glass image
    />
  </div>
  // previous search bar {currentUser && <input  onSubmit={handleSubmit} type="text" placeholder="Search a Doctor/Facility..." value={searchValue} onChange={handleSearchValue} />}
)}

      <nav>
        <ul>
          <li>
            <NavLink to="/">Mission</NavLink>
          </li>
          {/* <li>
            <NavLink to="/users" end={true}>
              Users
            </NavLink>
          </li> */}
          {currentUser ? (
            <>
            <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to={`/users/${currentUser.id}`}>
                  {currentUser.username}
                </NavLink>
              </li>
              
            </>
          ) : (
            <li>
              <NavLink to="/signuplogin">Sign Up / Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
