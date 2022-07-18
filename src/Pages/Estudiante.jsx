import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import '../Components/App.css';
import Footer from '../Components/Footer';

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
    <div className='.mainDiv'>
        <Header/>
        <div className='raya'></div>     
    <div className='banner1'>
        <img src='https://img.freepik.com/foto-gratis/estudiante-masculino-vista-frontal-camiseta-roja-mochila-mascara-esteril-negra-sosteniendo-cuadernos-sobre-fondo-azul_140725-40786.jpg?size=626&ext=jpg&ga=GA1.2.1393680172.1658130471' className='ban'></img>
        <div className="baninfo">
              <h1 className='h7'>Porque Somos confianza</h1>
              <p>Empieza hoy mismo tu matricula con un curso adaptado a tus especiales contamos con una carga academica de un total de 18 creditos, no pienses mas y matriculate</p>
                <button className="button4">Agenda tu cita</button>
            </div></div>
        <div className='Contendor'>
        <div className='Contenedor1'>
           <div className='cuadro'>
      {
        EstudianteActual ?
        <div>
          <img className='img6' src='https://rajadhanicareeracademy.com/img/education.jpg'>
          </img>
          <h1 className='h10'>Informacion del estudiante:</h1>
          <p>Nombre: {EstudianteActual.primer_nombre}</p>
          <p>Apellido: {EstudianteActual.primer_apellido}</p>
          <p>Pais: {EstudianteActual.pais_origen}</p>  
          <p>Edad: {EstudianteActual.edad}</p>
          <p>Carrera: {EstudianteActual.carrera}</p>
          <p>Numero de Facultad: {EstudianteActual.facultad_id}</p>
          <p>Deuda Ciclo: {EstudianteActual.deuda_ciclo_actual}</p>
          <p>Moroso: {EstudianteActual.es_moroso}</p>
          <p>ID de Materias:
          <ul>
            {
              EstudianteActual.materias.map((el) => <div>
                <li>{el.materia_id}</li>
              </div>)
              }
          </ul>
            </p>          
        </div>
        : 'Loading...'
        }
        </div> 
        
        </div>
         <div className='Contenedor1'>
          <img className='img7'src='https://unadeca.ac.cr/home/wp-content/uploads/2018/08/Mate_Unadeca.jpg'></img>
        </div>
          </div>    
    <Footer></Footer> 
    
    </div>
    
  )
}
export default Estudiante;