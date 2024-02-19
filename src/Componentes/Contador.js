import React from 'react';
import '../Hojas-de-estilo/Contador.css'

function Contador({numeroClics}){
    return(

        <div className='contador'>
            {numeroClics}
        </div>
     
    );
}

export default Contador;