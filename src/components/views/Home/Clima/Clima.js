import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./clima.css"

const Clima = () => {
  const [clima, setClima] = useState([]);
  const [icono, setIcono] = useState({});
  const [temperatura, setTemperatura] = useState("");

  window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d500a2c7d60e12d182ae94e55b3fcf60`;

        fetch(api)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setClima(data);
            setIcono(data.weather[0]);
            setTemperatura(Math.round(data.main.feels_like-273));
          });
      });
    }
  });

  return (
    <div className="d-flex justify-content-center container-fluid clima ">
      <Row className="align-items-center">
        <Col>
          <p className="mt-3">{clima.name}</p>
        </Col>
        <Col>
          <img
            src={`http://openweathermap.org/img/wn/${icono.icon}@2x.png`}
            alt="Clima"
          />
        </Col>
        <Col>{temperatura}ºC</Col>
        <Col>{icono.main}</Col>
      </Row>
    </div>
  );
};

export default Clima;