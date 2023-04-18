import 'bootstrap/dist/css/bootstrap.min.css';  
import {Navbar, Container} from 'react-bootstrap';  
import logo from './logo.svg'  
function Nav() {  
  return (  
    <Navbar bg="dark">  
  <Container>  
    <Navbar.Brand href="#home">  
      <img  
        src={logo}  
        width="70"  
        height="70"  
        className="d-inline-block align-top"  
        alt="Brand logo"  
      />  
    </Navbar.Brand>  
  </Container>  
  </Navbar>  
  );  
}  
export default Nav;  