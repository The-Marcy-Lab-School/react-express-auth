import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

return (
  <Navbar id="full-nav">
      <Navbar.Brand>
              <NavLink to="/">
                <img
                  src="https://ucarecdn.com/72db384e-5d6a-46b9-b1df-33566b78c60c/"
                  width="300"
                  height="100"
                  className="logo-img"
                  alt="logo"
                />
              </NavLink>
            </Navbar.Brand>
      <Navbar.Collapse id="nav-links">
            <NavLink className="links" to="/">Home</NavLink>
            <NavLink className="links"to="/about">About</NavLink>
            {
              currentUser?
              <>
                <NavLink className="links" to='/susu'>Susu</NavLink>
                
                <NavDropdown className="links" title={currentUser.username} id="basic-nav-dropdown">
                  <NavDropdown.Item className="links" href='/CreateSusu'>Create/Join Susu</NavDropdown.Item>
                  <NavDropdown.Item className="links" href={`/users/${currentUser.id}`}>{currentUser.username}</NavDropdown.Item>
                </NavDropdown>
                </>

                :
                <>
                <NavDropdown className="links" title="Join">
                  <NavDropdown.Item className="links" href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item className="links" href="/sign-up">Sign Up</NavDropdown.Item>
                </NavDropdown>
                </>
            }
      </Navbar.Collapse>
  </Navbar>
)}

