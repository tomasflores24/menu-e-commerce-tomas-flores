import React from 'react'
import { cartContext, useCartContext } from '../../store/cart-context'

// const ctx = useCartContext();
// Compiled with problems:X
// ERROR
// src\pages\cart\Cart.jsx
//   Line 4:13:  React Hook "useCartContext" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
// Search for the keywords to learn more about each error.



export function Cart() {
  return (
    <div>Cart</div>
  )
}
