function Validation(values){
    let error = {}
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]){8,}$/; // PASSWORD VALIDATION CAUSING TROUBLE

    if (values.email === ""){
        error.email = "Email should not be empty";
    }
    else if(!emailRegex.test(values.email)){
        error.email = "Enter correct email"
    }
    else {
        error.email =""
    };

    if (values.password === ""){
        error.password = "Password should not be empty";
    }
    // else if(!passwordRegex.test(values.password)){
    //     error.password = "Enter stronger password" // Change this error message to indicate recommended format (Atlest 1 digit, 1 small char, 1 large char, minimum 8)
    // }
    else {
        error.password =""
    }
    return error;
}
export default Validation;