import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/views/Home/Home";
import AdminHome from "./components/views/Admin/AdminHome";
import Footer from "./components/layout/Footer";
import Login from "./components/views/Home/Login/Login";
import Contacto from "./components/views/Home/Contacto/Contacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TurnosCreate from "./components/views/turnos/TurnosCreate";
import TurnosTable from "./components/views/turnos/TurnosTable";
import TurnosEdit from "./components/views/turnos/TurnosEdit";
import PacienteTable from "./components/views/paciente/PacienteTable";
import PacienteCreate from "./components/views/paciente/PacienteCreate";
import Planes from "./components/views/planes/Planes";
import Error404 from "./components/views/Error404/Error404";
import SobreNosotros from "./components/views/SobreNosotros/SobreNostros";
import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";

import React from "react";
import PacienteEdit from "./components/views/paciente/PacienteEdit";

function App() {
  //  states para la logica

  const [turnos, setTurnos] = useState([]);
  const [patients, setPatients] = useState([]);
  const [user, setUser] = useState([]);

  const DB = process.env.REACT_APP_APPI_APPOINTMENT;
  const DBP = process.env.REACT_APP_APPI_PATIENTS;
  const DBU = process.env.REACT_APP_APPI_USER;

  useEffect(() => {
    getApi();
    getPatient();
    getUser();
  }, []);

  const getPatient = async () => {
    try {
      const res = await fetch(DBP);
      const patientApi = await res.json();
      setPatients(patientApi);
    } catch (error) {
      console.log(error);
    }
  };

  const getApi = async () => {
    try {
      const res = await fetch(DB);
      const appApi = await res.json();
      autoDelete(appApi)

      setTurnos(appApi);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const res = await fetch(DBU);

      const userApi = await res.json();
      setUser(userApi);
    } catch (error) {
      console.log(error);
    }
  };

 
  // funcion para eliminar turnos viejos
  const autoDelete = (turnos) => {
    const borrar = async (turno) => {
      if (new Date(turno.date) < new Date()) {
        const res = await fetch(`${DB}/${turno._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status===200) {
          console.log('Turnos viejos, eliminados');
        }else{
          console.log('No se eliminaron los turnos, error al conectar la bd');
        }
      }
    };
    turnos.map((turno) => borrar(turno));
  };

  {
    return (
      <div>
        <BrowserRouter>
          <GlobalStyle />
          <Navigation />

          <main className="marginMain">
            <Routes>
              <Route exact path="/" element={<Home />} />
            
              <Route exact path="/contacto" element={<Contacto />} />
              <Route exact path="/login" element={<Login user={user} />} />
              <Route exact path="/admin" element={<AdminHome turnos={turnos} DB={DB} getApi={getApi}/>} />
              <Route exact path="/planes" element={<Planes />} />
              <Route exact path="*" element={<Error404 />} />
              <Route exact path="/sobrenosotros" element={<SobreNosotros />} />
              <Route
                exact
                path="/paciente/table"
                element={
                  <PacienteTable
                    patients={patients}
                    getPatient={getPatient}
                    DBP={DBP}
                  />
                }
              />
              <Route
                exact
                path="/paciente/create"
                element={<PacienteCreate DBP={DBP} getPatient={getPatient} />}
              />
              <Route
                exact
                path="/paciente/edit/:id"
                element={<PacienteEdit DBP={DBP} getPatient={getPatient} />}
              />

              <Route
                exact
                path="/turnoscreate"
                element={<TurnosCreate DB={DB} getApi={getApi} DBP={DBP} />}
              />
              <Route
                exact
                path="/turnostable"
                element={
                  <TurnosTable turnos={turnos} DB={DB} getApi={getApi} />
                }
              />
              <Route
                exact
                path="/turnosedit/:id"
                element={<TurnosEdit DB={DB} getApi={getApi} />}
              />
            </Routes>
          </main>
          <Footer />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
