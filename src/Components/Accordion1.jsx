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
        > <img className='img6'src="https://c0.klipartz.com/pngpicture/1016/75/gratis-png-ilustracion-del-icono-humano-azul-tres-reunion-junta-directiva-icono-de-gestion-de-agenda-gente-de-negocios-azul-ppt.png"></img>
          <Typography color='#c5981b' marginLeft={1}> {props.pop.nombre}</Typography>
        </AccordionSummary>
        <AccordionDetails className='espacio'>
          <Typography component={'span'}>
            <div>
            <p>Nombre: {props.pop.nombre}</p>
            <p>Nombre Decano: {props.pop.nombre_decano}</p>
            <p>Abreviacion: {props.pop.Abreviacion}</p>
          <p>Materias:</p>
          <ul>
            {
              props.pop.materias.map((el) => <div>
                <li>{el.nombre}</li>
              </div>)
            }
          </ul>
          <p>Profesores:</p>
          <ul>
            {
              props.pop.profesores.map((el) => <div>
                <li>{el.nombre} {el.apellido}</li>
              </div>)
            }
           </ul>   
            </div>
          
            
            
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      
    </div>
  );
}