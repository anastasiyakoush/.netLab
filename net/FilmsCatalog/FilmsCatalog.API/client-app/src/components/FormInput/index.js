import React from "react"
import { withStyles } from "@material-ui/styles"
import styles from "./styles"

const FormInput = ({ input, label, type, classes, meta: { touched, error } }) => {
    return (
        <div className={classes.container}>
            <label className={classes.label}>{label}</label>
            <input className={classes.input} {...input} type={type} />
            {touched && (error && <p className={classes.invalid}>{error}</p>)}
        </div>
    )
}

export default withStyles(styles)(FormInput);