const Producto = require("../models/Cliente");

exports.crearCliente =async (req,res)=>{
    try{
        let cliente;
        //creamos nuestros productos
        cliente=new Cliente(req.body);
        await cliente.save();

        res.send(cliente);

    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al Crear el cliente')
    }
}


exports.obtenerClientes =async (req,res)=>{
    try{
        const clientes= await Clientes.find();
        res.json(clientes);

    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al Obtener el clientes')
    }
}

exports.actualizarClientes=async (req,res)=>{
    try{
        const {nombre,categoria,ubicacion,precio}=req.body;

        let clientes = await Clientes.findById(req.params.id);
        if(!clientes){
            res.status(404).json({msg: 'El clientes no existe'});
        }

        clientes.nombre=nombre;
        clientes.categoria=categoria;
        clientes.ubicacion=ubicacion
        clientes.precio=precio;

        // para hacer la actualizacion
        clientes=await Clientes.findByIdAndUpdate({_id:req.params.id},clientes,{new:true})

        res.json(clientes);


    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al obtener el clientes')
    }
}

exports.obtenerUnCliente=async (req,res)=>{
    try{
        let clientes = await Clientes.findById(req.params.id);
        if(!clientes){
            res.status(404).json({msg: 'El clientes no existe'});
        }

        res.json(clientes);

    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al Obtener el clientes')
    }
}

exports.eliminarProdcto= async (req,res)=>{
    try{
        let clientes = await Clientes.findById(req.params.id);
        if(!clientes){
            res.status(404).json({msg: 'El clientes no existe'});
        }
        await Clientes.findByIdAndRemove({_id:req.params.id});

        res.json({msg: 'clientes eliminado con exito'});
        
    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al eliminar el clientes')
    }
}