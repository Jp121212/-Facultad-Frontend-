import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import "../Components/App.css";
import Footer from "../Components/Footer";

const Estudiante = () => {
  const [EstudianteActual, setEstudiante] = useState(null);
  let { idEstudiante } = useParams();
  useEffect(() => {
    if (!EstudianteActual) {
      axios
        .get(`http://localhost:5000/estudiante/${idEstudiante}`)
        .then((res) => {
          setEstudiante(res.data);
        });
    }
  }, []);
  console.log(EstudianteActual);
  return (
    <div className="">
      <Header />
      <div className="raya"></div>
      <div className="Contendor">
        <div className="Contenedor1">
          <div className="cuadro">
            {EstudianteActual ? (
              <div>
                <img
                  className="img6"
                  src="https://rajadhanicareeracademy.com/img/education.jpg"
                ></img>
                <h1 className="h10">Informacion del estudiante:</h1>
                <p>Nombre: {EstudianteActual.primer_nombre}</p>
                <p>Apellido: {EstudianteActual.primer_apellido}</p>
                <p>Pais: {EstudianteActual.pais_origen}</p>
                <p>Edad: {EstudianteActual.edad}</p>
                <p>Carrera: {EstudianteActual.carrera}</p>
                <p>Numero de Facultad: {EstudianteActual.facultad_id}</p>
                <p>Deuda Ciclo: {EstudianteActual.deuda_ciclo_actual}</p>
                <p>Moroso: {EstudianteActual.es_moroso}</p>
                <p>
                  ID de Materias:
                  <ul>
                    {EstudianteActual.materias.map((el) => (
                      <div>
                        <li>{el.materia_id}</li>
                      </div>
                    ))}
                  </ul>
                </p>
              </div>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
        <div className="Contenedor1">
          <img
            className="img7"
            src="https://unadeca.ac.cr/home/wp-content/uploads/2018/08/Mate_Unadeca.jpg"
          ></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Estudiante;
