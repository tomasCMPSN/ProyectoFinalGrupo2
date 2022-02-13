import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/Home/Home.js";
import Footer from "./components/layout/Footer";
import Login from "./components/Home/Login/Login";
import Contacto from "./components/Home/Contacto/Contacto"
import { BrowserRouter, Route, Routes } from "react-router-dom";


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
