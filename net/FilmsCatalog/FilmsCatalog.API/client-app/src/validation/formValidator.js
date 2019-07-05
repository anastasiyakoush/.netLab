import { emailRegEx, usernameRegEx, passwordRegEx } from "../consts"

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = "Required"
    } else if (!emailRegEx.test(values.email)) {
        errors.email = "Incorrect format of email"
    }
    if (!values.userName) {
        errors.userName = "Required"
    } else if (!usernameRegEx.test(values.userName)) {
        errors.userName = "Username can contains only letters and should't start with space or dot"
    }
    if (!values.password) {
        errors.password = "Required"
    } else if (!passwordRegEx.test(values.password)) {
        errors.password = " Should have at least one lower case, at least one upper case,  at least one number,  at least one special character \n Minimum 8 characters";
    }
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords didn't match"
    }
    return errors;
}

export default validate;