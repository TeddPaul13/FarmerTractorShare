import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
import { useNavigate } from 'react-router-dom';

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
import { useState } from "react";

export default function LogIntoAccount() {
  const navigate = useNavigate();
 
    
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name ==="" && errors.email ===""){
      // If no error in login page navigate to Landing page #FETCH DATA HERE later#
      navigate("/landingpage")
    }
  };

  return (
    <>
      <OffcanvasNavbar />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <form action="" onSubmit={handleSubmit}>
          <div className="mask gradient-custom-3"></div>
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">Log In</h2>
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
              <div className="mb-4">
                <MDBInput
                  //wrapperClass="mb-4"
                  // label="Your Password"
                  placeholder="Your Password"
                  size="lg"
                  id="form2"
                  type="text"
                  name="password"
                  onChange={handleInput}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password} </span>
                )}
              </div>
              <div className="d-flex flex-row justify-content-center mb-4">
                <p>Forgot Password?</p>
              </div>
              <MDBBtn
                className="mb-4 w-100 gradient-custom-4"
                type="submit"
                size="lg"
              >
                Sign In
              </MDBBtn>

              <div className="d-flex flex-row justify-content-center mb-4">
                <p>
                  Not a member? <Link to="/createaccount">Register</Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </form>
      </MDBContainer>
    </>
  );
}
