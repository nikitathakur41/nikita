import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg' ;
//import Button from 'react-bootstrap';
//import "./nav.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  NavLink,
} from "react-router-dom";


function Navbarnav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="./Homes">
        <img  
        src={logo}  
        width="70"  
        height="70"  
        className="d-inline-block align-top"  
        alt="Brand logo"  
      />  
         <h1> MY WEBSITE</h1>
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="nav-link">
            
            <NavLink to="/Home">Home</NavLink>  &nbsp;
           
            <NavLink to="/postform">User</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbarnav;

