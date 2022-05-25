import React, { useState } from 'react';
import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../store/cart-context';

export function ItemDetail({item}) {
  const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
  const {addToCart} = useCartContext();

  function AddHandler(count) {
    setCantidadDeProductos(count);
    addToCart(item, count);
  }

  return (
    <div className='container-figure'>
        <div className="titulo-figura">{item.title}</div>
        <img src={item.pictureUrl} alt="imagen-figura" />
        <div className='descripcion-figura'>{item.descripcion}</div>
        <div className="price-figura">{item.price}$</div>

        {(cantidadDeProductos) === null
         ? <ItemCount stock={item.stock} initial={1} onAdd={AddHandler}/> 
         : <Link to="/cart"><button className="terminar-compra">Terminar Compra</button></Link>}
    </div>
  )
}
