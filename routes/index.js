const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/paciente.controllers");

module.exports = function () {
  // Agrega nuevos pacientes via POST
  router.post("/pacientes", pacienteController.nuevoCliente);

  // Obtiene los registros de pacientes
  router.get('/pacientes', pacienteController.obtenerPacientes)

  // Obtiene un paciente por ID
  router.get('/pacientes/:id', pacienteController.obtenerPaciente)

  return router;
};
