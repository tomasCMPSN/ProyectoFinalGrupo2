import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="container d-flex">
      <div className="row ">
        <div className="col-sm-12 col-md-4">
          <Card />
        </div>
        <div className="col-sm-12 col-md-4 ">
          <Card />
        </div>
        <div className="col-sm-12 col-md-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Cards;
