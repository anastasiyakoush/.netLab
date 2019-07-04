import React from 'react'
import styles from "./styles"
import { withStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const Comment = props => {
    const { time, userName, content } = props.info;
    const { classes } = props;
    return (
        <Card className={classes.container}>
            {
                userName && time &&
                < div className={classes.header}>
                    <Typography variant="h6" className={classes.userName}>{userName}</Typography>
                    <Typography variant="subtitle1" className={classes.time}>{time}</Typography>
                </div>
            }
            <Typography variant="body2" className={classes.content}>{content}</Typography>
        </Card >
    )
}
export default withStyles(styles)(Comment)