import React from 'react'
import { useCartContext } from '../../store/cart-context';
import "../CartItem/CartItem.css"

export function CartItem({item}) {
  const {deleteByID, removeOneUnit, unitsPerProducts} = useCartContext();
  
  console.log(unitsPerProducts(item.id), "Unidad");
  return (
    <div className="un-item">
        <h1 className='titulo-item'>{item.titulo}</h1>
        <p>Quantity: <span className="txt-decoration">{item.quantity}</span></p>
        <p>Total: <span className="txt-decoration">{item.price * item.quantity}</span></p>
        <button onClick={() => removeOneUnit(item.id)}>delete a single product</button>
        <button onClick={() => deleteByID(item.id)}>remove all products</button>
    </div>
  )
}