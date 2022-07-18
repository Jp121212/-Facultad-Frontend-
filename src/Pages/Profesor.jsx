import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';

const Profesor = () => {
  const [ProfesorActual, setProfesor] = useState(null);
  let { idProfesor } = useParams();
  useEffect(() => {
    if(!ProfesorActual){
      axios.get(`https://jp-bd.herokuapp.com/Profesor/${idProfesor}`)
        .then((res) => {
          setProfesor(res.data)
        })
    }
  }, [])
  console.log(ProfesorActual)
  return(
    <div>
      {
        ProfesorActual ?
        <div>
          <p>Nombre: {ProfesorActual.nombre} {ProfesorActual.apellido}</p>
          <p>Facultad: {ProfesorActual.facultad_id}</p>
          <p>Materias:</p>
          <ul>
            {
              ProfesorActual.materias.map((el) => <div>
                <li>{el.nombre} • Codigo: {el.codigo} • Creditos {el.creditos} •  {el.carrera}</li>
              </div>)
              }
          </ul>
        </div>
        : 'Loading...'
      }
    </div>
  )
}
export default Profesor;