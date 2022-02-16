import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const SobreNostros = () => {
  return (
    <>
      <div className="container my-5">
        <Row xs={1} md={2} className="g-4">
          
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros" src="images/01.png" />
                
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros" src="images/02.png" />
                
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros" src="images/03.png" />
                
                  
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros" src="images/04.png" />
                
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" className="sobreNosotros" src="images/05.png" />
                
              </Card>
            </Col>
          
        </Row>
      </div>
    </>
  );
};

export default SobreNostros;
