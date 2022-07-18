import React from 'react';
import Titulo from '../Components/Titulo';
import axios from 'axios';
import {
  Outlet
} from 'react-router-dom'

const Materias = () => {
  const [Materia, setMateria] = React.useState(null);
  const [MateriaActiva, setMateriaActiva] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

  React.useEffect(() => {
    if(!Materia){
      axios.get(`https://jp-bd.herokuapp.com/Materia`)
        .then((res) => {
          setMateria(res.data)
        })
    }
  }, [])

  const manejarClickLista = (id) => {
    setMateriaActiva(Materia.find((el) => el.id === id));
  }

  const agregarFavorito = () => {
    // console.log(localStorage.getItem('favoritos'))
    if(!localStorage.getItem('favoritos')){
      // case, no existe aun
      let data = JSON.stringify([MateriaActiva]);
      localStorage.setItem('favoritos', data)
      setFavoritos([MateriaActiva]);
    } else{
      // patron inmutable de actualizar un array
      let data = JSON.parse(localStorage.getItem('favoritos'))
      let newData = JSON.stringify([...data, MateriaActiva]);
      localStorage.setItem('favoritos', newData)
      let tempFavoritos = [...favoritos, MateriaActiva];
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
      <Titulo>Materias</Titulo>
      <ul>
        {
          Materia ? 
            Materia.map((el, i) => <div>
              <li key={i} onClick={() => manejarClickLista(el.id)} style={{
              cursor: 'pointer'
            }}>{el.nombre}</li> 
      
              </div>) : 
          'Loading...'
        }
      </ul>

      {
        MateriaActiva &&
        <div>
          <p>Nombre: {MateriaActiva.nombre}</p>
          <p>Carrera: {MateriaActiva.carrera}</p>
          <p>Creditos: {MateriaActiva.creditos}</p>
          <p>Codigo: {MateriaActiva.codigo}</p>
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
export default Materias;