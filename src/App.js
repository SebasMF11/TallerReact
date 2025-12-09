import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminHome from "./pages/AdminHome";
import DoctorHome from "./pages/DoctorHome";
import PacienteHome from "./pages/PacienteHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/doctor" element={<DoctorHome />} />
        <Route path="/paciente" element={<PacienteHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
