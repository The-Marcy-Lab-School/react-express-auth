import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

return (
  <header id = "header" className = "fixed-top">
      <h1 className="logo">
        <a href="index.html">Money Mingle</a>
      </h1>
      <nav id="navbar" className="navbar">
        <p><NavLink to='/'>Home</NavLink></p> 
        <p><NavLink to='/about'>About</NavLink></p>
        <p><NavLink to='/susu'>Susu</NavLink></p>
        {/* <p><NavLink to='/users'>Users</NavLink></p> */}
        <p><NavLink to='/createSusu'>Susu Pages</NavLink></p>
        <p><NavLink to='/sign-up'>Join/Sign Up</NavLink></p>

      </nav>  
  </header>
  
)}
