import React from "react";
import "../NavBar/NavBar.css"
import { CartWidget } from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom"; 


export function NavBar () {
    return (
        <div className="header">
            <NavLink to="/" className={ nav => nav.isActive ? "nav-active" : "tr"}>Tienda</NavLink>
            <NavLink to="/category/tecnologia" className={ nav => nav.isActive ? "nav-active" : "tr"}>Tecnologia</NavLink>
            <NavLink to="/category/animales" className={ nav => nav.isActive ? "nav-active" : "tr"}>Animales</NavLink>
            <NavLink to="/category/naturaleza" className={ nav => nav.isActive ? "nav-active" : "tr"}>Natularela</NavLink>
            <CartWidget />
        </div>
    ); 
}