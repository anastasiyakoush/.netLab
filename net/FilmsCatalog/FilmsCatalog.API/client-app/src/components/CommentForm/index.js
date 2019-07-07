import React, { useState } from 'react'
import styles from "./styles"
import { withStyles } from '@material-ui/styles';
import { Button, InputBase } from '@material-ui/core';
import { postComment } from '../../actions/thunks';
import { connect } from 'react-redux';
import { getUserName } from "../../helpers"

const CommentForm = ({ addComment, classes, filmId }) => {
    const [comment, setComment] = useState("");
    const onClickHandler = () => {
        const userName = getUserName();
        console.log(userName)
        const body = {
            userName, filmId, content: comment
        };
        userName && filmId && comment && addComment(body);
        setComment("");
    }

    return (
        <div className={classes.container}>
            <InputBase className={classes.input} multiline={true} placeholder="Leave your opinion..." rows={2} name="comment" value={comment} onInput={e => setComment(e.target.value)}></InputBase>
            <Button className={classes.button} onClick={() => onClickHandler()}> Add</Button >
        </div >
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addComment: text => dispatch(postComment(text))
    }
}
export default connect(null, mapDispatchToProps)(withStyles(styles)(CommentForm));