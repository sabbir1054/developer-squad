import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div id="header">
      <div className="navigationBar">
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <h4 className="text-white">
                <span className="logo-color">Developer</span>Squad
              </h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home" className="text-white py-2 px-4 menu">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="text-white py-2 px-4 menu">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#link" className="text-white py-2 px-4 menu">
                  Contact us
                </Nav.Link>
                <Nav.Link href="#link" className="text-white py-2 px-4 menu">
                  About us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>{/* Hero content part */}
        <div className="hero-content py-5">
          <h1 className="display-1 fw-bold d-flex justify-content-center py-5 text-white">
            <span className="logo-color">Developer </span>Squad
          </h1>
          <div className="d-flex justify-content-center">
            <p className="fs-3 fw-normal text-light mx-auto">
              Make Your Dream Developer Team
            </p>
          </div>
          <h1 className="display-4 fw-normal text-light d-flex justify-content-center">
            Maximum Developer cost 50M
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
