import React from 'react'

const Details = props => {
    const { name, year, overview, director } = props.info;
    return (
        <div>
            <p>{name}</p>
            <p>{year}</p>
            <p>{director}</p>
            <p>{overview}</p>
        </div>

    );
}
export default Details;