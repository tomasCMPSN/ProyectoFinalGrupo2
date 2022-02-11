import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="container">
      <div className="row m-1">
        <div className="col-md-4"> 
        <div className="m-1">
          <Card />

        </div>
        </div>
        <div className="col-md-4"> 
        <div className="m-1">
          <Card />

        </div>
        </div>
        <div className="col-md-4"> 
        <div className="m-1">
          <Card />

        </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
