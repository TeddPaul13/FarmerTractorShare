import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import OffcanvasNavbar from "./OffcanvasNavbar";
import { Link } from "react-router-dom";
import '../App.css';

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

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CreateAccount() {
  return (
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Enter Tractor Details
            </h2>
            
            <MDBInput
              wrapperClass="mb-4"
              // label="Tractor Name"
              placeholder="Enter Tractor Name"
              size="lg"
              id="form2"
              type="email"
            />
            <MDBRow></MDBRow>
            <MDBInput
              wrapperClass="mb-4"
              // label="Your Address"
              placeholder="Enter Tractor Address"
              size="lg"
              id="form2"
              type="email"
            />
            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  // label="Suburb"
                  placeholder="Suburb"
                  size="lg"
                  id="form4"
                  type="text"
                />
              </MDBCol>

              <MDBCol md="6">
                <Form.Select aria-label="Default select example" size="lg">
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
                  placeholder="Postcode"
                  size="lg"
                  id="form1"
                  type="text"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  // label="Country"
                  placeholder="Country"
                  size="lg"
                  id="form2"
                  type="text"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>

              <MDBCol md="6" className="d-flex">
                <div className="">
                  <p>Is delivery provided?</p>
                </div>
              </MDBCol>
              <MDBCol md="6" className="d-flex">
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option2' label='No' inline />
              </MDBCol>
            </MDBRow>
            <MDBInput
              wrapperClass="mb-4"
              // label="Repeat your password"
              placeholder="Price Per Day"
              size="lg"
              id="form4"
              type="text"
            />
                <MDBRow>
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
            </MDBRow>
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>

            <div className=" d-flex justify-content-center">
            <MDBBtn className="mb-4 w-50  gradient-custom-4" size="lg">
              Upload
            </MDBBtn>
            </div>
            <div className="row">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
                </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}
