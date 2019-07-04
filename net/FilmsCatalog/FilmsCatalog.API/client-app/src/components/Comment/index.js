import React from 'react'

const Comment = props => {
    const { time, userName, content } = props.info;
    return (
        <div>
            <p>{time}</p>
            <p>{userName}</p>
            <p>{content}</p>
        </div>
    )
}
export default Comment