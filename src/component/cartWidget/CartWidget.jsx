import React from "react";
import "../cartWidget/CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import {useCartContext} from "../../store/cart-context"

export function CartWidget () {

    const {productList} = useCartContext();
    let quantityTotal = 0;
    productList.forEach(item => {
        quantityTotal = quantityTotal + item.quantity;
    });
    return (
        <>
            <i>
                <NavLink to="cart" className={nav => nav.isActive ? "nav-active" : ""}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
            </i>
            {productList.length !== 0 && <p className='numero-carrito'>{quantityTotal}</p>}
        </>
    );
}