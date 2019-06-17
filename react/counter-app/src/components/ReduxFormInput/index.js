import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles'

const ReduxFormInput = ({ input, label, type, classes, onInputHandler, meta: { touched, error } }) => {
    return (
        <div className={classes.container}>
            <label>{label}</label>
            <input className={classes.input} {...input} type={type} onInput={(event) => onInputHandler(event)} onInvalid={event => console.log(event.target)} />
            {touched && (error && <p className={classes.invalid}>{error}</p>)}
        </div>)
}

export default withStyles(styles)(ReduxFormInput);