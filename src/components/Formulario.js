import React, { useState } from 'react';
const Formulario = ({guadarBusquedaLetra}) => {
    const [busqueda,guardarBusqueda ] = useState({
        artista: '',
        cancion: ''
    });
    const  [error, guardarError ] = useState(false);
    const { artista, cancion } = busqueda;

    const actualizarState = e =>{
        e.preventDefault();
        guardarBusqueda({
            ...busqueda,
            [e.target.name] :e.target.value
        });

    }

    const buscarInformacion = e =>{
        if(artista.trim() === "" || cancion.trim() === ""){
            console.log("aqui da un error");
            guardarError(true);
            return;
            
        }
        console.log("aqui es ok");
        guardarError(false);
        guadarBusquedaLetra(busqueda);

    }
    return ( 
        <div className="bg-info">
            <div className="container">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}    
            <div className="row">
                
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                    <fieldset>
                        <legend className="text-center">Buscador Letras Canciones</legend>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre Artista"
                                        value={artista}
                                        onChange={actualizarState}
                                    />

                                </div>
                            </div>
                            <div className="col-md-6">
                                
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre Canción"
                                        value={cancion}
                                        onChange={actualizarState}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary float-right"
                        >Buscar</button>
                    </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;