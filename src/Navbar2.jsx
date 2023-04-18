import logo from './logo.svg' 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  NavLink
} from "react-router-dom";


function Navbars() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="./Homes">First-App
        <img  
        src={logo}  
        width="70"  
        height="70"  
        className="d-inline-block align-top"  
        alt="Brand logo"  
      />  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./Home">Welcomes</Nav.Link>
            <Nav.Link href="./postform">Getuser</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;

