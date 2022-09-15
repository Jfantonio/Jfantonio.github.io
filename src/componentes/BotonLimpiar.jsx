import React from "react";

const BotonLimpiar = (props) => {
  return (<div className="boton-limpiar" onClick={props.limpiarPantalla}>{props.children}</div>) ;
};

export default BotonLimpiar;
