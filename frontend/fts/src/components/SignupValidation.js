function Validation(values) {
  let error = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;

  if (values.firstName === "") {
    error.firstName = "First Name should not be empty";
  } else {
    error.firstName = "";
  }
  if (values.lastName === "") {
    error.lastName = " Last Name should not be empty";
  } else {
    error.lastName = "";
  }
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!emailRegex.test(values.email)) {
    error.email = "Enter correct email";
  } else {
    error.email = "";
  }
  if (values.address === "") {
    error.address = "Address should not be empty";
  } else {
    error.address = "";
  }
  if (values.suburb === "") {
    error.suburb = "Suburb should not be empty";
  } else {
    error.surburb = "";
  }
  if (values.postcode === "") {
    error.postcode = "Postcode should not be empty";
  } else {
    error.postcode = "";
  }
  if (values.country === "") {
    error.country = "Enter country";
  } else {
    error.country = "";
  }
  if (values.state === "") {
    error.state = "Select state";
  } else {
    error.state = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
    // } else if (!passwordRegex.test(values.password)) {
    //   error.password = "Enter stronger password"; // Change this error message to indicate recommended format (Atlest 1 digit, 1 small char, 1 large char, minimum 8)
  } else {
    error.password = "";
  }
  // Error message not showing for confirm password
  if (values.confirmPassword === "") {
    error.confirmPassword = "Password should not be empty";
  } else if (values.password !== values.confirmPassword) {
    error.confirmPassword = "Password does not match";
  } else {
    error.confirmPassword = "";
  }
  return error;
}
export default Validation;
