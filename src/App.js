import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/views/Home/Home";
import AdminHome from "./components/views/Admin/AdminHome"
import Footer from "./components/layout/Footer";
import Login from "./components/views/Home/Login/Login";
import Contacto from "./components/views/Home/Contacto/Contacto"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turnos from './components/views/turnos/TurnosCreate'
import TurnosTable from './components/views/turnos/TurnosTable'
import TurnosEdit from './components/views/turnos/TurnosEdit'
import {useState,useEffect} from 'react'



function App() {
  //  states para la logica

   const [turnos, setTurno] = useState([]);
  
  useEffect(()=>{

    getApi();
  },[])

const DB = process.env.REACT_APP_APPI_APPOINTMENT;

   const getApi =async () =>{
   try {

     const res = await fetch(DB)
     const appApi =  await res.json();
     setTurno(appApi)
    
      
   } catch (error) {
     console.log(error)
      
   }

 }

  return (
    <div>
      <BrowserRouter>
        <Navigation />
      
        <main>
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
<<<<<<< HEAD
            <Route exact path="/login" element ={<Login />}/>
            <Route exact path="/contacto" element ={<Contacto />}/>
            <Route exact path="/admin" element={ <AdminHome /> }/>
=======
            <Route exact path="/turnoscreate" element={ <Turnos /> }/>
            <Route exact path="/turnostable" element={ <TurnosTable turnos={turnos} /> }/>
            <Route exact path="/turnosedit" element={ <TurnosEdit /> }/>
            
>>>>>>> adminTurnos
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
