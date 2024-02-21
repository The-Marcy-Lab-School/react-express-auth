import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CurrentUserContext from '../contexts/current-user-context';

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header>
      <NavLink id="logo" to="/">
        HealthSync
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/community">Community</NavLink>
          </li>

          {currentUser ? (
            <>
              <NavLink to="/workouts">Workouts</NavLink>
              <li>
                <NavLink to={`/users/${currentUser.id}`}>
                  {currentUser.username}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
