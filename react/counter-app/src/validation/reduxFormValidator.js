import { emailRegEx, PASSWORD_MIN_LENGTH } from '../consts'

const validate = values => {
    const errors = {};

    if (!emailRegEx.test(values.email)) {
        errors.email = `Incorrect format of email`;
    };


    if (!values.email) {
        errors.email = `Email field is required`;
    };

    if (!values.password) {
        errors.password = `Password field is required`;
    } else if (values.password.length < PASSWORD_MIN_LENGTH) {
        errors.password = `Password must be at least 6 signs`;
    };
    return errors;
}

export default validate;