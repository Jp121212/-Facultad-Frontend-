import * as React from 'react';
import Box from '@mui/material/Box';


export default function Footer() {
  return (
    <footer className='footer'>
      <Box
        backgroundColor="#1e3260"
        color="white"
        height="100%"
    
        >
        <Box textAlign="center" padding="50px" >
        </Box>
     <Box textAlign="center" padding="0px" margin="0px" >
            Universidad Adventista de CentroAmerica &reg; {new Date().getFullYear()}<br></br>
            1.5 Km. al Norte de los Tribunales de Justicia, La Ceiba, Alajuela Apartado 138-4050 Alajuela, Costa Rica
          </Box>
      </Box>
    </footer>
  );
}