import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

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
    <div className='.mainDiv'>
        <Header/>
    <div>
    <div className='raya'></div>     
    <div className='banner1'>
        <img  src='http://imgs.globovision.com/8VElMcM2kawSaM4RrffQrfDqa-k=/847x0/smart/59560fd968e94056bea61a7ef92f07f0' className='ban11'></img>
        <div className="baninfo">
              <h1 className='h0'>Contamos con los mejores Profesionales</h1>
              <p>Cada profesor es especializado en su Area y se encargara de compartir su conocimiento con el estudiante ademas de darle una atencion de calidad</p>
                <button className="button5">Contactar</button>
            </div></div>
        <div className='Contendor'>
          <div className='Contenedor4'>
             <div className='cuadro'>
              <h1 className='h10'>Profesor:</h1>
             <img className='img6' src='https://us.123rf.com/450wm/rastudio/rastudio1708/rastudio170808151/84739872-icono-de-l%C3%ADnea-de-vector-de-profesor-aislado-sobre-fondo-blanco-icono-de-l%C3%ADnea-de-profesor-para-info.jpg'>
             </img>{
              
              ProfesorActual ?
              <div>
                <p>Nombre: {ProfesorActual.nombre} {ProfesorActual.apellido}</p>
                <p>Facultad: {ProfesorActual.facultad_id}</p>
                <p>Materias:</p>
                <ul>
                  {
                    ProfesorActual.materias.map((el) => <div>
                      <div>
                        <li>Nombre: {el.nombre}</li>
                        <li>Carrera: {el.carrera}</li>
                        <li>Creditos: {el.creditos}</li>
                      </div>
                    </div>)
                    }
          </ul>
        </div>
        : 'Loading...'
      }
             </div>
            </div>
            <div className='Contenedor4'>
            <h1 className='h10'>Origen</h1>
            <hr></hr>
            <p>
            El origen de la Universidad Adventista de Centro América se remonta al año 1925, cuando la Iglesia Adventista del Séptimo Día estableció un Centro Educativo en la comunidad de las Cascadas, corregimiento de Pedregal, en la ciudad capital de Panamá. Digno de recordar al Pastor William Baxter quien propuso la fundación de una casa de estudios secundarios que gradualmente crecería y llegara a convertirse en columna y vida para la educación y la formación de la entusiasta juventud centroamericana. Con fe sencilla pero aferrada al brazo de la Omnipotencia, se da inicio a ese sueño con una significativa ceremonia en la que se mezclaron el canto y la plegaria, la emoción y el gozo, la audacia y la confianza, el ideal y el triunfo. Así nace la institución con el nombre descriptivo de: “Escuela Para Jóvenes de Habla Española”
            </p>
            <h1 className='h10'>Dato Curioso</h1>
            <hr></hr>
            <p>Bajo la dirección de C. F. Montgomery; en 1945 se tomó la decisión de cambiarle el nombre a la institución de “Academia Hispanoamericana Adventista” a COVAC (Colegio Vocacional Adventista de América Central). En 1948 se organizó la Asociación Estudiantil; en consecuencia da inicio la publicación de Eco Estudiantil, el cual ha sido desde entonces casi la única fuente de información para conocer la historia de este centro de estudios.  </p>
            </div>

        </div>
     
    </div> 

    <Footer/>
    </div>
  )
}
export default Profesor;