import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand" href="/#">Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link to="/" className="nav-link active" aria-current="page" href="/#">watched list</Link>
                    <Link to="/watched" className="nav-link" href="/#">watched</Link>
                    <Link to="/add" className='btn btn-primary'>add</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;