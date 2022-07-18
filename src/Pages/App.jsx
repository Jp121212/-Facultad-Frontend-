import logo from '../logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const App = () => {

  return (
    <div>
          <Header/>
     <div className='raya'></div>     
    <div className='banner'>
        <img src='https://unadeca.ac.cr/home/wp-content/uploads/2021/02/portada.jpg' className='ban'></img>
        <div className="baninfo">
              <h1 className='h7'>Aprende continuamente con Nosotros y Progresa!</h1>
              <p>Empieza hoy mismo con tu carrera y cumple tus sueños de ser un profesional, desde
                precios muy cómodos y accesibles y además de contar con profesores de clase alta
                y galardonados en su área, No esperes más y matricúlate ya!</p>
                <button className="buttoninfo">Matriculate ya!</button>
            </div>
    </div>
    <div className='Contendor'>
      <div className='Contenedor1'>
        <div className='contacto'>
          <h1 className='h10'>Contacto
          </h1>
           <p>Puedes ponerte en contacto con nosotros usando cualquiera de los siguientes recursos:</p>
           <div className='detalle'><img className='img5' src='http://unadeca.ac.cr/home/wp-content/uploads/2018/08/UNADECA_Email.jpg'></img>  
            <p className='p1'>mercadeo@unadeca.net / unadeca010@gmail.com</p>
            </div>
            <div className='detalle'><img className='img5' src='http://unadeca.ac.cr/home/wp-content/uploads/2018/08/UNADECA_Teelefono.jpg'></img>          
            <p className='p1'>+506 2436-3300</p>
            </div>
            <div className='detalle'><img className='img5' src='http://unadeca.ac.cr/home/wp-content/uploads/2018/08/UNADECA_WhatsApp.jpg'></img>          
            <p className='p1'>+506 63316083</p>
            </div>
            <div className='detalle'><img className='img5' src='http://unadeca.ac.cr/home/wp-content/uploads/2018/08/UNADECA_WebSite.jpg'></img>          
            <p className='p1'>Horario de Oficina 8:00 am-12:00 pm / 1:00 pm-5:00 pm</p>
            </div>
        </div>
      </div>
      <div className='Contenedor2'>
         <div className='carrera'>
           <div className="card">
                <img className='imgcard' src='https://cdn-icons-png.flaticon.com/512/1085/1085821.png'
                ></img>
                <h3 className='h8'>Ingeniería en Sistemas</h3>
                <p>Aplica tus habilidades para diseñar,crear e implementar soluciones que optimizen procesos empresariales. </p>
                <button className="button4">Matricular</button>
            </div>
            <div className="card1">
                <img  className='imgcard'src="https://cdn-icons-png.flaticon.com/512/4257/4257473.png" ></img>
                <h3 className="h9">Ingeniería Eléctrica</h3>
                <p>Aplica los conocimientos y habilidades para armar  circuitos electrónicos y mas. </p>
                <button className="button5">Matricular</button>
            </div>
            <div className="card1">
                <img className='imgcard' src="https://cdn-icons-png.flaticon.com/512/2719/2719650.png"></img>
                <h3 className="h9">Medicina</h3>
                <p>Nuestro programa de Medicina integra de manera secuencial las ciencias básicas y clínica. </p>
                <button className="button5">Matricular</button>
            </div>  
            <div className="card">
                <img className='imgcard' src="https://cdn-icons-png.flaticon.com/512/2422/2422760.png"></img>
                <h3 className='h8'> Administración</h3>
                <p>Es una de nuestras carreras que, con liderazgo estratégico y empresarial, fue de las primeras.</p>
                <button className="button4">Matricular</button>
            </div>
         </div>  
      </div> 
    </div>
     <Footer/>
    </div>
  );
}

export default App;