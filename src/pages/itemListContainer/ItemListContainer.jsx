import React, { useContext, useEffect, useState } from "react";
import {ItemList} from "../../component/ItemList/ItemList.jsx"
// import {GetProductos} from "../../GetItem/fireStore.jsx"
import { useParams } from "react-router-dom";
import "../itemListContainer/ItemListContainer.css"
import { getDocs, getFirestore, collection } from "firebase/firestore"
// import CartContext from "../../store/cart-context.js";

export function ItemListContainer () {
    const [loadingList, setLoadingList] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    
        useEffect ( () => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        getDocs(itemCollection)
         .then(snapshot => {
            const objFire = snapshot.docs.map( doc => {return {...doc.data(), id: doc.id }});
            setProducts((categoryId) ? objFire.filter( i => i.categoria === categoryId) : objFire);
            setLoadingList(false);
         })
         .catch(err => console.log(err));

    } , [categoryId]);

    return (
        <>
            {(loadingList) ? <p className="loadind-list">LoadingList...</p> : <ItemList productos={products}/>}
        </>
    )
    
}