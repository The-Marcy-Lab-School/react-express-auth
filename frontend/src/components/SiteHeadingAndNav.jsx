import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

return (
  <header id = "header" className = "fixed-top">
      <h1 className="logo">
      <li><NavLink to='/'>Money Mingle</NavLink></li> 
    

      </h1>
      <nav id="navbar" className="navbar">
      <ul> 
        <li><NavLink to='/'>Home</NavLink></li> 
      <li><NavLink to='/about'>About</NavLink></li>
      {
      currentUser ? 
        <>
        <li><NavLink to='/createSusu' end={true}>Create/join Susu</NavLink></li>
        <li><NavLink to='/susu'>Susu Pages</NavLink></li>
        <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
        </>
        : 
        <li><NavLink to='/sign-up'>Join/Sign Up</NavLink></li>
        
      }
     
        
</ul>
       
      </nav>  
  </header>
  
)}
