import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

return (
<Navbar expand="lg" className="header">
<Container>
  <Navbar.Brand>
    <NavLink to='/'>
      <img className="logo-img" src="https://ucarecdn.com/72db384e-5d6a-46b9-b1df-33566b78c60c/" width='300' height='100'/>
      </NavLink>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <NavLink to= '/'>Home </NavLink>
      <NavLink to='/about'> About</NavLink>
      
      {
        currentUser ?
        <>
         <NavLink to='/susu'>Susu</NavLink>
         
         <NavDropdown title={currentUser.username} id="basic-nav-dropdown">
         <NavLink to='/createSusu' >Create/Join Susu</NavLink>
         <NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink>
          
         </NavDropdown>
        </>
        :
        
        <> 
        <NavDropdown title="Join"id="basic-nav-dropdown">
        <NavLink to='/sign-up'>Sign Up</NavLink>
        
        <NavLink to='/login'>Login</NavLink>
        </NavDropdown>
        </>
      }

    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
)}
