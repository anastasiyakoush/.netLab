import React from 'react'
import Poster from "../Poster"
import Details from "../Details"

const FilmInfo = props => {
    const film = { ...props.info }
    
    return (
        <div>
            <Poster src={film.poster} />
            <Details info={film} />
            {console.log(props)}
        </div>)
}
export default FilmInfo