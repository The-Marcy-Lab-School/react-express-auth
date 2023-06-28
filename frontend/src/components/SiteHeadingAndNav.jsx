import { NavLink } from "react-router-dom";
import { useContext, useState} from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { Button } from "reactstrap";


export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [color, changeColor] = useState('#69FFF1');

  return <header style={{fontSize:'20px'}}>
    <a id='logo' href='/'>
      <img src='../../assets/URBAN_UNBLEMISHED_LOGO.png' alt='Logo' />
    </a>
    <nav>
      <ul>
        <li><NavLink to='/events'>Events</NavLink></li>
        <li><NavLink to='/users' end={true}>Users</NavLink></li>

        {
          currentUser
            ? <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}

