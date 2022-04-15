import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
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
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Nuevo Paciente</h1>
          <hr />
          <Link 
            to="/paciente/table"
            className="btn-addback text-decoration-none text-center"
          >
            Volver a Pacientes
          </Link>
        </div>
        {/* Form Product */}
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre Paciente*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setPaciente(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Especie*</Form.Label>
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
            <Form.Label>Raza*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setRaza(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Edad*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setEdad(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Peso*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gr"
              onChange={({ target }) => setPeso(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Dueño*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setDuenio(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Dni*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setDni(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Telefono*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setTelefono(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={({ target }) => setEmail(target.value)}
            />
          </Form.Group>

          <div className="text-end">
            <button className="btn btn-addsave">Guardar</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default PacienteCreate;
