const express =require ('express');
const router = express.Router();


const TaskCliente=require('../models/taskcliente');
const TaskAbonoCliente=require('../models/taskabonocliente');
const TaskProveedor=require('../models/taskproveedor');
const TaskAbonoProveedor=require('../models/taskabonoproveedor');
const TaskEmpleado=require('../models/taskempleado');
const TaskProducto=require('../models/taskproducto');
const TaskCategoria=require('../models/taskcategoria');
const TaskEmpresa=require('../models/taskempresa');
const TaskEnvio=require('../models/taskenvio');

router.get('/',(req,res)=>{
res.render("index",{titulo:"Inicio"});
});

router.get('/reporte',async(req,res)=>{
  const listaenvios= await TaskEnvio.find();
  res.render("reporte",{
    titulo:"Reporte",
    listaenvios:listaenvios});
  });


/////////////////////////////////////////////Rutas Cliente///////////////////////////////////////////////
router.get('/cliente',async(req,res)=>{
const listaclientes= await TaskCliente.find();//busca todos los cientes des la base de datos
res.render("cliente",{
  titulo:"Cliente",
  listaclientes:listaclientes});
});

router.post('/addcliente',async(req,res)=>{
const task_cliente=new TaskCliente(req.body);
task_cliente.fechacreacioncliente=new Date();
await task_cliente.save();
res.redirect('/cliente');
});

router.get('/editcliente/:id',async(req,res)=>{
  const {id}=req.params;
  const task_cliente= await TaskCliente.findById(id);
  res.render('editcliente',{
    titulo:'Editar Cliente',
    task_cliente
  });
});

router.post('/updatecliente/:id',async(req,res)=>{
  const {id}=req.params;
  await TaskCliente.update({_id:id},req.body);
  res.redirect('/cliente');
});
router.get('/deletecliente/:id',async(req,res)=>{
  const {id}=req.params;
  await TaskCliente.remove({_id:id});
  res.redirect('/cliente');
});

router.get('/abonarcliente/:id',async(req,res)=>{
  const {id}=req.params;
  const task_cliente= await TaskCliente.findById(id);
  const listaabonos= await TaskAbonoCliente.find({codigocliente:task_cliente.codigocliente});

  res.render('abonarcliente',{
    titulo:'Abonar Cliente',
    task_cliente,
    listaabonos
  });
});


router.post('/abonarclientesaldo/:id',async(req,res)=>{
  const {id}=req.params;
  const task_cliente= await TaskCliente.findById(id);
  if(parseFloat(req.body.montoabono)>task_cliente.saldocliente){

        res.redirect('/cliente');

  }else{
    task_cliente.saldocliente=task_cliente.saldocliente-parseFloat(req.body.montoabono);
    await task_cliente.save();
    const task_abonocliente=new TaskAbonoCliente(req.body);
    task_abonocliente.saldoactualcliente=task_cliente.saldocliente;
    task_abonocliente.fechaabonocliente=new Date();
    await task_abonocliente.save();

    res.redirect('/cliente');
  }

});




/////////////////////////////////////////////Rutas Proveedor///////////////////////////////////////////////
router.get('/proveedor',async(req,res)=>{
const listaproveedores= await TaskProveedor.find();//busca todos los proveedores des la base de datos
res.render("proveedor",{
  titulo:"Proveedor",
  listaproveedores:listaproveedores});
});

router.post('/addproveedor',async(req,res)=>{
const task_proveedor=new TaskProveedor(req.body);
task_proveedor.fechacreacionproveedor=new Date();
await task_proveedor.save();
res.redirect('/proveedor');
});

router.get('/editproveedor/:id',async(req,res)=>{
  const {id}=req.params;
  const task_proveedor= await TaskProveedor.findById(id);
  res.render('editproveedor',{
    titulo:'Editar Proveedor',
    task_proveedor
  });
});

router.post('/updateproveedor/:id',async(req,res)=>{
  const {id}=req.params;
  await TaskProveedor.update({_id:id},req.body);
  res.redirect('/proveedor');
});
router.get('/deleteproveedor/:id',async(req,res)=>{
  const {id}=req.params;
  await TaskProveedor.remove({_id:id});
  res.redirect('/proveedor');
});

router.get('/abonarproveedor/:id',async(req,res)=>{
  const {id}=req.params;
  const task_proveedor= await TaskProveedor.findById(id);
  const listaabonos= await TaskAbonoProveedor.find({codigoproveedor:task_proveedor.codigoproveedor});

  res.render('abonarproveedor',{
    titulo:'Abonar Proveedor',
    task_proveedor,
    listaabonos
  });
});

router.post('/abonarproveedorsaldo/:id',async(req,res)=>{
  const {id}=req.params;
  const task_proveedor= await TaskProveedor.findById(id);
  if(parseFloat(req.body.montoabono)>task_proveedor.saldoproveedor){

        res.redirect('/proveedor');

  }else{
    task_proveedor.saldoproveedor=task_proveedor.saldoproveedor-parseFloat(req.body.montoabono);
    await task_proveedor.save();
    const task_abonoproveedor=new TaskAbonoProveedor(req.body);
    task_abonoproveedor.saldoactualproveedor=task_proveedor.saldoproveedor;
    task_abonoproveedor.fechaabonoproveedor=new Date();
    await task_abonoproveedor.save();

    res.redirect('/proveedor');
  }

});





