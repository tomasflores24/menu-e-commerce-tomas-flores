import React from "react";
import {ItemCount} from "../ItemCount/ItemCount";
// import {CartWidget} from "../cartWidget/CartWidget"



export function ItemListContainer (props) {
    return (
        <section className="texto">
            {props.greeting}

            <ItemCount stock={4} initial={0} onAdd={(num)=> console.log(num)}/>
        </section>
    );
}