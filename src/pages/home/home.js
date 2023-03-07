import React, { useEffect, useState } from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import MoviesList from "../../components/moviesList/moviesList";
import './home.css'

const Home = () => {
    const apiKey = 'fd28c8468bdb14ee6a0d843f0ba01a3e'
    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovies.map(movie => (
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Loading" />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
            <MoviesList/>
        </>
    )
}

export default Home
/*
<div className="home">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        {
                            popularMovies.map(movie => (
                                <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                                    <div class="carousel-item active">
                                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} class="d-block w-100" alt="..." />
                                        <div style={{marginBlockEnd:"200px"}} class="carousel-caption d-none d-md-block">
                                            <h1>{movie ? movie.original_title : ""}</h1>
                                            <h3>{movie ? movie.realese_date : ""}</h3>
                                            <span className="posterImage__rating">
                                                {movie ? movie.vote_average : ""}
                                                <i className="fas fa-star" />{" "}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
*/