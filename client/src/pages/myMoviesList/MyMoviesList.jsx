import Navbar from "../../components/navbar/Navbar";
import "./myMoviesList.scss";
import List from "../../components/list/List";
import {useEffect, useState} from "react";
import axios from "axios";
import ListItem from "../../components/listItem/ListItem";

const MyMoviesList = () => {
    const [movies, setMovies] = useState([]);
    axios.create({baseURL: process.env.API_URL});

    const getFavoriteMovies = async () => {
        try {
            const res = await axios.get("/users/favorite", {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                }
            );
            setMovies(res.data.favoriteMovies);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getFavoriteMovies();
    }, []);

    return (
        <div className="myMoviesList">
            <Navbar/>
            <div className="moviesListItems">
                {movies.map((movie) => (
                    <ListItem item={movie} refreshFavoriteMovies={getFavoriteMovies}/>
                ))}
            </div>
        </div>
    );
};

export default MyMoviesList;
