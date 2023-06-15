import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";

export default function SiteHeadingAndNav() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isBurgerToggled, setIsBurgerToggled] = useState(false);
  const burgerToggle = () => {
    setIsBurgerToggled(!isBurgerToggled)
  }
  const navigate = useNavigate()
  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className='navbar-start'>
        <div className="navbar-brand">
          <Link to='/'>

            <a className="navbar-item my-4">
              <img src="./src/assets/rlogo.png" alt="Recy-clique" ></img>
            </a>

          </Link>
          <div role="button" className='navbar-burger' onClick={burgerToggle} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
      </div>
      <div className={isBurgerToggled ? 'is-active navbar-menu' : 'navbar-menu'}>
        <div className='navbar-end'>
          {!currentUser ?
            <>
              <Link to='/login' className="navbar-item">
                Log in
              </Link>
              <Link to='sign-up' className="navbar-item">
                Sign Up
              </Link>
            </> : <>
            <a className="navbar-item" onClick={handleLogout}>Log Out</a>
            <Link to='/dashboard' className="navbar-item">
              Dashboard
            </Link>
            </>}
          <Link to='/about' className="navbar-item">
            About Us
          </Link>
          <Link to='/newsFeed' className="navbar-item">
            News Feed
          </Link>
          <Link to='/events' className="navbar-item">
            Events
          </Link>
        </div>
      </div>
    </nav>
  )

  // return <header>
  //   <a id='logo' href='/'>React/Express Auth</a>
  //   <nav>
  //     <ul>
  //       <li><NavLink to='/'>Home</NavLink></li>
  //       <li><NavLink to='/users' end={true}>Users</NavLink></li>
  //       <li><NavLink to='/about'>About Us</NavLink></li>
  //       <li><NavLink to='/newsFeed'>News Feed</NavLink></li>
  //       <li><NavLink to='/events'>Events</NavLink></li>
  //       <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

  //       {
  //         currentUser
  //           ? <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
  //           : <>
  //             <li><NavLink to='/login'>Login</NavLink></li>
  //             <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
  //           </>
  //       }
  //     </ul>
  //   </nav>
  // </header>;
}
