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
              <p className='general total'>Total Price: <span className='txt-decoration'>{totalPrice()}$</span></p>
              <div className='btns'>
                  <button className='general btn' onClick={() => emptyCart()}>Clear</button>
                  <Link to="/checkout" className='link-pagar '><button className="general btn">Finalizar Compra</button></Link>
              </div>
          </>
          )
        : ( <>
              <p className='carrito-vacio'>Tu Carrito esta vacio</p>
              <div className="div-btn">
                <button className='btn-inicio'><Link to="/" className='inicio-link'>Ir al Inicio</Link></button>
              </div>
            </>
          )
      }
    </div>
  )
}