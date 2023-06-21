import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

return (
  <header id = "header" className = "fixed-top">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 classNmae="logo">
        <a href="index.html">Money Mingle</a>
      </h1>
<nav id="navbar" className="navbar">
    <li><NavLink to='/'>Home</NavLink></li> 
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/susu'>Susu</NavLink></li>
    <li><NavLink to='/users'>Users</NavLink></li>
    <li><NavLink to='/createSusu'>Susu Pages</NavLink></li>
    <li><NavLink to='/sign-up'>Join/Sign Up</NavLink></li>

    {/* /* <li className= "dropdown">
      <a href="#">
        <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
      </a>
    </li>
    <a href="#">Drop Down 1</a>
    <li className="dropdown">
      <a href="#">
        <span>Deep Drop Down</span>{''}
        <i className="bi bi-chevron-down"></i>
      </a>
      <ul>
        <li>
          <a href="#">Deep Drop Down 1</a>
        </li>
        <li>
          <a href="#">Deep Drop Down 2</a>
        </li>
        <li>
          <a href="#">Deep Drop Down 3</a>
        </li>
        <li>
          <a href="#">Deep Drop Down 4</a>
        </li>
        <li>
          <a href="#">Deep Drop Down 5</a>
        </li>
      </ul>
    </li>  */}
</nav>
    </div>
  </header>
)}