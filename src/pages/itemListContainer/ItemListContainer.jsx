import React, { useEffect, useState } from "react";
import {ItemList} from "../../component/ItemList/ItemList.jsx"
import {GetProductos} from "../../GetItem/asyncMock.jsx"
import { useParams } from "react-router-dom";

export function ItemListContainer () {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect ( () => {
        GetProductos(categoryId)
        .then(productos => setProducts(productos));

    } , [categoryId]);
    
    return (
        <>
            <ItemList productos={products}/>
        </>
)
}