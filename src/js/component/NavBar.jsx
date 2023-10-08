import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <div className="bg-light">
            <nav className="navbar bg-body-tertiary container">
                <div className="container-fluid">
                    <Link to="/">STAR WARS</Link>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar