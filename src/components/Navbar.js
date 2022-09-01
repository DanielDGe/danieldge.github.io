import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container">

                <Link to="/" className="navbar-brand" >
                    My Portfolio
                </Link>

                <button className="navbar-toggler"
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/github" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                                Github
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>

        </nav>

    )

}

export default Navbar