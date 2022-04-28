import React from 'react';
import { Item } from "../Item/Item"; 

export function ItemList(props){
        return (
            <div className='contenedor-figuras'>
            { props.fotos.map( m => <Item info = {m} key={m.id}/> ) }
        </div>
        )
}