import React from 'react'
import { Card, CardHeader, CardMedia, CardActions, CardContent, Button, Typography, withStyles } from "@material-ui/core";
import styles from './styles';

const FilmCard = ({ classes, title, src, year }) => {
    return (
        <Card className={classes.container}>
            <CardHeader className={classes.header} title={title}></CardHeader>
            <CardMedia className={classes.image} component="img" src="https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/lcCNS7vyofFpJV7fl92ipIdNmGi.jpg"></CardMedia>
            <CardContent className={classes.content}>
                <Typography>Year</Typography>
                <Typography>{year}</Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
                <Button>More</Button>
            </CardActions>
        </Card>
    )

}
export default withStyles(styles)(FilmCard);