import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./SobreNosotros.css"

const SobreNostros = () => {
  return (
    <>
    <Row className="container-fluid">
        <Col sm={12} md={6} className="mb-4 mt-4">
        <div className="">
          
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros img-responsive " src="images/01.png" />
                
              </Card>
              </Col>
              </div>
            </Col>
            
            
            <Col sm={12} md={6} className="mb-4 mt-4">
        <div className="">
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros img-responsive" src="images/02.png" />
                
              </Card>
            </Col>
            </div>
            </Col>
            </Row>
            
            <Row className="container-fluid">
        <Col sm={12} md={6} className="mb-4">
        <div className="">
        <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros img-responsive" src="images/03.png" />
                
                  
              </Card>
            </Col>
            </div>
            </Col>
            <Col sm={12} md={6} className="mb-4">
        <div className="">
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros img-responsive" src="images/04.png" />
                
              </Card>
            </Col>
            </div>
            </Col>
            </Row>
            
            
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros img-responsive" src="images/05.png" />
                
              </Card>
            </Col>
          
      
      
    </>
  );
};

export default SobreNostros;
