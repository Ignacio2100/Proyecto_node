const path=require('path');
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');

const app=express();

//Conexión a Base de Datos 27017
mongoose.connect('mongodb://127.0.0.1:27017/umgcoatepeque')
.then(db=>console.log('Base de Datos Conectada'))
.catch(e=>console.log(e));


//importing routes
const indexRoutes=require('./router/index');

// Motor de plantilla
app.set("view engine", "ejs");

//settings
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname + '/views'));
app.use(express.static(__dirname+'/public'));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routes
app.use('/',indexRoutes);
app.use((req,res,next)=>{
 res.status(404).render("404",{titulo:"Error 404"});
});

//starting the server
app.listen(app.get('port'),()=>{
console.log('Servidor Activo: ',app.get('port'));
});
