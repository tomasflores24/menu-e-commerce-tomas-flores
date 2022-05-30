import React, { useState } from 'react'
import { useCartContext } from '../../store/cart-context';
import { collection, addDoc } from 'firebase/firestore'
import db from "../../sevices/firebase/index.js";
import { Complete } from '../Complete/Complete';
import { Form } from '../Form/Form';

export function Checkout() {
    const {productList, totalCount, emptyCart} = useCartContext();
    const [showForm, setShowForm] = useState(false);
    
    const [ idOrder, setIdOrder] = useState("...");
    
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
            setIdOrder(order.id);
        } catch (error) {
            console.log(error);
        }
    }
    
    const HandlerSubmit = (e) =>{
        if(productList.length > 0){
            setShowForm(false);
            e.preventDefault();
            const dia = new Date();
            const items = productList.map( e => {return {id: e.id, title: e.title, price: e.price, quantity: e.quantity}});
            const total = totalCount();
            const data = {buyer, items, dia, total}
            GeneratorOrder(data);
            emptyCart();
            setShowForm(true);
        }else{
            console.error("NO HAY PRODUCTOS EN EL CARRITO PARA COMPRAR");
        }
    }

return (
    <>
    {(showForm)
    ? <Complete idOrder={idOrder}/>
    : <Form HandlerSubmit={HandlerSubmit} HandlerInputChange={HandlerInputChange} {...buyer}/>
    }
  </>
  )
}
