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
import { heroOne, heroTwo, heroThree } from '../../../data/HeroData';
import Content from "./InfoPlanes/Content";
import { Heading } from "../../../globalStyles";

const Home = () => {


  //la logica
  return (
    <>
       
       <Hero/>
       
      
      <Profesionales />
       <CarouselHome />
       <Fade bottom>
       <Heading id="projects">Productos y Servicios</Heading>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
      <h1 className="text-center display-2 my-5  letra-titulo">Ellos nos siguen elijiendo</h1>
      <Comentarios/>
      <Publicidad/>
      
      <Clima />
       
      </Fade>
    </>
       
  );
};

export default Home;
