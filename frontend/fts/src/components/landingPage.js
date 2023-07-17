import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import OffcanvasNavbar from "./OffcanvasNavbar";

function LandingPage() {
  return (
    <div>
      <OffcanvasNavbar />
      <div className="d-flex justify-content-center align-items-center">
        <h1>Welcome User</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Row className="mb=4">
          <Col>
            <button className="mb-4 w-100 gradient-custom-4" size="lg">
              Check out More Tractor
            </button>
          </Col>
          <Col>
            <button className="mb-4 w-100 gradient-custom-4" size="lg">
              List a Tractor
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
