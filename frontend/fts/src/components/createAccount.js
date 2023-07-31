import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import OffcanvasNavbar from "./OffcanvasNavbar";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";

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

export default function CreateAccount() {
  // Transfer navigation function to handle submit after finalising the validation for create Account.
  const navigate = useNavigate();
  //  const natigateToLandingPage = () =>{
  //    navigate("/landingpage")
  //  }

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    emailId: "",
    password: "",
    confrimPassword: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationResults = Validation(values);
    setErrors(validationResults);

    if (
      validationResults.email === "" &&
      validationResults.password === "" &&
      validationResults.firstName === "" &&
      validationResults.lastName === ""
    ) {
      // If no error in login page navigate to Landing page #FETCH DATA HERE later#
      axios
        .post("http://localhost:8080/api/farmers/register/", values)
        .then((response) => {
          console.log(response);
          alert("Registration Succesful");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          alert("An error occured");
        });
    }
  };

  return (
    <>
      <OffcanvasNavbar />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <div className="mask gradient-custom-3"></div>
        <form action="" onSubmit={handleSubmit}>
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <MDBRow>
                <MDBCol md="6">
                  <div className="mb-4">
                    <MDBInput
                      //wrapperClass="mb-4"
                      // label="First Name"
                      placeholder="First Name"
                      size="lg"
                      id="form1"
                      type="text"
                      name="firstName"
                      onChange={handleInput}
                    />
                    {errors.firstName && (
                      <span className="text-danger">{errors.firstName} </span>
                    )}
                  </div>
                </MDBCol>

                <MDBCol md="6">
                  <div className="mb-4">
                    <MDBInput
                      // wrapperClass="mb-4"
                      // label="Last Name"
                      placeholder="Last Name"
                      size="lg"
                      id="form2"
                      type="text"
                      name="lastName"
                      onChange={handleInput}
                    />
                    {errors.lastName && (
                      <span className="text-danger">{errors.lastName} </span>
                    )}
                  </div>
                </MDBCol>
              </MDBRow>
              <div className="mb-4">
                <MDBInput
                  //wrapperClass="mb-4"
                  // label="Your Email"
                  placeholder="Enter Your Email"
                  size="lg"
                  id="form2"
                  type="email"
                  name="email"
                  onChange={handleInput}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email} </span>
                )}
              </div>
              {/* <div className="mb-4">
            <MDBInput
              //wrapperClass="mb-4"
              // label="Your Address"
              placeholder="Enter Your Address"
              size="lg"
              id="form2"
              type="text"
              name ="address"
              onChange={handleInput}
            />
            {errors.address && <span className="text-danger">{errors.address} </span>}
           </div> */}
              {/* <MDBRow>
              <MDBCol md="6">
              <div className="mb-4">
                <MDBInput
                  //wrapperClass="mb-4"
                  // label="Suburb"
                  placeholder="Suburb"
                  size="lg"
                  id="form4"
                  type="text"
                  name ="suburb"
                  onChange={handleInput}
                />
                {errors.suburb && <span className="text-danger">{errors.suburb} </span>}
                </div>
              </MDBCol>

              <MDBCol md="6">
                <Form.Select aria-label="Default select example" size="lg" name ="state"
                  onChange={handleInput}>
                  <option>State</option>
                  <option value="1">NSW</option>
                  <option value="2">VIC</option>
                  <option value="3">WA</option>
                  <option value="4">SA</option>
                  <option value="5">TAS</option>
                  <option value="6">ACT</option>
                  <option value="7">QLD</option>
                </Form.Select>
                {errors.state && <span className="text-danger">{errors.state} </span>}
              </MDBCol>
            </MDBRow> */}
              {/* <MDBRow>
              <MDBCol md="6">
              <div className="mb-4">
                <MDBInput
                  //wrapperClass="mb-4"
                  // label="Postcode"
                  placeholder="Postcode"
                  size="lg"
                  id="form1"
                  type="text"
                  name ="postcode"
                  onChange={handleInput}
                />
                {errors.postcode && <span className="text-danger">{errors.postcode} </span>}
                </div>
              </MDBCol>

              <MDBCol md="6">
              <div className="mb-4">
                <MDBInput
                  //wrapperClass="mb-4"
                  // label="Country"
                  placeholder="Country"
                  size="lg"
                  id="form2"
                  type="text"
                  name ="country"
                  onChange={handleInput}
                />
                {errors.country && <span className="text-danger">{errors.country} </span>}
                </div>
              </MDBCol>
            </MDBRow> */}
              <div className="mb-4">
                <MDBInput
                  //wrapperClass="mb-4"
                  // label="Password"
                  placeholder="Enter Your Password"
                  size="lg"
                  id="form3"
                  type="password"
                  name="password"
                  onChange={handleInput}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password} </span>
                )}
              </div>
              <div className="mb-4">
                <MDBInput
                  //wrapperClass="mb-4"
                  // label="Repeat your password"
                  placeholder="Confirm Your Password"
                  size="lg"
                  id="form4"
                  type="password"
                  name="confirmPassword"
                  onChange={handleInput}
                />
                {errors.confrimPassword && (
                  <span className="text-danger">{errors.confrimPassword} </span>
                )}
              </div>
              <div className="d-flex flex-row justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="I agree all statements in Terms of service"
                />
              </div>
              <Button
                className="mb-4 w-100 gradient-custom-4"
                size="lg"
                onClick={handleSubmit}
              >
                Register
              </Button>
              <div className="d-flex flex-row justify-content-center mb-4">
                <p>
                  Have Account Already? <Link to="/login">Login Here</Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </form>
      </MDBContainer>
    </>
  );
}
