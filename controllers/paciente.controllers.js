const Paciente = require('../models/Paciente')

// CUANDO SE CREA UN NUEVO CLIENTE
exports.nuevoCliente = async (req, res, next) => {
  // Crear Objeto de Paciente con Datos req.body
  const paciente = new Paciente(req.body)

  try {
    await paciente.save()
    res.json({mensaje: 'El cliente se agrego correctamente'})
  } catch (error) {
    console.log(error);
    next()
  }
} 

// OBTENER LOS PACIENTES
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({})
    res.json(pacientes)
  } catch (error) {
    console.log(error);
    next()
  }
}