import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <p className="Title">LUNA </p>
          <div className="Subtitle">Carpinteria Artesanal</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">INICIO</Nav.Link>

            <NavDropdown title="FABRICACION" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">TODOS</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/fibrofacil">
                FIBROFACIL
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/pino">PINO</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default BasicExample;
