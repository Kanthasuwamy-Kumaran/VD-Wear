import React from "react";
import '../assets/css/style.css'
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div className="navl">
            {/* <div className="navl"></div> */}
            <header className="header fixed-top">
                <div class="header-bottom skewBg" data-header>
                    <div class="container">

                        <a href="logo" class="logo">VD-Wear</a>

                        <nav class="navbar" data-navbar>
                            <ul class="navbar-list">

                                <Link to="/"><li class="navbar-item">
                                    <a href="home" class="navbar-link skewBg" data-nav-link>Home</a>
                                </li>
                                </Link>

                                <li class="navbar-item">
                                    <a href="live" class="navbar-link skewBg" data-nav-link>Demo</a>
                                </li>

                                <li class="navbar-item">
                                    <a href="features" class="navbar-link skewBg" data-nav-link>Features</a>
                                </li>

                                <li class="navbar-item">
                                    <a href="shop" class="navbar-link skewBg" data-nav-link>Shop</a>
                                </li>

                                <li class="navbar-item">
                                    <a href="blog" class="navbar-link skewBg" data-nav-link>Blog</a>
                                </li>

                                <li class="navbar-item">
                                    <a href="Contact" class="navbar-link skewBg" data-nav-link>Contact</a>
                                </li>



                            </ul>
                        </nav>

                        <div class="header-actions">

                            {/* <button class="cart-btn" aria-label="cart">
                                <ion-icon name="cart"></ion-icon>

                                <span class="cart-badge">0</span>
                            </button> */}
                            <button class="search-btn" aria-label="open search" data-search-toggler>
                                <ion-icon name="search-outline"></ion-icon>
                            </button>

                            {/* <button class="cart-btn" aria-label="cart">
                                <img src="./assets/images/Logo.png"
                                    width="60" height="60" loading="lazy"
                                    alt="White Walker Daily" />
                            </button> */}

                            <button class="cart-btn" aria-label="cart">
                                <li class="nav-item dropdown pe-3">

                                    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                        <img src="./assets/images/Logo.png" width="60" height="60" alt="Profile" class="rounded-circle" />
                                        <span class="d-none d-md-block dropdown-toggle ps-2"></span>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                        <li class="dropdown-header">
                                            <h6>Kevin Anderson</h6>
                                            <span>Web Designer</span>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>

                                        <li>
                                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                                <i class="bi bi-person"></i>
                                                <span>My Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>

                                        <li>
                                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                                <i class="bi bi-gear"></i>
                                                <span>Account Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>

                                        <li>
                                            <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                                <i class="bi bi-question-circle"></i>
                                                <span>Need Help?</span>
                                            </a>
                                        </li>

                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>

                                        <li>
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <i class="bi bi-box-arrow-right"></i>
                                                <span>Sign Out</span>
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                            </button>



                            <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                                <ion-icon name="menu-outline" class="menu"></ion-icon>
                                <ion-icon name="close-outline" class="close"></ion-icon>
                            </button>

                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;