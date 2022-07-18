import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import Facultades from './Pages/Facultades';
import Facultad from './Pages/Facultad';
import Estudiante from './Pages/Estudiante';
import Estudiantes from './Pages/Estudiantes';
import Profesores from './Pages/Profesores';
import Profesor from './Pages/Profesor';
import Materia from './Pages/Materia';
import Materias from './Pages/Materias';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="facultades" element={<Facultades/>} />
      <Route path='facultades/:idFacultad' element={<Facultad/>}></Route>
      <Route path='estudiantes' element={<Estudiantes/>}></Route>
      <Route path='estudiantes/:idEstudiante' element={<Estudiante/>}></Route>
      <Route path='profesores' element={<Profesores/>}></Route>
      <Route path='profesores/:idProfesor' element={<Profesor/>}></Route>
      <Route path='materias' element={<Materias/>}></Route>
      <Route path='materias/:idMateria' element={<Materia/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
