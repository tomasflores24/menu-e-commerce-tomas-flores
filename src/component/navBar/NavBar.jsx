import React from "react";
import { CartWidget } from "../cartWidget/CartWidget";

export function NavBar () {
    return (
        <header>
            <h3 className="titulo">Tienda</h3>
            <input type="text" placeholder="Buscar"/>
            <CartWidget />
        </header>
    );
}