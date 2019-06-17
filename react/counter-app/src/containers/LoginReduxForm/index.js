import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { root, routes } from '../../consts';
import validate from '../../validation/reduxFormValidator';
import ReduxFormInput from '../../components/ReduxFormInput';
import InputDisplay from '../../components/InputDisplay/index';
import { withStyles } from '@material-ui/styles';
import styles from './styles'


let LoginReduxForm = props => {
    const { handleSubmit, email, password, classes, submitSucceeded } = props;

    const submit = () => {
        props.history.push({
            pathname: `${root()}${routes.loginReduxFormSuccess}`,
            state: { from: { pathname: routes.loginReduxForm } }
        });
    };

    const onInputHandler = event => {
        event.keyCode === 13 && validate(event.target) && submit();
    }

    return (
        <>
            <form noValidate={true} onSubmit={handleSubmit(submit)} className={classes.container}>
                <Field
                    name="email"
                    type="email"
                    component={ReduxFormInput}
                    label='Email'
                    onInputHandler={onInputHandler}
                />
                <Field
                    type="password"
                    name="password"
                    label='Password'
                    component={ReduxFormInput}
                    onInputHandler={onInputHandler}
                />
                <div className={classes.buttons}>
                    {submitSucceeded ? <button onClick={props.reset} className={classes.button}>Log out</button>
                        : <button type='submit' className={classes.button}>Log in</button>}
                </div>
            </form>
            <InputDisplay email={email} password={password}></InputDisplay>
        </>
    )

}

LoginReduxForm = reduxForm({ form: 'loginRedux', validate, destroyOnUnmount: false })(withStyles(styles)(LoginReduxForm));

const selector = formValueSelector("loginRedux");

const mapStateToProps = (state) => {
    return {
        email: selector(state, 'email'),
        password: selector(state, 'password')
    }
}

LoginReduxForm = connect(mapStateToProps)(LoginReduxForm);

export default LoginReduxForm;