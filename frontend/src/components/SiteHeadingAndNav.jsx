import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header>
      <a id='logo' href='/'>Coming Soon...</a>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/users' end={true}>Users</NavLink></li>
          {currentUser ? (
            <>
              <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
              <li><NavLink to='/quiz-test'>Quiz Test</NavLink></li> 
              <li><NavLink to='/selected-language'>Selected Language</NavLink></li>
              <li><NavLink to='/quiz-lesson'>Quiz Lesson </NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
