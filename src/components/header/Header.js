import './Header.css'
import {
    NavLink
} from "react-router-dom";
import React from 'react'
import logo from './../../Assets/file.png'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerLeft">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <NavLink to='/'>
                            <img className='headerIcon' src={logo} alt='load' />
                        </NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink to='/movies/popular' className="nav-link" activeClassName="active" aria-current="page" href="#">Popular</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to='/movies/top_rated' className="nav-link" activeClassName="active " aria-current="page" href="#">Top Rated</NavLink>                                </li>
                                <li class="nav-item">
                                    <NavLink to='/movies/upcoming' className="nav-link" activeClassName="active" aria-current="page" href="#">Upcoming</NavLink>                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Header;
