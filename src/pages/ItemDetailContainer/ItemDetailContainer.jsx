import React, { useEffect, useState } from 'react';
import {ItemDetail} from '../../component/ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore, collection} from 'firebase/firestore'
// import { GetProducto } from '../../GetItem/fireStore';


export function ItemDetailContainer() {
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [UnProducto, setUnProducto] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        getDocs(itemCollection)
         .then(snapshot => {
            snapshot.forEach(doc => {
              if(doc.id === id){
                setUnProducto({...doc.data(), id: doc.id});
              }
            });
            setLoadingDetail(false);
         })
         .catch(err => console.log(err));
         
    },[id]);
    
  return (
    <div className='ItemDetailContainer'>
        {(loadingDetail) ? <h1 className='loading-detail'>Loading...</h1> : <ItemDetail item={UnProducto}/>}
    </div>
  )
}
