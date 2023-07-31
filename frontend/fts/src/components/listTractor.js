import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import OffcanvasNavbar from "./OffcanvasNavbar";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

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

function ListTractor() {
  const navigate = useNavigate();
  const [tractorDetails, setTractorDetails] = useState({
    tractorModel: "",
    tractorImage: "",
    tractorDescription: "",
    availableFrom: "",
    availableUntil: "",
    deliveryOption: "",
    pricePerDay: "",
    address: "",
    postcode: "",
    suburb: "",
    state: "",
  });
  const changeTractorDetail = (event) => {
    const { name, value } = event.target;
    setTractorDetails((prevState) => ({ ...prevState, [name]: value }));
    console.log(event);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTractorDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log("Data being sent to API:", tractorDetails);
    axios
      .post("http://localhost:8080/api/tractors/listatractor/", tractorDetails)
      .then((response) => {
        console.log(response);
        alert("Tractor Details Submitted");
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry an error occured");
      });
    navigate("/listingmesssage");
  };
  return (
    <div>
      <OffcanvasNavbar />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <Form onSubmit={handleSubmit}>
          <div className="mask gradient-custom-3"></div>
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Enter Tractor Details
              </h2>

              <MDBInput
                wrapperClass="mb-4"
                // label="Tractor Name"
                placeholder="Enter Tractor Name and Model"
                size="md"
                id="form2"
                onChange={changeTractorDetail}
                type="text"
                name="tractorModel"
              />
              <MDBInput
                wrapperClass="mb-4"
                // label="Tractor Name"
                placeholder="Enter Tractor Image Url"
                size="md"
                id="form3"
                type="text"
                onChange={changeTractorDetail}
                name="tractorImage"
              />
              <div className="form-floating mb-4">
                <textarea
                  class="form-control"
                  placeholder="tractor description"
                  id="floatingTextarea"
                  name="tractorDescription"
                  onChange={changeTractorDetail}
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
                    name="address"
                    onChange={changeTractorDetail}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <Form.Select
                    aria-label="Default select example"
                    size="md"
                    name="state"
                    onChange={changeTractorDetail}
                  >
                    <option>State</option>
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="WA">WA</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="ACT">ACT</option>
                    <option value="QLD">QLD</option>
                  </Form.Select>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Suburb"
                    size="md"
                    id="form1"
                    type="text"
                    name="suburb"
                    onChange={changeTractorDetail}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Postcode"
                    size="md"
                    id="form2"
                    type="number"
                    name="postcode"
                    onChange={changeTractorDetail}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <label for="availablefrom">Available From:</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Available from"
                    name="availableFrom"
                    size="md"
                    id="form1"
                    type="date"
                    onChange={changeTractorDetail}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <label for="availableuntil">Available Until:</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Available Until"
                    size="md"
                    id="form2"
                    type="date"
                    name="availableUntil"
                    onChange={changeTractorDetail}
                  />
                </MDBCol>
              </MDBRow>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">
                  Delivery Options
                </label>
                <select
                  class="form-select"
                  id="inputGroupSelect01"
                  name="deliveryOption"
                  onChange={changeTractorDetail}
                >
                  <option selected>Choose...</option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                  <option value="Can be arranged">Can be arranged</option>
                </select>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                placeholder="Enter Price in AU$"
                name="pricePerDay"
                size="md"
                id="form1"
                type="number"
                onChange={changeTractorDetail}
              />

              {/* <div className="input-group mb-4">
              <MDBInput
                type="number"
    
                class="form-control"
                aria-label="Enter a number"
                placeholder="Enter Price per day"
                name="pricePerDay"
              />
              <span class="input-group-text">AU$</span>
              <span class="input-group-text">0.00</span>
            </div> */}
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
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </Form>
      </MDBContainer>
    </div>
  );
}

export default ListTractor;
