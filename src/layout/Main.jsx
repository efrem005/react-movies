import React, {useEffect, useState} from 'react';
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = (search = 'matrix', type = '') => {
        setLoading(false)
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}`)
            .then(data => data.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(true)
            })
    }

    return (
        <main className="container content">
            <Search fetchMovies={fetchMovies} />
            {loading
            ?
                <Movies movies={movies} />
            :
                <Preloader />
            }
        </main>
    );
};

export default Main;