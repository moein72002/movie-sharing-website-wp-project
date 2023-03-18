import React, {useEffect, useState} from 'react'
import {Comment, Avatar, Button, Input} from 'antd';
// import Comment from '@ant-design/icons';
import Axios from 'axios';
import "./singleComment.scss";
// import { useSelector } from 'react-redux';
const {TextArea} = Input;

function SingleComment(props) {
    // const user = useSelector(state => state.user);
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    useEffect(() => {
        console.log(props.comment);
    }, [props.comment]);

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(CommentValue);

        if (CommentValue !== "") {
            const variables = {
                writer: props.comment._id,
                postId: props.postId,
                responseTo: JSON.parse(localStorage.getItem("user"))._id,
                content: CommentValue
            }


            Axios.post('comment/saveComment', variables)
                .then(response => {
                    if (response.data.success) {
                        setCommentValue("")
                        setOpenReply(!OpenReply)
                        props.refreshFunction(response.data.result)
                    } else {
                        alert('Failed to save Comment')
                    }
                })
        }


    }

    const actions = [
        <span className="replyToComment" onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]

    return (
        <div className="singleComment">
            <Comment className="comment"
                     actions={actions}
                     author={props.comment.writer.username}
                     avatar={
                         <Avatar className="avatarImg"
                                 src="https://www.shareicon.net/download/128x128//2016/05/24/770117_people_512x512.png"
                                 alt="image"
                         />
                     }
                     content={props.comment.content}
            ></Comment>


            {OpenReply &&
                <form style={{display: 'flex'}} onSubmit={onSubmit}>
                    <TextArea
                        style={{width: '100%', borderRadius: '5px'}}
                        onChange={handleChange}
                        value={CommentValue}
                        placeholder="write some comments"
                    />
                    <br/>
                    <Button style={{width: '20%', height: '52px'}} onClick={onSubmit}>Submit</Button>
                </form>
            }
        </div>
    )
}

export default SingleComment
