import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button, InputBase } from '@material-ui/core';
import { postComment } from '../../actions/thunks';
import { authHelper } from "../../helpers/authHepler"
import { withStyles } from '@material-ui/styles';
import styles from "./styles"

const CommentForm = ({ addComment, classes, filmId }) => {
    const [comment, setComment] = useState("");

    const onClickHandler = () => {
        const userName = authHelper.getUserName();
        const body = { userName, filmId, content: comment };

        userName && filmId && comment && addComment(body);
        setComment("");
    }

    return (
        <div className={classes.container}>
            <InputBase className={classes.input}
                multiline={true}
                placeholder="Leave your opinion..."
                rows={2} name="comment"
                value={comment}
                onInput={e => setComment(e.target.value)} />
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