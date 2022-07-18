import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';

const Facultad = () => {
  const [FacultadActual, setFacultad] = useState(null);
  let { idFacultad } = useParams();
  useEffect(() => {
    if(!FacultadActual){
      axios.get(`https://jp-bd.herokuapp.com/facultad/${idFacultad}`)
        .then((res) => {
          setFacultad(res.data)
        })
    }
  }, [])
  console.log(FacultadActual)
  return(
    <div>
      {
        FacultadActual ?
        <div>
          <p>Nombre: {FacultadActual.nombre}</p>
          <p>Nombre Decano: {FacultadActual.nombre_decano}</p>
          <p>Abreviacion: {FacultadActual.Abreviacion}</p>
          <p>Estudiantes:</p>
          <ul>
            {
              FacultadActual.estudiants.map((el) => <div>
                <li>{el.primer_nombre} {el.primer_apellido}</li>
              </div>)
              }
          </ul>
          <p>Materias:</p>
          <ul>
            {
              FacultadActual.materias.map((el) => <div>
                <li>{el.nombre}</li>
              </div>)
            }
          </ul>
          <p>Profesores:</p>
          <ul>
            {
              FacultadActual.profesores.map((el) => <div>
                <li>{el.nombre} {el.apellido}</li>
              </div>)
            }
           </ul>   
        </div>
        : 'Loading...'
      }
    </div>
  )
}
export default Facultad;