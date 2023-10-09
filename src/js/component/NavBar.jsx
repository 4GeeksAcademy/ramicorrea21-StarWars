import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites.jsx";
const Navbar = () => {
    return (
        <>
        <div className="bg-light">
            <nav className="navbar bg-body-tertiary container">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">STAR WARS</Link>
                    <Favorites/>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar