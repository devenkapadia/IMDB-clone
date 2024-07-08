import React, { useEffect, useState } from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Card from "../card/Card"

const MoviesList = () => {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    // useEffect(() => {
    //     getData()
    // }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="cards-row">
                {
                    movieList.map(movie => {
                        return <div className="col-md-3 my-3 cards-data">
                            <Card movie={movie} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default MoviesList
