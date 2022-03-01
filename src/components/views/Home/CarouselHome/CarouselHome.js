import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <div>
        <Carousel  >
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel img-responsive "
              src="https://www.bankrate.com/2021/06/11161827/The-average-veterinarian-salary_-How-much-do-vets-make_.jpg?auto=webp&optimize=high&crop=16:9"
              alt="perros con veterinaria"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel img-responsive"
              src="https://www.aaha.org/globalassets/05-pet-health-resources/ask-aaha/ask_aaha_vetvisits_teaser.jpg"
              alt="perro con veterinaria 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel img-responsive"
              src="https://www.petparadise.com/files/4859/veterinary-hospital-in-charlotte.JPG"
              alt="perro con vet2"
            />
          </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default CarouselHome;
