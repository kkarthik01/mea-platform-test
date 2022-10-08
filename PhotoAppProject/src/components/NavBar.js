import { Navbar, Nav, Container } from "react-bootstrap";
import photoLogo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'

function NavBarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
              <Navbar.Brand href="#home">
              <img
              src={photoLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Photos logo"
                  />{" "}
                  Photo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to = '/'>Photos</Nav.Link>
            <Nav.Link as={NavLink} to='/AboutUs'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to='/ContactUs'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
