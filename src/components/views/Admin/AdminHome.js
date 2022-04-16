import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import Cards from "./Card/Cards";
import {useNavigate} from 'react-router-dom'

const AdminHome = () => {

  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;

  const checkSession=()=>{
    if (!session) {
      redirect("/Login");
    }      
  }

  useEffect(()=>{
    checkSession();
  },[]);

  return (
    <Container className="mb-1 mt-1">
      
     
      <div className="media-card">
        <Cards></Cards>
      </div>
    </Container>
  );
};

export default AdminHome;
