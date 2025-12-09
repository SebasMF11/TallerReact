import React from "react";

function AdminHome() {
  const id = localStorage.getItem("userId");

  return (
    <div className="">
      <h1>HomeAdmin</h1>
      <div>citas</div>
      <div>HistorialClinico</div>
    </div>
  );
}

export default AdminHome;
