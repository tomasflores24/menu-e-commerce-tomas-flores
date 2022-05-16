import React from 'react'
import { CartItem } from '../../component/CartItem/CartItem';
import { useCartContext } from '../../store/cart-context';
import "../cart/Cart.css"
export const Cart = () => {
    const {productList, emptyCart, totalPrice} = useCartContext();
    console.log(totalPrice());

    return (
    <div>
      <div className="cart-container">
        {productList.map((item) => (<CartItem key={item.id} item={item} />))}
      </div>
      {(productList.length > 0)
        ? (<>
            <p className='general'>Total Price: <span className='txt-decoration'>{totalPrice()}</span></p>
            <button className='general' onClick={() => emptyCart()}>emptyCart</button>
          </>
          )
        : <p>No hay Productos en el carrito</p>
      }
    </div>
  )
}