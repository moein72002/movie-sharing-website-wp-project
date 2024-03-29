import React, {useEffect, useState} from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';
import "./comments.scss"
// import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
// import ReplyComment from './ReplyComment';
const { TextArea } = Input;

function Comments(props) {
    // const user = useSelector(state => state.user)
    const [Comment, setComment] = useState("");

    // useEffect(() => {
    //     console.log(props.commentLists);
    // }, [props.commentLists]);

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(Comment);

        if (Comment !== "") {
            const variables = {
                content: Comment,
                writer: JSON.parse(localStorage.getItem("user"))._id,
                postId: props.postId,
                responseTo: null
            }

            axios.post('comment/saveComment', variables)
                .then(response => {
                    if (response.data.success) {
                        props.refreshFunction(response.data.comment);
                        setComment("");
                    } else {
                        alert('Failed to save Comment')
                    }
                })
        }

    }

    return (
        <div className="comments">
            <br />
            <p>{props.movie.title} Comments</p>
            <hr />

            {props.commentLists &&
                props.commentLists.map((comment) => (
                (comment && !comment.responseTo &&
                    <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                    // <React.Fragment>
                    //     <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                    //     <ReplyComment commentLists={props.commentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} />
                    // </React.Fragment>
                )
            ))}



            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default Comments
