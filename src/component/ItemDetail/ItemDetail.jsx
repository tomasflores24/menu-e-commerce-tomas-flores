import React, { useState } from 'react';
import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export function ItemDetail({id,titulo, descripcion, price, pictureUrl,detalle, categoria}) {
  
  const [cantidadDeProductos, setCantidadDeProductos] = useState(null);

  function AddHandler(quantityToAdd) {
    setCantidadDeProductos(quantityToAdd);
    console.log(quantityToAdd);
    // console.log(cantidadDeProductos);


  }
  return (
    <div className='container-figure'>
        <div className="titulo-figura">{titulo}</div>
        <img src={pictureUrl} alt="imagen-figura" />
        <div className='descripcion-figura'>{descripcion}</div>
        <div className="price-figura">{price}$</div>

        {(cantidadDeProductos) === null ? <ItemCount stock={5} initial={1} onAdd={AddHandler}/> : <Link to={"/cart"}><button className="terminar-compra">Terminar Compra</button></Link>}
          {/* <ItemCount stock={5} initial={1} onAdd={AddHandler}/> */}
    </div>
    
  )
}