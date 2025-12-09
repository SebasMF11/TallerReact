import React from "react";
import { useNavigate } from "react-router-dom";

function Singin() {
  const navigate = useNavigate();

  const irAlogin = () => {
    navigate("/");
  };

  return (
    <div className="">
      <button onClick={irAlogin}>Registrar</button>
    </div>
  );
}

export default Singin;
