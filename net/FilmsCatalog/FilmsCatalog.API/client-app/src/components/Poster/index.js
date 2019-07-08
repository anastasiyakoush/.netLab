import React from 'react'
import { noPosterImage } from "../../consts";
import { withStyles } from '@material-ui/styles';
import styles from "./styles"

const Poster = ({ src, classes }) => {
    return (
        <div className={classes.container}>
            {
                src
                    ? <img className={classes.img} src={src} alt="Poster" />
                    : <img className={classes.img} src={noPosterImage} alt="No Poster" />
            }
        </div>

    );
}
export default withStyles(styles)(Poster);