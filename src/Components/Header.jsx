import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import './App.css';

const Header = () => {
  return(
    <Box className='header'>
      <AppBar  position="static">
        <Toolbar className='header' >
            <img className="img2" src="https://unadeca.ac.cr/moodle/pluginfile.php/1/theme_lambda/logo/1603473903/Unadeca_Manual_Web-5.png">
            </img>
            <div className='juntar'>
              <h1 className='h3'>UNADECA</h1>
              <p className='h4'>Somos Especialistas en tu Desarrollo</p>
            </div>
            <div className='juntar1'>
              <a href='Facultades' className='button'>Facultades</a>
              <a href='Materias' className='button1'>Materias</a>
              <a href='Profesores'className='button1'>Profesores</a>
              <a href='Estudiantes'className='button1'>Estudiantes</a>
              <a href='/' className='button1'>Inicio</a>
            </div>
            
            
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;