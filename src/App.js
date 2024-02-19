import './App.css';
import logoFreeCodeCamp from './Imagenes/freecodecamp-logo.png';
import Boton from './Componentes/Boton'
import Contador from './Componentes/Contador';

/*Esto es Hooks */
import { useState } from 'react';

function App() {

  const [numClics,setNumClics]= useState(0);

  const manejarClic= () => {
    setNumClics(numClics+1);
  };

  const reiniciarContador= () =>{
    setNumClics(0);
  };



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={logoFreeCodeCamp} alt='Logo Freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numeroClics={numClics}/>
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>

        <Boton texto='Reiniciar'
        esBotonDeClick={false}
        manejarClic={reiniciarContador}/>

      </div>
  
    </div>
  );
}

export default App;
