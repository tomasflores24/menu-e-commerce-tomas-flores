import React, { useEffect, useState } from "react";
import {ItemList} from "../../component/ItemList/ItemList.jsx"
import { useParams } from "react-router-dom";
import "../itemListContainer/ItemListContainer.css"
import { Loading } from "../../component/Loading/Loading.jsx";
import { GetProducts } from "../../GetItem/GetProducts.jsx";

export function ItemListContainer () {
    const [loadingList, setLoadingList] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    
    const getData = async (categoryId) => {
        try{
            setLoadingList(true);
            setProducts( await GetProducts(categoryId));
            setLoadingList(false);
        }catch(error){
            console.error();
        }
    }

    useEffect ( () => {
        getData(categoryId);
    } , [categoryId]);

    return (
        <>
            {(loadingList) ? <Loading /> : <ItemList productos={products}/>}
        </>
    )
    
}