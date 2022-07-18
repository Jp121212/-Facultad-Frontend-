import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';

const Materias = () => {
  const [MateriaActual, setMateria] = useState(null);
  let { idMateria } = useParams();
  useEffect(() => {
    if(!MateriaActual){
      axios.get(`https://jp-bd.herokuapp.com/materias/${idMateria}`)
        .then((res) => {
          setMateria(res.data)
        })
    }
  }, [])
  console.log(MateriaActual)
  return(
    <div>
      {
        MateriaActual ?
        <div>
          <p>Nombre: {MateriaActual.nombre}</p>
          <p>Carrera: {MateriaActual.carrera}</p>
          <p>Creditos: {MateriaActual.creditos}</p>
          <p>Codigo: {MateriaActual.codigo}</p>
          <p>Estudiantes por ID:</p>
          <ul>
            {
              MateriaActual.estudiantes.map((el) => <div>
                <li>{el.estudiante_id}</li>
              </div>)
              }
          </ul>
          <p>Facultad Numero: {MateriaActual.facultad_id}</p>
          <p>Profesores por ID: {MateriaActual.profesor_id}</p>
        </div>
        : 'Loading...'
      }
    </div>
  )
}
export default Materias;