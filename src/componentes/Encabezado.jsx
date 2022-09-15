import React from "react";

function Encabezado(props){

  return(
    <div className="miTitulo">
         <p>{props.titulo}</p>
    </div>
   
  );

}

export default Encabezado;