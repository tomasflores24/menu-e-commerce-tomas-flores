import React, { useEffect, useState } from 'react';
import {ItemDetail} from '../../component/ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import db from "../../sevices/firebase/index.js";



export function ItemDetailContainer() {
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [UnProducto, setUnProducto] = useState([]);
    const { id } = useParams();

    const getSelected = async (idItem) =>{
      try {
        setLoadingDetail(true);

        const document = doc(db,"items", idItem);
        const response = await getDoc(document);
        const result = { id:response.id, ...response.data()};
        
        setUnProducto(result);
        setLoadingDetail(false);

      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
        getSelected(id);
    },[id]);
    
  return (
    <div className='ItemDetailContainer'>
        {(loadingDetail) ? <h1 className='loading-detail'>Loading...</h1> : <ItemDetail item={UnProducto}/>}
    </div>
  )
}
