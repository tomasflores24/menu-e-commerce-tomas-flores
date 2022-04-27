import React, { useEffect } from "react";
import { useState } from "react";
import "../ItemCount/ItemCount.css"

export function ItemCount ({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);
    const Suma = () => {
        if(count < stock) setCount(count + 1);
    }
    const Resta = () => {
        if(count > initial) setCount(count - 1);
    }
    const Agregar = () => {
        if(count != 0 ) console.log("Agregaste "+count+" productos al carrito");
    }

    return (
        <div className="contador">
             <button onClick={Resta} className="boton resta">-</button>
             <h3 className="productos">{count}</h3>
             <button onClick={Suma} className="boton suma">+</button>
             <button onClick={Agregar} className="boton agregar">Agregar al Carrito</button>
        </div>
    )

    // function SetCount (initial){
    //     const [count, setCount] = useState(initial);
    //    const suma = () => {
    //        if(count < stock){
    //            return setCount(count + 1);
    //        }else{
    //            console.log("Ya no hay Stock");
    //        }
    //    }
    //    const resta = () => {
    //        if(count > initial){
    //            return setCount(count - 1);
    //        }
    //    }
    //    const agregar = () => {
    //        if(count !== 0){
    //            setCount(initial);
    //            console.log("agregaste al carrito " + count + " productos");
    //        }
    //    }
    //     return {count,suma,resta,agregar};
    // }
    // const Fun = SetCount(initial);


    // return (
    //     <div className="contador">
    //         <button onClick={Fun.resta} className="boton resta">-</button>
    //         <h3 className="productos">{Fun.count}</h3>
    //         <button onClick={Fun.suma} className="boton suma">+</button>
    //         <button onClick={Fun.agregar} className="boton agregar">Agregar al Carrito</button>
    //     </div>
    // );
}
