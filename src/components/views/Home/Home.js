import React from "react";
import Hero from "./Hero/Hero"
import CarouselHome from "./CarouselHome/CarouselHome";
import Clima from "./Clima/Clima";
import InfoPlanes from "./InfoPlanes/InfoPlanes";
import Productos from "./Productos/Productos";
import Profesionales from "./Profesionales/Profesionales";
import Publicidad from "./Publicidad/Publicidad"
import Comentarios from "./Comentarios/Comentarios"
import Servicios from "./Servicios/Servicios"
import "./Home.css"
import Fade from "react-reveal/Fade";

const Home = () => {


  //la logica
  return (
    <div>
       <Fade bottom>
       <Hero />
       <CarouselHome />
       </Fade>
       <Fade bottom>
       <div className="container ">
      <p className="lead display-3 text-center my-5 letra-titulo">
      Cuidando a tus mascotas por más de 45 años</p>
      
      <Profesionales />
      <h1 className="text-center display-2 my-5 letra-titulo">Planes</h1>
      
      <InfoPlanes />
      <h1 className="text-center display-2 my-5  letra-titulo">Productos</h1>
      <Productos />
      <h1 className="text-center display-2 my-5   letra-titulo">Servicios</h1>
      <Servicios />    
      <h1 className="text-center display-2 my-5  letra-titulo">Ellos nos siguen elijiendo</h1>
      <Comentarios/>
      <Publicidad/>
      </div> 
      <Clima />
       
      </Fade>
    </div>
       
  );
};

export default Home;
