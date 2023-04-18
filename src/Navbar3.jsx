import logo from './logo.svg' ;
import 'bootstrap/dist/css/bootstrap.min.css'; ;
//import Button from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import "./nav.css";
import 
{
  NavLink
}
 from "react-router-dom"; 



function Nab() {
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
          <Nav class="nav-link">
            
            <NavLink to="/Home">Home</NavLink>  &nbsp;
           
            <NavLink to="/postform">postform</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Nab;

