const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const TaskSchemaEnvio = new Schema({
  codigoproducto:String,
  descripcionproducto: String,
  existencia:Number,
  sucursal: String,
  cantidadenviada:Number,
  fechaenvio:Date

});

module.exports = mongoose.model('envio',TaskSchemaEnvio);
