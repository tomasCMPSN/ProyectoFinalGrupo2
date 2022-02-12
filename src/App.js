import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/Home/Home";
import AdminHome from "./components/Admin/AdminHome"
import Footer from "./components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
      <BrowserRouter>
        <Navigation />
        
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route exact path="/admin" element={ <AdminHome /> }/>
          </Routes>
        
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
