import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect,useState } from 'react';
import '../index.css';

const Mensaje=(props)=>{
    return(
        <h1 style={{color:props.tipo}}>Prueba Basíca</h1>
    )
}

export default Mensaje;