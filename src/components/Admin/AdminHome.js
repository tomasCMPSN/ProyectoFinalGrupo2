import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Cards from './Card/Cards'
import WelcomeToast from './Card/WelcomeToast'

const AdminHome = () => {
  return (
    
      <Container>
        <WelcomeToast/>
        <Cards></Cards>

      </Container>
    
  );
};

export default AdminHome;