import React from 'react'
import "./ItemDetail.css"
import { ItemCount } from '../ItemCount/ItemCount' 
export function ItemDetail({id,titulo, descripcion, price, pictureUrl,detalle, categoria}) {

  return (
    <div className='container-figure'>
        <div className="titulo-figura">{titulo}</div>
        <img src={pictureUrl} alt="imagen-figura" />
        <div className='descripcion-figura'>{descripcion}</div>
        <div className="price-figura">{price}$</div>

        <ItemCount stock={5} initial={1}/>

    </div>
  )
}
