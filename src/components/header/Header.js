import './Header.css'
import {
    Link
} from "react-router-dom";
import React from 'react'
const Header = () => {
    return (
        <div className='header'>
            <div className="headerLeft">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <Link to='/'>
                            <img className='headerIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='load' />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to='/movies/popular' class="nav-link active" aria-current="page" href="#">Popular</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/movies/top_rated' class="nav-link active" aria-current="page" href="#">Top Rated</Link>                                </li>
                                <li class="nav-item">
                                    <Link to='/movies/upcoming' class="nav-link active" aria-current="page" href="#">Upcoming</Link>                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Header;
