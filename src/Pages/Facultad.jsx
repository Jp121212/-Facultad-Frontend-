import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

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
    <div className='.mainDiv'>
        <Header/>
        <div className='raya'></div>
        <div className='banner1'>
          <img className='capa1' src='https://unadeca.ac.cr/home/wp-content/uploads/2018/08/MG_2169.jpg'></img>
        </div>
      <div>
        <div className='Contendor'>
          <div className='Contenedor3'>
      <div className='cuadro'>
        <img className='img6' src='https://images.vexels.com/media/users/3/203446/isolated/preview/98dc102b7416329f4d189d919ab31076-edificio-universitario-icono-azul.png'></img>
        <h1 className='h10'>Informacion de la facultad:</h1>
         {
              FacultadActual ?
              <div>
                <p>Nombre: {FacultadActual.nombre}</p>
                <p>Decano: {FacultadActual.nombre_decano}</p>
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
     
          </div>
          <div className='Contendor3'>
             <div>
              <h1 className='h10'>Valores:</h1>
              <p>Comunión con Dios</p>
              <p>Consagración</p>
              <p>Excelencia</p>
              <p>Integridad</p>
              <p>Servicio</p>
              <p>Unidad</p>
              <p>Ecologia</p>
             </div>
            </div>
         
        </div>
     
    </div>
    <Footer></Footer> 
    </div>
    
  )
}
export default Facultad;