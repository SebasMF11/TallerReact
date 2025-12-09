import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", {
        correo: correo,
        contraseña: contraseña,
      });

      const rol = response.data.rol;

      localStorage.setItem("userId", response.data.id);

      localStorage.setItem("rol", response.data.rol);

      if (rol === "ADMIN") {
        navigate("/admin");
      } else if (rol === "DOCTOR") {
        navigate("/doctor");
      } else if (rol === "PACIENTE") {
        navigate("/paciente");
      } else {
        setMensaje("Rol desconocido");
      }
    } catch (error) {
      setMensaje("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />

      <button onClick={handleLogin}>Ingresar</button>

      <p>{mensaje}</p>
    </div>
  );
}

export default Login;
