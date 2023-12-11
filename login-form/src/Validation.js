const Validation = (values) => {
    let errors = {}
    //validation for name
    if(!values.name) {
        errors.name = "Name is required"        
    }
    else if(values.name.length < 5) {
        errors.name = "Name must be at least 5 characters";
    }
    //validation for password 
    if(!values.password) {
        errors.password = "password is required"
    }
    else if(values.password.length < 9) {
        errors.password = "password must be at least 8 characters";
    }
    return errors;   
}
export default Validation;