/////////////////////////////////////////////Rutas Empleado///////////////////////////////////////////////
router.get('/empleado',async(req,res)=>{
const listaempleados= await TaskEmpleado.find();//busca todos los empleados des la base de datos
res.render("empleado",{
  titulo:"Empleado",
  listaempleados:listaempleados});
});

router.post('/addempleado',async(req,res)=>{
const task_empleado=new TaskEmpleado(req.body);
task_empleado.fechacreacionempleado=new Date();
await task_empleado.save();
res.redirect('/empleado');
});

router.get('/editempleado/:id',async(req,res)=>{
  const {id}=req.params;
  const task_empleado= await TaskEmpleado.findById(id);
  res.render('editempleado',{
    titulo:'Editar Empleado',
    task_empleado
  });
});

router.post('/updateempleado/:id',async(req,res)=>{
  const {id}=req.params;
  await TaskEmpleado.update({_id:id},req.body);
  res.redirect('/empleado');
});
router.get('/deleteempleado/:id',async(req,res)=>{
  const {id}=req.params;
  await TaskEmpleado.remove({_id:id});
  res.redirect('/empleado');
});




/////////////////////////////////////////////Rutas Producto///////////////////////////////////////////////
router.get('/producto',async(req,res)=>{
const listaproductos= await TaskProducto.find();//busca todos los producto des la base de datos
res.render("producto",{
  titulo:"Producto",
  listaproductos:listaproductos});
});



 router.post('/addproducto', async (req, res) => {
   const task_producto = new TaskProducto(req.body);
   task_producto.fechacreacionproducto = new Date();
   await task_producto.save();
   res.redirect('/producto');
});


router.get('/editproducto/:id',async(req,res)=>{
  const {id}=req.params;
  const task_producto= await TaskProducto.findById(id);
  res.render('editproducto',{
    titulo:'Editar Producto',
    task_producto
  });
});

router.post('/updateproducto/:id',async(req,res)=>{
  const {id}=req.params;
  await TaskProducto.update({_id:id},req.body);
  res.redirect('/producto');
});
router.get('/deleteproducto/:id',async(req,res)=>{
  const {id}=req.params;
  await TaskProducto.remove({_id:id});
  res.redirect('/producto');
});

router.get('/get-categorias', async (req, res) => {
  try {
    const categorias = await TaskCategoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).send('Error al obtener categorías');
  }
});

router.get('/envioproducto/:id',async(req,res)=>{
  const {id}=req.params;
  const task_producto= await TaskProducto.findById(id);
  const listaenvios= await TaskEnvio.find({codigoproducto:task_producto.codigoproducto});

  res.render('envioproducto',{
    titulo:'Envio Producto',
    task_producto,
    listaenvios
  });
});


router.post('/envioproductoenvio/:id',async(req,res)=>{
  const {id}=req.params;
  const task_producto= await TaskProducto.findById(id);
  if(parseFloat(req.body.cantidadenviada)>task_producto.existencia){

        res.redirect('/producto');

  }else{
    task_producto.existencia=task_producto.existencia-parseFloat(req.body.cantidadenviada);
    await task_producto.save();
    const task_envio=new TaskEnvio(req.body);
    task_envio.existencia=task_producto.existencia;
    task_envio.fechaenvio=new Date();
    await task_envio.save();

    res.redirect('/producto');
  }

});



/////////////////////////////////////////////Rutas Categoria///////////////////////////////////////////////
router.get('/categoria',async(req,res)=>{
  const listacategoria= await TaskCategoria.find();//busca todos los producto des la base de datos
  res.render("categoria",{
    titulo:"Categoria",
    listacategoria:listacategoria});
  });

  router.post('/addcategoria',async(req,res)=>{
    const task_categoria=new TaskCategoria(req.body);
    await task_categoria.save();
    res.redirect('/categoria');
    });

    router.get('/editcategoria/:id',async(req,res)=>{
      const {id}=req.params;
      const task_categoria= await TaskCategoria.findById(id);
      res.render('editcategoria',{
        titulo:'Editar Categoria',
        task_categoria
      });
    });

    router.post('/updatecategoria/:id',async(req,res)=>{
      const {id}=req.params;
      await TaskCategoria.update({_id:id},req.body);
      res.redirect('/categoria');
    });

    router.get('/deletecategoria/:id',async(req,res)=>{
      const {id}=req.params;
      await TaskCategoria.remove({_id:id});
      res.redirect('/categoria');
    });
    
/////////////////////////////////////////////Rutas Empresa///////////////////////////////////////////////
router.get('/empresa',async(req,res)=>{
  const listaempresa= await TaskEmpresa.find();//busca todos los producto des la base de datos
  res.render("empresa",{
    titulo:"Empresa",
    listaempresa:listaempresa});
  });

  router.post('/addempresa',async(req,res)=>{
    const task_empresa=new TaskEmpresa(req.body);
    await task_empresa.save();
    res.redirect('/empresa');
    });

    router.get('/editempresa/:id',async(req,res)=>{
      const {id}=req.params;
      const task_empresa= await TaskEmpresa.findById(id);
      res.render('editempresa',{
        titulo:'Editar Empresa',
        task_empresa
      });
    });

    router.post('/updateempresa/:id',async(req,res)=>{
      const {id}=req.params;
      await TaskEmpresa.update({_id:id},req.body);
      res.redirect('/empresa');
    });

    router.get('/deleteempresa/:id',async(req,res)=>{
      const {id}=req.params;
      await TaskEmpresa.remove({_id:id});
      res.redirect('/empresa');
    });
    
  
module.exports=router;
