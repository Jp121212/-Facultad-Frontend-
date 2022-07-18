import React from 'react';
import Titulo from '../Components/Titulo';
import axios from 'axios';
import {
  Outlet
} from 'react-router-dom'
import Header from '../Components/Header';
import Accordion1 from '../Components/Accordion1';
import Footer from '../Components/Footer';

const Facultades = () => {
  const [Facultad, setFacultad] = React.useState(null);
  const [FacultadActiva, setFacultadActiva] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

  React.useEffect(() => {
    if(!Facultad){
      axios.get(`https://jp-bd.herokuapp.com/facultad`)
        .then((res) => {
          setFacultad(res.data)
        })
    }
  }, [])

  const manejarClickLista = (id) => {
    setFacultadActiva(Facultad.find((el) => el.id === id));
  }


  
 





  
  console.log({favoritos})
  return(
    <div className='.mainDiv'>
        <Header/>
        <div className='raya'></div>
        <div className='banner1'>
          <img className='capa1' src='https://unadeca.ac.cr/home/wp-content/uploads/2018/08/MG_2169.jpg'></img>
        </div>
        <div className='Contendor'>
          <div className='Contenedor4'>
          <h1 className='h11'>Lista de Facultades</h1>
            {
            Facultad ?
            Facultad.map((u,i)=>{ 
              return(
                <div key={i}>
                  <Accordion1 pop={u}/> 
                </div>
              ) 

            }): 'Loading...'
          }
           </div> 
           <div>
            <div className='Contenedor5'>
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
           <div>
           
           </div>
        </div>
     
      <Footer></Footer>
    </div>
  );
}
export default Facultades;