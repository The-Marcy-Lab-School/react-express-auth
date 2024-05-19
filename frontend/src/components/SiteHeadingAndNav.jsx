import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import '../styles/headingAndNav.css'

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [showNavLinks, setShowNavLinks] = useState(false)

  const toggleShowNavLinks = () => setShowNavLinks((showNavLinks) => !showNavLinks);

  return <header>
    <a id='logo' href='/'>Benstagram</a>
    <a href="#" className={`toggle-button ${showNavLinks ? "active" : ''}`} onClick={toggleShowNavLinks}>
      <span className="bar" id='bar-1'></span>
      <span className="bar" id='bar-2'></span>
      <span className="bar" id='bar-3'></span>
    </a>
    <nav className={`navbar-links ${showNavLinks ? "active" : ''}`}>
      <ul>
        {
          currentUser
            ? <>
              <li><NavLink to='/'>Feed</NavLink></li>
              <li><NavLink to='/new-post'>Create</NavLink></li>
              <li><NavLink to='/discover' end={true}>Discover</NavLink></li>
              <li><NavLink to={`/users/${currentUser.id}`}>Profile</NavLink></li>
            </>
            : <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
