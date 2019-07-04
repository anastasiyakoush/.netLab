import React from 'react'
import Comment from "../Comment/index"

const CommentsContainer = ({ comments }) => {
    return (
        <div>
            {
                comments.map(x =>
                    <Comment info={x} />
                )
            }
        </div>
    )
}
export default CommentsContainer