import React from "react";
import Titulo from "../Components/Titulo";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Accordion3 from "../Components/Accordion3";
import Footer from "../Components/Footer";

const Profesores = () => {
  const [Profesor, setProfesor] = React.useState(null);
  const [ProfesorActivo, setProfesorActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(
    JSON.parse(localStorage.getItem("favoritos"))
  );

  React.useEffect(() => {
    if (!Profesor) {
      axios.get(`http://localhost:5000/Profesor`).then((res) => {
        setProfesor(res.data);
      });
    }
  }, []);

  const manejarClickLista = (id) => {
    setProfesorActivo(Profesor.find((el) => el.id === id));
  };

  return (
    <div className=".mainDiv">
      <Header />
      <div className="raya"></div>
      <div className="banner1">
        <img
          className="ban11"
          src="https://img.europapress.es/fotoweb/fotonoticia_20231005103145_690.jpg"
        ></img>
        <div className="baninfo">
          <h1 className="h7">Contamos con los mejores Profesionales</h1>
          <p>
            Cada profesor es especializado en su Area y se encargara de
            compartir su conocimiento con el estudiante ademas de darle una
            atencion de calidad
          </p>
          <button className="button4">Contactar</button>
        </div>
      </div>
      <div className="raya"></div>
      <div className="Contendor">
        <div className="Contenedor9">
          <h1 className="h10">Nos encargamos de hacerte un buen profesional</h1>
          <hr></hr>
          <p>
            La UNADECA ofrece una amplia gama de carreras de grado para cubrir
            la demanda de profesionales de la sociedad costarricense y ofrece a
            las y los estudiantes una formación académica, investigativa y
            humanista en cada una de sus diferentes escuelas. La Institución
            ofrece opciones de pregrados (Programas de Diplomado y Certificados
            de Especialización en Programas Especiales) e imparte más de un
            centenar de carreras de grado avaladas por el Centro de Evaluación
            Académica.
          </p>
          <h1 className="h10">Tenemos ofertas para vos</h1>
          <hr></hr>
          <p>
            El Club de Emprendedores Universitarios, consiste en un programa de
            educación continua a través del Colportaje Estudiantil. Mediante el
            cual los jóvenes se inscriben como misioneros, evangelistas de las
            publicaciones, y reciben capacitación, entrenamiento y asistencia
            para convertirse en Colportores estudiantes exitosos, capaces de
            financiar total y parcialmente su proyecto educativo en cualquiera
            de las carreras universitarias y así cumplir el sueño de sus vidas.{" "}
          </p>
        </div>

        <div className="Contenedor8">
          <h1 className="h11">Nuestros Profesores</h1>
          {Profesor
            ? Profesor.map((u, i) => {
                return (
                  <div key={i}>
                    <Accordion3 pop={u} />
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Profesores;
