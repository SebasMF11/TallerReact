import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Citas() {
  const id = localStorage.getItem("userId");
  const rol = localStorage.getItem("rol");

  const [Doctor, setNuevoDoctor] = useState("");
  const [citas, setCitas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  // Proteger ruta
  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id]);

  // Llamar a listarCitas una sola vez
  useEffect(() => {
    listarCitas();
  }, []);

  const listarCitas = async () => {
    try {
      let response1;

      if (rol === "DOCTOR") {
        response1 = await api.get(`/citas/doctor/${id}`);
      } else if (rol === "PACIENTE") {
        response1 = await api.get(`/citas/paciente/${id}`);
      }

      const data = response1.data; // Axios usa .data, NO json()
      setCitas(data);
    } catch (error) {
      setMensaje("Error al buscar citas");
    }
  };
  const cancelarcita = async (idcita) => {
    try {
      let response1;

      if (rol === "DOCTOR") {
        response1 = await api.delete(`/citas/eliminar2/${idcita}/${id}`);
      } else if (rol === "PACIENTE") {
        response1 = await api.delete(`/citas/eliminar1/${idcita}/${id}`);
      }

      listarCitas();
    } catch (error) {
      setMensaje("Error al eliminar citas");
    }
  };

  const agregarCita = async () => {
    if (!Doctor) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const response = await api.post(`/citas/crear/${id}`, {
        IdPaciente: `${id}`,
        IdDoctor: Doctor,
      });

      listarCitas();

      setNuevoDoctor("");
    } catch (error) {
      alert("Error al agregar cita");
    }
  };

  return (
    <div className="">
      <h1>Citas</h1>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Paciente</th>
            <th>Doctor</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {citas.length > 0 &&
            citas.map((cita) => (
              <tr key={cita.id}>
                <td>{cita.id}</td>
                <td>{cita.idPaciente}</td>
                <td>{cita.idDoctor}</td>
                <td>{cita.fecha}</td>
                <td>{cita.hora}</td>
                <td>
                  <button onClick={() => cancelarcita(cita.id)}>
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          {rol === "PACIENTE" && (
            <tr>
              <td>-</td>

              <td>
                <td>{`${id}`}</td>
              </td>

              <td>
                <input
                  type="text"
                  placeholder="ID Doctor"
                  value={Doctor}
                  onChange={(e) => setNuevoDoctor(e.target.value)}
                />
                listado doctor por especialidad
              </td>

              <td>-</td>

              <td>-</td>

              <td>
                <button onClick={agregarCita}>Agregar</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Citas;
