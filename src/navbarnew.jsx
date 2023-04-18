import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function Repeat() {
  return (
    <Navbar bg  = "info" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Repeat Session</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Day1 </Nav.Link>
            <Nav.Link href="#action2">Day2 </Nav.Link>
            <Nav.Link href="#action3">Day3 </Nav.Link>
            <Nav.Link href="#action4">Day4 </Nav.Link>
            <Nav.Link href="#action5">Day5 </Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Repeat;