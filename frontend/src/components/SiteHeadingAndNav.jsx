import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";


export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);



  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src="./frontpic/logo-transparent-png.png" alt="Care Companion Logo" style={{ width: "125px", height: "9vh" }} />
      </div>

      <div className="navbar-end">
        <div className="navbar-item">

          {currentUser ? (
            <>
              <NavLink exact='true' className="navbar-item transparent-link" to="/home" style={{ color: "#FFE8DA", backgroundColor: "transparent" }}>
                <strong style={{ color: "white" }}>Home</strong>
              </NavLink>
              <NavLink exact='true' className="navbar-item" to="/" style={{ color: "#FFE8DA", backgroundColor: "transparent" }}>
                Mission
              </NavLink>
              <NavLink exact='true' className="navbar-item" to={`/users/${currentUser.id}`} style={{ color: "#FFE8DA", backgroundColor: "transparent" }}>
                {currentUser.username}
              </NavLink>
            </>
          ) : (
            <NavLink exact='true' className="navbar-item transparent-link" to="/signuplogin" style={{ color: "#FFE8DA", backgroundColor: "transparent" }}>
              <strong style={{ color: "#FFE8DA" }}>Sign Up / Login</strong>
            </NavLink>
          )}
        </div>
      </div>
    </nav>

  );
}

