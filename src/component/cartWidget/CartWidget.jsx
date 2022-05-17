import React from "react";
import "../cartWidget/CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import {useCartContext} from "../../store/cart-context"
{/* <i class="fa-solid faBullseye"></i> */}
export function CartWidget () {

    const {productList} = useCartContext();

    return (
        <>
            <i>
                <NavLink to="cart" className={nav => nav.isActive ? "nav-active" : ""}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
            </i>
            {productList.length !== 0 && <p className='numero-carrito'>{productList.length}</p>}
            {/* {productList.length !== 0
            ? <p className='numero-carrito'>{productList.length}</p>
            : <p className='numero-carrito'>0</p>
            } */}
        </>
    );
}