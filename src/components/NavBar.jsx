import React from "react";
import "./NavBar.css"


export function MiMenu(){
    return(
        <nav className="nav-contenedor">
            <ul className="lista">
                <a href="https://es.wikipedia.org/wiki/Quiosco" target={"_blank"} className="contenido">Kioskito</a>
                <a href="https://es.wikipedia.org/wiki/inicio" target={"_blank"} className="contenido">Inicio</a>
                <a href="https://es.wikipedia.org/wiki/golosina" target={"_blank"} className="contenido">Golosinas</a>
                <a href="https://es.wikipedia.org/wiki/bebida" target={"_blank"} className="contenido">Bebidas</a>
            </ul>
        </nav>
    );
}