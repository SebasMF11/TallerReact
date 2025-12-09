import React from "react";
import { useNavigate } from "react-router-dom";

function Singin() {
  const navigate = useNavigate();

  const irAHome = () => {
    navigate("/home");
  };

  return (
    <div className="">
      <button onClick={irAHome}>Registrar</button>
    </div>
  );
}

export default Singin;
