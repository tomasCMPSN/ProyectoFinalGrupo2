import React from "react";
import CarouselHome from "./CarouselHome/CarouselHome";
import Clima from "./Clima/Clima";
import InfoPlanes from "./InfoPlanes/InfoPlanes";
import Productos from "./Productos/Productos";
import Profesionales from "./Profesionales/Profesionales";
import Publicidad from "./Publicidad/Publicidad"
import Comentarios from "./Comentarios/Comentarios"
import Servicios from "./Servicios/Servicios"
import "./Home.css"

const Home = () => {


  //la logica
  return (
    <div>
      
      <CarouselHome />
      <p className="lead display-3 text-center mb-3 mt-2 letra">
      Cuidando a tus mascotas por más de 45 años
        
      </p>
      <Profesionales />
      <h1 className="text-center display-2 mb-3 letra">Planes</h1>
      <InfoPlanes />
      <h1 className="text-center display-2 my-5 mb-3 mt-3 letra">productos</h1>
      <Productos />
      <h1 className="text-center display-2 my-5 mb-3 mt-3 letra">Tambien contamos con esto servicios</h1>
      <Servicios />
      
      
      <h1 className="text-center display-2 my-5 mb-3 mt-3 letra">Ellos ya nos eligieron</h1>
      <Comentarios/>
      <Publicidad/>
      <Clima />
    </div>
  );
};

export default Home;
