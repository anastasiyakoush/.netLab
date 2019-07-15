import React from 'react'
import Poster from "../Poster"
import Details from "../Details"
import { withStyles } from '@material-ui/styles';
import styles from "./styles"

const FilmInfo = props => {
    const film = { ...props.info };
    const classes = props.classes;

    return (
        <div className={classes.container}>
            <Poster src={film.poster} />
            <Details info={film} />
        </div >
    )
}
export default withStyles(styles)(FilmInfo);