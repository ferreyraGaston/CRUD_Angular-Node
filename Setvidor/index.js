const express = require('express');
const res = require('express/lib/response');

const app=express();

app.get('/',(req,res)=>{
    res.send("hola Mundo")
})

app.listen(4000, ()=>{
    console.log("El servidor está corriendo perfectamente");
})