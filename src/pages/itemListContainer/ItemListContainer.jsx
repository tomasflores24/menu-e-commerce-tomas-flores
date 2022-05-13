import React, { useContext, useEffect, useState } from "react";
import {ItemList} from "../../component/ItemList/ItemList.jsx"
import {GetProductos} from "../../GetItem/asyncMock.jsx"
import { useParams } from "react-router-dom";
import "../itemListContainer/ItemListContainer.css"
// import CartContext from "../../store/cart-context.js";

export function ItemListContainer () {
    const [loadingList, setLoadingList] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    
        useEffect ( () => {
        GetProductos(categoryId)
        .then(productos => {
            setProducts(productos);
            setLoadingList(false);
        });
    } , [categoryId]); 

    return (
        <>
            {(loadingList) ? <p className="loadind-list">LoadingList...</p> : <ItemList productos={products}/>}
        </>
)
}