const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const TaskSchemaEmpleado = new Schema({
  codigoempleado: {type:String, unique:true},
  dpiempleado: String,
  nitempleado: String,
  nombreempleado: String,
  apellidoempleado: String,
  direccionempleado: String,
  profesionempleado: String,
  sueldoempleado:Number,
  correoempleado: String,
  telefonoempleado: String,
  estadoempleado: Boolean,
  fechacreacionempleado:Date

});

module.exports = mongoose.model('empleado',TaskSchemaEmpleado);
