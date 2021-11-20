import React from 'react';
import logo from './logo.svg';

export default function Producto(props) {
    return <div>
    <div>
      <img src={logo} className="imagen" alt="Imagen producto" />
    </div>
    <div>
      {props.nombre}
    </div>
    <div>
      {props.desc}
    </div>
    <div>
      {props.precio}
    </div>
  </div>
}