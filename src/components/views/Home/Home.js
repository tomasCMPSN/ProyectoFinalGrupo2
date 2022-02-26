import React from "react";
import CarouselHome from "./CarouselHome/CarouselHome";
import Clima from "./Clima/Clima";
import InfoPlanes from "./InfoPlanes/InfoPlanes";
import Productos from "./Productos/Productos";
import Profesionales from "./Profesionales/Profesionales";
import Publicidad from "./Publicidad/Publicidad"
import Comentarios from "./Comentarios/Comentarios"


const Home = () => {


  //la logica
  return (
    <div>
      
      <CarouselHome />
      <p className="lead display-1 text-center mb-3 mt-2">
        "Cuidando a tus mascotas por más de 45 años."
      </p>
      <h1 className="text-center display-2 mb-3">Planes</h1>
      <InfoPlanes />
      <h1 className="text-center display-2 my-5 mb-3 mt-3">productos</h1>
      <Productos />
      <h1 className="text-center display-2 my-5 mb-3 mt-3">Nuestros profesionales</h1>
      <Profesionales />
      <h1 className="text-center display-2 my-5 mb-3 mt-3">Ellos ya nos eligieron</h1>
      <Comentarios/>
      <Publicidad/>
      <Clima />
    </div>
  );
};

export default Home;
