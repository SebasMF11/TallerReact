import React from "react";
import Citas from "../componentes/Citas";
import HistorialClinico from "../componentes/HistorialClinico";

function DoctorHome() {
  const id = localStorage.getItem("userId");

  return (
    <div className="">
      <h1>HomeDoctor</h1>
      <div>
        <h1 value="{id}"></h1>
        <Citas />
      </div>
      <div>
        <HistorialClinico />
      </div>
    </div>
  );
}

export default DoctorHome;
