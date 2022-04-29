import React, { useEffect, useState } from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {ItemList} from "../ItemList/ItemList";
import {GetProductos} from "../../GetItem/asyncMock.jsx"
import axios from "axios";

export function ItemListContainer () {
    
    const [products, setProducts] = useState([]);
    
    useEffect ( () => {
        GetProductos()
        .then(productos => setProducts(productos));    
    } , []);
    
    return (
        <>
            <ItemList productos={products}/>
            <ItemCount stock={5} initial={0}/>
        </>
)
}