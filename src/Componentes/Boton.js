import React from 'react';
import '../Hojas-de-estilo/Boton.css'

/*Desestructuración, en lugar de props */
function Boton({texto, esBotonDeClic,manejarClic}){
    return(
        <button className={esBotonDeClic?'boton-clic':'boton-reiniciar'}
        onClick={manejarClic}>
            {texto}
            </button>
    );
}

export default Boton;