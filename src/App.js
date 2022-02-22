import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/Home/Home.js";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TurnosCreate from "./components/views/turnos/TurnosCreate";
import TurnosTable from "./components/views/turnos/TurnosTable";
import TurnosEdit from "./components/views/turnos/TurnosEdit";
import { useState, useEffect } from "react";

function App() {
  //  states para la logica

  const [turnos, setTurnos] = useState([]);
  const DB = process.env.REACT_APP_APPI_APPOINTMENT;


  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const res = await fetch(DB);
    const appApi = await res.json();
    setTurnos(appApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/turnoscreate"
              element={<TurnosCreate DB={DB} getApi={getApi} />}
            />
            <Route
              exact
              path="/turnostable"
              element={<TurnosTable turnos={turnos} />}
            />
            <Route
              exact
              path="/turnosedit/:dni"
              element={<TurnosEdit DB={DB} />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
