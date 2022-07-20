import React from 'react';
import ReactDOM from 'react-dom';

function PageBar() {
    return (
        <div>
            <div id="sidebar-wrapper" data-simplebar-auto-hide="true">
                <div className="brand-logo">
                    <a href="#">
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
                            <a href="#"className="nav-link toggle-menu">
                                <i className="icon-menu menu-icon"></i>
                            </a>                                
                        </li>
                        <li className="nav-item">
                            <form className="search-bar">
                                <input type="text" className="form-control" placeholder="Enter keywords" />
                                <a href="#"><i className="icon-magnifier"></i></a>
                            </form>
                        </li>
                    </ul>

                    <ul className="navbar-nav align-items-center right-nav-link">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-bell-o"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#"className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                                <span className="user-profile"><img src="https://via.placeholder.com/110x110" className="img-circle"
                                        alt="user avatar" /></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="dropdown-item user-details">
                                    <a href="#">
                                        <div className="media">
                                            <div className="avatar"><img className="align-self-start mr-3"
                                                    src="https://via.placeholder.com/110x110" alt="user avatar" /></div>
                                            <div className="media-body">
                                                <h6 className="mt-2 user-title">Sarajhon Mccoy</h6>
                                                <p className="user-subtitle">mccoy@example.com</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li className="dropdown-item"><i className="icon-envelope mr-2"></i> Inbox</li>
                                <li className="dropdown-divider"></li>
                                <li className="dropdown-item"><i className="icon-wallet mr-2"></i> Account</li>
                                <li className="dropdown-divider"></li>
                                <li className="dropdown-item"><i className="icon-settings mr-2"></i> Setting</li>
                                <li className="dropdown-divider"></li>
                                <li className="dropdown-item"><i className="icon-power mr-2"></i> Logout</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    );
}

export default PageBar;