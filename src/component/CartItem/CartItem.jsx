import React from 'react'
import { useCartContext } from '../../store/cart-context';
import "../CartItem/CartItem.css"

export function CartItem({item}) {
  const {deleteByID} = useCartContext();
  return (
    <div className="un-item">
        <h1 className='titulo-item'>{item.titulo}</h1>
        <p>Quantity: <span className="txt-decoration">{item.quantity}</span></p>
        <p>Total: <span className="txt-decoration">{item.price * item.quantity}</span></p>
        <button onClick={() => deleteByID(item.id)}>Eliminar Item</button>
    </div>
  )
}