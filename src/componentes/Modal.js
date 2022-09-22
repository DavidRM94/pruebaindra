import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect,useState } from 'react';
import ReactModal from 'react-modal';
import '../index.css';
import { useSelector } from 'react-redux';

const Modal=(props)=>{
    const estadocolor=useSelector(state=>state.coloreleg.color);
    const cierramodal=()=>{
        props.funcionpadre();
    }
    return(
        <ReactModal isOpen={props.muestra} className="mymodal" overlayClassName={estadocolor=="Rojo"?"myoverlayrojo":"myoverlay"} closeTimeoutMS={500}>
            <div>
                <h2>
                    señor usuario el color de la pantalla ha cambiado a {estadocolor}
                </h2>
                <button onClick={()=>{cierramodal()}}> 
                    Aceptar
                </button>
            </div>
        </ReactModal>
    )
}
export default Modal;