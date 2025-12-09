import axios from "axios";

//ejemplo

const PACIENTE_BASE_RES_API_URL = "http://localhost:8012/";

class PacienteService {
  //ejemplosss

  getPacienteById(id) {
    return axios.get("${PACIENTE_BASE_RES_API_URL}/buscarPorId/${id}");
  }
  createPaciente(Paciente) {
    return axios.post("${PACIENTE_BASE_RES_API_URL}/crear", Paciente, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  updatePaciente(Paciente) {
    return axios.put("${PACIENTE_BASE_RES_API_URL}/actualizar", Paciente, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  deletePaciente(id) {
    return axios.delete("${PACIENTE_BASE_RES_API_URL}/eliminar/${id}");
  }
}
