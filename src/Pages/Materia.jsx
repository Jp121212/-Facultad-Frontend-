import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const Materias = () => {
  const [MateriaActual, setMateria] = useState(null);
  let { idMateria } = useParams();
  useEffect(() => {
    if(!MateriaActual){
      axios.get(`http://localhost:5000/materias/${idMateria}`)
        .then((res) => {
          setMateria(res.data)
        })
    }
  }, [])
  console.log(MateriaActual)
  return(
    <div className='.mainDiv'>
        <Header/>
        <div className='raya'></div>
        <div className='Contendor'>
          
           <div className='Contenedor1'>
           <div className='Contenedor6'>
            <h1 className='h10'>Visión</h1>
            <hr></hr>
            <p>
            Ser una universidad de categoría mundial que lidere la formación de profesionales que respondan a las necesidades de la sociedad actual e impulsen los valores cristianos adventistas, fortaleciendo prioritariamente la espiritualidad, la ecología y la salud
            </p>
            <h1 className='h10'>Misión</h1>
            <hr></hr>
            <p>Contribuir a la restauración de la imagen de Dios en el ser humano, promoviendo el desarrollo profesional y la vocación de servicio a la sociedad actual, a través de competencias distintivas y un contexto de excelencia.  </p>
              </div>

          </div>
        <div className='Contenedor1'>
          <div className='cuadro'>
            <img className='img6'src='https://cdn-icons-png.flaticon.com/512/5780/5780875.png'></img>
            <h1 className='h10'>Materia:</h1>
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
          </div>
    <div>
          
          </div>
       

    </div>
    
    <Footer/>
    </div>
  ) 
    
}
export default Materias;