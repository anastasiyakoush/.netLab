import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


const validate = values => {
    const errors = {}
/* const isEmailValid=()
if(!values.email ||)
} */}

class LoginReduxForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>Email</label>
                <Field
                    component='input'
                    type="email"
                    name="email"
                    autoComplete="false"
                    /*  onInput={props.handleEmailChange}
                     onKeyDown={props.onKeyDownSubmitHandler}   */
                    required
                />
                <label>Password</label>
                <Field
                    component='input'
                    type="password"
                    name="password"
                    /*  onChange={props.handlePasswordChange}
                     onKeyDown={props.onKeyDownSubmitHandler}
                     className={classes.input} */
                    required
                />
                <button type="submit" disabled={this.props.submitting}>Log in</button>
            </form>
        )
    }
}

export default reduxForm({ form: 'LoginReduxForm' })(LoginReduxForm);;
