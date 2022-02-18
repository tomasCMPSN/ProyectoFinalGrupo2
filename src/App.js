import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/views/Home/Home";
import Footer from "./components/layout/Footer";
import Login from "./components/views/Home/Login/Login";
import Contacto from "./components/views/Home/Contacto/Contacto"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
      
        <main>
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route exact path="/login" element ={<Login />}/>
            <Route exact path="/contacto" element ={<Contacto />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
