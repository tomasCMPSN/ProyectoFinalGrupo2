import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Card/Cards";
import WelcomeToast from "./Card/WelcomeToast";

const AdminHome = () => {
  return (
    <Container className="mb-1 mt-1">
      <WelcomeToast />
      <div className="media-card">
        <Cards></Cards>
      </div>
    </Container>
  );
};

export default AdminHome;
