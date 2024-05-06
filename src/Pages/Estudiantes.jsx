import React from 'react';
import Titulo1 from '../Components/Titulo';
import axios from 'axios';
import {
  Outlet
} from 'react-router-dom'
import Header from '../Components/Header';
import '../Components/App.css'
import  Accordion  from '../Components/Accordions';
import Footer from '../Components/Footer';

const Estudiantes = () => {
  const [Estudiante, setEstudiante] = React.useState(null);
  const [EstudianteActivo, setEstudianteActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

  React.useEffect(() => {
    if(!Estudiante){
      axios.get(`http://localhost:5000/estudiante`)
        .then((res) => {
          setEstudiante(res.data)
          console.log(res.data)
        })
    }
  }, [])

  const manejarClickLista = (id) => {
    setEstudianteActivo(Estudiante.find((el) => el.id === id));
  }

  

  
  
  




  
  console.log({favoritos})
  return(
    <div className='.mainDiv'>
        <Header/>
        <div className='raya'></div>     
        <div className='banner1'>
          <img className='' src='https://unadeca.ac.cr/home/wp-content/uploads/2021/02/DSC04815.jpg'></img>
        </div>

        <div className='raya'></div>     
        <div className='Contendor'>
          <div className='Contenedor1'>
            <h1 className='h10'>Nos encargamos de hacerte un buen profesional</h1>
            <hr></hr>
            <p>
            La UNADECA ofrece una amplia gama de carreras de grado para cubrir la demanda de profesionales de la sociedad costarricense y ofrece a las y los estudiantes una formación académica, investigativa y humanista en cada una de sus diferentes escuelas. La Institución ofrece opciones de pregrados (Programas de Diplomado y Certificados de Especialización en Programas Especiales) e imparte más de un centenar de carreras de grado avaladas por el Centro de Evaluación Académica.
            </p>
            <h1 className='h10'>Tenemos ofertas para vos</h1>
            <hr></hr>
            <p>El Club de Emprendedores Universitarios, consiste en un programa de educación continua a través del Colportaje Estudiantil. Mediante el cual los jóvenes se inscriben como misioneros, evangelistas de las publicaciones, y reciben capacitación, entrenamiento y asistencia para convertirse en Colportores estudiantes exitosos, capaces de financiar total y parcialmente su proyecto educativo en cualquiera de las carreras universitarias y así cumplir el sueño de sus vidas.  </p>
          </div> 
          <div className='Contenedor1'>
            <h1 className='h11'>Lista de Estudiantes</h1>
            {
            Estudiante ?
            Estudiante.map((u,i)=>{ 
              return(
                <div key={i}>
                  <Accordion pop={u}/>
                </div>
              ) 

            }): 'Loading...'
          }
          </div>
        </div>
        <Footer></Footer>




   
    </div>
  );
}
export default Estudiantes;