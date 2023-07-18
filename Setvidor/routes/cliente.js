// Rutas para los clientes
const express = require('express');
const router = express.Router();
const productoController= require('../controllers/clienteController');

//api/clientes

// enviamos a la base de datos los clientes.
router.post('/',clientesController.crearClientes);
// extraemos de la base de datos los clientes.
router.get('/',clientesController.obtenerClientes);
// actualizacion en la base de datos los clientes.
router.put('/:id',clientesController.actualizarClientes);
// Obtener un cliente en la base de datos
router.get('/:id',clientesController.obtenerUnClientes);
// Eliminar un cliente en la base de datos
router.delete('/:id',clientesController.eliminarClientes);

module.exports = router;