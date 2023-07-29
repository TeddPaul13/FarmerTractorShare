import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate} from "react-router-dom";
import "../App.css"

export default function OffcanvasNavbar(props) {

  const navigate = useNavigate();
// Function to navigate to the Create Account page onclick of a button
  const natigateToCreateAccountPage = () =>{
    navigate("/createaccount")
  }
  // Function to navigate to the Login page onclick of a button
  const navigateToLoginPage = () =>{
    navigate('/login')
  }
  return (
    <>
    {['xxl'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-success mb-3">
        <Container fluid>
          <Navbar.Brand className="text-white fs-3 fw-bold"><Link to="/" className="text-decoration-none text-white">Farmer Tractor Share</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="offCanvasbg"
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="navTitle">
                Farmer Tractor Share
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">
              <Nav.Link><Link to="/" className="me-4 text-decoration-none text-white fs-5">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about" className="me-4 text-decoration-none text-white fs-5">About</Link></Nav.Link>
              <Nav.Link> <Link to="/safety" className="me-4 text-decoration-none text-white fs-5">Safety</Link></Nav.Link>
              </Nav>
              <Button className="me-2 bg-white text-primary " variant="outline-success" onClick={navigateToLoginPage}>Sign In</Button>
              <Button className="me-2 bg-white text-primary"variant="outline-success" onClick={natigateToCreateAccountPage}>Create Account</Button>
              
               
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  );
}
