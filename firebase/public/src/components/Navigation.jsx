import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className='navigation'>
            <nav className='navbar navbar-expand navbar-dark bg-dark'>
                <div className='container'>
                    <div class="col align-items-center">
                        <ul className='navbar-nav'>
                            <li className='nav-item ml-auto'>
                                <NavLink className="nav-link" to="/">
                                    Home
                                    <span className='sr-only'>(current)</span>
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link" to="/classification">
                                    Classification
                                </NavLink>
                            </li>
                            {/* Temporarily removing this to focus on minimum viable product */}
                            {/* <li className='nav-item'>
                                <NavLink className="nav-link" to="/ocr">
                                    OCR
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navigation;