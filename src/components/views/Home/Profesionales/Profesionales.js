import React from 'react';
import { Container } from '../../../../globalStyles';
import { featuresData } from "../../../data/FeaturesData";
import "./Profesionales.css";
import { FeatureColumn, FeatureImageWrapper, FeatureName, FeatureSection, FeatureText, FeatureTextWrapper, FeatureTitle, FeatureWrapper } from "./ProfesionalesStyles";


const Profesionales = () => {
  return (
    // <Container className="mb-3 ">
    //   <Row>
    //     <Col sm={12} md={6} lg={3} className="mb-4">
    //       <Container className="d-flex justify-content-center">

    //       <Card
    //         style={{ width: "30rem", height: "35rem" }}
    //         className="sombras-pro"
    //         >
    //         <Card.Img 
    //           variant="top"
    //           src="https://drive.google.com/uc?export=download&id=19nOCM4EBm2SrLT-Gi1UNZh60REO8QnEE"
    //           alt="Dra.Minujin"
    //           className="img-responsive img-card-pro"
    //           />
    //         <Card.Body>
    //           <Card.Title className="text-center letra-pro ">
    //            <h3> <strong>Dra. Marta Minujin</strong>  </h3>
    //           </Card.Title>
    //           <Card.Text className="text-center">
    //           <strong> Apasionada por su profesión, siempre dispuesta a dar lo mejor.</strong>
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //         </Container>
    //     </Col>

    //     <Col sm={12} md={6} lg={3} className="mb-4">
    //       <Container className="d-flex justify-content-center">

    //       <Card
    //         style={{ width: "30rem", height: "35rem" }}
    //         className="sombras-pro"
    //       >
    //         <Card.Img
    //           variant="top"
    //           src="https://drive.google.com/uc?export=download&id=1_mHamCsZFmM0fMJTPeD1z8HH8AbrSfqQ"
    //           alt="Dr.Ignacio Jorge"
    //           className="img-responsive img-card-pro"
    //         />
    //         <Card.Body>
    //           <Card.Title className=" text-center letra-pro ">
    //             <h3><strong>  Dr. Ignacio Jorge</strong> </h3>{" "}
    //           </Card.Title>
    //           <Card.Text className="text-center">
    //            <strong> El amor por los animales lo llevó a dedicar su vida a ellos. </strong>
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //       </Container>

    //     </Col>

    //     <Col sm={12} md={6} lg={3} className="mb-4">
    //       <Container className="d-flex justify-content-center">

    //       <Card
          
    //         style={{ width: "30rem", height: "35rem" }}
    //         className="sombras-pro"
    //       >
    //         <Card.Img
    //           variant="top"
    //           src="https://drive.google.com/uc?export=download&id=1T3rH4LDE-ZyuEtTRKD2uR75i7mYQT5ib"
    //           alt="estudiante de veterinaria"
    //           className="img-responsive img-card-pro"
    //         />
    //         <Card.Body>
    //           <Card.Title className="text-center letra-pro ">
    //             <h3> <strong> Paula Medina</strong> </h3> {" "}
    //           </Card.Title>
    //           <Card.Text className="text-center">
    //           <strong>Estudiante de veterinaria, ama aprender y colaborar en Paws & Claws.</strong> 
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //       </Container>

    //     </Col>

    //     <Col sm={12} md={6} lg={3} className="mb-4">
    //       <Container className="d-flex justify-content-center">

    //       <Card
    //         style={{ width: "30rem", height: "35rem" }}
    //         className="sombras-pro"
    //       >
    //         <Card.Img
    //           variant="top"
    //           src="https://drive.google.com/uc?export=download&id=1c4VRqWXe2aAaZT0ZfD974vhkoXzjLPC_"
    //           alt="estudiante de veterinaria"
    //           img="img-responsive"
    //         />
    //         <Card.Body>
    //           <Card.Title className="text-center letra-pro">
    //           <h3><strong>Micaela Arana </strong>  </h3>
    //           </Card.Title>
    //           <Card.Text className="text-center">
    //            <strong> Estudiante de veterinaria, feliz de aprender día a día.</strong>
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //       </Container>

    //     </Col>
    //   </Row>
    // </Container>

    <FeatureSection id="about">
			<Container>
      <p className="lead display-3 text-center my-5 letra-titulo">
      Cuidando a tus mascotas por más de 45 años</p>
				<FeatureTextWrapper>
					<FeatureTitle>What We Do</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<FeatureColumn key={index}>
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</FeatureSection>
  );
};

export default Profesionales;
