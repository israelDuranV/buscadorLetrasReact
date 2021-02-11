import React,{Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';


function App() {

  
  const [ busquedaLetra, guadarBusquedaLetra ] = useState({});
  const [ letra, guardarLetra ] = useState('');

useEffect(() => {
  if(Object.keys(busquedaLetra).length === 0) return;
  
  const consultarApiLetra = async () =>{
    const {artista,cancion } = busquedaLetra;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const resultado = await axios(url);
    console.log(resultado.data.lyrics);
  }
  consultarApiLetra();
}, [busquedaLetra])

  return (
    <Fragment>
      <Formulario
         guadarBusquedaLetra={guadarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
