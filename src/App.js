
import './index.css';
import Boton from './componentes/Boton';
import Mensaje from './componentes/Mensaje';
import Modal from './componentes/Modal';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect,useState } from 'react';
import Contenido from './Contenido';
function App() {
  

  return (
    <div className="contenedor">
      <Contenido></Contenido>
      
    </div>
  );
}

export default App;
