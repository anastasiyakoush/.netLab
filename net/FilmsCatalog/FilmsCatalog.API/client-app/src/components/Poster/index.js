import React from 'react'
import { noPosterImage } from "../../consts"

const Poster = ({ src }) => {
    return (
        <div>
            {
                src
                    ? <img src={src} alt="Poster" />
                    : <img src={noPosterImage} alt="No Poster" />
            }
        </div>

    );
}

export default Poster;