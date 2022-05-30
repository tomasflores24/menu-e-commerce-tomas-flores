import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../store/cart-context';
import "../Item/Item.css"

export function Item( {item} ) {
    const {addToCart} = useCartContext();
    return (
            <div key={item.id} className="figura">
                <header className='header-titulo'>{item.title}</header>
                <div className='img-txt'>
                    <img src={item.pictureUrl} alt={item.title} className="img-figura" />
                    <figcaption className='price-figura'>{item.price}$</figcaption>
                    <Link to={`/item/${item.id}`} className='detalle-producto'>
                        <button className='btn-detalle'>Ver Detalle</button>
                    </Link>
                </div>
                <footer><button className='boton-agregar' onClick={() => addToCart(item, 1)}> + </button></footer>
            </div>
    );
}