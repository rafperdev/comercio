import React, { Fragment, useState } from 'react';
import './App.css';
import Producto from './Producto';

//JSX
export default function App() {
  const productos = [
    {
      "nombre": "Raspberry Pi 3",
      "desc": "Kit Raspberry Pi 3. Incluye cargador, memoria",
      "precio": "$ 50"
    },
    {
      "nombre": "Televisor 50 pulgadas",
      "desc": "Televisor smart tv",
      "precio": "$ 1000"
    },
    {
      "nombre": "Celular Xiaomi",
      "desc": "Cámara 50MP. 128GB memoria.",
      "precio": "$ 700"
    },
    {
      "nombre": "Celular Samsung",
      "desc": "Cámara 70MP. 250GB memoria.",
      "precio": "$ 950"
    }
  ];
  //Estado: lugar donde se guarda datos (variable) y tiene una función para modificar esos datos

  const [listaProductos, setListaProductos] = useState(productos);

  const buscaProducto = (evento) => {
    setListaProductos(productos.filter(pro => pro.nombre.toLowerCase().includes(evento.target.value.toLowerCase())))
  }

  return (
    <Fragment>
      <input type="text" placeholder="Buscar producto..." onChange={buscaProducto} />

      {listaProductos.map(pro =>
        <Producto
          nombre={pro.nombre}
          desc={pro.desc}
          precio={pro.precio}
        />)}
    </Fragment>
  )
}

