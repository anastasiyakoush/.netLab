import { emailRegEx, PASSWORD_MIN_LENGTH } from '../consts'

const validate = ({ email, password }) => {
    const errors = {};

    if (!emailRegEx.test(email)) {
        errors.email = `Incorrect format of email`;
    };


    if (!email) {
        errors.email = `Email field is required`;
    };

    if (!password) {
        errors.password = `Password field is required`;
    } else if (password.length < PASSWORD_MIN_LENGTH) {
        errors.password = `Password must be at least 6 signs`;
    };
    return errors;
}

export default validate;