import React, { useState } from "react";

import ReactDOM from 'react-dom';
import PageBar from './PageBar';
import Footer from './Footer';
import { Link } from "@inertiajs/inertia-react";

function Layout(props) {
    const [isActive, setActive] = useState("false");        
    const handleToggle = () => {
        setActive(!isActive);
    };

    
    return(
        <div id="wrapper" className={ isActive ? null : 'toggled' }>            
            <div>
                <div id="sidebar-wrapper" data-simplebar-auto-hide="true">
                    <div className="brand-logo">
                        <a href="/">
                            <h5 className="logo-text">CLEAR</h5>
                        </a>
                    </div>
                    <ul className="sidebar-menu do-nicescrol">
                        <li className="sidebar-header">Dashboard</li>
                        <li>
                            <a href="/">
                                <i className="fa fa-home"></i> <span>Dashboard</span>
                            </a>
                        </li>

                        <li className="sidebar-header">Zonas</li>
                        <li>
                            <a href="/zone">
                                <i className="zmdi zmdi-view-dashboard"></i> <span>Zonas</span>
                            </a>
                        </li>

                        <li className="sidebar-header">Funcionários</li>
                        <li>
                            <a href="/employee">
                                <i className="fa fa-address-book"></i> <span>Funcionários</span>
                            </a>
                        </li>

                        <li className="sidebar-header">Caminhões</li>
                        <li>
                            <a href="/truck">
                                <i className="fa fa-truck"></i> <span>Caminhões</span>
                            </a>
                        </li>
                    </ul>

                </div>

                <header className="topbar-nav">
                    <nav className="navbar navbar-expand fixed-top">
                        <ul className="navbar-nav mr-auto align-items-center">
                            <li className="nav-item">
                                <div className="nav-link toggle-menu" onClick={ handleToggle } style={{ cursor: 'pointer' }}>
                                    <i className="icon-menu menu-icon"></i>
                                </div>                          
                            </li>
                            <li className="nav-item">
                                <form className="search-bar">
                                    <input type="text" className="form-control" placeholder="Enter keywords" />
                                    <a href="#"><i className="icon-magnifier"></i></a>
                                </form>
                            </li>
                        </ul>


                        <ul className="navbar-nav align-items-center right-nav-link">                            
                            <li className="nav-item dropstart">
                                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-bell-o"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropstart">
                                <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="user-profile"><img src="https://via.placeholder.com/110x110" className="img-circle"
                                            alt="user avatar" /></span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="dropdown-item user-details">
                                        <a href="#">
                                            <div className="media">
                                                <div className="avatar"><img className="align-self-start mr-3"
                                                        src="https://via.placeholder.com/110x110" alt="user avatar" /></div>
                                                <div className="media-body">
                                                    <h6 className="mt-2 user-title" style={{ color: "black" }}>{props.auth.user.name}</h6>
                                                    <p className="user-subtitle" style={{ color: "black" }}>{props.auth.user.email}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>                                    
                                    <Link className="dropdown-item" href={route('logout')} method="post" as="button"><i className="icon-power mr-2"></i> Logout</Link>
                                </ul>
                            </li>                            
                        </ul>
                    </nav>
                </header>

            </div>

            <div className="clearfix"></div>

            <div className="content-wrapper">
                <div className="container-fluid">
                    { props.brand }
                </div>
            </div>
            
            
            {/* Footer OK */}
            <Footer />

            {/* Sidebar direita OK */}
            <div className="right-sidebar">
                <div className="switcher-icon">
                    <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
                </div>
                <div className="right-sidebar-content">

                    <p className="mb-0">Gaussion Texture</p>
                    <hr />

                    <ul className="switcher">
                        <li id="theme1"></li>
                        <li id="theme2"></li>
                        <li id="theme3"></li>
                        <li id="theme4"></li>
                        <li id="theme5"></li>
                        <li id="theme6"></li>
                    </ul>

                    <p className="mb-0">Gradient Background</p>
                    <hr />

                    <ul className="switcher">
                        <li id="theme7"></li>
                        <li id="theme8"></li>
                        <li id="theme9"></li>
                        <li id="theme10"></li>
                        <li id="theme11"></li>
                        <li id="theme12"></li>
                        <li id="theme13"></li>
                        <li id="theme14"></li>
                        <li id="theme15"></li>
                    </ul>

                </div>
            </div>

        </div>
    );
}

export default Layout;