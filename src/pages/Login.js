import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../CSS/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const irASingin = () => {
    navigate("/singin");
  };

  return (
    <div className="centrar">
      <h1>Login</h1>

      {loading && <p>Cargando...</p>}

      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </form>
      <button onClick={irASingin}>Crear cuenta</button>
    </div>
  );
}

export default Login;
