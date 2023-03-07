import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Card = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return (
        isLoading
            ?
            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "black" }}>

                <div class="card" style={{ width: "18rem" }}>
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{ left: '95%', zIndex: 1 }}>{movie ? movie.vote_average : ""}<i className="fas fa-star" /></span>
                    <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} class="card-img-top" alt="..." />
                    <div class="card-body cards__overlay">
                        <div className="card__title"><h5>
                            {movie ? movie.original_title : ""}
                        </h5>
                        </div>
                        <div className="card__runtime">
                            {movie ? movie.release_date : ""}
                        </div>
                        <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                    </div>
                </div>
            </Link >
    )
}

export default Card
