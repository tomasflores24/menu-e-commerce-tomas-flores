import React, { useState } from 'react'
import { useCartContext } from '../../store/cart-context';
import { collection, addDoc } from 'firebase/firestore'
import db from "../../sevices/firebase/index.js";
import "../Checkout/Checkout.css"
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

export function Checkout() {
    const {productList, totalCount} = useCartContext();

    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        telefono: "",
    });
    const {nombre, email, telefono} = buyer;

    const HandlerInputChange = ( e ) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }));
    }

    const GeneratorOrder = async (data) =>{
        try {
            const col = collection(db, "orders");
            const order = await addDoc(col, data);
        } catch (error) {
            console.log(error);
        }
    }


    const HandlerSubmit = (e) =>{
        e.preventDefault();
        const dia = new Date();
        const items = productList.map( e => {return {id: e.id, title: e.title, price: e.price, quantity: e.quantity}});
        const total = totalCount();
        const data = {buyer, items, dia, total}
        GeneratorOrder(data);
        alert("Compra Finalizada con Exitos");

    }
  return (
    <div className='container-finalizar-compra'>
        <h3 className='title'>Compltetar Datos: </h3>
        <form onSubmit={HandlerSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id='nombre' placeholder='Ingrese Nombre' required  value={nombre} onChange={HandlerInputChange}/>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id='email' placeholder='Ingrese Email' required  value={email} onChange={HandlerInputChange}/>

            <label htmlFor="telefono">Telefono</label>
            <input type="number" name="telefono" id='telefono' placeholder='Ingrese Telefono' required  value={telefono} onChange={HandlerInputChange}/>
            
            <input type="submit" value="Finalizar Compra" className='fin-compra'/>
        </form>
    </div>
  )
}
