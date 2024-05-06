import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
  return (
    <div>
      <Accordion className='espacio'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" 
        > <img className='img6'src="https://cdn-icons-png.flaticon.com/512/2421/2421033.png"></img>
          <Typography color='#c5981b' marginLeft={1}> {props.pop.nombre}</Typography>
        </AccordionSummary>
        <AccordionDetails className='espacio'>
          <Typography component={'span'}>
         
        <div>
          <p>Nombre: {props.pop.nombre}</p>
          <p>Carrera: {props.pop.carrera}</p>
          <p>Creditos: {props.pop.creditos}</p>
          <p>Codigo: {props.pop.codigo}</p>
        
        </div>
      
            
            
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      
    </div>
  );
}