import React from 'react'
import Imagen from './Imagen'

const Comentario = (props) => {
  return (
    <div className='d-flex'>
        <Imagen urlImagen={props.urlImagen}/>
        <div className="media-body">
            <h5 className="mt-0">{props.persona}</h5>
            {props.texto}
        </div>
    </div>
  )
}

export default Comentario