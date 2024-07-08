import React, { useEffect, useState } from "react"
import "./movieDetail.css"
import { useParams } from "react-router-dom"
const MovieDetail = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    })

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }
    return (
        <div className="home">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div class="carousel-inner">
                    <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} class="d-block w-100" alt="..." />
                    <div class="carousel-item active">
                        <div style={{ marginBlockEnd: "200px" }} class="carousel-caption d-none d-md-block">
                            <div class="card-cover" style={{ width: "18rem" }}>
                                <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} class="card-img-top" alt="..." />
                            </div>
                            <div className="title">
                                <>{currentMovieDetail ? currentMovieDetail.original_title : ""}</>
                            </div>
                            <h3 class="date">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</h3>
                            <span className="posterImage__rating">
                                {currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}
                                <i className="fas fa-star" />{" "}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                                ?
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                ))
                                :
                                ""
                        }
                    </div>
                </div>
                <div className="movie__detailRightBottom">
                    <div className="synopsisText">Details</div>
                    <div className="synopsis">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
