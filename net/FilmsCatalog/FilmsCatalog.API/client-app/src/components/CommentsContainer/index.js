import React from 'react'
import Comment from "../Comment/index"
import CommentForm from '../CommentForm/index';

const CommentsContainer = ({ comments }) => {
    const noComment = {
        content: "Your comment can be the first",
    };

    return (
        <div>           
            {comments.length > 0 ?
                comments.map(x =>
                    <Comment info={x} />
                ) :
                <Comment info={noComment}></Comment>
            }
        </div>
    )
}
export default CommentsContainer