import React from "react"
import { withStyles } from "@material-ui/styles"
import Message from "../Message/index"
import styles from "./styles"

const FormInput = ({ input, label, type, classes, onInputHandler, meta: { touched, error } }) => {
    return (
        <div>
            <label>{label}</label>
            <input className={classes.input} {...input} type={type}></input>
            {touched && (error && <Message message={error}></Message>)}
        </div>
    )
}

export default withStyles(styles)(FormInput);