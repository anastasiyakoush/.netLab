import React from 'react'
import { connect } from 'react-redux'
import { posterHelper } from '../../helpers/posterHelper';
import { withStyles } from '@material-ui/styles';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.css';

const ImageContainer = ({ images }) => {
    const gallery = images.filter(x => !posterHelper.isPoster(x))
                          .map((x, i) => <div key={i}><img src={x} alt="Oops" /></div>);

    return (<Carousel >{gallery}</Carousel>)
}

const mapStateToProps = state => {
    return {
        images: state.filmReducer.images,
    };
};
export default connect(mapStateToProps)(withStyles(styles)(ImageContainer));