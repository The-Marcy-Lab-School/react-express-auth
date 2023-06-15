import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

import black from '../media/black.png'
import white from '../media/white.png'
import green from '../media/green.png'
import brown from '../media/brown.png'
import yellow from '../media/yellow.png'
import logo from '../media/logo.png'

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <brand>
      <img src={logo} id='logo' />
      <a id='title' href='/'>IQ FOOD</a>
    </brand>

    <nav>
      <ul>
        {
          currentUser
            ? <>
              <li><NavLink to='/users/search'>Home</NavLink></li>
              <li><NavLink to={`/users/${currentUser.id}`}>DashBoard</NavLink></li> 
              <li><NavLink to='/users' end={true}>Article</NavLink></li>
            </>
            : <>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
