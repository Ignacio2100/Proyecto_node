const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const TaskSchemaCliente = new Schema({
  codigocliente: {type:String, unique:true},
  dpicliente: String,
  nitcliente: String,
  nombrecliente: String,
  apellidocliente: String,
  direccioncliente: String,
  saldocliente:Number,
  limitesaldocliente:Number,
  correocliente: String,
  telefonocliente: String,
  estadocliente: Boolean,
  fechacreacioncliente:Date

});

module.exports = mongoose.model('cliente',TaskSchemaCliente);
