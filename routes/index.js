const express = require('express')
const router = express.Router()
const pacienteController = require('../controllers/paciente.controllers')

module.exports = function() {
  router.get('/', (req, res) => {
    res.send('HOME')
  })

  // Agrega nuevos pacientes via POST
  router.post('/pacientes', pacienteController.nuevoCliente)

  return router;
}