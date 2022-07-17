import React from 'react';
import Titulo from '../Components/Titulo';
import axios from 'axios';
import {
  Outlet
} from 'react-router-dom'

const Facultades = () => {
  const [Facultad, setFacultad] = React.useState(null);
  const [FacultadActiva, setFacultadActiva] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

  React.useEffect(() => {
    if(!Facultad){
      axios.get(`https://jp-bd.herokuapp.com/facultad`)
        .then((res) => {
          setFacultad(res.data)
        })
    }
  }, [])

  const manejarClickLista = (id) => {
    setFacultadActiva(Facultad.find((el) => el.id === id));
  }

  const agregarFavorito = () => {
    // console.log(localStorage.getItem('favoritos'))
    if(!localStorage.getItem('favoritos')){
      // case, no existe aun
      let data = JSON.stringify([FacultadActiva]);
      localStorage.setItem('favoritos', data)
      setFavoritos([FacultadActiva]);
    } else{
      // patron inmutable de actualizar un array
      let data = JSON.parse(localStorage.getItem('favoritos'))
      let newData = JSON.stringify([...data, FacultadActiva]);
      localStorage.setItem('favoritos', newData)
      let tempFavoritos = [...favoritos, FacultadActiva];
      setFavoritos(tempFavoritos);
    }
  }

  const eliminarFavorito = (id) => {
    console.log({id})
    let temp_favoritos = [...favoritos]
    let nuevos_favoritos = temp_favoritos.filter((el) => el.id !== id);
    console.log(nuevos_favoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevos_favoritos))
    setFavoritos(nuevos_favoritos)
  }




  
  console.log({favoritos})
  return(
    <div>
      <Titulo>Lista de equipo!</Titulo>
      <ul>
        {
          Facultad ? 
            Facultad.map((el, i) => <div>
              <li key={i} onClick={() => manejarClickLista(el.id)} style={{
              cursor: 'pointer'
            }}>{el.nombre}</li>
      
              </div>) : 
          'Loading...'
        }
      </ul>

      {
        FacultadActiva &&
        <div>
        <p>Nombre: {FacultadActiva.nombre}</p>
        <p>Decano: {FacultadActiva.nombre_decano}</p>
        <p>Abreviacion: {FacultadActiva.Abreviacion}</p>
      
      </div>
      }
      <hr />
      <h2>Mis favoritos</h2>
      <ul>
        {
          favoritos ? 
            favoritos.map((el, i) => <div key={i}>
            <li 
              style={{
                cursor: 'pointer'
              }}
              onClick={() => eliminarFavorito(el.id)}
            >{el.nombre}</li>
            <button onClick={() => eliminarFavorito(el.id)}>🗑</button>
            </div>) : 
          'Loading...'
        }
      </ul>
      <Outlet />
    </div>
  );
}
export default Facultades;