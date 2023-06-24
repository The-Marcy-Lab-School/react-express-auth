import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
// import DoctorContext from '../contexts/DoctorContext'

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    setSearchValue('');
  };

  return (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <a className="navbar-item" href="/">
      Care Companion
    </a>
    <a
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <NavLink className="navbar-item" to="/" exact>
          Mission
        </NavLink>

    <div className="navbar-end">
    <div className="navbar-item">

        {currentUser ? (
          <>
            <NavLink className="navbar-item" to="/home">
              <strong>Home</strong>
            </NavLink>
            <NavLink className="navbar-item" to={`/users/${currentUser.id}`}>
              {currentUser.username}
            </NavLink>
          </>
        ) : (
          <NavLink className="navbar-item" to="/signuplogin">
            <strong>Sign Up / Login</strong>
          </NavLink>
        )}
      </div>
    </div>
</nav>

  );
}
