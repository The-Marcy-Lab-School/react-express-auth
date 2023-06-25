import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

return (
<Navbar expand="lg" className="header">
<Container>
  <Navbar.Brand><NavLink to='/'>Money Mingle</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">

      <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
      <Nav.Link><NavLink to='/about'>About</NavLink></Nav.Link>
      
      {
        currentUser ?
        <>
         <Nav.Link><NavLink to='/susu'>Susu Pages</NavLink></Nav.Link>
         
         <NavDropdown title={currentUser.username} id="basic-nav-dropdown">
         <Nav.Link><NavLink to='/createSusu' end={true}>Create/join Susu</NavLink></Nav.Link>
         <Nav.Link><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></Nav.Link>
          
         </NavDropdown>
        </>
        :
        
        <> 
        <NavDropdown title="Join"id="basic-nav-dropdown">
        <NavDropdown.Item><NavLink to='/sign-up'>Sign Up</NavLink></NavDropdown.Item>
        <NavDropdown.Item>
        <NavLink to='/login'>Login</NavLink>
        </NavDropdown.Item>
        </NavDropdown>
        </>
      }

    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
)}
