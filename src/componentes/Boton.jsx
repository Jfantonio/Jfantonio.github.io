import React from "react";

const Boton = (props) => {

  //========================================================
  function esOperador(valor) {
    /** si no es un numero */
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

const esClic = ( ) =>{ 
    props.agregarEntrada(props.children);
  };
  // =======================================================

  return (


    <button
      className={`miBoton  ${esOperador(props.children) ? 'soyOperador' : ''} `.trimEnd()}
      onClick={esClic}
    >
      {props.children}
    </button>



  );






};

export default Boton;

