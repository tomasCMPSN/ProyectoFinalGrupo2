import React from "react";
import admin_paciente from "../../img/admin_paciente.jpg";

const Card = () => {
  return (
      <div className="">

    <div className="card">
      <img src={admin_paciente} alt="Foto paciente" className="w-100" />
      <div className="card-body">
        <h4 className="card-title">My Tittle</h4>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          quod expedita praesentium fugit repellat asperiores animi doloribus
          blanditiis fugiat quas modi vero minima quibusdam soluta aspernatur
          temporibus, magnam cupiditate earum!
        </p>
      </div>
    </div>
      </div>
  );
};

export default Card;
