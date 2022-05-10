import React from "react";
import "../NavBar/NavBar.css"
import { CartWidget } from "../cartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom"; 


export function NavBar () {
    return (
        <div className="header">
            <Link to="/" className="titulo">Tienda</Link>
            <NavLink to="/category/tecnologia" className={ nav => nav.isActive ? "nav-active" : ""}>Tecnologia</NavLink>
            <NavLink to="/category/animales" className={ nav => nav.isActive ? "nav-active" : ""}>Animales</NavLink>
            <NavLink to="/category/naturaleza" className={ nav => nav.isActive ? "nav-active" : ""}>Natularela</NavLink>
            <CartWidget />
        </div>
    ); 
}