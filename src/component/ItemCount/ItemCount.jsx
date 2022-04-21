import React from "react";
import { useState } from "react";

export function ItemCount ({stock, initial, onAdd}) {

    function SetCount (initial){
        const [cont, setCount] = useState(initial);

       const suma = () => {
           if(cont < stock){
               return setCount(cont + 1);
           }else{
               console.log("Ya no hay Stock");
           }
       }

       const resta = () => {
           if(cont > 0){
               return setCount(cont - 1);
           }
       }

       const agregar = () => {
           if(cont !== 0){
               setCount(initial);
               console.log("agregaste al carrito " + cont + " productos");
           }
       }


        return {cont,suma,resta,agregar};
    }
    const Fun = SetCount(initial);

    return (
        <div className="contador">
            <button onClick={Fun.resta} className="boton resta">-</button>
            <h3 className="productos">{Fun.cont}</h3>
            <button onClick={Fun.suma} className="boton suma">+</button>
            <button onClick={Fun.agregar} className="boton agregar">Agregar al Carrito</button>
        </div>
    );
}
