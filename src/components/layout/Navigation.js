import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import logo from "../../components/img/logo.png";
import "./Navigation.css";

const Navigation = () => {
  let session = JSON.parse(sessionStorage.getItem("stateSession") || false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (session) {
      session = false;
      sessionStorage.setItem("stateSession", JSON.stringify(session));
     
 
      let timerInterval;
      Swal.fire({
        title: "Cerrando sesion",
        
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate("/");
        }
      });
    }
  };
  return (
    <div>
      <Navbar expand="lg" className="background-nav navbar-customclass"  >
        <Container>
          <Navbar.Brand href="/" className="fs-2 ">
            <img
              alt="logo"
              src={logo}
              className="d-inline-block logo "
            />{" "}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto"> 
            {session ? (
              <>
            <Nav.Link className="nav-link fs-4" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link fs-4" href="/SobreNosotros">Nosotros</Nav.Link>
            <Nav.Link className="nav-link fs-4" href="/admin">Administrador</Nav.Link>
            <Nav.Link onClick={handleLogOut}className="nav-link fs-4 text-warning" >Log Out</Nav.Link>
            
            </>
              ):(
                <>
                <Nav.Link className="nav-link fs-4" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link fs-4" href="/SobreNosotros">Nosotros</Nav.Link>
            <Nav.Link className="nav-link fs-4 text-warning" href="/login">Login</Nav.Link>
                </>
              )  }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
