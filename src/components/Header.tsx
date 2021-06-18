import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const navStyles = {
  background: "transparent",
  //padding: 15,
  height: '10vh',
  //paddingBottom: 20,
  //marginRight: "150px",
  justifyContent: "right"
}

export default function Header() {
  return (
    <Navbar style={navStyles} fixed="top" bg="dark" variant="light" expand="lg">
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}