import React from 'react'
import { Link, } from 'react-router-dom';
import  "../Complete/Complete.css"

export function Complete({idOrder}) {
  return (
    <div className='container-inicio'>
        <h3 className='txt-inicio'>Compra Finalizada</h3>
        <p>Tu ID: <span className='id-order'>{idOrder}</span></p>
        <button className='btn-inicio-chck'>
            <Link to="/" className='link-inicio'>VOLVER AL INICIO</Link>
        </button>
    </div>
  )
}
