import { emailRegEx, usernameRegEx, passwordRegEx } from "./consts"

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = "This field is required."
    } else if (!emailRegEx.test(values.email.toLowerCase())) {
        errors.email = "Email has wrong format. "
    }

    if (!values.userName) {
        errors.userName = "This field is required."
    } else if (!usernameRegEx.test(values.userName)) {
        errors.userName = "Username can contains only letters and should't start with space or dot."
    }

    if (!values.password) {
        errors.password = "This field is required."
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters and have at least one digit.";
    } else if (!passwordRegEx.test(values.password)) {
        errors.password = "Password should have at least one digit.";
    }

    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords don't match."
    }

    return errors;
}
export default validate;