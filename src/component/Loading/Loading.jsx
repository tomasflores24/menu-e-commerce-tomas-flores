import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../Loading/Loading.css"

export function Loading() {
  return (
    <div className='container-loading'>
      <FontAwesomeIcon icon={faSpinner} className="icon-load" />
      <h4>Loading...</h4>
    </div>
  )
}
