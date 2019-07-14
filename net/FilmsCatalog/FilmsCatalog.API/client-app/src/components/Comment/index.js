import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Card, Typography } from "@material-ui/core";

const Comment = props => {
    const { Time, UserName, Content } = props.info;
    const { classes } = props;

    return (
        <Card className={classes.container}>
            {UserName && Time && (
                <div className={classes.header}>
                    <Typography variant="h6" className={classes.userName}>{UserName}</Typography>
                    <Typography variant="subtitle1" className={classes.time}>{Time}</Typography>
                </div>
            )}
            <Typography variant="body2" className={classes.content}>{Content}</Typography>
        </Card>
    );
};
export default withStyles(styles)(Comment);