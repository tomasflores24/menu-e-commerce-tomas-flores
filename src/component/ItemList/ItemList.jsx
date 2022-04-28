import React from 'react';
import { Item } from "../Item/Item"; 

export function ItemList({productos}){
        return (
            <div className='contenedor-figuras'>
            { productos.map( unProduct => <Item key={unProduct.id} {...unProduct}/> ) }
        </div>
        )
}