import React from 'react'
import "../Form/Form.css"

export function Form({HandlerSubmit, HandlerInputChange, nombre, email,telefono}) {
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
