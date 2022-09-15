// import React, { useState } from "react";
import React, { useState } from "react";

import Boton from "./Boton";
import BotonLimpiar from "./BotonLimpiar";
import Pantalla from "./Pantalla";
import {evaluate} from 'mathjs';


const Teclados = (props) => {
  // declaramos la variable huk y su funcion
  const [entrada, obtenerEntrada] = useState('');
  // -----------------------------------------------------
  //funciones para operar valores
  const agregarEntrada = (valor) => {
       obtenerEntrada(entrada + valor);
  };
  const limpiarPantalla =() =>{
        obtenerEntrada('');
  };
  const calcularResultado =() =>{
          if(entrada){  obtenerEntrada(evaluate(entrada));}
          else{ alert('faltan datos');}

  };
  // ------------------------------------------------------

  return (

    <div>
        <Pantalla titulo={entrada} />
      <div className="miTeclado" >
        {/* <p> {props.titulo}</p> */}
        <div className="miFila">
          {/* eviamos la funcion agregarEntrada a componente hijo */}
          <Boton agregarEntrada={agregarEntrada}>7</Boton>
          <Boton agregarEntrada={agregarEntrada}>8</Boton>
          <Boton agregarEntrada={agregarEntrada}>9</Boton>
          <Boton agregarEntrada={agregarEntrada}>/</Boton>
        </div>
        <div className="miFila">
          {/* eviamos la funcion agregarEntrada a componente hijo */}
          <Boton agregarEntrada={agregarEntrada}>4</Boton>
          <Boton agregarEntrada={agregarEntrada}>5</Boton>
          <Boton agregarEntrada={agregarEntrada}>6</Boton>
          <Boton agregarEntrada={agregarEntrada}>*</Boton>
        </div>
        <div className="miFila">
          {/* eviamos la funcion agregarEntrada a componente hijo */}
          <Boton agregarEntrada={agregarEntrada}>1</Boton>
          <Boton agregarEntrada={agregarEntrada}>2</Boton>
          <Boton agregarEntrada={agregarEntrada}>3</Boton>
          <Boton agregarEntrada={agregarEntrada}>-</Boton>
        </div>
        <div className="miFila">
          {/* eviamos la funcion agregarEntrada a componente hijo */}
          <Boton agregarEntrada={agregarEntrada}>0</Boton>
          <Boton agregarEntrada={agregarEntrada}>.</Boton>
          <Boton agregarEntrada={calcularResultado}>=</Boton>
          <Boton agregarEntrada={agregarEntrada}>+</Boton>
        </div>

          <div className="miFila">
          <BotonLimpiar limpiarPantalla={limpiarPantalla} >Limpiar</BotonLimpiar>
          </div>

      </div>
    </div>
  );
};

export default Teclados;