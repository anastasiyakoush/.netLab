import React, { useState } from 'react'
import { Card, CardHeader, CardMedia, CardActions, CardContent, Button, Typography, withStyles } from "@material-ui/core";
import styles from './styles';

const FilmCard = ({ classes, title, src, year, onClick }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <Card className={classes.container} onClick={() => onClick()} onMouseEnter={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)}>
            <img className={classes.image} src={src} alt="Poster" />
            {showMore &&
                <div className={classes.focus}>
                    <Typography variant="h3" className={classes.header}>{title}</Typography>
                    <Typography variant="h5">{year}</Typography>
                </div>}
        </Card>
    )
}
export default withStyles(styles)(FilmCard);