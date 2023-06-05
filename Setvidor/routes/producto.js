// Rutas para los productos

const express = require('express');
const router = express.Router();

//api/productos
router.post('/',()=>{
    console.log('creando productos');
})

module.exports = router;