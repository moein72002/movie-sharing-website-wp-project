import "./listItem.scss";
import {
    PlayArrow,
    Add,
    Delete,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    const [isfavotite, setisfavorite] = useState(false);
    axios.create({ baseURL: process.env.API_URL });
    const handledelete = async (id)=>{
        try {
            setisfavorite(false);
            const res = await axios.put("/users/favorite", {
                headers: {
                    token:
                        "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                },
                body:{
                    deleteMovie : id,
                }
            });
            setMovie(res.data);
        } catch (err) {
            console.log(err);
        }
    }
  const handleAdd = async (id) => {
      try {
          setisfavorite(true);
          const res = await axios.put("/users/favorite", {
              headers: {
                  token:
                      "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
              },
              body:{
                  addMovie : id,
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
                            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    return (
        <Link to={{ pathname: "/watch", movie: movie }}>
            <div
                className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={movie?.imgSm} alt="" />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                {isfavotite?
                                    <Add onClick={handleAdd(movie.id)} className="icon" />
                                :
                                    <Delete onclick = {handledelete(movie.id)}/>
                                }

                            </div>
                            <div className="itemInfoTop">
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
        </Link>
    );
}
