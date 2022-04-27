import React from 'react'
import "../Item/Item.css"

export function Item( {info} ) {
    const [id,titulo,descripcion,price,pictureUrl,detalle] = [info.id,info.titulo, info.descripcion,info.price, info.pictureUrl, info.detalle];

    return (
            <figure key={id} className="figura">
                <header className='header-titulo'>{titulo}</header>
                <div className='img-txt'>
                    <img src={pictureUrl} alt={titulo} className="img-figura" />
                    <figcaption className='descripcion-figura'>{descripcion}</figcaption>
                    <a href="#" className='detalle-producto'>{detalle}</a>
                </div>
                <footer className='footer-figura'><p>Stock</p></footer>
            </figure>
    );
}
 