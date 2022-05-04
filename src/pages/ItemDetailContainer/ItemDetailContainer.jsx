import React, { useEffect, useState } from 'react';
import { GetProducto } from '../../GetItem/asyncMock';
import {ItemDetail} from '../../component/ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";
import { useParams } from 'react-router-dom';


export function ItemDetailContainer() {
    const [UnProducto, setUnProducto] = useState([]);
    const { id } = useParams();


    useEffect(()=>{
        console.log(id);
        GetProducto(id)
        .then(producto => setUnProducto(producto));
    },[id]);
     
  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...UnProducto} />
    </div>
  )
}
