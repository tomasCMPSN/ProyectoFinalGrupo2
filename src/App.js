import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/Home/Home.js";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turnos from './components/views/turnos/TurnosCreate'
import TurnosTable from './components/views/turnos/TurnosTable'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route exact path="/turnoscreate" element={ <Turnos /> }/>
            <Route exact path="/turnostable" element={ <TurnosTable /> }/>
            
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
