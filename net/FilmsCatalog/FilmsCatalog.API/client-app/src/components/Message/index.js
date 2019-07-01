import React from "react"
import { withStyles } from "@material-ui/styles"
import styles from "./styles"

const Message = ({ message }) => {
    return (<p>{message}</p>);
}
export default withStyles(styles)(Message);