import React, { useEffect, useState } from 'react';
import {ItemDetail} from '../../component/ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";
import { useParams } from 'react-router-dom';
import {Loading} from "../../component/Loading/Loading.jsx"
import { GetProduct } from '../../GetItem/GetProducts';

export function ItemDetailContainer() {
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [UnProducto, setUnProducto] = useState([]);
    const { id } = useParams();

    const getSelected = async (idItem) =>{
      try {
        setLoadingDetail(true);
        setUnProducto( await GetProduct(id));
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
      {(loadingDetail) ? <Loading /> : <ItemDetail item={UnProducto}/>}
    </div>
  )
}
