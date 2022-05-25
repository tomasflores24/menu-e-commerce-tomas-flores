import React, { useEffect, useState } from "react";
import {ItemList} from "../../component/ItemList/ItemList.jsx"
import { useParams } from "react-router-dom";
import "../itemListContainer/ItemListContainer.css"
import { getDocs, collection, query, where } from "firebase/firestore"
import db from "../../sevices/firebase/index.js";

export function ItemListContainer () {
    const [loadingList, setLoadingList] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    
    const getData = async (id) => {
        try{
            setLoadingList(true);
            const document = categoryId ? query(collection(db,"items"), where("categoria", "==", id)) 
                                        : collection(db, "items");

            const col = await getDocs(document);
            const result = col.docs.map( doc => doc= {id:doc.id, ...doc.data()});
            setProducts(result);
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
            {(loadingList) ? <p className="loadind-list">LoadingList...</p> : <ItemList productos={products}/>}
        </>
    )
    
}