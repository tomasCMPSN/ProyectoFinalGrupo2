import React, { useState, useEffect } from "react";
import { Container, Form , Breadcrumb} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateEmail,
  validateNumber,
  validatePaciente,
} from "../../helpers/ValidateForms";

const PacienteCreate = ({ DBP, getPatient }) => {
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




  // states
  const [paciente, setPaciente] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [duenio, setDuenio] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

//   Use Navigate
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion de datos
    if (
      !validatePaciente(paciente) ||
      !validatePaciente(especie) ||
      !validatePaciente(raza) ||
      !validatePaciente(duenio) ||
      !validateEmail(email) ||
      !validateNumber(peso) ||
      !validateNumber(telefono) || !validateNumber(dni) ||
      !validateNumber(edad)
    ) {
        Swal.fire("Error", "Verificar los datos", "error");
      return;
    }
    // Se envian datos para guardar
    const newPacient = {
      paciente,
      especie,
      raza,
      edad,
      peso,
      duenio,
      dni,
      telefono,
      email,
    };
    Swal.fire({
      title: "Guardar Paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#56ced6",
      cancelButtonColor: "#ffc872",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Guardar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          
          const res = await fetch(DBP, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPacient),
          });
          if(res.statusCode === 201){
            Swal.fire(
                "Creado!",
                "Su Paciente fue asignado correctamente",
                "success"
              );

          }
        } catch (error) {}
        Swal.fire("Guardado", "Se guardó el paciente", "success");
        getPatient();
        navigate("/paciente/table");
      }
    });
  };

  return (
    <div>
      <Container >
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">Administrador</Breadcrumb.Item>
        <Breadcrumb.Item href="/paciente/table">
          Pacientes
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Nuevo paciente</Breadcrumb.Item>
      </Breadcrumb>
      <article className="botones-back">
        <Link to="/turnostable" className="my-2 ">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Ir a turnos</span>
          </button>
        </Link>
       
  
      </article>
      <article className="title-style-form">
        <h1 className="title-h1">Administrador de pacientes</h1>
        <hr />
      </article>
        {/* Form Product */}
        <article className="d-flex justify-content-center mb-5 ">
        <Form className="mb-5 form_style" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='etiqueta'>🐶 Nombre Paciente*</Form.Label>
            <Form.Control
          
              type="text"
              placeholder="..."
              onChange={({ target }) => setPaciente(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='etiqueta'>🦄 Especie*</Form.Label>
            <Form.Select onChange={({ target }) => setEspecie(target.value)}>
              <option value="">Selecciona una opción</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo">Conejo</option>
              <option value="Ave">Ave</option>
              <option value="Otros">Otros</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='etiqueta'>🐰 Raza*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setRaza(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className='etiqueta'>🔞 Edad*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setEdad(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className='etiqueta'>⚖️ Peso*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gr"
              onChange={({ target }) => setPeso(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className='etiqueta'>👩🏽‍🎤 Dueño*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setDuenio(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className='etiqueta'>🆔 Dni*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setDni(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className='etiqueta'>📱 Telefono*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setTelefono(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='etiqueta'>📩 Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setEmail(target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <button className="btn-carga">Guardar</button>
          </div>
        </Form>
        </article>
      </Container>
    </div>
  );
};

export default PacienteCreate;
