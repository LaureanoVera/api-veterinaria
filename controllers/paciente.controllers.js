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

// OBTENER TODOS LOS PACIENTES
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({})
    res.json(pacientes)
  } catch (error) {
    console.log(error);
    next()
  }
}

// OBETENER PACIENTE POR ID
exports.obtenerPaciente = async(req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id)
    res.json(paciente)
  } catch (error) {
    console.log(error);
    next()
  }
}