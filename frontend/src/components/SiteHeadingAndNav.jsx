import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";



export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);



  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/" style={{ color: "white" }}>
          Care Companion
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <NavLink exact='true' className="navbar-item" to="/" style={{ color: "#FFC100", backgroundColor: "transparent" }}>
        Mission
      </NavLink>

      <div className="navbar-end">
        <div className="navbar-item">

          {currentUser ? (
            <>
              <NavLink exact='true' className="navbar-item transparent-link" to="/home" style={{ color: "#FFC100", backgroundColor: "transparent" }}>
                <strong style={{ color: "white"}}>Home</strong>
              </NavLink>
              <NavLink exact='true' className="navbar-item" to={`/users/${currentUser.id}`} style={{ color: "#FFC100", backgroundColor: "transparent" }}>
                {currentUser.username}
              </NavLink>
            </>
          ) : (
            <NavLink exact='true' className="navbar-item transparent-link" to="/signuplogin" style={{ color: "#FFC100", backgroundColor: "transparent" }}>
              <strong style={{ color: "#FFC100" }}>Sign Up / Login</strong>
            </NavLink>
          )}
        </div>
      </div>
    </nav>

  );
}

