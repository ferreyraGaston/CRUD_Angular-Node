const Producto = require("../models/Producto");

exports.crearProducto =async (req,res)=>{
    try{
        let producto;
        //creamos nuestros productos
        producto=new Producto(req.body);
        await producto.save();

        res.send(producto);

    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al Crear el Producto')
    }
}


exports.obtenerProdctos =async (req,res)=>{
    try{
        const productos= await Producto.find();
        res.json(productos);

    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al Obtener el Producto')
    }
}

exports.actualizarProdctos=async (req,res)=>{
    try{
        const {nombre,categoria,ubicacion,precio}=req.body;

        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'El producto no existe'});
        }

        producto.nombre=nombre;
        producto.categoria=categoria;
        producto.ubicacion=ubicacion
        producto.precio=precio;

        // para hacer la actualizacion
        producto=await Producto.findByIdAndUpdate({_id:req.params.id},producto,{new:true})

        res.json(producto);


    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al Obtener el Producto')
    }
}

exports.obtenerUnProdcto=async (req,res)=>{
    try{
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'El producto no existe'});
        }

        res.json(producto);

    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al Obtener el Producto')
    }
}

exports.eliminarProdcto= async (req,res)=>{
    try{
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'El producto no existe'});
        }
        await Producto.findByIdAndRemove({_id:req.params.id});

        res.json({msg: 'Producto eliminado con exito'});
        
    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error al eliminar el Producto')
    }
}