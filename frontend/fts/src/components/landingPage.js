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
      <div className="d-flex justify-content-center align-items-center">
        <h1>Welcome User</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Row className="mb=4">
          <Col>
            <button className="mb-4 w-100 border-0 gradient-custom-4" size="lg">
              Check out More Tractor
            </button>
          </Col>
          <Col>
            <button className="mb-4 w-100 border-0 gradient-custom-4" size="lg" onClick={navigateToListTractor}>
              List a Tractor
            </button>
          </Col>
        </Row>
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
                  <button className="mb-4 border-0 gradient-custom-4" size="lg"> Book Tractor</button>
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
