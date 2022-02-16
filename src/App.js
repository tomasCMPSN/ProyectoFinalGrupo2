import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/Home/Home.js";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreNostros from "./components/SobreNosotros/SobreNostros";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            {/* <Route exact path="/" element={ <Home /> }/> */}
          </Routes>
          {/* <SobreNostros /> */}
          <Error404 />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
