import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
  MDBSelect,
} from "mdb-react-ui-kit";
import OffcanvasNavbar from "./OffcanvasNavbar";

export default function LogIntoAccount() {
  return (
    <>
      <OffcanvasNavbar />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Log In</h2>
            <MDBInput
              wrapperClass="mb-4"
              // label="Your Email"
              placeholder="Enter Your Email"
              size="lg"
              id="form2"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              // label="Your Password"
              placeholder="Your Password"
              size="lg"
              id="form2"
              type="email"
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <p>Forgot Password?</p>
            </div>
            <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
              Sign In
            </MDBBtn>
            <div className="d-flex flex-row justify-content-center mb-4">
              <p>
                Not a member? <Link to="/createaccount">Register</Link>
              </p>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}
