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
        </div>
        : 'Loading...'
      }
    </div>
  )
}
export default Facultad;