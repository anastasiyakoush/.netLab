import React from 'react'
import Image from "../Image/"
import { isPoster } from '../../helpers';

const ImageContainer = ({ images }) => {
    return (
        <div>
            {
                images.map(x =>
                    !isPoster(x) && <Image src={x} />
                )
            }
        </div>
    )
}
export default ImageContainer