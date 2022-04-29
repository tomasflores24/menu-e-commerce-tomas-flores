import React, { useEffect, useState } from 'react';
import { GetProductos } from '../../GetItem/asyncMock';
import { ItemCount } from '../ItemCount/ItemCount';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";

export function ItemDetailContainer() {
    const [UnProducto, setUnProduct] = useState([]);

    useEffect(()=>{
        GetProductos()
        .then(producto => setUnProduct(producto));
    },[]);
     
  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...UnProducto} />
        <ItemCount stock={5} initial={1}/>
    </div>
  )
}
