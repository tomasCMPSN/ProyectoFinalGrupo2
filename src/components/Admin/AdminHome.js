import { React } from "react";
import Cards from "./Cards/Cards";
import './Cards/cards.css';

const AdminHome = () => {
  return (
      <section className="container-fluid  d-flex justify-content-center aling-item-center"> 
          <section className='m-1'>
      <Cards></Cards>

      </section>
    </section>
  );
};

export default AdminHome;
