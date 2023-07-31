import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import OffcanvasNavbar from "./OffcanvasNavbar";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRadio,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
  MDBSelect,
} from "mdb-react-ui-kit";

function ConfirmBookingDetails() {
  const navigate = useNavigate();

  const navigateToBookingMessage = () => {
    navigate("/bookingmesssage");
  };
  return (
    <div>
      <OffcanvasNavbar />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <form>
          <div className="mask gradient-custom-3"></div>
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-capitalize text-center mb-5">
                Confirm Your Booking Details
              </h2>

              <MDBInput
                wrapperClass="mb-4"
                // label="Tractor Name"
                placeholder="Enter Tractor Name and Model"
                size="md"
                id="form2"
                type="email"
                name="tractorModel"
              />
              <MDBInput
                wrapperClass="mb-4"
                // label="Tractor Name"
                placeholder="Enter Tractor Image Url"
                size="md"
                id="form3"
                type="text"
                name="tractorImage"
              />
              <div className="form-floating mb-4">
                <textarea
                  class="form-control"
                  placeholder="tractor description"
                  id="floatingTextarea"
                  name="tractorDescription"
                ></textarea>
                <label for="floatingTextarea">Enter Tractor Description</label>
              </div>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    // label="Suburb"
                    placeholder="Enter Address"
                    size="md"
                    id="form4"
                    type="text"
                    name="tractorAddress"
                  />
                </MDBCol>

                <MDBCol md="6">
                  <Form.Select
                    aria-label="Default select example"
                    size="md"
                    name="tractorState"
                  >
                    <option>State</option>
                    <option value="1">NSW</option>
                    <option value="2">VIC</option>
                    <option value="3">WA</option>
                    <option value="4">SA</option>
                    <option value="5">TAS</option>
                    <option value="6">ACT</option>
                    <option value="7">QLD</option>
                  </Form.Select>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    // label="Postcode"
                    placeholder="Suburb"
                    size="md"
                    id="form1"
                    type="text"
                    name="tractorSurburb"
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    // label="Country"
                    placeholder="Postcode"
                    size="md"
                    id="form2"
                    type="text"
                    name="tractorPostcode"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <label for="availablefrom">Available From:</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    // label="Postcode"
                    placeholder="Available from"
                    name=" availableFrom"
                    size="md"
                    id="form1"
                    type="date"
                  />
                </MDBCol>

                <MDBCol md="6">
                  <label for="availableuntil">Available Until:</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    // label="Country"
                    placeholder="Available Until"
                    size="md"
                    id="form2"
                    type="date"
                    name="availableUntil"
                  />
                </MDBCol>
              </MDBRow>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">
                  Delivery Options
                </label>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">Available</option>
                  <option value="2">Not Available</option>
                  <option value="3">Can be arranged</option>
                </select>
              </div>

              <div className="input-group mb-4">
                <MDBInput
                  type="text"
                  class="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                  placeholder="Enter Price per day"
                  name="pricePerDay"
                />
                <span class="input-group-text">AU$</span>
                <span class="input-group-text">0.00</span>
              </div>
              {/* <MDBRow>
              <MDBCol md="6" className="d-flex mb-4">
                <p>Upload Tractor Image</p>
              </MDBCol>
              <MDBCol md="6" className="d-flex">
                <div className="d-flex flex-row justify-content-center mb-4">
                  <MDBInput
                    name="flexCheck"
                    id="flexCheckDefault"
                    // label="Upload Pictures"
                    type="file"
                  />
                </div>
              </MDBCol>
            </MDBRow> */}
              <div className="d-flex flex-row justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="I agree all statements in Terms of service"
                />
              </div>

              <div className=" d-flex justify-content-center">
                <Button
                  className="mb-4 w-50  gradient-custom-4"
                  size="lg"
                  onClick={navigateToBookingMessage}
                >
                  Book
                </Button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </form>
      </MDBContainer>
    </div>
  );
}

export default ConfirmBookingDetails;
