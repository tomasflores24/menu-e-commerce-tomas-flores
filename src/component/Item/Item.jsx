import React from 'react'
import { Link } from 'react-router-dom';
import "../Item/Item.css"

export function Item( {id,titulo,descripcion,price,pictureUrl,detalle,categoria} ) {
    return (
            <div key={id} className="figura">
                <header className='header-titulo'>{titulo}</header>
                <div className='img-txt'>
                    <img src={pictureUrl} alt={titulo} className="img-figura" />
                    <figcaption className='descripcion-figura'>{descripcion}</figcaption>
                    <Link to={`/item/${id}`} className='detalle-producto'><button>{detalle}</button></Link>
                </div>
                <footer className='footer-figura'><p>Stock</p></footer>
            </div>
    );
}
 