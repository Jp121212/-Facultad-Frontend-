import React from 'react';
import Titulo from '../Components/Titulo';
import axios from 'axios';
import {
  Outlet
} from 'react-router-dom'
import Header from '../Components/Header';
import Accordion3 from '../Components/Accordion3';
import Footer from '../Components/Footer';

const Profesores = () => {
  const [Profesor, setProfesor] = React.useState(null);
  const [ProfesorActivo, setProfesorActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

  React.useEffect(() => {
    if(!Profesor){
      axios.get(`https://jp-bd.herokuapp.com/Profesor`)
        .then((res) => {
          setProfesor(res.data)
        })
    }
  }, [])

  const manejarClickLista = (id) => {
    setProfesorActivo(Profesor.find((el) => el.id === id));
  }

 





  
 
  return(
    <div className='.mainDiv'>
        <Header/>
      <div className='raya'></div>     
      <div className='banner1'> 
          <img className='ban11' src='https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/241515621_6194628477279160_8513415961040256473_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Keh7f3s0OKMAX9dDI5x&_nc_ht=scontent.fsjo15-1.fna&oh=00_AT_35RSuKIzrkoZCjX7h2PWbIH9nILyJCMoZ3Sy2AZ-OoA&oe=62DA5FBC'></img>
          <div className="baninfo">
              <h1 className='h0'>Contamos con los mejores Profesionales</h1>
              <p>Cada profesor es especializado en su Area y se encargara de compartir su conocimiento con el estudiante ademas de darle una atencion de calidad</p>
                <button className="button5">Contactar</button>
            </div>    
      </div>   
      <div className='Contendor'>
         <div className='Contenedor9'>
    
          <img className='img8' src='https://scontent.fsjo15-1.fna.fbcdn.net/v/t1.6435-9/209655752_5901701753238502_1570173186011512223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=7HZW37jX9D0AX8JKWa6&_nc_ht=scontent.fsjo15-1.fna&oh=00_AT-J-R2Zok9A4YN2IdS4cR5bq_gCIrcXQa6gCsEHnftrtQ&oe=62FA45DA'></img>
          </div>



         <div className='Contenedor8'>
          <h1 className='h11'>Nuestros Profesores</h1>
            {
            Profesor ?
            Profesor.map((u,i)=>{ 
              return(
                <div key={i}>
                  <Accordion3 pop={u}/> 
                </div>
              ) 

            }): 'Loading...'
          }
           </div> 
        
        
        </div>
    
      <Footer/>
     
    </div>
  );
}
export default Profesores;