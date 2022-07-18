import React from 'react';
import Titulo from '../Components/Titulo';
import axios from 'axios';
import {
  Outlet
} from 'react-router-dom'

const Profesores = () => {
  const [Profesor, setProfesor] = React.useState(null);
  const [ProfesorActivo, setProfesorActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

  React.useEffect(() => {
    if(!Profesor){
      axios.get(`https://jp-bd.herokuapp.com/Profesor`)
        .then((res) => {
          setProfesor(res.data)
        })
    }
  }, [])

  const manejarClickLista = (id) => {
    setProfesorActivo(Profesor.find((el) => el.id === id));
  }

  const agregarFavorito = () => {
    // console.log(localStorage.getItem('favoritos'))
    if(!localStorage.getItem('favoritos')){
      // case, no existe aun
      let data = JSON.stringify([ProfesorActivo]);
      localStorage.setItem('favoritos', data)
      setFavoritos([ProfesorActivo]);
    } else{
      // patron inmutable de actualizar un array
      let data = JSON.parse(localStorage.getItem('favoritos'))
      let newData = JSON.stringify([...data, ProfesorActivo]);
      localStorage.setItem('favoritos', newData)
      let tempFavoritos = [...favoritos, ProfesorActivo];
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
  
  const esFav = (id) => {
    let exists = ((el) => el.id === id);
    if(exists.length > 0){
      return true
    } else{
      return false
    }
  }





  
  console.log({favoritos})
  return(
    <div>
      <Titulo>Profesores</Titulo>
      <ul>
        {
          Profesor ? 
            Profesor.map((el, i) => <div>
              <li key={i} onClick={() => manejarClickLista(el.id)} style={{
              cursor: 'pointer'
            }}>{el.nombre} {el.apellido}</li> 
      
              </div>) : 
          'Loading...'
        }
      </ul>

      {
        ProfesorActivo &&
        <div>
          <p>Nombre: {ProfesorActivo.nombre} {ProfesorActivo.apellido}</p>
          <p>Facultad: {ProfesorActivo.facultad_id}</p>
          <p>Materias:</p>
          <ul>
            {
              ProfesorActivo.materias.map((el) => <div>
                <li>{el.nombre}</li>
              </div>)
              }
          </ul>
        <button onClick={agregarFavorito}> ✰</button>
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
            >{el.nombre ? el.nombre : "No hay Fav"}</li>
            <button onClick={() => eliminarFavorito(el.id)}>🗑</button>
            </div>) : 
          'Loading...'
        }
      </ul>
      <Outlet />
    </div>
  );
}
export default Profesores;