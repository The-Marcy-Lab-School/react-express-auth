import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <a id='logo' href='/'>Home</a>
    <nav>
      <ul>
        {
          currentUser
            ? <>
              <li><NavLink to='/'>Feed</NavLink></li>
              <li><NavLink to='/new-post'>Create</NavLink></li>
              <li><NavLink to='/users' end={true}>Discover</NavLink></li>
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
