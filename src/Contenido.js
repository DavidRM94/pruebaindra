import './index.css';
import Boton from './componentes/Boton';
import Mensaje from './componentes/Mensaje';
import Modal from './componentes/Modal';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect,useState } from 'react';

const Contenido=(props)=>{
    const [colorselec,setcolorselec]=useState("#000000");
    const [muestramodal,setmuestramodal]=useState(false);

    const escuchaboton=(color)=>{
        setmuestramodal(true);
        setcolorselec(color);
    }
    const cierramodal=()=>{
        setmuestramodal(false);

    }
    return(
        <Fragment>
            <div className='cuadro'>
                <div>
                <Mensaje tipo={colorselec}></Mensaje>
                </div>
                <div className='dispo'>
                <div className='dispo1'>
                    <Boton tipo={"botonazul"} funcionpadre={escuchaboton}></Boton>
                </div>
                <div className='dispo2'>
                    <Boton tipo={"botonrojo"} funcionpadre={escuchaboton}></Boton>
                </div>
                </div>
            </div>
            <Modal muestra={muestramodal} funcionpadre={cierramodal}></Modal> 
        </Fragment>
    )

}
export default Contenido;