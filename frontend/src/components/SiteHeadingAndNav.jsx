import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <a id='logo' href="/" >Solace
    <img id ='logo-img' src="./logo-no-background.png" alt="" />
    </a>
    <nav>
      <ul>
        <li className="nav-toggle"><NavLink to='/'>Home</NavLink></li>
        <li className="nav-toggle"><NavLink to='/users' end={true}>Users</NavLink></li>
        {
          currentUser
            ? <li className="nav-toggle"><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li className="nav-toggle"><NavLink to='/login'>Login</NavLink></li>
              <li className="nav-toggle"><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
