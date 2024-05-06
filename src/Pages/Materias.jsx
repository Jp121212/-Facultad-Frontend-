import React from 'react';
import Titulo from '../Components/Titulo';
import axios from 'axios';
import {
  Outlet
} from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Accordion2 from '../Components/Accordion2';

const Materias = () => {
  const [Materia, setMateria] = React.useState(null);
  const [MateriaActiva, setMateriaActiva] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

  React.useEffect(() => {
    if(!Materia){
      axios.get(`http://localhost:5000/Materia`)
        .then((res) => {
          setMateria(res.data)
        })
    }
  }, [])

  const manejarClickLista = (id) => {
    setMateriaActiva(Materia.find((el) => el.id === id));
  }

  return(
    <div className='.mainDiv'>
        <Header/>
        <div className='raya'></div>
        <div className='banner13'>
        
          <img className='capa3' src='https://unadeca.ac.cr/home/wp-content/uploads/2018/08/Ingenieria_UNADECA.jpg'></img>
          <div className='baninfo'>
            <h1 className='h7'>Porque Somos confianza</h1>
              <p>Empieza hoy mismo tu matricula con un curso adaptado a tus especiales contamos con una carga academica de un total de 18 creditos, no pienses mas y matriculate</p>
                <button className="button4">Agenda tu cita</button>
          </div>
        </div>
        <div className='raya'></div>
    <div>
      <div className='Contendor'>
         <div className='Contenedor1'>
          <h1 className='h11'>Lista de Materias</h1>
            {
            Materia ?
            Materia.map((u,i)=>{ 
              return(
                <div key={i}>
                  <Accordion2 pop={u}/> 
                </div>
              ) 

            }): 'Loading...'
          }
           </div> 
           <div className='Contenedor1'>
           <div className='Contenedor4'>
            <h1 className='h10'>Nos encargamos de hacerte un buen profesional</h1>
            <hr></hr>
            <p>
            La UNADECA ofrece una amplia gama de carreras de grado para cubrir la demanda de profesionales de la sociedad costarricense y ofrece a las y los estudiantes una formación académica, investigativa y humanista en cada una de sus diferentes escuelas. La Institución ofrece opciones de pregrados (Programas de Diplomado y Certificados de Especialización en Programas Especiales) e imparte más de un centenar de carreras de grado avaladas por el Centro de Evaluación Académica.
            </p>
            <h1 className='h10'>Tenemos ofertas para vos</h1>
            <hr></hr>
            <p>El Club de Emprendedores Universitarios, consiste en un programa de educación continua a través del Colportaje Estudiantil. Mediante el cual los jóvenes se inscriben como misioneros, evangelistas de las publicaciones, y reciben capacitación, entrenamiento y asistencia para convertirse en Colportores estudiantes exitosos, capaces de financiar total y parcialmente su proyecto educativo en cualquiera de las carreras universitarias y así cumplir el sueño de sus vidas.  </p>
              </div>

           </div>
      </div>
   
    </div>
    <Footer></Footer>
    </div>
  );
}
export default Materias;