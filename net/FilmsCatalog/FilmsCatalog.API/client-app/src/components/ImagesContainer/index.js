import React from 'react'
import { isPoster } from '../../helpers';
import { withStyles } from '@material-ui/styles';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import extraStyles from "./styles";

const ImageContainer = ({ images, classes }) => {
    const gallery = images.filter(x => !isPoster(x))
        .map(x => <div><img src={x} alt="Oops" /></div>);
    return (
        <Carousel className={classes.container} >
            {gallery}
        </Carousel>
    )
}
export default withStyles(extraStyles)(withStyles(styles)(ImageContainer));