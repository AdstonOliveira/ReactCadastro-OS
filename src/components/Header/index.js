import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Link, BrowserRouter} from 'react-router-dom';

export const Header = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <span className="navbar-brand" id="logo">SOOS</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item" id="menu_home">
                <Link to={"/"} className="nav-link" >Home</Link>
            </li>
            <li className="nav-item" id="menu_cliente">
                <Link to={"/cliente/login"} className="nav-link">Área do cliente</Link>
            </li>
            <li className="nav-item" id="menu_colaborador">
                <Link to={"/colaborador/login"} className="nav-link">Área do colaborador</Link>
            </li>
        </ul>
    </div>

</nav>

)