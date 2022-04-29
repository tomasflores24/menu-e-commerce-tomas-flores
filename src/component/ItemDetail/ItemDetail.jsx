import React from 'react'
import "./ItemDetail.css"
// id,titulo, descripcion, price, pictureUrl,detalle
export function ItemDetail({id,titulo, descripcion, price, pictureUrl,detalle}) {
    
    console.log(id,titulo,descripcion,price,pictureUrl,detalle);
  return (
    <div className='container-figure'>
        <div className="titulo-figura">{titulo}</div>
        <img src={pictureUrl} alt="imagen-figura" />
        <div className='descripcion-figura'>{descripcion}</div>
        <div className="price-figura">{price}$</div>
    </div>
  )
}
