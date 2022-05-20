import React from 'react';
import { Item } from "../Item/Item"; 
import "../ItemList/ItemList.css"

export function ItemList({productos}){
    return (
        <div className='contenedor-figuras'>
        { productos.map( unProduct => <Item key={unProduct.id} item={unProduct}/> ) }
        </div>
    )
}