import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <a id='logo' href='/'>Money Mingle</a>
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/createSusu' end={true}>Create A Susu</NavLink></li>
        <li><NavLink to='/details' end={true}>Details</NavLink></li>
        {
          currentUser
            ? <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink to='/susu'>SuSu Pages</NavLink></li>
              <li><NavLink to='/sign-up'>Join/Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
