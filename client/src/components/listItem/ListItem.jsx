import "./listItem.scss";
import {
    PlayArrow,
    Add, Delete,
} from "@material-ui/icons";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListItem({item, refreshFavoriteMovies}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [movie, setMovie] = useState({});
    const trailerVideo = useRef();

    axios.create({baseURL: process.env.API_URL});

    axios.create({baseURL: process.env.API_URL});

    useEffect(() => {
        const getIsMovieInUserFavorites = async () => {
            try {
                const res = await axios.post("users/isMovieInUserFavorites", {
                  movieId: movie._id
                }, {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        },
                    }
                );
                setIsFavorite(res.data.isMovieInUserFavorites);
            } catch (err) {
                console.log(err);
            }
        };
        getIsMovieInUserFavorites();
    }, [isHovered])

    const deleteFromFavoriteMovies = async () => {
        console.log("deleteFromFavoriteMovies");
        try {
            // changeIsFavoriteState(false);
            const res = await axios.post("users/deleteFavorite", {
                deleteMovie: movie._id,
            }, {
                headers: {
                    token:
                        "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                }
            });
            setIsFavorite(false);
            refreshFavoriteMovies();
            setMovie(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    const addToFavoriteMovies = async () => {
        try {
            await axios.put("users/favorite", {
                addMovie: movie._id
            }, {
                headers: {
                    token:
                        "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                }
            });
            setIsFavorite(true);
            refreshFavoriteMovies();
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
                            {/*<Add className="icon" onClick={addToFavoriteMovies}/>*/}
                            {!isFavorite ?
                                <Add onClick={addToFavoriteMovies} className="icon"/>
                                :
                                <Delete onClick={deleteFromFavoriteMovies} className="icon"/>
                            }

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
