import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/views/Home/Home";
import AdminHome from "./components/views/Admin/AdminHome"
import Footer from "./components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main className="m-1">
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route exact path="/admin" element={ <AdminHome /> }/>
            
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
