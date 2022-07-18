import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';

const Estudiante = () => {
  const [EstudianteActual, setEstudiante] = useState(null);
  let { idEstudiante } = useParams();
  useEffect(() => {
    if(!EstudianteActual){
      axios.get(`https://jp-bd.herokuapp.com/estudiante/${idEstudiante}`)
        .then((res) => {
          setEstudiante(res.data)
        })
    }
  }, [])
  console.log(EstudianteActual)
  return(
    <div>
      {
        EstudianteActual ?
        <div>
          <p>Nombre: {EstudianteActual.primer_nombre}</p>
          <p>Apellido: {EstudianteActual.primer_apellido}</p>
          <p>Pais: {EstudianteActual.pais_origen}</p>  
          <p>Edad: {EstudianteActual.edad}</p>
          <p>Carrera: {EstudianteActual.carrera}</p>
          <p>Numero de Facultad: {EstudianteActual.facultad_id}</p>
          <p>Deuda Ciclo: {EstudianteActual.deuda_ciclo_actual}</p>
          <p>Moroso: {EstudianteActual.es_moroso}</p>
          <p>ID de Materias:
          <ul>
            {
              EstudianteActual.materias.map((el) => <div>
                <li>{el.materia_id}</li>
              </div>)
              }
          </ul>
            </p>          
        </div>
        : 'Loading...'
      }
    </div>
  )
}
export default Estudiante;