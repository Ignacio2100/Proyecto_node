const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const TaskSchemaAbonoCliente = new Schema({
  codigocliente:String,
  montoabono:Number,
  saldoactualcliente:Number,
  fechaabonocliente:Date

});

module.exports = mongoose.model('abono_cliente',TaskSchemaAbonoCliente);
