import React from "react"
import { connect } from "react-redux"
import { Card, CardHeader, CardMedia, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import FilmCard from "../../components/FilmCard";

const FilmsCatalog = props => {
    return (
        <>
            <FilmCard></FilmCard>
        </>
    )

}

const mapStateToProps = state => {

}
const mapDispatcToProps = dispatch => {

}
export default connect(mapStateToProps, mapDispatcToProps)(FilmsCatalog) 