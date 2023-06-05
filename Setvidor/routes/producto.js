// Rutas para los productos
const express = require('express');
const router = express.Router();
const productoController= require('../controllers/productoController');

//api/productos

// enviamos a la base de datos los productos.
router.post('/',productoController.crearProducto);
// extraemos de la base de datos los productos.
router.get('/',productoController.obtenerProdctos);
// actualizacion en la base de datos los productos.
router.put('/:id',productoController.actualizarProdctos);
// Obtener un producto en la base de datos
router.get('/:id',productoController.obtenerUnProdcto);
// Eliminar un producto en la base de datos
router.delete('/:id',productoController.eliminarProdcto);

module.exports = router;