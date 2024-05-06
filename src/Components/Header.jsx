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
            <img className="img2" src="https://estudiacostarica.com/wp-content/uploads/2023/10/Logo-de-UNADECA.png">
            </img>
            <div className='juntar'>
              <h1 className='h3'>UNADECA</h1>
              <p className='h4'>Somos Especialistas en tu Desarrollo</p>
            </div>
            <div className='juntar1'>
              <a href='Facultades' className='button'>Facultades</a>
              <a href='Materias' className='buttons'>Materias</a>
              <a href='Profesores'className='buttons'>Profesores</a>
              <a href='Estudiantes'className='buttons'>Estudiantes</a>
              <a href='/' className='buttons'>Inicio</a>
            </div>
            
            
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;