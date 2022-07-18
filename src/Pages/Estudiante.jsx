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
        </div>
        : 'Loading...'
      }
    </div>
  )
}
export default Estudiante;