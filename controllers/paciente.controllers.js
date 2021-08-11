
// CUANDO SE CREA UN NUEVO CLIENTE
exports.nuevoCliente = (req, res, next) => {
  console.log(req.body);
  // TODO: Insertar en la base de datos
  res.json({mensaje: 'El cliente se agrego correctamente'})
} 