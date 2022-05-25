import React from 'react'
import { CartItem } from '../../component/CartItem/CartItem';
import { useCartContext } from '../../store/cart-context';
import { Link } from "react-router-dom";
import "../cart/Cart.css"
export const Cart = () => {
    const {productList, emptyCart, totalPrice} = useCartContext();
    return (
    <div className='carrito'>
      <div className="cart-container">
        {productList.map((item) => (<CartItem key={item.id} item={item} />))}
      </div>
      {(productList.length > 0)
        ? (<>
            <p className='general'>Total Price: <span className='txt-decoration'>{totalPrice()}</span></p>
            <button className='general' onClick={() => emptyCart()}>Clear</button>

            <Link to="/checkout" className='link-pagar'><button className="general">Finalizar Compra</button></Link>
          </>
          )
        : ( <>
              <p className='carrito-vacio'>Tu Carrito esta vacio</p>
              <button className='inicio'><Link to="/" className='inicio'>Ir al Inicio</Link></button>
            </>
          )
      }
    </div>
  )
}