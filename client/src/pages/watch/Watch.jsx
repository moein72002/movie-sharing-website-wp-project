import {ArrowBackOutlined} from "@material-ui/icons";
import {Link, useLocation} from "react-router-dom";
import "./watch.scss";
import {useEffect, useState} from "react";
import Comments from "../../components/comments/Comments";
import axios from "axios";

export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
    console.log(movie);
    const [commentLists, setCommentLists] = useState([]);


    const movieId = movie._id;

    useEffect(() => {
        axios.post("comment/getComments", {movieId})
            .then((res) => {
                console.log(res.data)
                setCommentLists(res.data.comments);
            })
    })

    const updateComment = (newComment) => {
        console.log(newComment);
        setCommentLists(commentLists.concat(newComment))
    }
    // const {movie} = useParams();
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>
            <video className="video" autoPlay progress controls src={movie.video}/>
            <Comments commentLists={commentLists} movie={movie} postId={movie._id} refreshFunction={updateComment}/>
        </div>
    );
}
