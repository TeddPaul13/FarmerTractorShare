import React from "react";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OffcanvasNavbar from "./OffcanvasNavbar";


function LandingPage() {

  const navigate = useNavigate();
  const navigateToListTractor = () =>{
    navigate("/listatractor")
  }
  const navigateToConfrimBooking= () =>{
    navigate("/confirmbooking")
  }


  const [tractorList, setTractorList] = useState([]);

  useEffect(() => {
    axios.get("https://api.squiggle.com.au/?q=teams").then((response) => {
      const allTractors = response.data.teams;
      setTractorList(allTractors);
      console.log(response);
      
    });
    // axios
    // .get("http://localhost:8080/api/tractors/")
    // .then((response) => {
    //   console.log(response);
    //   setTractorList(response)
    // });
  }, []);
  return (
    <div>
      <OffcanvasNavbar />
      <div className=" mb-4 d-flex justify-content-center align-items-center">
        <h2>Welcome to Farmer Tractor Share</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Row >
          <Col>
            <button className="mb-4 w-100 border-0 fs-4 rounded-2 bg-info text-white fw-bold" variant="outline-success" size="lg" onClick={navigateToListTractor}>
              List a Tractor
            </button>
          </Col>
        </Row>
        </div>
        <div className="mb-4 d-flex justify-content-center align-items-center">
        <Row >
          <Col>
            <h4 > Enter your postcode to Search Available Tractors near you</h4>
          </Col>
          <Col className="d-flex justify-content-left align-items-center">
          <input className="form-control bg-light w-50" type="search" placeholder="Enter postcode here" aria-label="Search" />
          </Col>
        </Row>
      </div>
      <div className="mb-4 d-flex justify-content-center align-items-center">
        <h5>Available Tractors for Hire</h5>
      </div>
      <Container> 
        <Row>
          {tractorList.map((tractor, k) => (
            <Col className="teamcols" key={k} xs={12} md={4} lg={3}>
              <Card className=" d-flex justify-content-center">
                <Card.Img
                  className="tractorImg"
                  src={"https://squiggle.com.au/" + tractor.logo}
                  alt="Tractor Image"
                />

                <Card.Body > 
                  <Card.Title>{tractor.name}</Card.Title>
                  <Card.Text>{tractor.abbrev}</Card.Text>
                  <div className="d-flex justify-content-center">
                  <button className="mb-4 border-0 gradient-custom-4" size="lg" onClick={navigateToConfrimBooking}> Book Tractor</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
