import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (

        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <nav class="navbar bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src="https://www.sliit.lk/wp-content/uploads/2017/09/SLIIT.png" alt="SLIIT" width="120" height="50" class="d-inline-block align-text-top" />
                            </a>
                        </div>
                    </nav>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <a class="navbar-brand text-danger" href="/">Project Management Tool </a>
                            <li class="nav-item">
                                <a class="nav-link active text-dark" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="/service">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="/fileupload">File Upload</a>
                            </li>
                        </ul>
                        <li>
                            <NavLink className="btn btn-outline-primary ms-2 px-4 rounded-pill" to="/login">
                                Login <i className="fa fa-sign-in me-2" />
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/register"> <button className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                Register <i className="fa fa-user-plus me-2" /> </button>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header;