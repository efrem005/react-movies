import React, {useEffect, useState} from 'react';

const Search = ({fetchMovies}) => {

    const [search, setSearch] = useState('matrix')
    const [type, setType] = useState('')

    const handleKey = (e) => {
        if (e.key === "Enter") {
            fetchMovies(search, type)
        }
    }

    const handleFilter = (e) => {
        setType(e.target.value)
    }

    const onClickServer = () => {
        fetchMovies(search, type)
    }

    useEffect(() => {
        onClickServer()
    }, [type])


    return (
        <div className="row">
            <div className="input-field">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        onKeyDown={handleKey}
                    />
            </div>

            <div className="row">
                <p className="col">
                    <input
                        name="type"
                        type="radio"
                        id="filled-in-box1"
                        value=""
                        onChange={handleFilter}
                        checked={type === ''}
                    />
                    <label htmlFor="filled-in-box1">ALL</label>
                </p>
                <p className="col">
                    <input
                        name="type"
                        type="radio"
                        id="filled-in-box2"
                        value="movie"
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <label htmlFor="filled-in-box2">MOVIE</label>
                </p>
                <p className="col">
                    <input
                        name="type"
                        type="radio"
                        id="filled-in-box3"
                        value="series"
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <label htmlFor="filled-in-box3">SERIAL</label>
                </p>
            </div>
        </div>
    )
};

export default Search;