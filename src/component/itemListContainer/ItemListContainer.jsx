import React, { useEffect, useState } from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {ItemList} from "../ItemList/ItemList"
// import {CartWidget} from "../cartWidget/CartWidget"

export function ItemListContainer () {

    const fotosPedidas = [
        {id: 1,titulo: "Tech", descripcion: "Esto es tech...", price: 100, pictureUrl: "https://placeimg.com/150/150/tech",detalle:"Ver Detalle Del Producto"},
        {id: 2,titulo: "animals", descripcion: "Esto es animaless...", price: 200, pictureUrl: "https://placeimg.com/150/150/animals",detalle:"Ver Detalle Del Producto"},
        {id: 3,titulo: "people", descripcion: "Esto es people...", price: 300, pictureUrl: "https://placeimg.com/150/150/people",detalle:"Ver Detalle Del Producto"},
        {id: 4,titulo: "arch", descripcion: "Esto es arch...", price: 400, pictureUrl: "https://placeimg.com/150/150/arch",detalle:"Ver Detalle Del Producto"},
        {id: 5,titulo: "nature", descripcion: "Esto es nature...", price: 500, pictureUrl: "https://placeimg.com/150/150/nature",detalle:"Ver Detalle Del Producto"}
    ];
    const [assets, setAssets] = useState([]);
    function GetProductos () {
        const MyPromise = new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve(fotosPedidas);
            }, 100);
        } );
        return MyPromise;
    }  
    useEffect ( () => {
        GetProductos()
        .then(x => setAssets(x));
    } , []);
    
    return (
        <>
            <ItemList fotos={assets}/>
            <ItemCount stock={5} initial={0}/>
        </>
)
}