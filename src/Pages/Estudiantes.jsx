import React from 'react';
import Titulo1 from '../Components/Titulo';
import axios from 'axios';
import {
  Outlet
} from 'react-router-dom'

const Estudiantes = () => {
  const [Estudiante, setEstudiante] = React.useState(null);
  const [EstudianteActivo, setEstudianteActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

  React.useEffect(() => {
    if(!Estudiante){
      axios.get(`https://jp-bd.herokuapp.com/estudiante`)
        .then((res) => {
          setEstudiante(res.data)
          console.log(res.data)
        })
    }
  }, [])

  const manejarClickLista = (id) => {
    setEstudianteActivo(Estudiante.find((el) => el.id === id));
  }

  const agregarFavorito = () => {
    // console.log(localStorage.getItem('favoritos'))
    if(!localStorage.getItem('favoritos')){
      // case, no existe aun
      let data = JSON.stringify([EstudianteActivo]);
      localStorage.setItem('favoritos', data)
      setFavoritos([EstudianteActivo]);
    } else{
      // patron inmutable de actualizar un array
      let data = JSON.parse(localStorage.getItem('favoritos'))
      let newData = JSON.stringify([...data, EstudianteActivo]);
      localStorage.setItem('favoritos', newData)
      let tempFavoritos = [...favoritos, EstudianteActivo];
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
      <Titulo1>Estudiantes</Titulo1>
      <ul>
        {
          Estudiante ? 
            Estudiante.map((el, i) => <div>
              <li key={i} onClick={() => manejarClickLista(el.id)} style={{
              cursor: 'pointer'
            }}>{el.primer_nombre} {el.primer_apellido}</li> 
      
              </div>) : 
          'Loading...'
        }
      </ul>

      {
        EstudianteActivo &&
        <div>
        <p>Nombre: {EstudianteActivo.primer_nombre}</p>
        <p>Apellido: {EstudianteActivo.primer_apellido}</p>
        <p>Pais: {EstudianteActivo.pais_origen}</p>  
        <p>Edad: {EstudianteActivo.edad}</p>
        <p>Carrera: {EstudianteActivo.carrera}</p>
        <p>Numero de Facultad: {EstudianteActivo.facultad_id}</p>
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
            >{el.primer_nombre ? el.primer_nombre : "No hay Fa"}</li>
            <button onClick={() => eliminarFavorito(el.id)}>🗑</button>
            </div>) : 
          'Loading...'
        }
      </ul>
      <Outlet />
    </div>
  );
}
export default Estudiantes;