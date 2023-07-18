const express = require('express');
const res = require('express/lib/response');
const conectarDB= require('./config/db')

// conectamos al servidor
const app=express();
//conectamos a la base de datos
conectarDB();

app.use(express.json());

app.use('/api/productos',require('./routes/producto'));
//app.use('/api/clientes',require('./routes/cliente'));

app.listen(4000, ()=>{
    console.log("El servidor está corriendo perfectamente");
})