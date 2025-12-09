import React from "react";
import Citas from "../componentes/Citas";
import HistorialClinico from "../componentes/HistorialClinico";

function PacienteHome() {
  const id = localStorage.getItem("userId");

  return (
    <div className="">
      <h1>Home</h1>
      <div>
        <Citas />
      </div>
      <div>
        <HistorialClinico />
      </div>
    </div>
  );
}

export default PacienteHome;
