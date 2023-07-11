import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

export default function OffcanvasNavbar() {
  return (
    <>
    {['xxl'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-success mb-3">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#">Farmer Tractor Share</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Farmer Tractor Share
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">
              <Nav.Link><Link to="/" className="me-4">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about" className="me-4">About</Link></Nav.Link>
              <Nav.Link> <Link to="/safety" className="me-4">Safety</Link></Nav.Link>
              </Nav>
              <Button className="me-2 bg-white text-primary " variant="outline-success">Sign In</Button>
              <Button className="me-2 bg-white text-primary"variant="outline-success">Create Account</Button>
              
               
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  );
}
