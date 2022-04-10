import React from "react";
import { Carousel , Row, Col, Container} from "react-bootstrap";
import "./CarouselHome.css"

const CarouselHome = () => {
  return (
    <div className="BoxCarousel">
     

     
       
        <Carousel className="container"  >
          
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel   "
              src="https://i.postimg.cc/15XHsvT4/slide1.jpg"
              alt="perros con veterinaria"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel  "
              src="https://i.postimg.cc/y8SySk7H/slide2.jpg"
              alt="perro con veterinaria 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel  "
              src="https://i.postimg.cc/yYGTdF4j/slide3.jpg"
              alt="perro con vet2"
            />
          </Carousel.Item>
        </Carousel>
          
            
             
            
          
      
            
          
        
       
     

      
      
    </div>
  );
};

export default CarouselHome;
