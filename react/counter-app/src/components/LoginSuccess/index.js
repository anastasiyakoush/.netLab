import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const LoginSuccess = props => {
  const { classes } = props;
  
  return (
    <div className={classes.container}>
      {() => console.log(props)}
      <p>Entered data:</p>
      <p>Email</p>
      <p className={classes.text}>{props.form.email}</p>
      <p>Password</p>
      <p className={classes.text}>{props.form.password}</p>
    </div>
  );
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(withStyles(styles)(LoginSuccess));