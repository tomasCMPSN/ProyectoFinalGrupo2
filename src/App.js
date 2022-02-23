import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/views/Home/Home";
import AdminHome from "./components/views/Admin/AdminHome"
import Footer from "./components/layout/Footer";
import Login from "./components/views/Home/Login/Login";
import Contacto from "./components/views/Home/Contacto/Contacto"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreNostros from "./components/SobreNosotros/SobreNostros";
import Error404 from "./components/Error404/Error404";

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

  { return (
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
  }}

export default App.js;
