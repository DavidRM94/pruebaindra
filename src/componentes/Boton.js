import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect,useState } from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { coloractiv} from '../Slicersreducers';

const Boton=(props)=>{
    const [claseboton,setclaseboton]=useState(props.tipo);
    const dispatch=useDispatch();

    const enviacolor=()=>{
        switch(claseboton){
            case "botonrojo":
                props.funcionpadre("#E71D3E");
                dispatch(coloractiv("Rojo"));
                break;
            case "botonazul":
                props.funcionpadre("#1A78C8");
                dispatch(coloractiv("Azul"));
                break;
        }
        
    }
    return(
        <button className={"clboton " + claseboton} onClick={()=>{enviacolor()}}>

        </button>
    )

}

export default Boton;