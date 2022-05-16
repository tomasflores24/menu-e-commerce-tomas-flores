import React, { useEffect, useState } from 'react';
import { GetProducto } from '../../GetItem/asyncMock';
import {ItemDetail} from '../../component/ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";
import { useParams } from 'react-router-dom';


export function ItemDetailContainer() {
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [UnProducto, setUnProducto] = useState([]);
    const { id } = useParams();


    useEffect(()=>{
        GetProducto(id)
        .then(producto => {
          setUnProducto(producto);
          setLoadingDetail(false);
        });
    },[id]);
    
  return (
    <div className='ItemDetailContainer'>
        {(loadingDetail) ? <h1 className='loading-detail'>Loading...</h1> : <ItemDetail item={UnProducto}/>}
    </div>
  )
}
