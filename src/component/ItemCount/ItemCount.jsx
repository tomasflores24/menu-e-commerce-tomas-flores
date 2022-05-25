import React, { useEffect } from "react"; 
import { useState } from "react";
import "../ItemCount/ItemCount.css";

export function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    const Suma = () => {
        if(count < stock) setCount(count + 1);
    }
    const Resta = () => {
        if(count > initial) setCount(count - 1);
    }
    
    return (
        <div className="contador">
             <button onClick={Resta} className="boton resta">-</button>
             <h3 className="productos">{count}</h3>
             <button onClick={Suma} className="boton suma">+</button>
             <button onClick={() => onAdd(count)} className="boton agregar">Agregar al Carrito</button>
        </div>
    )
}