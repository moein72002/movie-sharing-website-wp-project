import "./listItem.scss";
import {
    PlayArrow,
    Add,
} from "@material-ui/icons";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    const trailerVideo = useRef();
    const [isfavotite, setIsfavorite] = useState(false);


    axios.create({baseURL: process.env.API_URL});

    axios.create({baseURL: process.env.API_URL});
    const handledelete = async (id) => {
        try {
            setIsfavorite(false);
            const res = await axios.put("users/favorite", {
                headers: {
                    token:
                        "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                },
                body: {
                    deleteMovie: id,
                }
            });
            setMovie(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    const addToFavoriteMovies = async () => {
        try {
            setIsfavorite(true);
            const res = await axios.put("users/favorite", {
                headers: {
                    token:
                        "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                },
                body: {
                    addMovie: movie.id,
                }
            });
            setMovie(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    const playTrailerVideo = () => {
        trailerVideo.current.play();
    }

    return (
        <div
            className="listItem"
            // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered && <img src={movie?.imgSm} alt=""/>}
            {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={false} ref={trailerVideo} onClick={playTrailerVideo} loop/>
                    <div className="itemInfo">
                        <div className="icons">
                            <Link to={{pathname: "/watch", movie: movie}}>
                                <PlayArrow className="playButton"/>
                            </Link>
                            <Add className="icon" onClick={addToFavoriteMovies}/>
                            {/*{isfavotite?*/}
                            {/*    <Add onClick = {handleAdd(movie.id)} className="icon" />*/}
                            {/*    :*/}
                            {/*    <Delete onclick = {handledelete(movie.id)}/>*/}
                            {/*}*/}

                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.title}</span>
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">{movie.desc}</div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
            )}
        </div>
    );
}
